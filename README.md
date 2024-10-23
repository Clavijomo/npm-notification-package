# Notification Component

The `Notification` component is designed to display notifications to users with various styles, options for actions, and configurable display durations. This component is built with React and TypeScript.

# Use Basic Component
```
<NotifyHub
    title='Success notification'
    subtitle='Description of the Success Notification'
    type='success'
    actions={[
        {
            label: 'Custom button 1',
            onClick: () => alert('Custom button 1')
        },
        {
            label: 'Custom button 2',
            onClick: () => alert('Custom button 2')
        }
    ]}
/>
```

## Features

- **Different Notification Types**: Supports various notification types, including:
  - `success`
  - `error`
  - `info`
  - `warning`
  
- **Custom Icons**: Allows the use of custom icons through the `customIcon` prop or selects a default icon based on the notification type using the `useSelectIcon` hook.

- **Action Buttons**: Supports multiple action buttons that can trigger specific functions.

- **Auto-close Functionality**: Notifications can automatically close after a specified duration or remain open for user interaction.

## Props

The `Notification` component accepts the following props:

| Prop          | Type                      | Default     | Description                                           |
|---------------|---------------------------|-------------|-------------------------------------------------------|
| `title`       | `string`                  | -           | The title of the notification.                        |
| `subtitle`    | `string`                  | -           | Optional subtitle to provide additional context.     |
| `isIcon`      | `boolean`                 | `true`      | Determines whether to show an icon in the notification.|
| `type`        | `'success' \| 'error' \| 'info' \| 'warning'` | `'info'`    | The type of notification, which affects its style.   |
| `duration`    | `number`                  | `3000`      | The duration in milliseconds before the notification auto-closes. Set to `0` for permanent notifications.|
| `actions`     | `Action[]`                | `[]`        | An array of action objects for buttons in the notification. Each object should have a `label` and an `onClick` function. |
| `customIcon`  | `JSX.Element`             | -           | Optional custom icon to display in the notification.  |
| `className`   | `string`                  | `''`        | Additional CSS classes for custom styling.           |
| `onClose`     | `() => void`              | -           | Callback function that is called when the notification closes. |

### Action Interface

The `Action` interface defines the structure of each action button:

```typescript
interface Action {
    label: string;
    onClick: () => void;
}