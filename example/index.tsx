import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NotifyHub } from '../src/components/NotifyHub'

const App = () => {
    return (
        <div>
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
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
