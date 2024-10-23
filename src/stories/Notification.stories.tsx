import { Meta, StoryObj } from '@storybook/react';
<<<<<<< HEAD
import { Notification } from "../components/Notification";
import { Person } from '@mui/icons-material';
import React from 'react';
=======
import { Notification } from "../components/NotifyHub";
>>>>>>> feature/release-1.0.0

const meta: Meta<typeof Notification> = {
    args: {
        title: 'Notificación de info',
        type: 'info',
        subtitle: "Notificacion subtitle",
    },
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['success', 'info', 'error', 'warning']
        },
        duration: { control: { type: 'number' } },
        isIcon: { control: { type: 'boolean' } }
    },
    title: 'Notification',
    component: Notification
} satisfies Meta<typeof Notification>

export default meta;
type Story = StoryObj<typeof Notification>;

export const Basic: Story = {
    args: {
        title: 'Éxito',
        type: "info",
    }
};

export const WithIconPersonalize: Story = {
    args: {
        title: 'Con icono',
        subtitle: 'Basico',
        customIcon: <Person />
    }
}

export const WithDuration: Story = {
    args: {
        duration: 3000,
        title: 'Con tiempo'
    }
}

export const WithActions: Story = {
    args: {
        title: 'Con acciones',
        type: 'error',
        actions: [
            {
                label: 'Boton accion 1',
                onClick: () => { }
            },
            {
                label: 'Boton accion 2',
                onClick: () => { }
            }
        ]
    }
}

export const WithoutIcon: Story = {
    args: {
        title: 'Sin icono',
        subtitle: 'Sin icono',
        isIcon: false
    }
}