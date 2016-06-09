/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function clicker(){
		var x = document.getElementById("one").value;
		var y = document.getElementById("two").value;
		var z = x + y;
		z=z.toUpperCase();
		var a=0,c=0;
		var u="";
		var v="";
		for(a = 0; a < z.length; a++)
		{
			var f=0;
			x=z.charAt(a);
			for(var b = 0; b < z.length; b++)
			{
				y=z.charAt(b);
				if(x==y && a!=b)
				{
					f=1;
				}
				y="";
			}
			if(f==0)
			{
				u=u+x;
			}
			x="";
		}
		c=u.length;
		u="";
		var l="FLAMES";
		var d=c%l.length;
		if(d==0)
		{
			d=l.length-1;
		}
		else
		{
			d-=1;
		}
		for(var i=0;i<l.length;i++)
		{
			if(i!=d)
			{
				u=u+l.charAt(i);
			}
		}
		while(u.length>1)
		{
			v=u;
			u="";
			d=c%v.length;
			if(d==0)
			{
				d=v.length-1;
			}
			else
			{
				d-=1;
			}
			for(var j=0;j<v.length;j++)
			{
				if(j!=d)
				{
					u=u+v.charAt(j);
				}
			}
		}
	var r = "FLAMES";
	if(u==r.charAt(0))
	{
		u="You are going to be just friends";
	}
	else if(u==r.charAt(1))
	{
		u="You are in love with her/him";
	}
	else if(u==r.charAt(2))
	{
		u="You are having an attraction towards her/him";
	}
	else if(u==r.charAt(3))
	{
		u="You are going to marry her/him";
	}
	else if(u==r.charAt(4))
	{
		u="You are her/him enemy";
	}
	else if(u==r.charAt(5))
	{
		u="You both are siblings";
	}
	else
	{
		//u="ERROR";
	}
	document.getElementById("result").innerHTML=u;
	};
if('addEventListener' in window){;
	  	window.addEventListener('load',function(){document.body.className=document.body.className.replace(/\bis-loading\b/,'');});
		document.body.className+=(navigator.userAgent.match(/(MSIE|rv:11\.0)/)?'is-ie':'');
	}
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};*/
