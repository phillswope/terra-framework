# Terra Date Picker Upgrade Guide

## Changes from version 3 to version 4

### Removed props
* Removed `releaseFocus`
* Removed `requestFocus`

### New props
* Added `onBlur`
* Added `onFocus`

### Changes to onBlur and onFocus

The `onBlur` and `onFocus` props previously could be passed down as custom props. These props have now become first-class props. The `onFocus` prop used to be triggered when focus is moved from the date input to the calendar button or vise versa. The `onFocus` prop will still be triggered if the date picker component did not have focus and now just gained focus. However, if the focus is then moved from the date input to the calendar button or vise versa, the `onFocus` callback now would not be triggered because the focus is still within the date picker container. The `onBlur` callback now behaves similar to the `onFocus` callback where `onBlur` would not be triggered when focus is transfered from the date input to the calendar button. The `onBlur` callback would be triggered only when focus is lost from the entire date picker component.

### Changes to filterDate
The parameter in the `filterDate` callback has changed from a moment date object to an ISO string representation of the date. The reason for this change is to keep consistency with other callbacks.

```diff
import React from 'react';
import moment from 'moment';
import DatePicker from 'terra-date-picker';

class Default extends React.Component {
  constructor() {
    super();
    this.handleFilterDate = this.handleFilterDate.bind(this);
  }

  handleFilterDate(date) {
+   const momentDate = moment(date)
    const day = momentDate.day();
    return day !== 0 && day !== 6;
  }

  render() {
    return (
      <DatePicker
        name="date-picker"
        filterDate={this.handleFilterDate}
      />
    );
  }
}

export default Default;
```

## Changes from version 2 to version 3

### Changes to CSS Custom Properties

#### Added
* --terra-date-picker-input-focus-border-color
* --terra-date-picker-button-border
* --terra-date-picker-button-border-bottom-right-radius
* --terra-date-picker-button-border-top-right-radius
* --terra-date-picker-button-box-shadow
* --terra-date-picker-button-color
* --terra-date-picker-button-focus-border-color
* --terra-date-picker-button-focus-box-shadow
