## jQuery Validation for Meteor

Meteor implementation of [Validation](https://github.com/jzaefferer/jquery-validation) for jQuery.

## Usage

Install via [Atmosphere](http://atmospherejs.com):

` meteor add themeteorchef:jquery-validation`

Add the "required" class to your markup:

```
<template name="exampleForm">

  <form id="validation-example">

    <label for="name">Name</label> <br>
    <input type="text" name="name" class="required"> <br>

    <label for="emailAddress">Email Address</label> <br>
    <input type="email" name="emailAddress" class="required email"> <br>

    <input type="submit" value="Validate Form" />

  </form>

</template>
```

And add to your template's rendered function:

```
Template.exampleForm.rendered = function() {
  $("#validation-example").validate();
}
```

For custom validation options and configuration, check out the jQuery validation documentation: [jQuery Validation Documentation](http://jqueryvalidation.org/documentation)
