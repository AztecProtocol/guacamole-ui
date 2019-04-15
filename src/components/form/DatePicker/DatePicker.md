#### Basic Usage

```jsx static
<DatePicker />
```

```js
<DatePicker />
```

#### Select Ranges of Days

DatePicker becomes a DateRangePicker when *numberOfDays* is larger than 1.

```js
import moment from 'moment';

<DatePicker
  numberOfDays={2}
/>
```

#### Selectable Range

```js
import moment from 'moment';

<DatePicker
  minDay={moment()}
  maxDay={moment().add(2, 'months')}
  numberOfMonths={2}
/>
```

Notice that navigator will be hidden automatically if all the selectable days can be fit in current visible months.

```js
import moment from 'moment';

<DatePicker
  minDay={moment()}
  maxDay={moment().add(1, 'months')}
  numberOfMonths={2}
/>
```

#### Minimum Nights

*minNights* will be applied to DatePicker when *numberOfDays* is larger than 1. It is the minimum gap between every selected days. Its default value is 1, which means users can not select the same day consecutively.

```js
import moment from 'moment';

<DatePicker
  numberOfDays={2}
  minNights={3}
/>
```

#### Add Status to Days

There are three different ways to add status to days in a DatePicker:

** 1. Using daysStatus object **

Like Calendar, DatePicker also takes *daysStatus* as its prop to change status of days. However, this is the least desirable approach since it is harder for DatePicker to handle what status is being added. For example, there will be unexpected result if you modify isTrailing or isInRange status through it, for these effects are already taking care of by DatePicker itself. A good time to use this method is when there is an existing daysStatus object being shared among multiple components.

```js
import moment from 'moment';
import { addStatus } from '../../../utils/calendar/statusModifier';

let daysStatus = {};
const disableDay = (day) => {
  daysStatus = addStatus(daysStatus, day, 'disabled');
};
const highlightDay = (day) => {
  daysStatus = addStatus(daysStatus, day, 'isHighlighted');
};

const startOfMonth = moment().startOf('month');
for (let i = 0; i < 10; i++) {
  disableDay(startOfMonth.clone().add(i, 'days'));
}
for (let i = 0; i < 5; i++) {
  highlightDay(startOfMonth.clone().add(i + 20, 'days'));
}

<DatePicker
  daysStatus={daysStatus}
/>
```

** 2. Using arrays of moments **

DatePicker can setup status using arrays of moments. It is best to use this approach when those arrays won't be too large and they almost don't change.

```js
import moment from 'moment';

const disabledDays = [
  moment('2019-04-11'),
  moment('2019-04-13'),
  moment('2019-04-17'),
];

const highlightedDays = [
  moment('2019-04-19'),
  moment('2019-04-20'),
];

<DatePicker
  disabledDays={disabledDays}
  highlightedDays={highlightedDays}
/>
```

** 3. Using modifier functions **

The best time to use a modifier function is when there are clear rules for deciding what status should be added to what day. These modifiers will be applied to all the visible days in current months.

```js
const isDayDisabled = day => day.day() === 2;
const isDayHighlighted = day => !(day.day() % 6);

<DatePicker
  isDayDisabled={isDayDisabled}
  isDayHighlighted={isDayHighlighted}
/>
```
