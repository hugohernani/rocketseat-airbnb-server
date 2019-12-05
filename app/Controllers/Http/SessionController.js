'use strict'

class SessionController {
  async create({request, auth}) {
    const {email, password} = request.all()

    token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
