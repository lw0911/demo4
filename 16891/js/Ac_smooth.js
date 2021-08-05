//2012-5-20 JoXCN-JS-Expand for Ac_smooth(Action_smooth)
function Ac_smooth(s,e,t,func,sfunc)
{
	this.start=s;
	this.end=e;
	this.times=t;
	this.func=func
	this.Sfunc=sfunc;
	this.actype=["the.start=the.start+(the.end-the.start)/the.times"];
	var the=this;
	this.goo=0;
	this.Begin=function()
	{
		this.set=setInterval(function()
		{
			eval(the.actype[0]);
			the.goo=the.start.toFixed(0);
			the.func();
			if(parseInt(the.goo)==the.end){return the.Stop();}
		},15);
	}
	this.Stop=function()
	{
		clearInterval(this.set);
		return this.Sfunc?this.Sfunc():"";
	}
}
//2012-5-20 the Ac_smooth(Action_smooth) is End
//2012-5-31 the Ac_smooth(Action_smooth)  Change
//2012-7-01 the Ac_smooth(Action_smooth)  Change

/*
function Ac_smooth(s,e,speed,step,func,Sfunc)
{
	this.start=parseInt(s);
	this.end=parseInt(e);
	this.step=parseInt(step);
	this.speed=parseInt(speed);
	this.func=func;
	this.Sfunc=Sfunc;
	var the=this;
	this.Begin=function(){
		if(this.start<this.end)
		{
			return this.Set=setInterval(function()
			{
			if(the.start+the.step>=the.end){the.start+=Math.abs(the.start-the.end);the.func();return the.Stop();}
			the.start+=the.step;
			the.func();
			},this.speed);
		}
		else if(this.start>this.end)
		{
			return this.Set=setInterval(function()
			{
			if(the.start-the.step<=the.end){the.start-=Math.abs(the.start-the.end);the.func();return the.Stop();}
			the.start-=the.step;
			the.func();
			},this.speed);
		}
	}
	this.Stop=function()
	{
		clearInterval(this.Set);
		this.Sfunc?this.Sfunc():"";
	}
}
*/