function verificarAcesso(perfil) {
  if (perfil == 'administrador') {
    return console.log('Bem-vindo(a), admnistrador!')
  } else if (perfil == 'moderador') {
    return console.log('Bem-vindo(a), moderador! Você pode gerenciar o conteúdo.')
  }

  switch (perfil) {
    case 'assinante': return console.log("Olá, assinante! Aproveite o conteúdo disponivel." )
  }

  perfil == "" ? console.log("Perfil não especificado") : console.log('Acesso Negado')
}

// Testes
verificarAcesso("administrador"); // Deve exibir: Bem-vindo(a), administrador!
verificarAcesso("moderador"); // Deve exibir: Bem-vindo(a), moderador! Você pode gerenciar conteúdo.
verificarAcesso("assinante"); // Deve exibir: Olá, assinante! Aproveite o conteúdo disponível.
verificarAcesso(""); // Deve exibir: Perfil não especificado
verificarAcesso("visitante"); // Deve exibir: Acesso negado
