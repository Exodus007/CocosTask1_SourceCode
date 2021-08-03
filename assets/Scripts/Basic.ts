

const {ccclass, property} = cc._decorator;//Getting the decorators from the cc._decorator namespace..
//Global Variables
var counter:number=0;
var myAction_backnode:cc.Tween;
@ccclass
export default class NewClass extends cc.Component {

    //Normal Type Property Declaration
    @property(cc.Label)
    label_Timer:cc.Label=null;
    @property(cc.Node)
    clock_back_node:cc.Node=null;
  
    @property
    text_: string = 'hello';

    //Full Attribute Define for Property Declaration ..
    @property(
        //Type Object.. for cc namespace ..
        {
        type: cc.Integer,
        visible:true
        
    })
    //After This the Variable name
    myInteger= 1;
    @property
    Duration:number=20;
    @property
    AlertTime:number=5;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

       //Referencing doing here..
       this.clock_back_node.active=false;
       counter=this.Duration;
       this.label_Timer.string="Timer: " + counter.toString();
        
    }

    start () {
        this.ScheduleTimer();
    }

    // update (dt) {}



//This will get called after every 1 sec..
Task1Logic()
{
    //Updating the cc Label to display in the Game Scene..
    //Base Case
    if(counter>0)
    {
        //Only if the timer is >(greater) than zero
        counter-=1;
        this.label_Timer.string="Timer: " + counter.toString();
        if(counter==this.AlertTime)
        {
            this.clock_back_node.opacity=0;
            this.clock_back_node.active=true;
            this.FadeInNOut();//Blink Effect with fade
        }
    }
    else{
        this.StopAction();
        this.UnscheduleTimer();
    }
 
}
FadeInNOut()
{

 myAction_backnode = new cc.Tween()
    .target(this.clock_back_node)
    .repeatForever(cc.tween().sequence(cc.fadeTo(0.5,255),cc.fadeTo(0.5,30)))
    .start();

}
StopAction()
{
myAction_backnode.stop();
this.clock_back_node.active=false;
}
//Button Function
ResetTimer()
{
    
    this.UnscheduleTimer();
    counter=this.Duration;
    //Updating Label one more time
    this.label_Timer.string="Timer: " + counter.toString();
    this.clock_back_node.active=false;
    this.ScheduleTimer();
    console.log("Button got clicked!");
}
//Unscheduling Thing
UnscheduleTimer()
{
    this.unschedule(this.Task1Logic);
}
//ScheduleTimer
ScheduleTimer()
{
    this.schedule(this.Task1Logic,1);
}
}
