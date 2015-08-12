// // Custom Post Field

// Posts.addField({
//   fieldName: 'customPostField',
//   fieldSchema: {
//     type: String,
//     optional: true,
//     editableBy: ["member", "admin"]
//   }
// });

// // Custom Comment Field

// Comments.addField({
//   fieldName: 'customCommentField',
//   fieldSchema: {
//     type: String,
//     optional: true,
//     editableBy: ["member", "admin"]
//   }
// });

// // Custom User Field

// Users.addField({
//   fieldName: 'customUserField',
//   fieldSchema: {
//     type: String,
//     optional: true,
//     editableBy: ["member", "admin"]
//   }
// });

// // Custom Setting Field

// Settings.addField({
//   fieldName: "customSettingsField",
//   fieldSchema: {
//     type: String,
//     optional: true,
//     autoform: {
//       group: "customGroup"
//     }
//   }
// });

Template.user_menu.helpers({
  menuLabel: function () {
    return Users.getDisplayName(Meteor.user());
  },
  menuItems: function () {
    return Telescope.menuItems.get("userMenu");
  },
  menuMode: function () {
    if (!!this.mobile) {
      return 'list';
    }
  }
});