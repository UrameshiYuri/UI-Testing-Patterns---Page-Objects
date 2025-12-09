feature: Autenticão
    Scenario Outline: login de usuario
    Given que estou na pagina inicial
    When eu faço login com o usuario "<email>" e a senha "<senha>"
    Then o nome de usuario deve aparecer na pagina de perfil
    Examples:
        | email| senha | 
        | cliente@ebac.art.br | GD*peToHNJ1#c$sgk08EaYJQ | 