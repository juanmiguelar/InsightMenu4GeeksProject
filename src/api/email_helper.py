import smtplib

sender = 'from@fromdomain.com'

def SendEmail(to, template, keyValues):
    try:
        smtpObj = smtplib.SMTP('localhost')
        smtpObj.sendmail(sender, receivers, message)         
        print("Successfully sent email")
    except SMTPException:
        print("Error: unable to send email")