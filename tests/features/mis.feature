Feature: Login al Mis

    Scenario Outline: Validar inicio de sesión en el MIS

        Given el usuario accede al mis
        When inicia sesion con el usuario "<user>" y la contrasena "<password>"


        Examples:
            | user      |  password     |
            | TEST      |  TEST         |