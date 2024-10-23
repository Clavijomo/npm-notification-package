import { Meta, StoryObj } from '@storybook/react';
import { Notification } from "../components/NotifyHub";

const meta: Meta<typeof Notification> = {
    args: {
        title: 'Notificación de info',
        subtitle: "Notificacion subtitle",
        type: 'success',
    },
    argTypes: {
        duration: { control: { type: 'number' } },
        actions: { control: { type: 'object' } }
    },
    title: 'Notification',
    component: Notification
} satisfies Meta<typeof Notification>

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: 'Éxito',
        type: 'success',
    }
};

export const AutoCloseNotification: Story = {
    args: {
        title: 'Notificación de Éxito',
        subtitle: 'Esta notificación se cerrará automáticamente.',
        type: 'success',
        duration: 3000,
        actions: [],
    },
};

export const WithActions: Story = {
    args: {
        title: 'Atención',
        subtitle: 'Hay algo que necesitas revisar.',
        type: 'warning',
        className: 'red',
        actions: [
            {
                label: 'Redireccionar',
                onClick: () => alert('Hola mundo')
            }
        ]
    },
}