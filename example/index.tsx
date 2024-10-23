import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Notification } from '../src/components/Notification'
import { Person } from '@mui/icons-material';

const App = () => {
    return (
        <div>
            <Notification
                title='¡Notification Error!'
                subtitle='This is a notification error'
                type='error'
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
