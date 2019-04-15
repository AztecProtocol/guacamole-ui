#### Basic Usage

```jsx static
<Calendar />
```

```js
<Calendar />
```

#### Custom Month

```js
import moment from 'moment';

<Calendar
  firstVisibleMonth={moment().add(8, 'month')}
/>
```

#### Number Of Months

```js
<Calendar
  numberOfMonths={2}
/>
```

#### Show Days Outside Of Current Month

This prop only has effect when *numberOfMonths* is 1.

```js
<Calendar showOutsideDays />
```

#### Customize Month Name Format

```js
<Calendar
  monthNameFormat="YYYY - M"
/>
```

#### Change First Day Of Week

Pass a number to set the first day of week, with Sunday as 0 and Saturday as 6.

```js
<Calendar
  startOfWeek={6}
/>
```

#### Vertical Oriented

```js
<Calendar
  numberOfMonths={2}
  orientation="vertical"
/>
```

#### Flexible Width

```js
<Calendar
  flexWidth
/>
```


### Navigate Between Months

Use a different component for navigation in Calendar.

```jsx static
<CalendarWithNavigator />
```

CalendarWithNavigator is a component composed of CalendarNavigator and Calendar. All the props available to Calendar are also available to CalendarWithNavigator.

```js
import CalendarWithNavigator from './CalendarWithNavigator';

<CalendarWithNavigator />
```

#### Minimum And Maximum Months

```js
import moment from 'moment';
import CalendarWithNavigator from './CalendarWithNavigator';

const minMonth = moment().add(1, 'month');
const maxMonth = moment().add(3, 'month');

<CalendarWithNavigator
  initialFirstVisibleMonth={minMonth}
  minMonth={minMonth}
  maxMonth={maxMonth}
/>
```

### Decorate Calendar Days

There are currently 6 status that can be added to each individual day:
  - isSelected
  - isHighlighted
  - isHovered
  - isTrailing
  - isInRange
  - disabled

Always use Calendar's *statusModifier* utility to add/delete status. It makes sure that only those references related to target days will be updated, so that components with unchanged status won't re-render themselves.


#### Highlight Today

```js
import moment from 'moment';
import { addStatus } from '../../../utils/calendar/statusModifier';

const today = moment();
const daysStatus = addStatus({}, today, 'isSelected');

<Calendar
  daysStatus={daysStatus}
/>
```

#### Show Range

```js
import moment from 'moment';
import { addStatus } from '../../../utils/calendar/statusModifier';

let daysStatus = {};
const firstDay = moment().startOf('month').add(10, 'days');
const lastDay = firstDay.clone().add(5, 'days');
daysStatus = addStatus(daysStatus, firstDay, 'isSelected');
daysStatus = addStatus(daysStatus, lastDay, 'isSelected');

const nextDay = firstDay.clone().add(1, 'days');
while (nextDay.isBefore(lastDay)) {
  daysStatus = addStatus(daysStatus, nextDay, 'isInRange');
  nextDay.add(1, 'day');
}

<Calendar
  daysStatus={daysStatus}
/>
```
