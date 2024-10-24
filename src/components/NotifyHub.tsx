import { Close } from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import { useSelectIcon } from "../hooks/useSelectIcon"
import { Props } from "../interfaces/Notification"
import './NotifyHub.css'

export const NotifyHub = ({
    title,
    subtitle,
    type = 'info',
    actions = [],
    className = '',
    onClose,
    duration,
    customIcon,
    isIcon = true
}: Props) => {
    const icon = customIcon ?? useSelectIcon(type);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    useEffect(() => {
        if (duration && duration > 0) {
            const closeTimer = setTimeout(() => {
                setIsClosing(true);
            }, duration);

            const removeTimer = setTimeout(() => {
                if (onClose) onClose();
            }, duration && duration, + 300);

            return () => {
                clearTimeout(closeTimer);
                clearTimeout(removeTimer);
            };
        }

        return () => { }
    }, [duration, onClose]);

    const handleClose = () => {
        setIsClosing(true)
        if (onClose) onClose()
    }

    return (
        <div
            className={`notification ${type} ${isClosing ? 'closing' : ''} ${className}`}
            role="alert"
        >
            <div className="container-title-buttons">
                {isIcon && (
                    <div className="container-notification">
                        {icon}
                        <h2>{title}</h2>
                    </div>
                )}
                <button onClick={handleClose}>
                    <Close />
                </button>
            </div>
            {!isIcon && <h2>{title}</h2>}

            {subtitle &&
                <p>
                    {subtitle}
                </p>
            }
            {actions.length > 0 && (
                <div className="notification-actions">
                    {actions.map(({ label, onClick }, i) => (
                        <button key={i} onClick={onClick}>
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}