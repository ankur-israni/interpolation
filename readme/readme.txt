1) Data binding is a process of coordinating application data values by declaring bindings between sources and target HTML elements. 
It combines the template parts with components parts and template HTML is bound with markup to connect both sides. 

2)There are four types of data binding:-
a) Interpolation: It displays the component value within the html tags e.g.  <div> {{capital}} </div>

b) Property Binding: It passes the property from the parent to property of the child.
Binding Properties (using []): To resolve and bind a variable to a component, use the [] syntax. If we have 'this.currentVolume' in our component,
then if the value of this.currentVolume changes, 'volume' is updated with the new value, and if the value of 'volume' variable changes somehow, 
then this.currentVolume is updated to the new value.
e.g. <video-control [volume]="currentVolume"></video-control>

c) Event Binding: It fires when you click on the components method name.
Handling Events(using ()) : To listen for an event on a component, we use the () syntax
e.g. <my-component (click)="onClick($event)"></my-component>

d) Two-way Binding: This form binds property and event by using the ngModel directive in a single notation.
Event Handling and Two Way data binding (using [()] ): To keep a binding up to date given user input and other events, 
use the [()] syntax. Think of it as a combination of handling an event and binding a property.
e.g. <input [(ngModel)]="myName">
Here, The this.myName value of your component will stay in sync with the input value.