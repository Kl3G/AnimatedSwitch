(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(5,1,1).p("AgqAgQgDgDgCgBQgqgqAAg8QAAg8AqgrQArgqA7AAQA8AAArAqQAqArAAA8QAAA8gqAqQgrAqg8AAQg4AAgpgmgAAyhPIhcBvIidC8");
	this.shape.setTransform(0,-22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhhBrIBdhvIhdBvIgFgFQgqgqAAg8QAAg7AqgrQArgqA7AAQA8AAArAqQAqArAAA7QAAA8gqAqQgrArg8AAQg4AAgpgmg");
	this.shape_1.setTransform(5.5,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-46.5,45,49);


// stage content:
(lib.buttonOn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [49];
	// timeline functions:
	this.frame_49 = function() {
		this.dispatchEvent(new createjs.Event("animationEnd"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// arm
	this.instance = new lib.arm("synched",0);
	this.instance.setTransform(23.5,260.45,1,1,0,0,0,0,-22);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({x:25.4,y:258.1},0).wait(1).to({x:27.35,y:255.8},0).wait(1).to({x:29.3,y:253.5},0).wait(1).to({x:31.2,y:251.2},0).wait(1).to({x:33.15,y:248.9},0).wait(1).to({x:35.1,y:246.55},0).wait(1).to({x:37,y:244.25},0).wait(1).to({x:38.95,y:241.95},0).wait(1).to({x:40.9,y:239.65},0).wait(1).to({x:42.8,y:237.35},0).wait(1).to({x:44.75,y:235},0).wait(1).to({x:46.7,y:232.7},0).wait(1).to({x:48.6,y:230.4},0).wait(1).to({x:50.55,y:228.1},0).wait(1).to({x:52.5,y:225.8},0).wait(1).to({x:54.4,y:223.45},0).wait(1).to({x:56.35,y:221.15},0).wait(1).to({x:58.3,y:218.85},0).wait(1).to({x:60.2,y:216.55},0).wait(1).to({x:62.15,y:214.25},0).wait(1).to({x:64.1,y:211.9},0).wait(1).to({x:66,y:209.6},0).wait(1).to({x:67.95,y:207.3},0).wait(1).to({x:69.9,y:205},0).wait(1).to({x:71.8,y:202.7},0).wait(1).to({x:73.75,y:200.35},0).wait(1).to({x:75.7,y:198.05},0).wait(1).to({x:77.6,y:195.75},0).wait(1).to({x:79.55,y:193.45},0).wait(1).to({x:81.5,y:191.15},0).wait(1).to({x:83.4,y:188.8},0).wait(1).to({x:85.35,y:186.5},0).wait(1).to({x:87.3,y:184.2},0).wait(1).to({x:89.2,y:181.9},0).wait(1).to({x:91.15,y:179.6},0).wait(1).to({x:93.1,y:177.25},0).wait(1).to({x:95,y:174.95},0).wait(1).to({x:96.95,y:172.65},0).wait(1).to({x:98.9,y:170.35},0).wait(1).to({x:100.8,y:168.05},0).wait(1).to({x:102.75,y:165.7},0).wait(1).to({x:104.7,y:163.4},0).wait(1).to({x:106.6,y:161.1},0).wait(1).to({x:108.55,y:158.8},0).wait(1).to({x:110.5,y:156.5},0).wait(1));

	// backGround
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(5,1,1).p("AD/gdQAABlhIBHQhHBIhmAAQhlAAhHhIQhIhHAAhlQAAhlBIhIQBHhIBlAAQBmAABHBIQBIBIAABlgAvsy0IfPAAMAAAAlzI/PAAgAyg18MAlBAAAMAAAAr5MglBAAAg");
	this.shape.setTransform(121,142.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAEDCA").s().p("AisCtQhIhIAAhlQAAhlBIhHQBHhIBlAAQBlAABIBIQBIBHAABlQAABlhIBIQhIBIhlAAQhlAAhHhIg");
	this.shape_1.setTransform(122,140);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5451B").s().p("AygV9MAAAgr5MAlBAAAMAAAAr5gAvsS/IfPAAMAAAglzI/PAAg");
	this.shape_2.setTransform(121,142.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9B45").s().p("AvnS6MAAAglzIfPAAMAAAAlzgAidjPQhIBIAABlQAABlBIBHQBHBIBlAAQBlAABIhIQBIhHAAhlQAAhlhIhIQhIhIhlAAQhlAAhHBIg");
	this.shape_3.setTransform(120.5,143.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},49).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(121,142.5,121,143.5);
// library properties:
lib.properties = {
	id: 'DEB6C5E970280F44A64283FA1AB84A55',
	width: 242,
	height: 285,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DEB6C5E970280F44A64283FA1AB84A55'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;