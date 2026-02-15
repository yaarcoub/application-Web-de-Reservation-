const stompit = require('stompit');
const EventHandler = require('./EventHandler');


class ActiveMQListener {
  constructor() {
    this.connectOptions = {
      host: process.env.ACTIVEMQ_HOST || 'localhost',
      port: process.env.ACTIVEMQ_PORT || 61613,
      connectHeaders: {
        host: '/',
        login: process.env.ACTIVEMQ_USER || 'admin',
        passcode: process.env.ACTIVEMQ_PASSWORD || 'admin',
        'accept-version': '1.0,1.1,1.2'
      }
    };

    this.client = null;
  }

  async connect() {
    return new Promise((resolve, reject) => {
      stompit.connect(this.connectOptions, (error, client) => {
        if (error) {
          console.error('❌ Erreur connexion ActiveMQ:', error.message);
          return reject(error);
        }

        console.log('✅ Connecté à ActiveMQ');
        this.client = client;
        this.subscribeToEvents();
        resolve();
      });
    });
  }

  subscribeToEvents() {
    this.client.subscribe(
      {
        destination: '/queue/events.queue',
        ack: 'client-individual'
      },
      async (error, message) => {
        if (error) {
          console.error('❌ Erreur subscription:', error.message);
          return;
        }

        let body = '';
        message.on('data', chunk => (body += chunk));

        message.on('end', async () => {
          try {
            const domainEvent = JSON.parse(body);
            console.log(`📩 Événement reçu: ${domainEvent.type} - ${domainEvent.entity}`);
               
           
            await EventHandler.handle(domainEvent);

            this.client.ack(message);
            console.log('✔ Message traité avec succès');
          } catch (err) {
            console.error('❌ Erreur traitement événement:', err);
            this.client.nack(message);
          }
        });
      }
    );
  }

  disconnect() {
    if (this.client) {
      this.client.disconnect();
      console.log('🔌 Déconnecté de ActiveMQ');
    }
  }
}

module.exports = new ActiveMQListener();
