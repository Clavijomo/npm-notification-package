export interface BaseProps {
    title: string
    subtitle?: string
    isIcon?: boolean
    type?: 'success' | 'error' | 'info' | 'warning'
    duration?: number
    actions?: Action[]
    customIcon?: JSX.Element
    className?: string
    onClose?: () => void
}

interface WithCustomIcon extends BaseProps {
    customIcon: JSX.Element,
    isIcon?: never
}

interface WithOrWithoutIcon extends BaseProps {
    customIcon?: never
    isIcon?: boolean
}

export type Props = WithOrWithoutIcon | WithCustomIcon

interface Action {
    label: string
    onClick: () => void;
}
