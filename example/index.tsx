import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Notification } from '../src/components/Notification'
import { Person } from '@mui/icons-material';
=======
import { NotifyHub } from '../src/components/NotifyHub'
>>>>>>> feature/release-1.0.0

const App = () => {
    return (
        <div>
<<<<<<< HEAD
            <Notification
                title='¡Notification Error!'
                subtitle='This is a notification error'
                type='error'
=======
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
>>>>>>> feature/release-1.0.0
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
