montageDefine("b14c684","ui/flow.reel/flow",{dependencies:["../../core/core","../component","frb/observers","./flow-bezier-spline","../../core/range-controller","../../core/deprecate"],factory:function(t,e){var i=(t("../../core/core").Montage,t("../component").Component),n=t("frb/observers").observeProperty,a=t("./flow-bezier-spline").FlowBezierSpline,r=t("../../core/range-controller").RangeController,s=t("../../core/deprecate").deprecationWarning;e.Flow=i.specialize({constructor:{value:function(){this.super(),this._visibleIndexes=[],this._needsClearVisibleIndexes=!0,this._slideOffsets={},this.defineBinding("_numberOfIterations",{"<-":"_frustumController.content.length"}),this.addOwnPropertyChangeListener("_numberOfIterations",this),window.addEventListener("resize",this,!1)}},slotContent:{serializable:!0,value:null},__flowTranslateComposer:{value:null},_flowTranslateComposer:{get:function(){return this.__flowTranslateComposer},set:function(t){this.__flowTranslateComposer&&(this.__flowTranslateComposer.removeEventListener("translateStart",this,!1),this.__flowTranslateComposer.removeEventListener("translateEnd",this,!1)),this.__flowTranslateComposer=t,this.__flowTranslateComposer.addEventListener("translateStart",this,!1),this.__flowTranslateComposer.addEventListener("translateEnd",this,!1)}},__firstIteration:{value:null},_firstIteration:{get:function(){return this.__firstIteration},set:function(t){this.__firstIteration=t,this.needsDraw=!0}},handleTranslateStart:{value:function(){this.callDelegateMethod("didTranslateStart",this)}},handleTranslateEnd:{value:function(){this.callDelegateMethod("didTranslateEnd",this)}},_scrollingMode:{value:"linear"},_transform:{value:null},_transformCss:{value:null},_transformPerspective:{value:null},scrollingMode:{serializable:!0,get:function(){return this._scrollingMode},set:function(t){switch(t){case"linear":case"drag":this._scrollingMode=t}}},_linearScrollingVector:{value:[-300,0]},linearScrollingVector:{seriazable:!0,get:function(){return this._linearScrollingVector},set:function(t){this._linearScrollingVector=t}},_repetition:{value:null},momentumDuration:{serializable:!0,value:650},_splinePaths:{value:null},splinePaths:{enumerable:!1,get:function(){return this._splinePaths||(this._splinePaths=[]),this._splinePaths},set:function(t){this._splinePaths=t}},_appendPath:{value:function(t){var e,i,n=new a,r=t.knots,s=t.knots.length,o=[],l=[],c=[],h=[];n.parameters={};for(e in t.units)n.parameters[e]={data:[],units:t.units[e]};for(e=0;s>e;e++){o[e]=r[e].knotPosition,c[e]=r[e].previousHandlerPosition,l[e]=r[e].nextHandlerPosition,h[e]=r[e].previousDensity;for(i in t.units)n.parameters[i].data.push(r[e][i])}n.knots=o,n.previousHandlers=c,n.nextHandlers=l,n.densities=h,n._computeDensitySummation(),this.splinePaths.push(n),t.hasOwnProperty("headOffset")||(t.headOffset=0),t.hasOwnProperty("tailOffset")||(t.tailOffset=0),this._paths.push(t),this._updateLength()}},_paths:{value:null},paths:{get:function(){var t,e,i,n,a,r,s,o=this.splinePaths.length,l=[];for(a=0;o>a;a++){for(e=this.splinePaths[a].knots.length,t={knots:[],units:{}},r=0;e>r;r++)n={knotPosition:this.splinePaths[a].knots[r]},this.splinePaths[a].nextHandlers&&this.splinePaths[a].nextHandlers[r]&&(n.nextHandlerPosition=this.splinePaths[a].nextHandlers[r]),this.splinePaths[a].previousHandlers&&this.splinePaths[a].previousHandlers[r]&&(n.previousHandlerPosition=this.splinePaths[a].previousHandlers[r]),this.splinePaths[a].densities&&this.splinePaths[a].densities[r]&&(n.previousDensity=this.splinePaths[a].densities[r],n.nextDensity=this.splinePaths[a].densities[r]),t.knots.push(n);for(r in this.splinePaths[a].parameters)for(t.units[r]=this.splinePaths[a].parameters[r].units,i=this.splinePaths[a].parameters[r].data.length,s=0;i>s;s++)t.knots[s][r]=this.splinePaths[a].parameters[r].data[s];t.headOffset=this._paths[a].hasOwnProperty("headOffset")?this._paths[a].headOffset:0,t.tailOffset=this._paths[a].hasOwnProperty("tailOffset")?this._paths[a].tailOffset:0,l.push(t)}return l},set:function(t){var e,i=t.length;for(this._splinePaths=[],this._paths=[],e=0;i>e;e++)this._appendPath(t[e]);this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_isCameraEnabled:{value:!0},isCameraEnabled:{get:function(){return this._isCameraEnabled},set:function(t){var e=!!t;this._isCameraEnabled!==e&&(this._isCameraEnabled=e,this._isCameraUpdated=!0,this._needsComputeVisibleRange=!0,this.needsDraw=!0)}},_perspective:{value:500},perspective:{get:function(){return this._perspective},set:function(t){var e=parseFloat(t);isNaN(e)||this._perspective===e||(this._perspective=e,this._isCameraUpdated=!0,this._needsComputeVisibleRange=!0,this.needsDraw=!0)}},_cameraElement:{value:null},_cameraPosition:{value:[0,0,800]},cameraPosition:{get:function(){return this._cameraPosition},set:function(t){this._cameraPosition=t,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_viewpointPosition:{get:function(){return this._isCameraEnabled?this.cameraPosition:[.01*(50-this._sceneOffsetLeft)*this._width,.01*(50-this._sceneOffsetTop)*this._height,this._perspective]}},_cameraTargetPoint:{value:[0,0,0]},cameraTargetPoint:{get:function(){return this._cameraTargetPoint},set:function(t){this._cameraTargetPoint=t,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_viewpointTargetPoint:{get:function(){return this._isCameraEnabled?this.cameraTargetPoint:[.01*(50-this._sceneOffsetLeft)*this._width,.01*(50-this._sceneOffsetTop)*this._height,0]}},_cameraFov:{value:50},cameraFov:{get:function(){return this._cameraFov},set:function(t){this._cameraFov=t,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_viewpointFov:{get:function(){return this._isCameraEnabled?this.cameraFov:360*(Math.PI/2-Math.atan2(this._perspective,this._height/2))/Math.PI}},_cameraRoll:{value:0},cameraRoll:{get:function(){return this._cameraRoll},set:function(t){this._cameraRoll=t,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_sceneOffsetTop:{value:50},sceneOffsetTop:{get:function(){return this._sceneOffsetTop},set:function(t){this._sceneOffsetTop=t,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_sceneOffsetLeft:{value:50},sceneOffsetLeft:{get:function(){return this._sceneOffsetLeft},set:function(t){this._sceneOffsetLeft=t,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_sceneScaleX:{value:{numerator:1,denominator:1}},_sceneScaleY:{value:{numerator:1,denominator:1}},_sceneScaleZ:{value:{numerator:1,denominator:1}},_sceneScale:{value:{x:{numerator:1,denominator:1},y:{numerator:1,denominator:1},z:{numerator:1,denominator:1}}},_updateSceneScale:{value:function(){this._sceneScale={x:this._sceneScaleX,y:this._sceneScaleY,z:this._sceneScaleZ}}},sceneScaleX:{get:function(){return this._sceneScaleX},set:function(t){"object"!=typeof t||void 0===t.numerator||void 0===t.denominator||isNaN(t.numerator)||isNaN(t.denominator)||0==t.denominator||(this._sceneScaleX=t,this._updateSceneScale(),this.needsDraw=!0,this._needsComputeVisibleRange=!0)}},sceneScaleY:{get:function(){return this._sceneScaleY},set:function(t){"object"!=typeof t||void 0===t.numerator||void 0===t.denominator||isNaN(t.numerator)||isNaN(t.denominator)||0==t.denominator||(this._sceneScaleY=t,this._updateSceneScale(),this.needsDraw=!0,this._needsComputeVisibleRange=!0)}},sceneScaleZ:{get:function(){return this._sceneScaleZ},set:function(t){"object"!=typeof t||void 0===t.numerator||void 0===t.denominator||isNaN(t.numerator)||isNaN(t.denominator)||0==t.denominator||(this._sceneScaleZ=t,this._updateSceneScale(),this.needsDraw=!0,this._needsComputeVisibleRange=!0)}},_stride:{value:0},stride:{get:function(){return this._stride},set:function(t){this._stride=t}},_scrollingTransitionDurationMiliseconds:{value:500},_scrollingTransitionDuration:{value:"500ms"},scrollingTransitionDuration:{get:function(){return this._scrollingTransitionDuration},set:function(t){var e,i,n=t+"";n.length,(i=/^(\d+)ms$/.exec(n))?e=+i[1]:(i=/^(\d+)s$/.exec(n))?e=1e3*+i[1]:(e=+n,n+="ms"),isNaN(e)||this._scrollingTransitionDurationMiliseconds===e||(this._scrollingTransitionDurationMiliseconds=e,this._scrollingTransitionDuration=n)}},hasSelectedIndexScrolling:{value:!1},selectedIndexScrollingOffset:{value:0},_handleSelectedIndexesChange:{value:function(t){this.hasSelectedIndexScrolling&&t[0]&&this.startScrollingIndexToOffset(Math.floor(this.contentController.content.indexOf(t[0].object)/this._paths.length),this.selectedIndexScrollingOffset)}},_timingFunctions:{value:{ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]}},_scrollingTransitionTimingFunctionBezier:{value:[.25,.1,.25,1]},_scrollingTransitionTimingFunction:{value:"ease"},scrollingTransitionTimingFunction:{get:function(){return this._scrollingTransitionTimingFunction},set:function(t){var e,i,n=t+"";if(this._timingFunctions.hasOwnProperty(n))this._scrollingTransitionTimingFunction=n,this._scrollingTransitionTimingFunctionBezier=this._timingFunctions[n];else if("cubic-bezier("===n.substr(0,13)&&")"===n.substr(n.length-1,1)&&(e=n.substr(13,n.length-14).split(","),4===e.length)){for(i=0;4>i;i++)if(e[i]-=0,isNaN(e[i]))return;0>e[0]?e[0]=0:e[0]>1&&(e[0]=1),0>e[2]?e[2]=0:e[2]>1&&(e[2]=1),this._scrollingTransitionTimingFunction="cubic-bezier("+e+")",this._scrollingTransitionTimingFunctionBezier=e}}},_computeCssCubicBezierValue:{value:function(t,e){var i,n,a,r=.5,s=.25;for(a=0;20>a;a++)i=r*r,n=1-r,3*(n*n*r*e[0]+n*i*e[2])+i*r>t?r-=s:r+=s,s*=.5;return i=r*r,n=1-r,3*(n*n*r*e[1]+n*i*e[3])+i*r}},_isTransitioningScroll:{value:!1},stopScrolling:{value:function(){this._isTransitioningScroll=!1}},startScrollingIndexToOffset:{value:function(t,e){this._scrollingOrigin=this.scroll,this._scrollingDestination=t-e,this._scrollingDestination>this._length?this._scrollingDestination=this._length:0>this._scrollingDestination&&(this._scrollingDestination=0),this._isScrolling=!0,this._scrollingStartTime=Date.now(),this._isTransitioningScroll=!0,this.needsDraw=!0,this.callDelegateMethod("didTranslateStart",this)}},_isCameraUpdated:{value:!0},_width:{value:0},_height:{value:0},_boundingBoxSize:{value:null},boundingBoxSize:{serializable:!0,get:function(){return this._boundingBoxSize},set:function(t){this._boundingBoxSize=t,this.elementsBoundingSphereRadius=.5*Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),this._needsComputeVisibleRange=!0}},_elementsBoundingSphereRadius:{value:1},elementsBoundingSphereRadius:{get:function(){return this._elementsBoundingSphereRadius},set:function(t){this._elementsBoundingSphereRadius!==t&&(this._elementsBoundingSphereRadius=t,this.needsDraw=!0,this._needsComputeVisibleRange=!0)}},_halfPI:{value:.5*Math.PI},_doublePI:{value:2*Math.PI},_computeFrustumNormals:{value:function(){var t,e,i,n,a,r,s,o,l,c=.5*this._viewpointFov*this._doublePI/360,h=Math.sin(c),u=Math.cos(c),d=h*this._width/this._height,p=this._viewpointPosition,g=this._viewpointTargetPoint,f=g[0]-p[0],m=g[1]-p[1],v=g[2]-p[2],b=this._halfPI-Math.atan2(v,f),_=f*Math.sin(b)+v*Math.cos(b),L=this._halfPI-Math.atan2(_,m),y=[[u,0,d],[-u,0,d],[0,u,h],[0,-u,h]],C=[];for(l=0;4>l;l++)o=y[l],t=o[0],e=o[1]*Math.cos(-L)-o[2]*Math.sin(-L),i=o[1]*Math.sin(-L)+o[2]*Math.cos(-L),n=t*Math.cos(-b)-i*Math.sin(-b),a=e,r=t*Math.sin(-b)+i*Math.cos(-b),s=1/Math.sqrt(n*n+a*a+r*r),C.push([n*s,a*s,r*s]);return C}},_segmentsIntersection:{value:function(t,e){for(var i,n,a=0,r=0,s=[];t.length>a&&e.length>r;)t[a][0]>=e[r][1]?r++:t[a][1]<=e[r][0]?a++:(i=t[a][0]>=e[r][0]?t[a][0]:e[r][0],n=t[a][1]<=e[r][1]?t[a][1]:e[r][1],s.push([i,n]),t[a][1]<e[r][1]?a++:t[a][1]>e[r][1]?r++:(a++,r++));return s}},_computeVisibleRange:{value:function(t){var e,i,n,a,r=t._knots.length-1,s=this._viewpointPosition,o=s[0],l=s[1],c=s[2],h=this._computeFrustumNormals(),u=[],d=[],p=[],g=this._elementsBoundingSphereRadius,f=t.getScaledKnots(this._sceneScale),m=t.getScaledNextHandlers(this._sceneScale),v=t.getScaledPreviousHandlers(this._sceneScale),b=[];for(n=0;r>n;n++)if(e=h[0],u=t.directedPlaneBezierIntersection(o-e[0]*g,l-e[1]*g,c-e[2]*g,h[0],f[n],m[n],v[n+1],f[n+1]),u.length&&(e=h[1],d=t.directedPlaneBezierIntersection(o-e[0]*g,l-e[1]*g,c-e[2]*g,h[1],f[n],m[n],v[n+1],f[n+1]),d.length&&(i=this._segmentsIntersection(u,d),i.length&&(e=h[2],u=t.directedPlaneBezierIntersection(o-e[0]*g,l-e[1]*g,c-e[2]*g,h[2],f[n],m[n],v[n+1],f[n+1]),i=this._segmentsIntersection(u,i),i.length))))for(e=h[3],u=t.directedPlaneBezierIntersection(o-e[0]*g,l-e[1]*g,c-e[2]*g,h[3],f[n],m[n],v[n+1],f[n+1]),i=this._segmentsIntersection(u,i),a=0;i.length>a;a++)p.push([n,i[a][0],i[a][1]]);var _,L,y,C,w,x,M,z=t._densities;for(n=0;p.length>n;n++)_=z[p[n][0]],L=z[p[n][0]+1],y=p[n][0]?t._densitySummation[p[n][0]-1]:0,C=p[n][1],w=p[n][2],x=.5*(L-_)*C*C+C*_+y,M=.5*(L-_)*w*w+w*_+y,b.push([x,M]);return b}},_determineCssPrefixedProperties:{value:function(){"webkitTransform"in this.element.style?(this._transform="webkitTransform",this._transformCss="-webkit-transform",this._transformPerspective="webkitPerspective"):"MozTransform"in this.element.style?(this._transform="MozTransform",this._transformCss="-moz-transform",this._transformPerspective="MozPerspective"):"msTransform"in this.element.style?(this._transform="msTransform",this._transformCss="-ms-transform",this._transformPerspective="msPerspective"):(this._transform="transform",this._transformPerspective="perspective")}},_isListeningToResize:{value:!0},isListeningToResize:{get:function(){return this._isListeningToResize},set:function(t){var e=!!t;this._isListeningToResize!==e&&(this._isListeningToResize=e,this._isListeningToResize?window.addEventListener("resize",this,!1):window.removeEventListener("resize",this,!1))}},_needsClearVisibleIndexes:{value:!1},handleResize:{value:function(){this._isCameraUpdated=!0,this._needsComputeVisibleRange=!0,this.needsDraw=!0,this._needsClearVisibleIndexes=!0}},enterDocument:{value:function(t){t&&(this._determineCssPrefixedProperties(),this._repetition.addRangeAtPathChangeListener("selectedIterations",this,"_handleSelectedIndexesChange"))}},_updateVisibleIndexes:{value:function(t,e){var i,n,a=this._visibleIndexes,r=a&&!isNaN(a.length)?a.length:0,s=[];for(n=0;r>n;n++)"number"==typeof e[a[n]]?t[e[a[n]]]=null:s.push(n);for(n=i=0;s.length>i&&t.length>n;n++)null!==t[n]&&(a.set(s[i],t[n]),i++);for(i=r;t.length>n;n++)null!==t[n]&&(a.set(i,t[n]),i++)}},_needsComputeVisibleRange:{value:!0},_previousVisibleRanges:{value:null},viewportWidth:{get:function(){return this._width},set:function(t){this._width!==t&&(this._width=t,this._needsComputeVisibleRange=!0)}},viewportHeight:{get:function(){return this._height},set:function(t){this._height!==t&&(this._height=t,this._needsComputeVisibleRange=!0)}},_firstIterationWidth:{value:1},_firstIterationHeight:{value:1},firstIterationWidth:{get:function(){return this._firstIterationWidth},set:function(t){t!==this._firstIterationWidth&&(this._firstIterationWidth=t,this._needsComputeVisibleRange=!0,this._needsClearVisibleIndexes=!0)}},firstIterationHeight:{get:function(){return this._firstIterationHeight},set:function(t){t!==this._firstIterationHeight&&(this._firstIterationHeight=t,this._needsComputeVisibleRange=!0,this._needsClearVisibleIndexes=!0)}},_firstIterationOffsetLeft:{value:0},_firstIterationOffsetTop:{value:0},willDraw:{value:function(t){var e,i,n,a,r,s,o,l,c,h,u,d=[],p={},g=this._paths,f=g.length,m=this.splinePaths;if(this._needsClearVisibleIndexes&&(this._visibleIndexes=[],this._visibleIndexes.set(0,0),this._needsClearVisibleIndexes=!1),this.viewportWidth=this._element.clientWidth,this.viewportHeight=this._element.clientHeight,this.__firstIteration){var v=this.__firstIteration.firstElement.children[0];if(0!==v.offsetWidth&&0!==v.offsetHeight&&(this.firstIterationWidth=v.offsetWidth,this.firstIterationHeight=v.offsetHeight,this._firstIterationOffsetLeft=v.offsetLeft,this._firstIterationOffsetTop=v.offsetTop,!this._boundingBoxSize)){var b=Math.max(Math.abs(this._firstIterationWidth+this._firstIterationOffsetLeft),Math.abs(this._firstIterationOffsetLeft)),_=Math.max(Math.abs(this._firstIterationHeight+this._firstIterationOffsetTop),Math.abs(this._firstIterationOffsetTop));this._elementsBoundingSphereRadius=Math.sqrt(b*b+_*_)}}this._isTransitioningScroll&&(h=(Date.now()-this._scrollingStartTime)/this._scrollingTransitionDurationMiliseconds,u=this._computeCssCubicBezierValue(h,this._scrollingTransitionTimingFunctionBezier),1>h?this.scroll=this._scrollingOrigin+(this._scrollingDestination-this._scrollingOrigin)*u:(this.scroll=this._scrollingDestination,this._isTransitioningScroll=!1,this._needsToCallDidTranslateEndDelegate=!0));var L,y,C,w,x,h=t,c=6,M=this.lastDrawTime?.018*(h-this.lastDrawTime)*this._elasticScrollingSpeed:0,z=1-M/c,S=this._minSlideOffsetIndex,P=this._maxSlideOffsetIndex;if(this.lastDrawTime=h,this._hasElasticScrolling)for(a=0;c>a;a++){for(n=this._draggedSlideIndex-1;n>=S;n--)L=this._getSlideOffset(n),y=this._getSlideOffset(n+1),C=(L-y)*z+y,C>0&&(C=0),this._updateSlideOffset(n,C);for(n=this._draggedSlideIndex+1;P>=n;n++)L=this._getSlideOffset(n),y=this._getSlideOffset(n-1),C=(L-y)*z+y,0>C&&(C=0),this._updateSlideOffset(n,C)}if(m.length){for(o=this._numberOfIterations%f,l=(this._numberOfIterations-o)/f,this._needsComputeVisibleRange&&(this._previousVisibleRanges=[]),r=0;f>r;r++)for(c=l+(o>r?1:0),this._needsComputeVisibleRange?(e=this._computeVisibleRange(m[r]),this._previousVisibleRanges[r]=e,m[r]._computeDensitySummation()):e=this._previousVisibleRanges[r],s=this._scroll-g[r].headOffset,n=0;e.length>n;n++){for(x=c/2,a=x;x>=1;)i=(0|a)*f+r,w=(0|a)+this._getSlideOffset(i)-s,x/=2,w>=e[n][0]?a-=x:a+=x;a=0|a-1,0>a&&(a=0);do i=a*f+r,w=a+this._getSlideOffset(i)-s,w>=e[n][0]&&e[n][1]>=w&&p[i]===void 0&&(p[i]=d.length,d.push(i)),a++;while(e[n][1]>=w&&c>a)}this._needsComputeVisibleRange=!1}this._updateVisibleIndexes(d,p)}},draw:{value:function(){var t,e,i,n,a,r,s,o,l,c,h=this._repetition._drawnIterations.length,u=(this._paths.length,this._visibleIndexes),d=this._viewpointPosition,p=this._viewpointTargetPoint;if(this._isTransitioningScroll&&(this.needsDraw=!0),this._isCameraUpdated){if(this._isCameraEnabled){var g,f,m=.5*Math.tan((90-.5*this._viewpointFov)*this._doublePI/360)*this._height,v=p[0]-d[0],b=p[1]-d[1],_=p[2]-d[2],L=Math.atan2(-v,-_);g=v*-Math.sin(-L)+_*Math.cos(-L),f=Math.atan2(-b,-g),this._element.style[this._transformPerspective]=m+"px",this._cameraElement.style[this._transform]="translate3d(0,0,"+m+"px)rotateX("+f+"rad)rotateY("+-L+"rad)"+"translate3d("+-d[0]+"px,"+-d[1]+"px,"+-d[2]+"px)",this._element.classList.remove("camera-disabled")}else this._element.style[this._transformPerspective]=this._perspective+"px",this._cameraElement.style[this._transform]="translate3d("+(.5*this._width-d[0])+"px, "+(.5*this._height-d[1])+"px,0)",this._element.classList.add("camera-disabled");this._isCameraUpdated=!1}if(this.splinePaths.length)for(t=0;h>t;t++)c=this.offset(u[t]),r=c.pathIndex,e=c.slideTime,o=this._splinePaths[r]._convertSplineTimeToBezierIndexTime(e),n=this._repetition._drawnIterations[t],a=n.cachedFirstElement||n.firstElement,null!==o?(a.children[0]&&(a.classList.contains("selected")?a.children[0].classList.add("selected"):a.children[0].classList.remove("selected"),a.classList.contains("active")?a.children[0].classList.add("active"):a.children[0].classList.remove("active")),s=this._splinePaths[r].getPositionAtIndexTime(o,this._sceneScale),l=this._splinePaths[r].getRotationAtIndexTime(o),i=this._transformCss+":translate3d("+1e-5*(1e5*s[0]>>0)+"px,"+1e-5*(1e5*s[1]>>0)+"px,"+1e-5*(1e5*s[2]>>0)+"px)"+(l[2]?"rotateZ("+1e-5*(1e5*l[2]>>0)+"rad)":"")+(l[1]?"rotateY("+1e-5*(1e5*l[1]>>0)+"rad)":"")+(l[0]?"rotateX("+1e-5*(1e5*l[0]>>0)+"rad)":"")+";"+this._splinePaths[r].getStyleAtIndexTime(o),a.setAttribute("style",i)):a.setAttribute("style",this._transformCss+":scale3d(0,0,0);opacity:0");else for(t=0;h>t;t++)n=this._repetition._drawnIterations[t],a=n.cachedFirstElement||n.firstElement,a.setAttribute("style",this._transformCss+":scale3d(0,0,0);opacity:0");this._slideOffsetsLength&&(this.needsDraw=!0),this._needsToCallDidTranslateEndDelegate&&(this._needsToCallDidTranslateEndDelegate=!1,this.callDelegateMethod("didTranslateEnd",this))}},_updateLength:{value:function(){if(this._paths){var t,e,i,n,a,r,s=this._paths.length,o=0;if(s>0){for(a=this._numberOfIterations%s,n=(this._numberOfIterations-a)/s,r=0;s>r;r++)t=this._paths[r],e=n+(a>r?1:0),i=e-t.tailOffset+t.headOffset-1,i>o&&(o=i);this.length=o}this.needsDraw=!0}}},_numberOfIterations:{value:0},handle_numberOfIterationsChange:{value:function(){this._updateLength()}},content:{get:function(){return this.getPath("contentController.content")},set:function(t){this.contentController=(new r).initWithContent(t)}},contentController:{value:null},isSelectionEnabled:{value:null},selectedIndexes:{serializable:!1,value:null},activeIndexes:{serializable:!1,value:null},observeProperty:{value:function(t,e,i){return"currentIteration"!==t&&"objectAtCurrentIteration"!==t&&"contentAtCurrentIteration"!==t?n(this,t,e,i):(s(t,":iteration.object"),this._repetition?this._repetition.observeProperty(t,e,i):void 0)}},templateDidLoad:{value:function(){var t=this;this._repetition.willDraw=function(){t.needsDraw=!0}}},_length:{value:0},length:{get:function(){return this._length},set:function(t){this._length=0>t?0:t}},_scroll:{value:0},_elasticScrollingRange:{value:20},_hasElasticScrolling:{value:!1},hasElasticScrolling:{get:function(){return this._hasElasticScrolling},set:function(t){this._hasElasticScrolling=t?!0:!1}},_slideOffsets:{value:null},_slideOffsetsLength:{value:0},_maxSlideOffsetIndex:{value:-1},_minSlideOffsetIndex:{value:2e9},_updateSlideOffset:{value:function(t,e){var i=1e-4;t>=0&&(-i>e||e>i?(this._slideOffsets[t]===void 0&&(this._slideOffsetsLength++,this._minSlideOffsetIndex>t&&(this._minSlideOffsetIndex=t),t>this._maxSlideOffsetIndex&&(this._maxSlideOffsetIndex=t)),this._slideOffsets[t]=e):this._removeSlideOffset(t))}},_incrementSlideOffset:{value:function(t,e){this._updateSlideOffset(t,this._getSlideOffset(t)+e)}},_removeSlideOffset:{value:function(t){if(this._slideOffsets[t]!==void 0){var e,i,n;if(delete this._slideOffsets[t],this._slideOffsetsLength--,t===this._minSlideOffsetIndex)for(e=Object.keys(this._slideOffsets),this._minSlideOffsetIndex=2e9,i=0;e.length>i;i++)n=0|e[i],this._minSlideOffsetIndex>n&&(this._minSlideOffsetIndex=n);if(t===this._maxSlideOffsetIndex)for(e===void 0&&(e=Object.keys(this._slideOffsets)),this._maxSlideOffsetIndex=-1,i=0;e.length>i;i++)n=0|e[i],n>this._maxSlideOffsetIndex&&(this._maxSlideOffsetIndex=n)}}},_getSlideOffset:{value:function(t){return this._minSlideOffsetIndex>t?t=this._minSlideOffsetIndex>this._draggedSlideIndex?this._draggedSlideIndex:this._minSlideOffsetIndex:t>this._maxSlideOffsetIndex&&(t=this._maxSlideOffsetIndex<this._draggedSlideIndex?this._draggedSlideIndex:this._maxSlideOffsetIndex),this._slideOffsets[t]!==void 0?this._slideOffsets[t]:0}},scroll:{get:function(){return this._scroll},set:function(t){if(0>t&&(t=0),t>this.length&&(t=this.length),this._hasElasticScrolling&&null!==this._draggedSlideIndex){var e,i,n=this._draggedSlideIndex-this._elasticScrollingRange,a=this._draggedSlideIndex+this._elasticScrollingRange;for(n>this._minSlideOffsetIndex&&(n=this._minSlideOffsetIndex),this._maxSlideOffsetIndex>a&&(a=this._maxSlideOffsetIndex),i=t-this._scroll,0>n&&(n=0),e=n;a>=e;e++)e!==this._draggedSlideIndex?this._incrementSlideOffset(e,i):this._removeSlideOffset(e);this._scroll=t}else this._scroll=t;this.needsDraw=!0}},previousStride:{value:function(){var t=Math.round(this.scroll/this.stride),e=(t-1)*this.stride;this.startScrollingIndexToOffset(0,-e)}},nextStride:{value:function(){var t=Math.round(this.scroll/this.stride),e=(t+1)*this.stride;this.startScrollingIndexToOffset(0,-e)}},_isInputEnabled:{value:!0},isInputEnabled:{get:function(){return this._isInputEnabled},set:function(t){this._isInputEnabled=t?!0:!1}},_draggedSlideIndex:{value:0},draggedSlideIndex:{get:function(){return this._draggedSlideIndex},set:function(t){if(t!==this._draggedSlideIndex){if(null!==t){var e,i=this._getSlideOffset(t),n=this._minSlideOffsetIndex,a=this._maxSlideOffsetIndex;for(this._incrementSlideOffset(this._draggedSlideIndex,-i),e=n;a>=e;e++)e!==this._draggedSlideIndex&&this._incrementSlideOffset(e,-i);this._removeSlideOffset(t),this._scroll-=i,this._flowTranslateComposer._scroll=this._scroll}this._draggedSlideIndex=t,this.needsDraw=!0}}},_elasticScrollingSpeed:{value:1},elasticScrollingSpeed:{get:function(){return this._elasticScrollingSpeed},set:function(t){this._elasticScrollingSpeed=parseFloat(t)}},lastDrawTime:{value:null},offset:{enumerable:!1,value:function(t){var e=this._paths.length,i=t%e,n=Math.floor(t/e)-this._scroll+this._paths[i].headOffset;return{pathIndex:i,slideTime:n+this._getSlideOffset(t)}}},serializeSelf:{value:function(t){t.setAllProperties();for(var e,i=this.originalContent,n=0;e=i[n];n++)e.component&&t.addObject(e.component)}}})}});