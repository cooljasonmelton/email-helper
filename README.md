<a href="https://github.com/cooljasonmelton/email-automater-backend"> back end </a>

## goals

* login with email
* create, read, update, delete email templates
* create, read, update, delete contacts
* sort, filter, select contacts
* search templates
* send email template to selected contacts



### To Do List (looking for MVP)

-make new templates:
1. plus button gives blank new template form
2. template creates onblur
3. redux has 'current template'
4. once template creates, pushes to current template edit
5. current template saves on blur
6. selecting from library of templates changes 'current template' to edit




-templates
* CRUD templates
--delete button on library item
* select template add to redux store as selected
* display selected template in center div
* new template displays create form in center div

-contacts
* organize contact div, set up features
* CRUD contacts
* checkbox to select contacts

STRETCH:
* user full CRUD
* checkbox for bcc, cc on contacts resource: https://css-tricks.com/all-about-mailto-links/
