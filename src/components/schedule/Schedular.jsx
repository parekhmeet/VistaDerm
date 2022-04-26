// import React from 'react'

// const schedule = () => {
//   return (
//     <div>schedule</div>
//   )
// }

// export default schedule
import "./schedule.scss"
import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.scss';
import { Eventcalendar, getJson, toast, snackbar, setOptions, Popup, Button, Input, Textarea, Switch, Datepicker, SegmentedGroup, SegmentedItem } from '@mobiscroll/react';


const Schedular = props => {

    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);

    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);

    const view = React.useMemo(() => {
        return {
            schedule: { type: 'week' }
        };
    }, []);

    return (
        <div className="sche">
            <div className="calender">
            <Eventcalendar
            theme="material" 
            themeVariant="light"
            clickToCreate={true}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
            </div>
             
            
        </div>
        
        
        
    ); 
}

export default Schedular;