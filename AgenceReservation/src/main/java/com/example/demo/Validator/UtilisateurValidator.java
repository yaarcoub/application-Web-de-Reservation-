package com.example.demo.Validator;

import com.example.demo.Dto.UtilisateurDto;
import com.example.demo.Utils.Role;
import com.mysql.cj.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class UtilisateurValidator {

    public static List<String> validate(UtilisateurDto utilisateurDto) {
        List<String> errors = new ArrayList<>();

        if (utilisateurDto == null) {
            errors.add("L'utilisateur ne doit pas être nul.");
            return errors;
        }


        if (StringUtils.isEmptyOrWhitespaceOnly(utilisateurDto.getName())) {
            errors.add("Le nom de l'utilisateur est obligatoire.");
        }

        if (StringUtils.isEmptyOrWhitespaceOnly(utilisateurDto.getEmail())) {
            errors.add("L'adresse email est obligatoire.");
        } else if (!isValidEmail(utilisateurDto.getEmail())) {
            errors.add("L'adresse email n'est pas valide.");
        }

        if (StringUtils.isEmptyOrWhitespaceOnly(utilisateurDto.getPassword())) {
            errors.add("Le mot de passe est obligatoire.");
        } else if (utilisateurDto.getPassword().length() < 6) {
            errors.add("Le mot de passe doit contenir au moins 6 caractères.");
        }

        if (utilisateurDto.getRole() == null) {
            errors.add("Le rôle de l'utilisateur est obligatoire.");
        } else if (!isValidRole(utilisateurDto.getRole())) {
            errors.add("Le rôle de l'utilisateur est invalide.");
        }

        return errors;
    }

    // Vérifie si l’email est au bon format (simple validation)
    private static boolean isValidEmail(String email) {
        return email.matches("^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$");
    }

    // Vérifie si le rôle fait partie des rôles de l’énumération Role
    private static boolean isValidRole(Role role) {
        for (Role r : Role.values()) {
            if (r == role) {
                return true;
            }
        }
        return false;
    }
}
