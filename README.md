<p align="center">
    <img width="256" src=".assets/dumba-small.png" alt="library logo">
</p>
<p align="center">
Small library for handling form data with Mobx.js
</p>

---
<p align="center">
  <a href="https://img.shields.io/github/workflow/status/ivandotv/dumba/Test"><img src="https://img.shields.io/github/workflow/status/ivandotv/dumba/Test" alt="workflow status"></a>
  <a href="https://app.codecov.io/gh/ivandotv/dumba"><img src="https://img.shields.io/codecov/c/gh/ivandotv/dumba" alt="code coverage"></a>
  <a href="https://github.com/ivandotv/dumba/blob/main/LICENSE"><img src="https://img.shields.io/github/license/ivandotv/dumba" alt="sofware licence"></a>
</p>

<!-- toc -->

- [Introduction](#introduction)
- [Demo](#demo)
- [Installation](#installation)
- [Quick Usage](#quick-usage)
- [Schema](#schema)
  - [Schema Fields](#schema-fields)
  - [Advanced field creation properties](#advanced-field-creation-properties)
  - [Creating Form Field Validation](#creating-form-field-validation)
- [Form Class](#form-class)
- [API Documentation](#api-documentation)

<!-- tocstop -->

## Introduction

Dumba.js is a small library (2.4KB) for handling form data via [Mobx.js](https://github.com/mobxjs/mobx). If you use Mobx for your state management this library will help you to create fully reactive forms.
It supports asynchronous validation and a whole lot more.
It does not contain any validation rules though, so for actual field validation it is recommended to use tried and tested third party validation libraries like [Validator.js](https://github.com/validatorjs/validator.js)

## Demo

Take a look at this [form demo](https://dumba-demo.netlify.app/) that shows pretty much all the functionality of the library.

Or look at the [source of the demo here on github](demo/README.md)

## Installation

```sh
npm install dumba
```

## Quick Usage

To use the library we need to create the `schema` object, which declares what fields exist and what validation tests to use for every field.
In the example below we are going to create a schema with only one field (`email`) and that field will have only one validation (there could be an array of validations), that will check if the field value is a valid email address.

```ts
import { createField, createValidation } from 'dumba'
import isEmail from 'validator/lib/isEmail'

const schema = {
  email: createField({
    value: 'admin@example.com',
    validations: createValidation(
      (str: string) => isEmail(str),
      'Not a valid email'
    )
  })
}
```

After we create the schema, we use the `Form` class to create the class instance that will be connected to the actual HTML form. Form instance needs the schema object.

```ts
import { Form } from 'dumba'
import { schema } from './schema'
const form = new Form(schema)
```

When the form instance is created, we use it to connect the fields to the actual HTML form. The form will have all the fields from the schema e.g.

```ts
const form = new Form(schema)
form.fields.email.value // field value
form.fields.email.onChange //field change event handler to connect to html input
form.fields.email.errors // array of validation errors (if any)

// also there are properties and methods on the form instance itself

form.isValid // if the form is valid
form.isSubmitting // if form is in the process of submitting
form.isValidating // if the form is in the process of validating (async validations)
form.handleSubmit // submit the form
```

Now, let's connect the form to the Material UI TextField as an example

```tsx
//using material ui just as an example
import TextField from '@material-ui/core/TextField'
import { observer } from 'mobx-react-lite'
import { Form } from 'dumba'
import { schema } from './schema'

//declare it outside of the component, usual Mobx rules apply.
const form = new Form(schema)

const FormDemo = observer(function FormDemo() {
  //form submit function
  const handleOnSubmit = () =>
    form.handleSubmit((form: Form) => Promise.resolve(true))

  return (
    <form onSubmit={handleOnSubmit} autoComplete="off" noValidate>
      <TextField
        type="text"
        id="email"
        name="email"
        label="Email"
        // disable while submit is in progress or async validation
        disabled={form.isSubmitting || form.isValidating}
        value={form.fields.email.value}
        onChange={form.fields.email.onChange}
        onBlur={form.fields.email.onChange}
        // mark textfield as invalid (if there are any email errors)
        error={!!form.fields.email.errors.length}
        // display error text
        helperText={<DisplayErrors errors={form.fields.email.errors} />}
        autoComplete="off"
      />
      <Button //form submit button
        variant="contained"
        color="primary"
        type="submit"
        disabled={
          // disable button while submit or async validation is in progress or form is invalid or not yet validated
          form.isSubmitting ||
          form.isValidating ||
          !form.isValid ||
          !form.isValidated
        }
      >
        Submit
      </Button>
    </form>
  )
})
```

And that's the gist of it. There is a lot more you can do with Dumba forms, make sure you read the rest of the documentation.

## Schema

Schema is the most important part of the library, all form logic lives in the schema.
With schema, we define constraints for the fields in the form.

```ts
const schema = {
  email: createField({
    value: 'admin@example.com',
    validations: createValidation(
      (str: string) => isEmail(str),
      'Not a valid email'
    )
  })
}
```

We just created a simple schema with only one field (`email`) that has an initial value of `admin@example.com` and, there is one validation for this field, it checks if what the user entered is a valid email address, if the address is not valid, this field will contain an error message `Not a valid email`.

Schema can have any number of fields even nested fields.

```ts
const schema = {
  person: {
    name: createField(),
    lastName: createField(),
    address: {
      street: createField(),
      zipCode: createField(),
      city: createField(),
      country: createField()
    }
  }
}
```

### Schema Fields

The schema consists of the fields, every field element in the HTML form should have a corresponding field in the schema.

Schema fields are created via `createField()` factory function.
In the example below we are going to create an `email` field.

```ts
const schema = {
  email: createField({
    value: 'admin@example.com',
    validations: [
      createValidation((str: string) => isEmail(str), 'Not a valid email'),
      createValidation(
        (str: string) => isAlpha(str),
        'Only letters are allowed'
      )
    ],
    delay: 100,
    bailEarly: true,
    disabled: false
  })
}
```

- `value`- the initial value of the field
- `validations` - single validation or array of `validations` for the field to be tested with. [Read more](#creating-field-validation)
- `delay` - delay in running the field validations. This is very handy if you like to debounce user input and not run validations on every user keystroke.
- `bailEarly` - mark the field as invalid as soon as the first validation for the field fails. This is only valid when there is more than one validation for the field.
- `disabled` - determine if the field should be disabled. If the field is disabled, it will not be validated, and the form with a disabled field will always be valid.

### Advanced field creation properties

```ts
const schema = {
  email: createField({
    value: 'admin@example.com',
    validations: [
      createValidation((str: string) => isEmail(str), 'Not a valid email'),
      createValidation(
        (str: string) => isAlpha(str),
        'Only letters are allowed'
      )
    ],
    delay: 100,
    bailEarly: true,
    disabled: false
  })
}
```

- `parseValue` - `(evt: any, field: Field<T>) => any` function to **extract** the value from the field in the actual HTML form. By default this function just takes the value from `evt.currentTarget.value` and passes it for validation. For example, you can use it to limit the values that can be entered into the input field. In the example below we only allow the uppercase letter `A,B,c` to be entered.

```js
parseValue: (evt, field) => {
  const newValue = evt.currentTarget.value

  if (newValue.length === 0) {
    return newValue
  }
  const currentValue = field.value

  //todo - compile regex ahead of time
  const regex = /^[ABC]+$/

  const isOnlyABC = regex.test(newValue)
  if (!isOnlyABC) {
    return currentValue
  }

  return newValue
}
```

- `dependsOn` - Fields in a schema can depend on other fields, which means that when the field in the `dependsOn` array (`location` in the example below) changes, validations for the `numPeople` field will be automatically triggered.

If the field to be validated depends on some other field in the form (one or more fields) every time the **dependency** field changes, all validations that **depend** on it will also be validated again.
In the example below imagine we want to validate the total number of people allowed at the party depending on if the party is on the beach or by the pool (`numPeople` depends on `location`).

```ts
const schema: SchemaType = {
  location: createField({
    value: 'beach' // or pool
  }),
  numPeople: createField({
    value: '',
    dependsOn:['location'] // depends on the location field above
    validations: [
      createValidation(
        (partyPeople: number, _field: Field, locationDependancy?: Field) => {
          if (locationDependancy?.value === 'pool') {
            if (partyPeople > 20) {
              return 'max pool party attendance is 40' // error message
            }
            return true //valid
          }
          if (locationDependancy?.value === 'beach') {
            if (partyPeople > 200) {
              return 'max beach party attendance is 200' // error message
            }
            return true //valid
          }
        }
      )
    ]
  })
}
```

If the field depends on other fields that are deeply nested in the object schema that you should use `dot (.)` as a field separator e.g. (`level1.level2.location`).

- `shouldDisable` - `(value: string, field: Field, dependancy?: Field):boolean` if the function returns **true** schema field will be disabled, and no validations for the field will run and `disabled` property of the field will be `true`. This function is triggered only if `dependsOn` field is declared and not empty.
  In the example below, if the user does not play any sports `favoriteSport` field (e.g. input type select) will be disabled

```ts
const schema: SchemaType = {
  playsSports: createField({
    value: false // of true
  }),
  favoriteSport: createField({
    value: '',
    dependsOn: ['playsSports'],
    shouldDisable: (_value, _field, playsSportsDependency) => {
      return dependancy?.value === false
    }
  })
}
```

### Creating Form Field Validation

Actual field validation tests are created via `createValidation` function. `createValidation` function accepts two arguments:

- function to execute the validation. It should return true if field is valid, or if it **returns a string** it will mark the field as invalid, and the string will be used as the error, in this case, the second parameter (message) will be ignored. This is particularly useful when working with dependent fields.
- message to be used as an error if validation fails

```ts
export type ValidationFn = (
  value: any, // field value
  field: Field<any>, // reference to the Field instance
  dependency?: Field<any> // depended Field instance that can also trigger the validation function
) => boolean | Promise<boolean>
```

Also, note that you can access the complete form via `field.form` or `dependency.form`

example function that checks if value is email:

```ts
// isEmail from validator library
import isEmail from 'validator/lib/isEmail'
createValidation((str: string) => isEmail(str), 'Not a valid email')
```

check if the value is bigger than 3, if `false` return a `string` that will be used as an error message.

```ts
createValidation((num: number) =>
  Number.isInteger(num) && num > 3
    ? true
    : 'Should be a number and bigger than 3'
)
```

Take a look at the generated [API docs]() for the complete api

## Form Class

`Form` class is used to create **reactive** fields and event listeners based on the `schema` that is used.

```js
const schema = {
  email: createField({
    value: 'admin@example.com',
    validations: createValidation(
      (str: string) => isEmail(str),
      'Not a valid email'
    )
  })
}
const form = new Form(schema)
```

Once we have the form instance we use it to connect the form elements.

```jsx
import { schema } from './my-schema'

const form = new Form(schema)

const FormDemo = observer(function FormDemo() {
  //form submit function
  const handleOnSubmit = () =>
    form.handleSubmit((form: Form) => Promise.resolve(true))

  return (
    <form onSubmit={handleOnSubmit} autoComplete="off" noValidate>
      <input
        type="text"
        id="email"
        name="email"
        label="Email"
        disabled={form.isSubmitting || form.isValidating} // disable while submit is in progress or async validation
        value={form.fields.email.value} //value of the field pulled from the schema
        onChange={form.fields.email.onChange} //handle field change event
        onBlur={form.fields.email.onChange} // handle blur event (same as onChange)
      />
      <button //form submit button
        type="submit"
        disabled={
          // disable button while submit or async validation is in progress or form is invalid or not yet validated
          form.isSubmitting ||
          form.isValidating ||
          !form.isValid ||
          !form.isValidated
        }
      >
        Submit
      </button>
    </form>
  )
})
```

Once the form is connected to the HTML elements, every time the input filed is changed the field will be re-validated.
There are other methods on the form class that you might find useful (`reset`, `isValid` ,`validated` etc..) please take a look at the generated API docs.

## API Documentation

Auto generated API docs are [here](docs/api/)
