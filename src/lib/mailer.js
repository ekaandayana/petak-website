// mailer.js - server-side helper to send email (stub)
// Replace with real provider (SendGrid, Mailgun) in production.

export async function sendMail({to,subject,text,html}){
  // Example: integrate with SendGrid
  // fetch('https://api.sendgrid.com/v3/mail/send', {...})
  console.log('sendMail called (stub)', {to,subject});
  return {ok:true};
}
