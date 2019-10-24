# @Loezy/ Seekul
Loezy stands for it's clean and lazy packaging, don't write the same 6 lines over and over.

## Seekul
Simple definer of sequelize models.

## Usage
Currently we only support MySQL.
```js
const { define } = require('@loezy/seekul').mysql(dbname, user, password, options);
```
### Options
See https://sequelize.org/v5/manual/dialects.html for dialect adapter options.
```js
{
    host: 'localhost',
    dialect: 'mysql',
    ...
}
```

### Define
This method allows you to register and get back models.
```js
const User = define(require('./models/User'));
```