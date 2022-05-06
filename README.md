# Google App Script Sample 
Welcome to my demo app for Google app script. 

## Requirement 
- User can register for a particular event 
- After registration user will receive an email of confirmation
- Admin can send bulk email to all users with their certificate of completion pdf 


 
## Google app script Project Creation steps
Do not use ES6 features like `Destructuring assignment` is not supported in `.gs` file. 
### Step 1: Enable Google Apps Script API**

Enable it by visiting https://script.google.com/home/usersettings then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.

### Step 2: Create demo project

```
npm i -g @google/clasp  
npm init --y
npm i -S @types/google-apps-script
clasp login
clasp clone "1CVmMy8oe0o8LfBuhnqOR2PTEH90jSpdcSpo_C7jn69PKSwF_P_HjDLM-"
clasp push
```

### Step 3 Development Tooling

```
clasp push --watch --force
clasp logs --setup 
# enter project id from .clasp.json file
clasp logs --watch

```


## Dev Resources
- [Use VsCode for GoogleSheet Development](https://www.youtube.com/watch?v=tWhXjVVLAYk&t=35s)
- [Clasp Guide](https://github.com/google/clasp/blob/master/README.md#logs)
- [Add Button on Sheet](https://www.youtube.com/watch?v=ZcNmur6xiX4)
- [Load drop down from spread sheet](https://www.youtube.com/watch?v=pmQdrAIdfGM&t=5s)
- [Send SMS](https://www.clicksend.com/us/pricing/us/)
- [Sending SMS using Twilio](https://www.youtube.com/watch?v=Au4W8vUUbtM)
- [Sending WhatsApp](https://www.youtube.com/watch?v=PxphXQmtHLo)