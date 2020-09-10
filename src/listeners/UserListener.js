'use strict'

const UserEmitter = require('../emitters/UserEmitter')
const mailer = require('../helpers/mailer')

const { MAILER_CONFIRM_URI } = process.env

UserEmitter.on('create', ({ _id, email, emailVerificationKey }) => {
  mailer
    .sendMail(
      email,
      'Account Confirmation',
      `
        <div>
          <a href="${MAILER_CONFIRM_URI}?key=${emailVerificationKey}&user_id=${_id}">Clique aqui</a> para confirmar seu E-mail
        </div>
      `
    )
})

UserEmitter.on('delete', () => {})
