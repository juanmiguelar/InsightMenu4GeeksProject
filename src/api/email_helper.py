# Import smtplib for the actual sending function
import smtplib

# Import the email modules we'll need
from email.message import EmailMessage
from string import Template
from pathlib import Path

def SendTestEmail():
    email = EmailMessage()
    email['from'] = "Insight Menu Team"
    email['to'] = 'juanmiguelar09@gmail.com'
    email['subject'] = 'Testing email service'

    email.set_content('test text to test the text')

    with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login('insightmenu@gmail.com', 'insightmenu123')
        smtp.send_message(email)
        print('all good!')

def SendTestEmailWithTemplate():
    html = Template(Path('src/api/templates/bienvenido.html').read_text())
    email = EmailMessage()
    email['from'] = "Insight Menu Team"
    email['to'] = 'juanmiguelar09@gmail.com'
    email['subject'] = 'Testing email service'

    email.set_content(html.substitute({'nombre':'Juan'}), 'html')

    with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login('insightmenu@gmail.com', 'insightmenu123')
        smtp.send_message(email)
        print('all good!')

def SendEmailTemplate(template, data, to, subject):
    html = Template(Path(f'src/api/templates/{template}.html').read_text())
    email = EmailMessage()
    email['from'] = "Insight Menu Team"
    email['to'] = to
    email['subject'] = subject

    email.set_content(html.substitute(data), 'html')

    with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login('insightmenu@gmail.com', 'insightmenu123')
        smtp.send_message(email)
        print('all good!')

def SendEmailText(content, to, subject):
    email = EmailMessage()
    email['from'] = "Insight Menu Team"
    email['to'] = to
    email['subject'] = subject

    email.set_content(content)

    with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login('insightmenu@gmail.com', 'insightmenu123')
        smtp.send_message(email)
        print('all good!')