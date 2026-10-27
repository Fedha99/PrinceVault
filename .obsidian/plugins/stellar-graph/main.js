"use strict";var Gl=Object.defineProperty;var bm=Object.getOwnPropertyDescriptor;var wm=Object.getOwnPropertyNames;var Em=Object.prototype.hasOwnProperty;var Tm=(i,t)=>{for(var e in t)Gl(i,e,{get:t[e],enumerable:!0})},Am=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of wm(t))!Em.call(i,s)&&s!==e&&Gl(i,s,{get:()=>t[s],enumerable:!(n=bm(t,s))||n.enumerable});return i};var Cm=i=>Am(Gl({},"__esModule",{value:!0}),i);var uM={};Tm(uM,{default:()=>cl});module.exports=Cm(uM);var Se=require("obsidian");var Ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rm=0,nd=1,Pm=2;var ff=1,Im=2,Ti=3,Qi=0,yn=1,Jn=2,pi=0,ar=1,cn=2,id=3,sd=4,Dm=5,bs=100,Lm=101,Nm=102,Um=103,Fm=104,Om=200,Bm=201,zm=202,km=203,yc=204,Mc=205,Vm=206,Hm=207,Gm=208,Wm=209,Xm=210,qm=211,Ym=212,Zm=213,Km=214,Sc=0,bc=1,wc=2,ur=3,Ec=4,Tc=5,Ac=6,Cc=7,pf=0,Jm=1,$m=2,ji=0,Fh=1,Oh=2,Bh=3,zh=4,jm=5,kh=6,Vh=7;var mf=300,dr=301,fr=302,Rc=303,Pc=304,Wa=306,Ic=1e3,Es=1001,Dc=1002,Qn=1003,Qm=1004;var ko=1005;var fi=1006,Wl=1007;var Ts=1008;var Ii=1009,gf=1010,_f=1011,oo=1012,Hh=1013,As=1014,Ai=1015,ni=1016,Gh=1017,Wh=1018,pr=1020,xf=35902,vf=1021,yf=1022,jn=1023,Mf=1024,Sf=1025,lr=1026,mr=1027,bf=1028,Xh=1029,wf=1030,qh=1031;var Yh=1033,ma=33776,ga=33777,_a=33778,xa=33779,Lc=35840,Nc=35841,Uc=35842,Fc=35843,Oc=36196,Bc=37492,zc=37496,kc=37808,Vc=37809,Hc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,Zc=37816,Kc=37817,Jc=37818,$c=37819,jc=37820,Qc=37821,va=36492,th=36494,eh=36495,Ef=36283,nh=36284,ih=36285,sh=36286;var ya=2300,rh=2301,Xl=2302,rd=2400,od=2401,ad=2402;var tg=3200,eg=3201;var ng=0,ig=1,Ki="",Vn="srgb",br="srgb-linear",Xa="linear",ge="srgb";var Hs=7680;var ld=519,sg=512,rg=513,og=514,Tf=515,ag=516,lg=517,cg=518,hg=519,oh=35044;var cd="300 es",Ci=2e3,Ma=2001,Di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=1234567,io=Math.PI/180,ao=180/Math.PI;function Ri(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function an(i,t,e){return Math.max(t,Math.min(e,i))}function Zh(i,t){return(i%t+t)%t}function ug(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dg(i,t,e){return i!==t?(e-i)/(t-i):0}function so(i,t,e){return(1-e)*i+e*t}function fg(i,t,e,n){return so(i,t,1-Math.exp(-e*n))}function pg(i,t=1){return t-Math.abs(Zh(i,t*2)-t)}function mg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _g(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xg(i,t){return i+Math.random()*(t-i)}function vg(i){return i*(.5-Math.random())}function yg(i){i!==void 0&&(hd=i);let t=hd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mg(i){return i*io}function Sg(i){return i*ao}function bg(i){return(i&i-1)===0&&i!==0}function wg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tg(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Af={DEG2RAD:io,RAD2DEG:ao,generateUUID:Ri,clamp:an,euclideanModulo:Zh,mapLinear:ug,inverseLerp:dg,lerp:so,damp:fg,pingpong:pg,smoothstep:mg,smootherstep:gg,randInt:_g,randFloat:xg,randFloatSpread:vg,seededRandom:yg,degToRad:Mg,radToDeg:Sg,isPowerOfTwo:bg,ceilPowerOfTwo:wg,floorPowerOfTwo:Eg,setQuaternionFromProperEuler:Tg,normalize:Me,denormalize:$n},At=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],h=s[6],w=s[1],S=s[4],v=s[7],R=s[2],A=s[5],P=s[8];return r[0]=o*_+a*w+l*R,r[3]=o*p+a*S+l*A,r[6]=o*h+a*v+l*P,r[1]=c*_+u*w+d*R,r[4]=c*p+u*S+d*A,r[7]=c*h+u*v+d*P,r[2]=f*_+m*w+g*R,r[5]=f*p+m*S+g*A,r[8]=f*h+m*v+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=e*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ql.makeScale(t,e)),this}rotate(t){return this.premultiply(ql.makeRotation(-t)),this}translate(t,e){return this.premultiply(ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ql=new $t;function Cf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ag(){let i=Sa("canvas");return i.style.display="block",i}var ud={};function eo(i){i in ud||(ud[i]=!0,console.warn(i))}function Cg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rg(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pg(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:br,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ki?Xa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dd=[.64,.33,.3,.6,.15,.06],fd=[.2126,.7152,.0722],pd=[.3127,.329],md=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[br]:{primaries:dd,whitePoint:pd,transfer:Xa,toXYZ:md,fromXYZ:gd,luminanceCoefficients:fd,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:dd,whitePoint:pd,transfer:ge,toXYZ:md,fromXYZ:gd,luminanceCoefficients:fd,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}});var Gs,ah=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gs===void 0&&(Gs=Sa("canvas")),Gs.width=t.width,Gs.height=t.height;let n=Gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ig=0,ba=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yl(s[o].image)):r.push(Yl(s[o]))}else r=Yl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dg=0,Nn=class i extends Di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Es,s=Es,r=fi,o=Ts,a=jn,l=Ii,c=i.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Ri(),this.name="",this.source=new ba(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ic:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case Dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ic:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case Dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=mf;Nn.DEFAULT_ANISOTROPY=1;var Oe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(m+1)/2,R=(h+1)/2,A=(u+f)/4,P=(d+_)/4,U=(g+p)/4;return S>v&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=P/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=U/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lh=class extends Di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ba(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends lh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wa=class extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ch=class extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-a,h=l*f+c*m+u*g+d*_,w=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){let R=Math.sqrt(S),A=Math.atan2(R,h*w);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}let v=a*w;if(l=l*p+f*v,c=c*p+m*v,u=u*p+g*v,d=d*p+_*v,p===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*m-c*f,t[e+1]=l*g+u*f+c*d-a*m,t[e+2]=c*g+u*m+a*f-l*d,t[e+3]=u*g-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_d.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_d.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zl=new L,_d=new ti,Cs=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),Ho.subVectors(this.max,Yr),Ws.subVectors(t.a,Yr),Xs.subVectors(t.b,Yr),qs.subVectors(t.c,Yr),Gi.subVectors(Xs,Ws),Wi.subVectors(qs,Xs),gs.subVectors(Ws,qs);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-gs.z,gs.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,gs.z,0,-gs.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-gs.y,gs.x,0];return!Kl(e,Ws,Xs,qs,Ho)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,Ws,Xs,qs,Ho))?!1:(Go.crossVectors(Gi,Wi),e=[Go.x,Go.y,Go.z],Kl(e,Ws,Xs,qs,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mi=[new L,new L,new L,new L,new L,new L,new L,new L],qn=new L,Vo=new Cs,Ws=new L,Xs=new L,qs=new L,Gi=new L,Wi=new L,gs=new L,Yr=new L,Ho=new L,Go=new L,_s=new L;function Kl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_s.fromArray(i,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),u=n.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Lg=new Cs,Zr=new L,Jl=new L,Rs=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zr.subVectors(t,this.center);let e=Zr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zr.copy(t.center).add(Jl)),this.expandByPoint(Zr.copy(t.center).sub(Jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new L,$l=new L,Wo=new L,Xi=new L,jl=new L,Xo=new L,Ql=new L,ts=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$l.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub($l);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Wo),a=Xi.dot(this.direction),l=-Xi.dot(Wo),c=Xi.lengthSq(),u=Math.abs(1-o*o),d,f,m,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){let _=1/u;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($l).addScaledVector(Wo,f),m}intersectSphere(t,e){Si.subVectors(t.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,s,r){jl.subVectors(e,t),Xo.subVectors(n,t),Ql.crossVectors(jl,Xo);let o=this.direction.dot(Ql),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,t);let l=a*this.direction.dot(Xo.crossVectors(Xi,Xo));if(l<0)return null;let c=a*this.direction.dot(jl.cross(Xi));if(c<0||l+c>o)return null;let u=-a*Xi.dot(Ql);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(t,e,n,s,r,o,a,l,c,u,d,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,d,f,m,g,_,p)}set(t,e,n,s,r,o,a,l,c,u,d,f,m,g,_,p){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,m=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,m=l*d,g=c*u,_=c*d;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,m=l*d,g=c*u,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,m=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=o*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ng,t,Ug)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),qi.crossVectors(n,Dn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),qi.crossVectors(n,Dn)),qi.normalize(),qo.crossVectors(Dn,qi),s[0]=qi.x,s[4]=qo.x,s[8]=Dn.x,s[1]=qi.y,s[5]=qo.y,s[9]=Dn.y,s[2]=qi.z,s[6]=qo.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],w=n[3],S=n[7],v=n[11],R=n[15],A=s[0],P=s[4],U=s[8],E=s[12],b=s[1],I=s[5],W=s[9],G=s[13],K=s[2],nt=s[6],J=s[10],rt=s[14],Y=s[3],ct=s[7],xt=s[11],Pt=s[15];return r[0]=o*A+a*b+l*K+c*Y,r[4]=o*P+a*I+l*nt+c*ct,r[8]=o*U+a*W+l*J+c*xt,r[12]=o*E+a*G+l*rt+c*Pt,r[1]=u*A+d*b+f*K+m*Y,r[5]=u*P+d*I+f*nt+m*ct,r[9]=u*U+d*W+f*J+m*xt,r[13]=u*E+d*G+f*rt+m*Pt,r[2]=g*A+_*b+p*K+h*Y,r[6]=g*P+_*I+p*nt+h*ct,r[10]=g*U+_*W+p*J+h*xt,r[14]=g*E+_*G+p*rt+h*Pt,r[3]=w*A+S*b+v*K+R*Y,r[7]=w*P+S*I+v*nt+R*ct,r[11]=w*U+S*W+v*J+R*xt,r[15]=w*E+S*G+v*rt+R*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],h=t[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*u-n*c*u)+h*(-s*a*u-e*l*d+e*a*f+s*o*d-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],h=t[15],w=d*p*c-_*f*c+_*l*m-a*p*m-d*l*h+a*f*h,S=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,v=u*_*c-g*d*c+g*a*m-o*_*m-u*a*h+o*d*h,R=g*d*l-u*_*l-g*a*f+o*_*f+u*a*p-o*d*p,A=e*w+n*S+s*v+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=w*P,t[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*h-n*f*h)*P,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*h+n*l*h)*P,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*P,t[4]=S*P,t[5]=(u*p*r-g*f*r+g*s*m-e*p*m-u*s*h+e*f*h)*P,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*h-e*l*h)*P,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*m+e*l*m)*P,t[8]=v*P,t[9]=(g*d*r-u*_*r-g*n*m+e*_*m+u*n*h-e*d*h)*P,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*h+e*a*h)*P,t[11]=(u*a*r-o*d*r-u*n*c+e*d*c+o*n*m-e*a*m)*P,t[12]=R*P,t[13]=(u*_*s-g*d*s+g*n*f-e*_*f-u*n*p+e*d*p)*P,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*P,t[15]=(o*d*s-u*a*s+u*n*l-e*d*l-o*n*f+e*a*f)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,m=r*u,g=r*d,_=o*u,p=o*d,h=a*d,w=l*c,S=l*u,v=l*d,R=n.x,A=n.y,P=n.z;return s[0]=(1-(_+h))*R,s[1]=(m+v)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(m-v)*A,s[5]=(1-(f+h))*A,s[6]=(p+w)*A,s[7]=0,s[8]=(g+S)*P,s[9]=(p-w)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ys.set(s[0],s[1],s[2]).length(),o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);let c=1/r,u=1/o,d=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,e.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ci){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,g;if(a===Ci)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ma)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ci){let l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(o-r),f=(e+t)*c,m=(n+s)*u,g,_;if(a===Ci)g=(o+r)*d,_=-2*d;else if(a===Ma)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ys=new L,Yn=new Ie,Ng=new L(0,0,0),Ug=new L(1,1,1),qi=new L,qo=new L,Dn=new L,xd=new Ie,vd=new ti,Li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vd.setFromEuler(this),this.setFromQuaternion(vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var lo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fg=0,yd=new L,Zs=new ti,bi=new Ie,Yo=new L,Kr=new L,Og=new L,Bg=new ti,Md=new L(1,0,0),Sd=new L(0,1,0),bd=new L(0,0,1),wd={type:"added"},zg={type:"removed"},Ks={type:"childadded",child:null},tc={type:"childremoved",child:null},Mn=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Li,n=new ti,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new $t}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(Md,t)}rotateY(t){return this.rotateOnAxis(Sd,t)}rotateZ(t){return this.rotateOnAxis(bd,t)}translateOnAxis(t,e){return yd.copy(t).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Md,t)}translateY(t){return this.translateOnAxis(Sd,t)}translateZ(t){return this.translateOnAxis(bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yo.copy(t):Yo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Kr,Yo,this.up):bi.lookAt(Yo,Kr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(bi),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zg),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,Og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Bg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Mn.DEFAULT_UP=new L(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new L,wi=new L,ec=new L,Ei=new L,Js=new L,$s=new L,Ed=new L,nc=new L,ic=new L,sc=new L,rc=new Oe,oc=new Oe,ac=new Oe,Ji=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Zn.subVectors(s,e),wi.subVectors(n,e),ec.subVectors(t,e);let o=Zn.dot(Zn),a=Zn.dot(wi),l=Zn.dot(ec),c=wi.dot(wi),u=wi.dot(ec),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(t,e,n,s){return Zn.subVectors(n,e),wi.subVectors(t,e),Zn.cross(wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Zn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Js.subVectors(s,n),$s.subVectors(r,n),nc.subVectors(t,n);let l=Js.dot(nc),c=$s.dot(nc);if(l<=0&&c<=0)return e.copy(n);ic.subVectors(t,s);let u=Js.dot(ic),d=$s.dot(ic);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Js,o);sc.subVectors(t,r);let m=Js.dot(sc),g=$s.dot(sc);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector($s,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Ed.subVectors(r,s),a=(d-u)/(d-u+(m-g)),e.copy(s).addScaledVector(Ed,a);let h=1/(p+_+f);return o=_*h,a=f*h,e.copy(n).addScaledVector(Js,o).addScaledVector($s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Zh(t,1),e=an(e,0,1),n=an(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lc(o,r,t+1/3),this.g=lc(o,r,t),this.b=lc(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Vn){let n=Rf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return le.fromWorkingColorSpace(on.copy(this),t),Math.round(an(on.r*255,0,255))*65536+Math.round(an(on.g*255,0,255))*256+Math.round(an(on.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Vn){le.fromWorkingColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==Vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Zo);let n=so(Yi.h,Zo.h,e),s=so(Yi.s,Zo.s,e),r=so(Yi.l,Zo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Vt;Vt.NAMES=Rf;var kg=0,Ni=class extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Ri(),this.name="",this.blending=ar,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=Mc,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Mc&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ld&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ui=class extends Ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new L,Ko=new At,Ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ko.fromBufferAttribute(this,e),Ko.applyMatrix3(t),this.setXY(e,Ko.x,Ko.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}};var Ea=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ta=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var tn=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vg=0,kn=new Ie,cc=new Mn,js=new L,Ln=new Cs,Jr=new Cs,$e=new L,De=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cf(t)?Ta:Ea)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Ln.min,Jr.min),Ln.expandByPoint($e),$e.addVectors(Ln.max,Jr.max),Ln.expandByPoint($e)):(Ln.expandByPoint(Jr.min),Ln.expandByPoint(Jr.max))}Ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$e.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(t,c),$e.add(js)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new L,l[U]=new L;let c=new L,u=new L,d=new L,f=new At,m=new At,g=new At,_=new L,p=new L;function h(U,E,b){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),u.sub(c),d.sub(c),m.sub(f),g.sub(f);let I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(I),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(I),a[U].add(_),a[E].add(_),a[b].add(_),l[U].add(p),l[E].add(p),l[b].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let U=0,E=w.length;U<E;++U){let b=w[U],I=b.start,W=b.count;for(let G=I,K=I+W;G<K;G+=3)h(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let S=new L,v=new L,R=new L,A=new L;function P(U){R.fromBufferAttribute(s,U),A.copy(R);let E=a[U];S.copy(E),S.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(A,E);let I=v.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,I)}for(let U=0,E=w.length;U<E;++U){let b=w[U],I=b.start,W=b.count;for(let G=I,K=I+W;G<K;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new Ee(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Td=new Ie,xs=new ts,Jo=new Rs,Ad=new L,$o=new L,jo=new L,Qo=new L,hc=new L,ta=new L,Cd=new L,ea=new L,ln=class extends Mn{constructor(t=new De,e=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(hc.fromBufferAttribute(d,t),o?ta.addScaledVector(hc,u):ta.addScaledVector(hc.sub(e),u))}e.add(ta)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),xs.copy(t.ray).recast(t.near),!(Jo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Jo,Ad)===null||xs.origin.distanceToSquared(Ad)>(t.far-t.near)**2))&&(Td.copy(r).invert(),xs.copy(t.ray).applyMatrix4(Td),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],h=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,R=S;v<R;v+=3){let A=a.getX(v),P=a.getX(v+1),U=a.getX(v+2);s=na(this,h,t,n,c,u,d,A,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){let w=a.getX(p),S=a.getX(p+1),v=a.getX(p+2);s=na(this,o,t,n,c,u,d,w,S,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],h=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,R=S;v<R;v+=3){let A=v,P=v+1,U=v+2;s=na(this,h,t,n,c,u,d,A,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){let w=p,S=p+1,v=p+2;s=na(this,o,t,n,c,u,d,w,S,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Hg(i,t,e,n,s,r,o,a){let l;if(t.side===yn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qi,a),l===null)return null;ea.copy(a),ea.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:i}}function na(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,$o),i.getVertexPosition(l,jo),i.getVertexPosition(c,Qo);let u=Hg(i,t,e,n,$o,jo,Qo,Cd);if(u){let d=new L;Ji.getBarycoord(Cd,$o,jo,Qo,d),s&&(u.uv=Ji.getInterpolatedAttribute(s,a,l,c,d,new At)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,a,l,c,d,new At)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,l,c,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Ji.getNormal($o,jo,Qo,f.normal),u.face=f,u.barycoord=d}return u}var co=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(d,2));function g(_,p,h,w,S,v,R,A,P,U,E){let b=v/P,I=R/U,W=v/2,G=R/2,K=A/2,nt=P+1,J=U+1,rt=0,Y=0,ct=new L;for(let xt=0;xt<J;xt++){let Pt=xt*I-G;for(let Kt=0;Kt<nt;Kt++){let de=Kt*b-W;ct[_]=de*w,ct[p]=Pt*S,ct[h]=K,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[p]=0,ct[h]=A>0?1:-1,u.push(ct.x,ct.y,ct.z),d.push(Kt/P),d.push(1-xt/U),rt+=1}}for(let xt=0;xt<U;xt++)for(let Pt=0;Pt<P;Pt++){let Kt=f+Pt+nt*xt,de=f+Pt+nt*(xt+1),$=f+(Pt+1)+nt*(xt+1),st=f+(Pt+1)+nt*xt;l.push(Kt,de,st),l.push(de,$,st),Y+=6}a.addGroup(m,Y,E),m+=Y,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){let t={};for(let e=0;e<i.length;e++){let n=gr(i[e]);for(let s in n)t[s]=n[s]}return t}function Gg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var ns={clone:gr,merge:fn},Wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends Ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=Gg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Aa=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zi=new L,Rd=new At,Pd=new At,pn=class extends Aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,Rd,Pd),e.subVectors(Pd,Rd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qs=-90,tr=1,hh=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Qs,tr,t,e);s.layers=this.layers,this.add(s);let r=new pn(Qs,tr,t,e);r.layers=this.layers,this.add(r);let o=new pn(Qs,tr,t,e);o.layers=this.layers,this.add(o);let a=new pn(Qs,tr,t,e);a.layers=this.layers,this.add(a);let l=new pn(Qs,tr,t,e);l.layers=this.layers,this.add(l);let c=new pn(Qs,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ca=class extends Nn{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uh=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ca(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new co(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:pi});r.uniforms.tEquirect.value=e;let o=new ln(s,r),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=fi),new hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},uc=new L,qg=new L,Yg=new $t,Kn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=uc.subVectors(n,e).cross(qg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(uc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yg.getNormalMatrix(t),s=this.coplanarPoint(uc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new Rs,ia=new L,Ra=class{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],h=s[12],w=s[13],S=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,p-m,v-h).normalize(),n[1].setComponents(l+r,f+c,p+m,v+h).normalize(),n[2].setComponents(l+o,f+u,p+g,v+w).normalize(),n[3].setComponents(l-o,f-u,p-g,v-w).normalize(),n[4].setComponents(l-a,f-d,p-_,v-S).normalize(),e===Ci)n[5].setComponents(l+a,f+d,p+_,v+S).normalize();else if(e===Ma)n[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function If(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zg(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){let g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){let _=d[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _r=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){let w=h*f-o;for(let S=0;S<c;S++){let v=S*d-r;g.push(v,-w,0),_.push(0,0,1),p.push(S/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){let S=w+c*h,v=w+c*(h+1),R=w+1+c*(h+1),A=w+1+c*h;m.push(S,v,A),m.push(v,R,A)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,x0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,u_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,w_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Kg,alphahash_pars_fragment:Jg,alphamap_fragment:$g,alphamap_pars_fragment:jg,alphatest_fragment:Qg,alphatest_pars_fragment:t0,aomap_fragment:e0,aomap_pars_fragment:n0,batching_pars_vertex:i0,batching_vertex:s0,begin_vertex:r0,beginnormal_vertex:o0,bsdfs:a0,iridescence_fragment:l0,bumpmap_pars_fragment:c0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:f0,color_fragment:p0,color_pars_fragment:m0,color_pars_vertex:g0,color_vertex:_0,common:x0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:y0,displacementmap_pars_vertex:M0,displacementmap_vertex:S0,emissivemap_fragment:b0,emissivemap_pars_fragment:w0,colorspace_fragment:E0,colorspace_pars_fragment:T0,envmap_fragment:A0,envmap_common_pars_fragment:C0,envmap_pars_fragment:R0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:V0,envmap_vertex:I0,fog_vertex:D0,fog_pars_vertex:L0,fog_fragment:N0,fog_pars_fragment:U0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:O0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:z0,lights_pars_begin:k0,lights_toon_fragment:H0,lights_toon_pars_fragment:G0,lights_phong_fragment:W0,lights_phong_pars_fragment:X0,lights_physical_fragment:q0,lights_physical_pars_fragment:Y0,lights_fragment_begin:Z0,lights_fragment_maps:K0,lights_fragment_end:J0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:t_,map_fragment:e_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:s_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:o_,morphinstance_vertex:a_,morphcolor_vertex:l_,morphnormal_vertex:c_,morphtarget_pars_vertex:h_,morphtarget_vertex:u_,normal_fragment_begin:d_,normal_fragment_maps:f_,normal_pars_fragment:p_,normal_pars_vertex:m_,normal_vertex:g_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:x_,clearcoat_normal_fragment_maps:v_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:M_,opaque_fragment:S_,packing:b_,premultiplied_alpha_fragment:w_,project_vertex:E_,dithering_fragment:T_,dithering_pars_fragment:A_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:R_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:I_,shadowmap_vertex:D_,shadowmask_pars_fragment:L_,skinbase_vertex:N_,skinning_pars_vertex:U_,skinning_vertex:F_,skinnormal_vertex:O_,specularmap_fragment:B_,specularmap_pars_fragment:z_,tonemapping_fragment:k_,tonemapping_pars_fragment:V_,transmission_fragment:H_,transmission_pars_fragment:G_,uv_pars_fragment:W_,uv_pars_vertex:X_,uv_vertex:q_,worldpos_vertex:Y_,background_vert:Z_,background_frag:K_,backgroundCube_vert:J_,backgroundCube_frag:$_,cube_vert:j_,cube_frag:Q_,depth_vert:tx,depth_frag:ex,distanceRGBA_vert:nx,distanceRGBA_frag:ix,equirect_vert:sx,equirect_frag:rx,linedashed_vert:ox,linedashed_frag:ax,meshbasic_vert:lx,meshbasic_frag:cx,meshlambert_vert:hx,meshlambert_frag:ux,meshmatcap_vert:dx,meshmatcap_frag:fx,meshnormal_vert:px,meshnormal_frag:mx,meshphong_vert:gx,meshphong_frag:_x,meshphysical_vert:xx,meshphysical_frag:vx,meshtoon_vert:yx,meshtoon_frag:Mx,points_vert:Sx,points_frag:bx,shadow_vert:wx,shadow_frag:Ex,sprite_vert:Tx,sprite_frag:Ax},dt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},di={basic:{uniforms:fn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:fn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:fn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:fn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:fn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:fn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:fn([dt.points,dt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:fn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:fn([dt.common,dt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:fn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:fn([dt.sprite,dt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:fn([dt.common,dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:fn([dt.lights,dt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};di.physical={uniforms:fn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var sa={r:0,b:0,g:0},ys=new Li,Cx=new Ie;function Rx(i,t,e,n,s,r,o){let a=new Vt(0),l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function _(w){let S=!1,v=g(w);v===null?h(a,l):v&&v.isColor&&(h(v,1),S=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,S){let v=g(S);v&&(v.isCubeTexture||v.mapping===Wa)?(u===void 0&&(u=new ln(new co(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:gr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ys.copy(S.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(ys)),u.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,(d!==v||f!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ln(new _r(2,2),new Ge({name:"BackgroundMaterial",uniforms:gr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function h(w,S){w.getRGB(sa,Pf(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,h(a,l)},render:_,addToRenderList:p}}function Px(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(b,I,W,G,K){let nt=!1,J=d(G,W,I);r!==J&&(r=J,c(r.object)),nt=m(b,G,W,K),nt&&g(b,G,W,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,v(b,I,W,G),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function d(b,I,W){let G=W.wireframe===!0,K=n[b.id];K===void 0&&(K={},n[b.id]=K);let nt=K[I.id];nt===void 0&&(nt={},K[I.id]=nt);let J=nt[G];return J===void 0&&(J=f(l()),nt[G]=J),J}function f(b){let I=[],W=[],G=[];for(let K=0;K<e;K++)I[K]=0,W[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:G,object:b,attributes:{},index:null}}function m(b,I,W,G){let K=r.attributes,nt=I.attributes,J=0,rt=W.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let xt=K[Y],Pt=nt[Y];if(Pt===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Pt=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Pt=b.instanceColor)),xt===void 0||xt.attribute!==Pt||Pt&&xt.data!==Pt.data)return!0;J++}return r.attributesNum!==J||r.index!==G}function g(b,I,W,G){let K={},nt=I.attributes,J=0,rt=W.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let xt=nt[Y];xt===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor));let Pt={};Pt.attribute=xt,xt&&xt.data&&(Pt.data=xt.data),K[Y]=Pt,J++}r.attributes=K,r.attributesNum=J,r.index=G}function _(){let b=r.newAttributes;for(let I=0,W=b.length;I<W;I++)b[I]=0}function p(b){h(b,0)}function h(b,I){let W=r.newAttributes,G=r.enabledAttributes,K=r.attributeDivisors;W[b]=1,G[b]===0&&(i.enableVertexAttribArray(b),G[b]=1),K[b]!==I&&(i.vertexAttribDivisor(b,I),K[b]=I)}function w(){let b=r.newAttributes,I=r.enabledAttributes;for(let W=0,G=I.length;W<G;W++)I[W]!==b[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function S(b,I,W,G,K,nt,J){J===!0?i.vertexAttribIPointer(b,I,W,K,nt):i.vertexAttribPointer(b,I,W,G,K,nt)}function v(b,I,W,G){_();let K=G.attributes,nt=W.getAttributes(),J=I.defaultAttributeValues;for(let rt in nt){let Y=nt[rt];if(Y.location>=0){let ct=K[rt];if(ct===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor)),ct!==void 0){let xt=ct.normalized,Pt=ct.itemSize,Kt=t.get(ct);if(Kt===void 0)continue;let de=Kt.buffer,$=Kt.type,st=Kt.bytesPerElement,bt=$===i.INT||$===i.UNSIGNED_INT||ct.gpuType===Hh;if(ct.isInterleavedBufferAttribute){let ft=ct.data,Rt=ft.stride,Lt=ct.offset;if(ft.isInstancedInterleavedBuffer){for(let Nt=0;Nt<Y.locationSize;Nt++)h(Y.location+Nt,ft.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Nt=0;Nt<Y.locationSize;Nt++)p(Y.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Nt=0;Nt<Y.locationSize;Nt++)S(Y.location+Nt,Pt/Y.locationSize,$,xt,Rt*st,(Lt+Pt/Y.locationSize*Nt)*st,bt)}else{if(ct.isInstancedBufferAttribute){for(let ft=0;ft<Y.locationSize;ft++)h(Y.location+ft,ct.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ft=0;ft<Y.locationSize;ft++)p(Y.location+ft);i.bindBuffer(i.ARRAY_BUFFER,de);for(let ft=0;ft<Y.locationSize;ft++)S(Y.location+ft,Pt/Y.locationSize,$,xt,Pt*st,Pt/Y.locationSize*ft*st,bt)}}else if(J!==void 0){let xt=J[rt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(Y.location,xt);break;case 3:i.vertexAttrib3fv(Y.location,xt);break;case 4:i.vertexAttrib4fv(Y.location,xt);break;default:i.vertexAttrib1fv(Y.location,xt)}}}}w()}function R(){U();for(let b in n){let I=n[b];for(let W in I){let G=I[W];for(let K in G)u(G[K].object),delete G[K];delete I[W]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let W in I){let G=I[W];for(let K in G)u(G[K].object),delete G[K];delete I[W]}delete n[b.id]}function P(b){for(let I in n){let W=n[I];if(W[b.id]===void 0)continue;let G=W[b.id];for(let K in G)u(G[K].object),delete G[K];delete W[b.id]}}function U(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function Ix(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,n,1)}function l(c,u,d,f){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==jn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let U=P===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ii&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ai&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:R,maxSamples:A}}function Lx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Kn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let w=r?0:n,S=w*4,v=h.clippingState||null;l.value=v,v=u(g,f,S,m);for(let R=0;R!==S;++R)v[R]=e[R];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let h=m+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,v=m;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Nx(i){let t=new WeakMap;function e(o,a){return a===Rc?o.mapping=dr:a===Pc&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rc||a===Pc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new uh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ho=class extends Aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},or=4,Id=[.125,.215,.35,.446,.526,.582],ws=20,dc=new ho,Dd=new Vt,fc=null,pc=0,mc=0,gc=!1,Ss=(1+Math.sqrt(5))/2,er=1/Ss,Ld=[new L(-Ss,er,0),new L(Ss,er,0),new L(-er,0,Ss),new L(er,0,Ss),new L(0,Ss,-er),new L(0,Ss,er),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Pa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fc,pc,mc),this._renderer.xr.enabled=gc,t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:ni,format:jn,colorSpace:br,depthBuffer:!1},s=Nd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ux(r)),this._blurMaterial=Fx(r,t,e)}return s}_compileMaterial(t){let e=new ln(this._lodPlanes[0],t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,n,s){let a=new pn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Dd),u.toneMapping=ji,u.autoClear=!1;let m=new Ui({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new ln(new co,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Dd),_=!0);for(let h=0;h<6;h++){let w=h%3;w===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):w===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));let S=this._cubeSize;ra(s,w*S,h>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===dr||t.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ra(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,dc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ld[(s-r-1)%Ld.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ln(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ws-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ws;p>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ws}`);let h=[],w=0;for(let P=0;P<ws;++P){let U=P/_,E=Math.exp(-U*U/2);h.push(E),P===0?w+=E:P<p&&(w+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/w;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let v=this._sizeLods[s],R=3*v*(s>S-or?s-S+or:0),A=4*(this._cubeSize-v);ra(e,R,A,3*v,2*v),l.setRenderTarget(e),l.render(d,dc)}};function Ux(i){let t=[],e=[],n=[],s=i,r=i-or+1+Id.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-or?l=Id[o-i+or-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,w=new Float32Array(_*g*m),S=new Float32Array(p*g*m),v=new Float32Array(h*g*m);for(let A=0;A<m;A++){let P=A%3*2/3-1,U=A>2?0:-1,E=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];w.set(E,_*g*A),S.set(f,p*g*A);let b=[A,A,A,A,A,A];v.set(b,h*g*A)}let R=new De;R.setAttribute("position",new Ee(w,_)),R.setAttribute("uv",new Ee(S,p)),R.setAttribute("faceIndex",new Ee(v,h)),t.push(R),s>or&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nd(i,t,e){let n=new mn(i,t,e);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fx(i,t,e){let n=new Float32Array(ws),s=new L(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ud(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Fd(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ox(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Rc||l===Pc,u=l===dr||l===fr;if(c||u){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Pa(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Pa(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&eo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zx(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,h=_.length;p<h;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let S=0,v=w.length;S<v;S+=3){let R=w[S+0],A=w[S+1],P=w[S+2];f.push(R,A,A,P,P,R)}}else if(g!==void 0){let w=g.array;_=g.version;for(let S=0,v=w.length/3-1;S<v;S+=3){let R=S+0,A=S+1,P=S+2;f.push(R,A,A,P,P,R)}}else return;let p=new(Cf(f)?Ta:Ea)(f,1);p.version=_;let h=r.get(d);h&&t.remove(h),r.set(d,p)}function u(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function kx(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),e.update(m,n,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];e.update(p,n,1)}function d(f,m,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/o,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=m[w]*_[w];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Vx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hx(i,t,e){let n=new WeakMap,s=new Oe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==d){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],S=0;m===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let v=a.attributes.position.count*S,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*R*4*d),P=new wa(A,v,R,d);P.type=Ai,P.needsUpdate=!0;let U=S*4;for(let b=0;b<d;b++){let I=p[b],W=h[b],G=w[b],K=v*R*4*b;for(let nt=0;nt<I.count;nt++){let J=nt*U;m===!0&&(s.fromBufferAttribute(I,nt),A[K+J+0]=s.x,A[K+J+1]=s.y,A[K+J+2]=s.z,A[K+J+3]=0),g===!0&&(s.fromBufferAttribute(W,nt),A[K+J+4]=s.x,A[K+J+5]=s.y,A[K+J+6]=s.z,A[K+J+7]=0),_===!0&&(s.fromBufferAttribute(G,nt),A[K+J+8]=s.x,A[K+J+9]=s.y,A[K+J+10]=s.z,A[K+J+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new At(v,R)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ia=class extends Nn{constructor(t,e,n,s,r,o,a,l,c,u=lr){if(u!==lr&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===lr&&(n=As),n===void 0&&u===mr&&(n=pr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Df=new Nn,Od=new Ia(1,1),Lf=new wa,Nf=new ch,Uf=new Ca,Bd=[],zd=[],kd=new Float32Array(16),Vd=new Float32Array(9),Hd=new Float32Array(4);function wr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bd[s];if(r===void 0&&(r=new Float32Array(s),Bd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qa(i,t){let e=zd[t];e===void 0&&(e=new Int32Array(t),zd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function Yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function Zx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Hd.set(n),i.uniformMatrix2fv(this.addr,!1,Hd),Xe(e,n)}}function Kx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Vd.set(n),i.uniformMatrix3fv(this.addr,!1,Vd),Xe(e,n)}}function Jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;kd.set(n),i.uniformMatrix4fv(this.addr,!1,kd),Xe(e,n)}}function $x(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function rv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Od.compareFunction=Tf,r=Od):r=Df,e.setTexture2D(t||r,s)}function ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nf,s)}function av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uf,s)}function lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lf,s)}function cv(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return Zx;case 35675:return Kx;case 35676:return Jx;case 5124:case 35670:return $x;case 35667:case 35671:return jx;case 35668:case 35672:return Qx;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(i,t){i.uniform1fv(this.addr,t)}function uv(i,t){let e=wr(t,this.size,2);i.uniform2fv(this.addr,e)}function dv(i,t){let e=wr(t,this.size,3);i.uniform3fv(this.addr,e)}function fv(i,t){let e=wr(t,this.size,4);i.uniform4fv(this.addr,e)}function pv(i,t){let e=wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mv(i,t){let e=wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gv(i,t){let e=wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _v(i,t){i.uniform1iv(this.addr,t)}function xv(i,t){i.uniform2iv(this.addr,t)}function vv(i,t){i.uniform3iv(this.addr,t)}function yv(i,t){i.uniform4iv(this.addr,t)}function Mv(i,t){i.uniform1uiv(this.addr,t)}function Sv(i,t){i.uniform2uiv(this.addr,t)}function bv(i,t){i.uniform3uiv(this.addr,t)}function wv(i,t){i.uniform4uiv(this.addr,t)}function Ev(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Df,r[o])}function Tv(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nf,r[o])}function Av(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uf,r[o])}function Cv(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Lf,r[o])}function Rv(i){switch(i){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return bv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Cv}}var dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cv(e.type)}},fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rv(e.type)}},ph=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},_c=/(\w+)(\])?(\[|\.)?/g;function Gd(i,t){i.seq.push(t),i.map[t.id]=t}function Pv(i,t,e){let n=i.name,s=n.length;for(_c.lastIndex=0;;){let r=_c.exec(n),o=_c.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gd(e,c===void 0?new dh(a,i,t):new fh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ph(a),Gd(e,d)),e=d}}}var hr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Pv(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Wd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Iv=37297,Dv=0;function Lv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Xd=new $t;function Nv(i){le._getMatrix(Xd,le.workingColorSpace,i);let t=`mat3( ${Xd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Xa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Lv(i.getShaderSource(t),o)}else return s}function Uv(i,t){let e=Nv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fv(i,t){let e;switch(t){case Fh:e="Linear";break;case Oh:e="Reinhard";break;case Bh:e="Cineon";break;case zh:e="ACESFilmic";break;case kh:e="AgX";break;case Vh:e="Neutral";break;case jm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oa=new L;function Ov(){le.getLuminanceCoefficients(oa);let i=oa.x.toFixed(4),t=oa.y.toFixed(4),e=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function zv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function no(i){return i!==""}function Yd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(Vv,Gv)}var Hv=new Map;function Gv(i,t){let e=te[t];if(e===void 0){let n=Hv.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mh(e)}var Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(i){return i.replace(Wv,Xv)}function Xv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ff?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Im?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Yv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:t="ENVMAP_TYPE_CUBE";break;case Wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function Kv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pf:t="ENVMAP_BLENDING_MULTIPLY";break;case Jm:t="ENVMAP_BLENDING_MIX";break;case $m:t="ENVMAP_BLENDING_ADD";break}return t}function Jv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $v(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=qv(e),c=Yv(e),u=Zv(e),d=Kv(e),f=Jv(e),m=Bv(e),g=zv(r),_=s.createProgram(),p,h,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(no).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(no).join(`
`),h.length>0&&(h+=`
`)):(p=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),h=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ji?"#define TONE_MAPPING":"",e.toneMapping!==ji?te.tonemapping_pars_fragment:"",e.toneMapping!==ji?Fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Uv("linearToOutputTexel",e.outputColorSpace),Ov(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(no).join(`
`)),o=mh(o),o=Yd(o,e),o=Zd(o,e),a=mh(a),a=Yd(a,e),a=Zd(a,e),o=Kd(o),a=Kd(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=w+p+o,v=w+h+a,R=Wd(s,s.VERTEX_SHADER,S),A=Wd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(R).trim(),K=s.getShaderInfoLog(A).trim(),nt=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,A);else{let rt=qd(s,R,"vertex"),Y=qd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+rt+`
`+Y)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||K==="")&&(J=!1);J&&(I.diagnostics={runnable:nt,programLog:W,vertexShader:{log:G,prefix:p},fragmentShader:{log:K,prefix:h}})}s.deleteShader(R),s.deleteShader(A),U=new hr(s,_),E=kv(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Iv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}var jv=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _h(t),e.set(t,n)),n}},_h=class{constructor(t){this.id=jv++,this.code=t,this.usedTimes=0}};function Qv(i,t,e,n,s,r,o){let a=new lo,l=new gh,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,b,I,W,G){let K=W.fog,nt=G.geometry,J=E.isMeshStandardMaterial?W.environment:null,rt=(E.isMeshStandardMaterial?e:t).get(E.envMap||J),Y=rt&&rt.mapping===Wa?rt.image.height:null,ct=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let xt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Pt=xt!==void 0?xt.length:0,Kt=0;nt.morphAttributes.position!==void 0&&(Kt=1),nt.morphAttributes.normal!==void 0&&(Kt=2),nt.morphAttributes.color!==void 0&&(Kt=3);let de,$,st,bt;if(ct){let he=di[ct];de=he.vertexShader,$=he.fragmentShader}else de=E.vertexShader,$=E.fragmentShader,l.update(E),st=l.getVertexShaderID(E),bt=l.getFragmentShaderID(E);let ft=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Lt=G.isInstancedMesh===!0,Nt=G.isBatchedMesh===!0,Bt=!!E.map,kt=!!E.matcap,Ht=!!rt,F=!!E.aoMap,Ye=!!E.lightMap,Xt=!!E.bumpMap,jt=!!E.normalMap,zt=!!E.displacementMap,xe=!!E.emissiveMap,Ft=!!E.metalnessMap,C=!!E.roughnessMap,y=E.anisotropy>0,D=E.clearcoat>0,Z=E.dispersion>0,et=E.iridescence>0,Q=E.sheen>0,It=E.transmission>0,pt=y&&!!E.anisotropyMap,Mt=D&&!!E.clearcoatMap,ne=D&&!!E.clearcoatNormalMap,it=D&&!!E.clearcoatRoughnessMap,gt=et&&!!E.iridescenceMap,Ut=et&&!!E.iridescenceThicknessMap,Ot=Q&&!!E.sheenColorMap,_t=Q&&!!E.sheenRoughnessMap,ie=!!E.specularMap,qt=!!E.specularColorMap,ce=!!E.specularIntensityMap,N=It&&!!E.transmissionMap,ht=It&&!!E.thicknessMap,q=!!E.gradientMap,tt=!!E.alphaMap,mt=E.alphaTest>0,ut=!!E.alphaHash,Gt=!!E.extensions,me=ji;E.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(me=i.toneMapping);let Le={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:de,fragmentShader:$,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&G._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&G.instanceColor!==null,instancingMorph:Lt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:br,alphaToCoverage:!!E.alphaToCoverage,map:Bt,matcap:kt,envMap:Ht,envMapMode:Ht&&rt.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:Ye,bumpMap:Xt,normalMap:jt,displacementMap:f&&zt,emissiveMap:xe,normalMapObjectSpace:jt&&E.normalMapType===ig,normalMapTangentSpace:jt&&E.normalMapType===ng,metalnessMap:Ft,roughnessMap:C,anisotropy:y,anisotropyMap:pt,clearcoat:D,clearcoatMap:Mt,clearcoatNormalMap:ne,clearcoatRoughnessMap:it,dispersion:Z,iridescence:et,iridescenceMap:gt,iridescenceThicknessMap:Ut,sheen:Q,sheenColorMap:Ot,sheenRoughnessMap:_t,specularMap:ie,specularColorMap:qt,specularIntensityMap:ce,transmission:It,transmissionMap:N,thicknessMap:ht,gradientMap:q,opaque:E.transparent===!1&&E.blending===ar&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:ut,combine:E.combine,mapUv:Bt&&_(E.map.channel),aoMapUv:F&&_(E.aoMap.channel),lightMapUv:Ye&&_(E.lightMap.channel),bumpMapUv:Xt&&_(E.bumpMap.channel),normalMapUv:jt&&_(E.normalMap.channel),displacementMapUv:zt&&_(E.displacementMap.channel),emissiveMapUv:xe&&_(E.emissiveMap.channel),metalnessMapUv:Ft&&_(E.metalnessMap.channel),roughnessMapUv:C&&_(E.roughnessMap.channel),anisotropyMapUv:pt&&_(E.anisotropyMap.channel),clearcoatMapUv:Mt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(E.sheenRoughnessMap.channel),specularMapUv:ie&&_(E.specularMap.channel),specularColorMapUv:qt&&_(E.specularColorMap.channel),specularIntensityMapUv:ce&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:ht&&_(E.thicknessMap.channel),alphaMapUv:tt&&_(E.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(jt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!nt.attributes.uv&&(Bt||tt),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:G.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Kt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Bt&&E.map.isVideoTexture===!0&&le.getTransfer(E.map.colorSpace)===ge,decodeVideoTextureEmissive:xe&&E.emissiveMap.isVideoTexture===!0&&le.getTransfer(E.emissiveMap.colorSpace)===ge,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Jn,flipSided:E.side===yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Gt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&E.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function h(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)b.push(I),b.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(w(b,E),S(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function w(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function S(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){let b=g[E.type],I;if(b){let W=di[b];I=ns.clone(W.uniforms)}else I=E.uniforms;return I}function R(E,b){let I;for(let W=0,G=u.length;W<G;W++){let K=u[W];if(K.cacheKey===b){I=K,++I.usedTimes;break}}return I===void 0&&(I=new $v(i,b,E,r),u.push(I)),I}function A(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:v,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:U}}function ty(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ey(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $d(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,m,g,_,p){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),t++,h}function a(d,f,m,g,_,p){let h=o(d,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(d,f,m,g,_,p){let h=o(d,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||ey),n.length>1&&n.sort(f||$d),s.length>1&&s.sort(f||$d)}function u(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function ny(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new jd,i.set(n,[o])):s>=r.length?(o=new jd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function iy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ry=0;function oy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ay(i){let t=new iy,e=sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Ie,o=new Ie;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,w=0,S=0,v=0,R=0,A=0,P=0;c.sort(oy);for(let E=0,b=c.length;E<b;E++){let I=c[E],W=I.color,G=I.intensity,K=I.distance,nt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=W.r*G,d+=W.g*G,f+=W.b*G;else if(I.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(I.sh.coefficients[J],G);P++}else if(I.isDirectionalLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let rt=I.shadow,Y=e.get(I);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=I.shadow.matrix,w++}n.directional[m]=J,m++}else if(I.isSpotLight){let J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(W).multiplyScalar(G),J.distance=K,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,n.spot[_]=J;let rt=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,rt.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=rt.matrix,I.castShadow){let Y=e.get(I);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=nt,v++}_++}else if(I.isRectAreaLight){let J=t.get(I);J.color.copy(W).multiplyScalar(G),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=J,p++}else if(I.isPointLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){let rt=I.shadow,Y=e.get(I);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,Y.shadowCameraNear=rt.camera.near,Y.shadowCameraFar=rt.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=J,g++}else if(I.isHemisphereLight){let J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(G),J.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[h]=J,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==w||U.numPointShadows!==S||U.numSpotShadows!==v||U.numSpotMaps!==R||U.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,U.directionalLength=m,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=w,U.numPointShadows=S,U.numSpotShadows=v,U.numSpotMaps=R,U.numLightProbes=P,n.version=ry++)}function l(c,u){let d=0,f=0,m=0,g=0,_=0,p=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){let S=c[h];if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(S.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Qd(i){let t=new ay(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ly(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Qd(i),t.set(s,[a])):r>=o.length?(a=new Qd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var xh=class extends Ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vh=class extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uy(i,t,e){let n=new Ra,s=new At,r=new At,o=new Oe,a=new xh({depthPacking:eg}),l=new vh,c={},u=e.maxTextureSize,d={[Qi]:yn,[yn]:Qi,[Jn]:Jn},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:cy,fragmentShader:hy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ln(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ff;let h=this.type;this.render=function(A,P,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(pi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let G=h!==Ti&&this.type===Ti,K=h===Ti&&this.type!==Ti;for(let nt=0,J=A.length;nt<J;nt++){let rt=A[nt],Y=rt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ct=Y.getFrameExtents();if(s.multiply(ct),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ct.x),s.x=r.x*ct.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ct.y),s.y=r.y*ct.y,Y.mapSize.y=r.y)),Y.map===null||G===!0||K===!0){let Pt=this.type!==Ti?{minFilter:Qn,magFilter:Qn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new mn(s.x,s.y,Pt),Y.map.texture.name=rt.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let xt=Y.getViewportCount();for(let Pt=0;Pt<xt;Pt++){let Kt=Y.getViewport(Pt);o.set(r.x*Kt.x,r.y*Kt.y,r.x*Kt.z,r.y*Kt.w),W.viewport(o),Y.updateMatrices(rt,Pt),n=Y.getFrustum(),v(P,U,Y.camera,rt,this.type)}Y.isPointLightShadow!==!0&&this.type===Ti&&w(Y,U),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(E,b,I)};function w(A,P){let U=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,U,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,U,m,_,null)}function S(A,P,U,E){let b=null,I=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)b=I;else if(b=U.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let W=b.uuid,G=P.uuid,K=c[W];K===void 0&&(K={},c[W]=K);let nt=K[G];nt===void 0&&(nt=b.clone(),K[G]=nt,P.addEventListener("dispose",R)),b=nt}if(b.visible=P.visible,b.wireframe=P.wireframe,E===Ti?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:d[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let W=i.properties.get(b);W.light=U}return b}function v(A,P,U,E,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Ti)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let G=t.update(A),K=A.material;if(Array.isArray(K)){let nt=G.groups;for(let J=0,rt=nt.length;J<rt;J++){let Y=nt[J],ct=K[Y.materialIndex];if(ct&&ct.visible){let xt=S(A,ct,E,b);A.onBeforeShadow(i,A,P,U,G,xt,Y),i.renderBufferDirect(U,null,G,xt,A,Y),A.onAfterShadow(i,A,P,U,G,xt,Y)}}}else if(K.visible){let nt=S(A,K,E,b);A.onBeforeShadow(i,A,P,U,G,nt,null),i.renderBufferDirect(U,null,G,nt,A,null),A.onAfterShadow(i,A,P,U,G,nt,null)}}let W=A.children;for(let G=0,K=W.length;G<K;G++)v(W[G],P,U,E,b)}function R(A){A.target.removeEventListener("dispose",R);for(let U in c){let E=c[U],b=A.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var dy={[Sc]:bc,[wc]:Ac,[Ec]:Cc,[ur]:Tc,[bc]:Sc,[Ac]:wc,[Cc]:Ec,[Tc]:ur};function fy(i,t){function e(){let N=!1,ht=new Oe,q=null,tt=new Oe(0,0,0,0);return{setMask:function(mt){q!==mt&&!N&&(i.colorMask(mt,mt,mt,mt),q=mt)},setLocked:function(mt){N=mt},setClear:function(mt,ut,Gt,me,Le){Le===!0&&(mt*=me,ut*=me,Gt*=me),ht.set(mt,ut,Gt,me),tt.equals(ht)===!1&&(i.clearColor(mt,ut,Gt,me),tt.copy(ht))},reset:function(){N=!1,q=null,tt.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,q=null,tt=null,mt=null;return{setReversed:function(ut){if(ht!==ut){let Gt=t.get("EXT_clip_control");ht?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let me=mt;mt=null,this.setClear(me)}ht=ut},getReversed:function(){return ht},setTest:function(ut){ut?ft(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ut){q!==ut&&!N&&(i.depthMask(ut),q=ut)},setFunc:function(ut){if(ht&&(ut=dy[ut]),tt!==ut){switch(ut){case Sc:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case wc:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=ut}},setLocked:function(ut){N=ut},setClear:function(ut){mt!==ut&&(ht&&(ut=1-ut),i.clearDepth(ut),mt=ut)},reset:function(){N=!1,q=null,tt=null,mt=null,ht=!1}}}function s(){let N=!1,ht=null,q=null,tt=null,mt=null,ut=null,Gt=null,me=null,Le=null;return{setTest:function(he){N||(he?ft(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(he){ht!==he&&!N&&(i.stencilMask(he),ht=he)},setFunc:function(he,ze,nn){(q!==he||tt!==ze||mt!==nn)&&(i.stencilFunc(he,ze,nn),q=he,tt=ze,mt=nn)},setOp:function(he,ze,nn){(ut!==he||Gt!==ze||me!==nn)&&(i.stencilOp(he,ze,nn),ut=he,Gt=ze,me=nn)},setLocked:function(he){N=he},setClear:function(he){Le!==he&&(i.clearStencil(he),Le=he)},reset:function(){N=!1,ht=null,q=null,tt=null,mt=null,ut=null,Gt=null,me=null,Le=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,w=null,S=null,v=null,R=null,A=null,P=new Vt(0,0,0),U=0,E=!1,b=null,I=null,W=null,G=null,K=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,rt=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=rt>=2);let ct=null,xt={},Pt=i.getParameter(i.SCISSOR_BOX),Kt=i.getParameter(i.VIEWPORT),de=new Oe().fromArray(Pt),$=new Oe().fromArray(Kt);function st(N,ht,q,tt){let mt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(N,ut),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<q;Gt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ht+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ut}let bt={};bt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(ur),Xt(!1),jt(nd),ft(i.CULL_FACE),F(pi);function ft(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Rt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Lt(N,ht){return d[N]!==ht?(i.bindFramebuffer(N,ht),d[N]=ht,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Nt(N,ht){let q=m,tt=!1;if(N){q=f.get(ht),q===void 0&&(q=[],f.set(ht,q));let mt=N.textures;if(q.length!==mt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Gt=mt.length;ut<Gt;ut++)q[ut]=i.COLOR_ATTACHMENT0+ut;q.length=mt.length,tt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,tt=!0);tt&&i.drawBuffers(q)}function Bt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let kt={[bs]:i.FUNC_ADD,[Lm]:i.FUNC_SUBTRACT,[Nm]:i.FUNC_REVERSE_SUBTRACT};kt[Um]=i.MIN,kt[Fm]=i.MAX;let Ht={[Om]:i.ZERO,[Bm]:i.ONE,[zm]:i.SRC_COLOR,[yc]:i.SRC_ALPHA,[Xm]:i.SRC_ALPHA_SATURATE,[Gm]:i.DST_COLOR,[Vm]:i.DST_ALPHA,[km]:i.ONE_MINUS_SRC_COLOR,[Mc]:i.ONE_MINUS_SRC_ALPHA,[Wm]:i.ONE_MINUS_DST_COLOR,[Hm]:i.ONE_MINUS_DST_ALPHA,[qm]:i.CONSTANT_COLOR,[Ym]:i.ONE_MINUS_CONSTANT_COLOR,[Zm]:i.CONSTANT_ALPHA,[Km]:i.ONE_MINUS_CONSTANT_ALPHA};function F(N,ht,q,tt,mt,ut,Gt,me,Le,he){if(N===pi){_===!0&&(Rt(i.BLEND),_=!1);return}if(_===!1&&(ft(i.BLEND),_=!0),N!==Dm){if(N!==p||he!==E){if((h!==bs||v!==bs)&&(i.blendEquation(i.FUNC_ADD),h=bs,v=bs),he)switch(N){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFunc(i.ONE,i.ONE);break;case id:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case id:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,S=null,R=null,A=null,P.set(0,0,0),U=0,p=N,E=he}return}mt=mt||ht,ut=ut||q,Gt=Gt||tt,(ht!==h||mt!==v)&&(i.blendEquationSeparate(kt[ht],kt[mt]),h=ht,v=mt),(q!==w||tt!==S||ut!==R||Gt!==A)&&(i.blendFuncSeparate(Ht[q],Ht[tt],Ht[ut],Ht[Gt]),w=q,S=tt,R=ut,A=Gt),(me.equals(P)===!1||Le!==U)&&(i.blendColor(me.r,me.g,me.b,Le),P.copy(me),U=Le),p=N,E=!1}function Ye(N,ht){N.side===Jn?Rt(i.CULL_FACE):ft(i.CULL_FACE);let q=N.side===yn;ht&&(q=!q),Xt(q),N.blending===ar&&N.transparent===!1?F(pi):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let tt=N.stencilWrite;a.setTest(tt),tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),xe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function jt(N){N!==Rm?(ft(i.CULL_FACE),N!==I&&(N===nd?i.cullFace(i.BACK):N===Pm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),I=N}function zt(N){N!==W&&(J&&i.lineWidth(N),W=N)}function xe(N,ht,q){N?(ft(i.POLYGON_OFFSET_FILL),(G!==ht||K!==q)&&(i.polygonOffset(ht,q),G=ht,K=q)):Rt(i.POLYGON_OFFSET_FILL)}function Ft(N){N?ft(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+nt-1),ct!==N&&(i.activeTexture(N),ct=N)}function y(N,ht,q){q===void 0&&(ct===null?q=i.TEXTURE0+nt-1:q=ct);let tt=xt[q];tt===void 0&&(tt={type:void 0,texture:void 0},xt[q]=tt),(tt.type!==N||tt.texture!==ht)&&(ct!==q&&(i.activeTexture(q),ct=q),i.bindTexture(N,ht||bt[N]),tt.type=N,tt.texture=ht)}function D(){let N=xt[ct];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(N){de.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function _t(N){$.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$.copy(N))}function ie(N,ht){let q=c.get(ht);q===void 0&&(q=new WeakMap,c.set(ht,q));let tt=q.get(N);tt===void 0&&(tt=i.getUniformBlockIndex(ht,N.name),q.set(N,tt))}function qt(N,ht){let tt=c.get(ht).get(N);l.get(ht)!==tt&&(i.uniformBlockBinding(ht,tt,N.__bindingPointIndex),l.set(ht,tt))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ct=null,xt={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,w=null,S=null,v=null,R=null,A=null,P=new Vt(0,0,0),U=0,E=!1,b=null,I=null,W=null,G=null,K=null,de.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Rt,bindFramebuffer:Lt,drawBuffers:Nt,useProgram:Bt,setBlending:F,setMaterial:Ye,setFlipSided:Xt,setCullFace:jt,setLineWidth:zt,setPolygonOffset:xe,setScissorTest:Ft,activeTexture:C,bindTexture:y,unbindTexture:D,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:gt,texImage3D:Ut,updateUBOMapping:ie,uniformBlockBinding:qt,texStorage2D:ne,texStorage3D:it,texSubImage2D:Q,texSubImage3D:It,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Ot,viewport:_t,reset:ce}}function tf(i,t,e,n){let s=py(n);switch(e){case vf:return i*t;case Mf:return i*t;case Sf:return i*t*2;case bf:return i*t/s.components*s.byteLength;case Xh:return i*t/s.components*s.byteLength;case wf:return i*t*2/s.components*s.byteLength;case qh:return i*t*2/s.components*s.byteLength;case yf:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Yh:return i*t*4/s.components*s.byteLength;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:case Fc:return Math.max(i,16)*Math.max(t,8)/4;case Lc:case Uc:return Math.max(i,8)*Math.max(t,8)/2;case Oc:case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case va:case th:case eh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ef:case nh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ih:case sh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function py(i){switch(i){case Ii:case gf:return{byteLength:1,components:1};case oo:case _f:case ni:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case As:case Hh:case Ai:return{byteLength:4,components:1};case xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function my(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return m?new OffscreenCanvas(C,y):Sa("canvas")}function _(C,y,D){let Z=1,et=Ft(C);if((et.width>D||et.height>D)&&(Z=D/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Q=Math.floor(Z*et.width),It=Math.floor(Z*et.height);d===void 0&&(d=g(Q,It));let pt=y?g(Q,It):d;return pt.width=Q,pt.height=It,pt.getContext("2d").drawImage(C,0,0,Q,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+It+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function p(C){return C.generateMipmaps}function h(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,y,D,Z,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=y;if(y===i.RED&&(D===i.FLOAT&&(Q=i.R32F),D===i.HALF_FLOAT&&(Q=i.R16F),D===i.UNSIGNED_BYTE&&(Q=i.R8)),y===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(Q=i.R8UI),D===i.UNSIGNED_SHORT&&(Q=i.R16UI),D===i.UNSIGNED_INT&&(Q=i.R32UI),D===i.BYTE&&(Q=i.R8I),D===i.SHORT&&(Q=i.R16I),D===i.INT&&(Q=i.R32I)),y===i.RG&&(D===i.FLOAT&&(Q=i.RG32F),D===i.HALF_FLOAT&&(Q=i.RG16F),D===i.UNSIGNED_BYTE&&(Q=i.RG8)),y===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(Q=i.RG8UI),D===i.UNSIGNED_SHORT&&(Q=i.RG16UI),D===i.UNSIGNED_INT&&(Q=i.RG32UI),D===i.BYTE&&(Q=i.RG8I),D===i.SHORT&&(Q=i.RG16I),D===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),D===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),D===i.UNSIGNED_INT&&(Q=i.RGB32UI),D===i.BYTE&&(Q=i.RGB8I),D===i.SHORT&&(Q=i.RGB16I),D===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),D===i.UNSIGNED_INT&&(Q=i.RGBA32UI),D===i.BYTE&&(Q=i.RGBA8I),D===i.SHORT&&(Q=i.RGBA16I),D===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),y===i.RGBA){let It=et?Xa:le.getTransfer(Z);D===i.FLOAT&&(Q=i.RGBA32F),D===i.HALF_FLOAT&&(Q=i.RGBA16F),D===i.UNSIGNED_BYTE&&(Q=It===ge?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(C,y){let D;return C?y===null||y===As||y===pr?D=i.DEPTH24_STENCIL8:y===Ai?D=i.DEPTH32F_STENCIL8:y===oo&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===As||y===pr?D=i.DEPTH_COMPONENT24:y===Ai?D=i.DEPTH_COMPONENT32F:y===oo&&(D=i.DEPTH_COMPONENT16),D}function R(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qn&&C.minFilter!==fi?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),U(y),y.isVideoTexture&&u.delete(y)}function P(C){let y=C.target;y.removeEventListener("dispose",P),b(y)}function U(C){let y=n.get(C);if(y.__webglInit===void 0)return;let D=C.source,Z=f.get(D);if(Z){let et=Z[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(C),Object.keys(Z).length===0&&f.delete(D)}n.remove(C)}function E(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let D=C.source,Z=f.get(D);delete Z[y.__cacheKey],o.memory.textures--}function b(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let et=0;et<y.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let D=C.textures;for(let Z=0,et=D.length;Z<et;Z++){let Q=n.get(D[Z]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(D[Z])}n.remove(C)}let I=0;function W(){I=0}function G(){let C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function K(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function nt(C,y){let D=n.get(C);if(C.isVideoTexture&&zt(C),C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,C,y);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+y)}function J(C,y){let D=n.get(C);if(C.version>0&&D.__version!==C.version){$(D,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+y)}function rt(C,y){let D=n.get(C);if(C.version>0&&D.__version!==C.version){$(D,C,y);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+y)}function Y(C,y){let D=n.get(C);if(C.version>0&&D.__version!==C.version){st(D,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+y)}let ct={[Ic]:i.REPEAT,[Es]:i.CLAMP_TO_EDGE,[Dc]:i.MIRRORED_REPEAT},xt={[Qn]:i.NEAREST,[Qm]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[fi]:i.LINEAR,[Wl]:i.LINEAR_MIPMAP_NEAREST,[Ts]:i.LINEAR_MIPMAP_LINEAR},Pt={[sg]:i.NEVER,[hg]:i.ALWAYS,[rg]:i.LESS,[Tf]:i.LEQUAL,[og]:i.EQUAL,[cg]:i.GEQUAL,[ag]:i.GREATER,[lg]:i.NOTEQUAL};function Kt(C,y){if(y.type===Ai&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===fi||y.magFilter===Wl||y.magFilter===ko||y.magFilter===Ts||y.minFilter===fi||y.minFilter===Wl||y.minFilter===ko||y.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ct[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ct[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ct[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Pt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qn||y.minFilter!==ko&&y.minFilter!==Ts||y.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function de(C,y){let D=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let Z=y.source,et=f.get(Z);et===void 0&&(et={},f.set(Z,et));let Q=K(y);if(Q!==C.__cacheKey){et[Q]===void 0&&(et[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),et[Q].usedTimes++;let It=et[C.__cacheKey];It!==void 0&&(et[C.__cacheKey].usedTimes--,It.usedTimes===0&&E(y)),C.__cacheKey=Q,C.__webglTexture=et[Q].texture}return D}function $(C,y,D){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);let et=de(C,y),Q=y.source;e.bindTexture(Z,C.__webglTexture,i.TEXTURE0+D);let It=n.get(Q);if(Q.version!==It.__version||et===!0){e.activeTexture(i.TEXTURE0+D);let pt=le.getPrimaries(le.workingColorSpace),Mt=y.colorSpace===Ki?null:le.getPrimaries(y.colorSpace),ne=y.colorSpace===Ki||pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let it=_(y.image,!1,s.maxTextureSize);it=xe(y,it);let gt=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type),Ot=S(y.internalFormat,gt,Ut,y.colorSpace,y.isVideoTexture);Kt(Z,y);let _t,ie=y.mipmaps,qt=y.isVideoTexture!==!0,ce=It.__version===void 0||et===!0,N=Q.dataReady,ht=R(y,it);if(y.isDepthTexture)Ot=v(y.format===mr,y.type),ce&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Ot,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Ot,it.width,it.height,0,gt,Ut,null));else if(y.isDataTexture)if(ie.length>0){qt&&ce&&e.texStorage2D(i.TEXTURE_2D,ht,Ot,ie[0].width,ie[0].height);for(let q=0,tt=ie.length;q<tt;q++)_t=ie[q],qt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,q,Ot,_t.width,_t.height,0,gt,Ut,_t.data);y.generateMipmaps=!1}else qt?(ce&&e.texStorage2D(i.TEXTURE_2D,ht,Ot,it.width,it.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,gt,Ut,it.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,it.width,it.height,0,gt,Ut,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ot,ie[0].width,ie[0].height,it.depth);for(let q=0,tt=ie.length;q<tt;q++)if(_t=ie[q],y.format!==jn)if(gt!==null)if(qt){if(N)if(y.layerUpdates.size>0){let mt=tf(_t.width,_t.height,y.format,y.type);for(let ut of y.layerUpdates){let Gt=_t.data.subarray(ut*mt/_t.data.BYTES_PER_ELEMENT,(ut+1)*mt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ut,_t.width,_t.height,1,gt,Gt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,it.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ot,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,it.depth,gt,Ut,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ot,_t.width,_t.height,it.depth,0,gt,Ut,_t.data)}else{qt&&ce&&e.texStorage2D(i.TEXTURE_2D,ht,Ot,ie[0].width,ie[0].height);for(let q=0,tt=ie.length;q<tt;q++)_t=ie[q],y.format!==jn?gt!==null?qt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ot,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,q,Ot,_t.width,_t.height,0,gt,Ut,_t.data)}else if(y.isDataArrayTexture)if(qt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ot,it.width,it.height,it.depth),N)if(y.layerUpdates.size>0){let q=tf(it.width,it.height,y.format,y.type);for(let tt of y.layerUpdates){let mt=it.data.subarray(tt*q/it.data.BYTES_PER_ELEMENT,(tt+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,gt,Ut,mt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Ut,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,it.width,it.height,it.depth,0,gt,Ut,it.data);else if(y.isData3DTexture)qt?(ce&&e.texStorage3D(i.TEXTURE_3D,ht,Ot,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Ut,it.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,it.width,it.height,it.depth,0,gt,Ut,it.data);else if(y.isFramebufferTexture){if(ce)if(qt)e.texStorage2D(i.TEXTURE_2D,ht,Ot,it.width,it.height);else{let q=it.width,tt=it.height;for(let mt=0;mt<ht;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ot,q,tt,0,gt,Ut,null),q>>=1,tt>>=1}}else if(ie.length>0){if(qt&&ce){let q=Ft(ie[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ot,q.width,q.height)}for(let q=0,tt=ie.length;q<tt;q++)_t=ie[q],qt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt,Ut,_t):e.texImage2D(i.TEXTURE_2D,q,Ot,gt,Ut,_t);y.generateMipmaps=!1}else if(qt){if(ce){let q=Ft(it);e.texStorage2D(i.TEXTURE_2D,ht,Ot,q.width,q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ut,it)}else e.texImage2D(i.TEXTURE_2D,0,Ot,gt,Ut,it);p(y)&&h(Z),It.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function st(C,y,D){if(y.image.length!==6)return;let Z=de(C,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+D);let Q=n.get(et);if(et.version!==Q.__version||Z===!0){e.activeTexture(i.TEXTURE0+D);let It=le.getPrimaries(le.workingColorSpace),pt=y.colorSpace===Ki?null:le.getPrimaries(y.colorSpace),Mt=y.colorSpace===Ki||It===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ne=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let tt=0;tt<6;tt++)!ne&&!it?gt[tt]=_(y.image[tt],!0,s.maxCubemapSize):gt[tt]=it?y.image[tt].image:y.image[tt],gt[tt]=xe(y,gt[tt]);let Ut=gt[0],Ot=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),ie=S(y.internalFormat,Ot,_t,y.colorSpace),qt=y.isVideoTexture!==!0,ce=Q.__version===void 0||Z===!0,N=et.dataReady,ht=R(y,Ut);Kt(i.TEXTURE_CUBE_MAP,y);let q;if(ne){qt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,ie,Ut.width,Ut.height);for(let tt=0;tt<6;tt++){q=gt[tt].mipmaps;for(let mt=0;mt<q.length;mt++){let ut=q[mt];y.format!==jn?Ot!==null?qt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,ut.width,ut.height,Ot,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,ie,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,ut.width,ut.height,Ot,_t,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,ie,ut.width,ut.height,0,Ot,_t,ut.data)}}}else{if(q=y.mipmaps,qt&&ce){q.length>0&&ht++;let tt=Ft(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,ie,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,gt[tt].width,gt[tt].height,Ot,_t,gt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ie,gt[tt].width,gt[tt].height,0,Ot,_t,gt[tt].data);for(let mt=0;mt<q.length;mt++){let Gt=q[mt].image[tt].image;qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Gt.width,Gt.height,Ot,_t,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,ie,Gt.width,Gt.height,0,Ot,_t,Gt.data)}}else{qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ot,_t,gt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ie,Ot,_t,gt[tt]);for(let mt=0;mt<q.length;mt++){let ut=q[mt];qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Ot,_t,ut.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,ie,Ot,_t,ut.image[tt])}}}p(y)&&h(i.TEXTURE_CUBE_MAP),Q.__version=et.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function bt(C,y,D,Z,et,Q){let It=r.convert(D.format,D.colorSpace),pt=r.convert(D.type),Mt=S(D.internalFormat,It,pt,D.colorSpace),ne=n.get(y),it=n.get(D);if(it.__renderTarget=y,!ne.__hasExternalTextures){let gt=Math.max(1,y.width>>Q),Ut=Math.max(1,y.height>>Q);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,Mt,gt,Ut,y.depth,0,It,pt,null):e.texImage2D(et,Q,Mt,gt,Ut,0,It,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),jt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,it.__webglTexture,0,Xt(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,it.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,y,D){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let Z=y.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,Q=v(y.stencilBuffer,et),It=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=Xt(y);jt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Q,y.width,y.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,C)}else{let Z=y.textures;for(let et=0;et<Z.length;et++){let Q=Z[et],It=r.convert(Q.format,Q.colorSpace),pt=r.convert(Q.type),Mt=S(Q.internalFormat,It,pt,Q.colorSpace),ne=Xt(y);D&&jt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Mt,y.width,y.height):jt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),nt(y.depthTexture,0);let et=Z.__webglTexture,Q=Xt(y);if(y.depthTexture.format===lr)jt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===mr)jt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Lt(C){let y=n.get(C),D=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=Z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Rt(y.__webglFramebuffer,C)}else if(D){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),ft(y.__webglDepthbuffer[Z],C,!1);else{let et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ft(y.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(C,y,D){let Z=n.get(C);y!==void 0&&bt(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Lt(C)}function Bt(C){let y=C.texture,D=n.get(C),Z=n.get(y);C.addEventListener("dispose",P);let et=C.textures,Q=C.isWebGLCubeRenderTarget===!0,It=et.length>1;if(It||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),Q){D.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)D.__webglFramebuffer[pt][Mt]=i.createFramebuffer()}else D.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)D.__webglFramebuffer[pt]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(It)for(let pt=0,Mt=et.length;pt<Mt;pt++){let ne=n.get(et[pt]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&jt(C)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){let Mt=et[pt];D.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[pt]);let ne=r.convert(Mt.format,Mt.colorSpace),it=r.convert(Mt.type),gt=S(Mt.internalFormat,ne,it,Mt.colorSpace,C.isXRRenderTarget===!0),Ut=Xt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,gt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,D.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(D.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)bt(D.__webglFramebuffer[pt][Mt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else bt(D.__webglFramebuffer[pt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(y)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let pt=0,Mt=et.length;pt<Mt;pt++){let ne=et[pt],it=n.get(ne);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Kt(i.TEXTURE_2D,ne),bt(D.__webglFramebuffer,C,ne,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),p(ne)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Z.__webglTexture),Kt(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)bt(D.__webglFramebuffer[Mt],C,y,i.COLOR_ATTACHMENT0,pt,Mt);else bt(D.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,pt,0);p(y)&&h(pt),e.unbindTexture()}C.depthBuffer&&Lt(C)}function kt(C){let y=C.textures;for(let D=0,Z=y.length;D<Z;D++){let et=y[D];if(p(et)){let Q=w(C),It=n.get(et).__webglTexture;e.bindTexture(Q,It),h(Q),e.unbindTexture()}}}let Ht=[],F=[];function Ye(C){if(C.samples>0){if(jt(C)===!1){let y=C.textures,D=C.width,Z=C.height,et=i.COLOR_BUFFER_BIT,Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(C),pt=y.length>1;if(pt)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Mt]);let ne=n.get(y[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,D,Z,0,0,D,Z,et,i.NEAREST),l===!0&&(Ht.length=0,F.length=0,Ht.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ht.push(Q),F.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Mt]);let ne=n.get(y[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Xt(C){return Math.min(s.maxSamples,C.samples)}function jt(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function zt(C){let y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function xe(C,y){let D=C.colorSpace,Z=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||D!==br&&D!==Ki&&(le.getTransfer(D)===ge?(Z!==jn||et!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}function Ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=nt,this.setTexture2DArray=J,this.setTexture3D=rt,this.setTextureCube=Y,this.rebindTextures=Nt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=jt}function gy(i,t){function e(n,s=Ki){let r,o=le.getTransfer(s);if(n===Ii)return i.UNSIGNED_BYTE;if(n===Gh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gf)return i.BYTE;if(n===_f)return i.SHORT;if(n===oo)return i.UNSIGNED_SHORT;if(n===Hh)return i.INT;if(n===As)return i.UNSIGNED_INT;if(n===Ai)return i.FLOAT;if(n===ni)return i.HALF_FLOAT;if(n===vf)return i.ALPHA;if(n===yf)return i.RGB;if(n===jn)return i.RGBA;if(n===Mf)return i.LUMINANCE;if(n===Sf)return i.LUMINANCE_ALPHA;if(n===lr)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===bf)return i.RED;if(n===Xh)return i.RED_INTEGER;if(n===wf)return i.RG;if(n===qh)return i.RG_INTEGER;if(n===Yh)return i.RGBA_INTEGER;if(n===ma||n===ga||n===_a||n===xa)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lc||n===Nc||n===Uc||n===Fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Bc||n===zc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===Bc)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kc||n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Kc||n===Jc||n===$c||n===jc||n===Qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===th||n===eh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===va)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ef||n===nh||n===ih||n===sh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ih)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var yh=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$i=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},_y={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ge({vertexShader:xy,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ln(new _r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Di{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null,_=new Mh,p=e.getContextAttributes(),h=null,w=null,S=[],v=[],R=new At,A=null,P=new pn;P.viewport=new Oe;let U=new pn;U.viewport=new Oe;let E=[P,U],b=new yh,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=S[$];return st===void 0&&(st=new ro,S[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=S[$];return st===void 0&&(st=new ro,S[$]=st),st.getGripSpace()},this.getHand=function($){let st=S[$];return st===void 0&&(st=new ro,S[$]=st),st.getHandSpace()};function G($){let st=v.indexOf($.inputSource);if(st===-1)return;let bt=S[st];bt!==void 0&&(bt.update($.inputSource,$.frame,c||o),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",nt);for(let $=0;$<S.length;$++){let st=v[$];st!==null&&(v[$]=null,S[$].disconnect(st))}I=null,W=null,_.reset(),t.setRenderTarget(h),m=null,f=null,d=null,s=null,w=null,de.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",K),s.addEventListener("inputsourceschange",nt),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new mn(m.framebufferWidth,m.framebufferHeight,{format:jn,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,bt=null,ft=null;p.depth&&(ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?mr:lr,bt=p.stencil?pr:As);let Rt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new mn(f.textureWidth,f.textureHeight,{format:jn,type:Ii,depthTexture:new Ia(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function nt($){for(let st=0;st<$.removed.length;st++){let bt=$.removed[st],ft=v.indexOf(bt);ft>=0&&(v[ft]=null,S[ft].disconnect(bt))}for(let st=0;st<$.added.length;st++){let bt=$.added[st],ft=v.indexOf(bt);if(ft===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=v.length){v.push(bt),ft=Lt;break}else if(v[Lt]===null){v[Lt]=bt,ft=Lt;break}if(ft===-1)break}let Rt=S[ft];Rt&&Rt.connect(bt)}}let J=new L,rt=new L;function Y($,st,bt){J.setFromMatrixPosition(st.matrixWorld),rt.setFromMatrixPosition(bt.matrixWorld);let ft=J.distanceTo(rt),Rt=st.projectionMatrix.elements,Lt=bt.projectionMatrix.elements,Nt=Rt[14]/(Rt[10]-1),Bt=Rt[14]/(Rt[10]+1),kt=(Rt[9]+1)/Rt[5],Ht=(Rt[9]-1)/Rt[5],F=(Rt[8]-1)/Rt[0],Ye=(Lt[8]+1)/Lt[0],Xt=Nt*F,jt=Nt*Ye,zt=ft/(-F+Ye),xe=zt*-F;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xe),$.translateZ(zt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Rt[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Ft=Nt+zt,C=Bt+zt,y=Xt-xe,D=jt+(ft-xe),Z=kt*Bt/C*Ft,et=Ht*Bt/C*Ft;$.projectionMatrix.makePerspective(y,D,Z,et,Ft,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ct($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let st=$.near,bt=$.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),b.near=U.near=P.near=st,b.far=U.far=P.far=bt,(I!==b.near||W!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,W=b.far),P.layers.mask=$.layers.mask|2,U.layers.mask=$.layers.mask|4,b.layers.mask=P.layers.mask|U.layers.mask;let ft=$.parent,Rt=b.cameras;ct(b,ft);for(let Lt=0;Lt<Rt.length;Lt++)ct(Rt[Lt],ft);Rt.length===2?Y(b,P,U):b.projectionMatrix.copy(P.projectionMatrix),xt($,b,ft)};function xt($,st,bt){bt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ao*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Pt=null;function Kt($,st){if(u=st.getViewerPose(c||o),g=st,u!==null){let bt=u.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let ft=!1;bt.length!==b.cameras.length&&(b.cameras.length=0,ft=!0);for(let Lt=0;Lt<bt.length;Lt++){let Nt=bt[Lt],Bt=null;if(m!==null)Bt=m.getViewport(Nt);else{let Ht=d.getViewSubImage(f,Nt);Bt=Ht.viewport,Lt===0&&(t.setRenderTargetTextures(w,Ht.colorTexture,f.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(w))}let kt=E[Lt];kt===void 0&&(kt=new pn,kt.layers.enable(Lt),kt.viewport=new Oe,E[Lt]=kt),kt.matrix.fromArray(Nt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Nt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Lt===0&&(b.matrix.copy(kt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ft===!0&&b.cameras.push(kt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let Lt=d.getDepthInformation(bt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let bt=0;bt<S.length;bt++){let ft=v[bt],Rt=S[bt];ft!==null&&Rt!==void 0&&Rt.update(ft,st,c||o)}Pt&&Pt($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let de=new If;de.setAnimationLoop(Kt),this.setAnimationLoop=function($){Pt=$},this.dispose=function(){}}},Ms=new Li,yy=new Ie;function My(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Pf(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,w,S,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,v)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,w,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===yn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===yn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let w=t.get(h),S=w.envMap,v=w.envMapRotation;S&&(p.envMap.value=S,Ms.copy(v),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),p.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(Ms)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,w,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*w,p.scale.value=S*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,w){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===yn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){let w=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let v=S.program;n.uniformBlockBinding(w,v)}function c(w,S){let v=s[w.id];v===void 0&&(g(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",p));let R=S.program;n.updateUBOMapping(w,R);let A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function u(w){let S=d();w.__bindingPointIndex=S;let v=i.createBuffer(),R=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=s[w.id],v=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,P=v.length;A<P;A++){let U=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,b=U.length;E<b;E++){let I=U[E];if(m(I,A,E,R)===!0){let W=I.__offset,G=Array.isArray(I.value)?I.value:[I.value],K=0;for(let nt=0;nt<G.length;nt++){let J=G[nt],rt=_(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,W+K,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,K),K+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,v,R){let A=w.value,P=S+"_"+v;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{let U=R[P];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return R[P]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(w){let S=w.uniforms,v=0,R=16;for(let P=0,U=S.length;P<U;P++){let E=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,I=E.length;b<I;b++){let W=E[b],G=Array.isArray(W.value)?W.value:[W.value];for(let K=0,nt=G.length;K<nt;K++){let J=G[K],rt=_(J),Y=v%R,ct=Y%rt.boundary,xt=Y+ct;v+=ct,xt!==0&&R-xt<rt.storage&&(v+=R-xt),W.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=rt.storage}}}let A=v%R;return A>0&&(v+=R-A),w.__size=v,w.__cache={},this}function _(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){let S=w.target;S.removeEventListener("dispose",p);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function h(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}var Da=class{constructor(t={}){let{canvas:e=Ag(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,h=null,w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=ji,this.toneMappingExposure=1;let v=this,R=!1,A=0,P=0,U=null,E=-1,b=null,I=new Oe,W=new Oe,G=null,K=new Vt(0),nt=0,J=e.width,rt=e.height,Y=1,ct=null,xt=null,Pt=new Oe(0,0,J,rt),Kt=new Oe(0,0,J,rt),de=!1,$=new Ra,st=!1,bt=!1,ft=new Ie,Rt=new Ie,Lt=new L,Nt=new Oe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function Ht(){return U===null?Y:1}let F=n;function Ye(M,B){return e.getContext(M,B)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){let B="webgl2";if(F=Ye(B,M),F===null)throw Ye(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xt,jt,zt,xe,Ft,C,y,D,Z,et,Q,It,pt,Mt,ne,it,gt,Ut,Ot,_t,ie,qt,ce,N;function ht(){Xt=new Bx(F),Xt.init(),qt=new gy(F,Xt),jt=new Dx(F,Xt,t,qt),zt=new fy(F,Xt),jt.reverseDepthBuffer&&f&&zt.buffers.depth.setReversed(!0),xe=new Vx(F),Ft=new ty,C=new my(F,Xt,zt,Ft,jt,qt,xe),y=new Nx(v),D=new Ox(v),Z=new Zg(F),ce=new Px(F,Z),et=new zx(F,Z,xe,ce),Q=new Gx(F,et,Z,xe),Ot=new Hx(F,jt,C),it=new Lx(Ft),It=new Qv(v,y,D,Xt,jt,ce,it),pt=new My(v,Ft),Mt=new ny,ne=new ly(Xt),Ut=new Rx(v,y,D,zt,Q,m,l),gt=new uy(v,Q,jt),N=new Sy(F,xe,jt,zt),_t=new Ix(F,Xt,xe),ie=new kx(F,Xt,xe),xe.programs=It.programs,v.capabilities=jt,v.extensions=Xt,v.properties=Ft,v.renderLists=Mt,v.shadowMap=gt,v.state=zt,v.info=xe}ht();let q=new Sh(v,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=Xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(J,rt,!1))},this.getSize=function(M){return M.set(J,rt)},this.setSize=function(M,B,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,rt=B,e.width=Math.floor(M*Y),e.height=Math.floor(B*Y),H===!0&&(e.style.width=M+"px",e.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(J*Y,rt*Y).floor()},this.setDrawingBufferSize=function(M,B,H){J=M,rt=B,Y=H,e.width=Math.floor(M*H),e.height=Math.floor(B*H),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(Pt)},this.setViewport=function(M,B,H,V){M.isVector4?Pt.set(M.x,M.y,M.z,M.w):Pt.set(M,B,H,V),zt.viewport(I.copy(Pt).multiplyScalar(Y).round())},this.getScissor=function(M){return M.copy(Kt)},this.setScissor=function(M,B,H,V){M.isVector4?Kt.set(M.x,M.y,M.z,M.w):Kt.set(M,B,H,V),zt.scissor(W.copy(Kt).multiplyScalar(Y).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){zt.setScissorTest(de=M)},this.setOpaqueSort=function(M){ct=M},this.setTransparentSort=function(M){xt=M},this.getClearColor=function(M){return M.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(M=!0,B=!0,H=!0){let V=0;if(M){let z=!1;if(U!==null){let ot=U.texture.format;z=ot===Yh||ot===qh||ot===Xh}if(z){let ot=U.texture.type,lt=ot===Ii||ot===As||ot===oo||ot===pr||ot===Gh||ot===Wh,wt=Ut.getClearColor(),Et=Ut.getClearAlpha(),Wt=wt.r,Zt=wt.g,Ct=wt.b;lt?(g[0]=Wt,g[1]=Zt,g[2]=Ct,g[3]=Et,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Wt,_[1]=Zt,_[2]=Ct,_[3]=Et,F.clearBufferiv(F.COLOR,0,_))}else V|=F.COLOR_BUFFER_BIT}B&&(V|=F.DEPTH_BUFFER_BIT),H&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Mt.dispose(),ne.dispose(),Ft.dispose(),y.dispose(),D.dispose(),Q.dispose(),ce.dispose(),N.dispose(),It.dispose(),q.dispose(),q.removeEventListener("sessionstart",ss),q.removeEventListener("sessionend",si),wn.stop()};function tt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let M=xe.autoReset,B=gt.enabled,H=gt.autoUpdate,V=gt.needsUpdate,z=gt.type;ht(),xe.autoReset=M,gt.enabled=B,gt.autoUpdate=H,gt.needsUpdate=V,gt.type=z}function ut(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Gt(M){let B=M.target;B.removeEventListener("dispose",Gt),me(B)}function me(M){Le(M),Ft.remove(M)}function Le(M){let B=Ft.get(M).programs;B!==void 0&&(B.forEach(function(H){It.releaseProgram(H)}),M.isShaderMaterial&&It.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,H,V,z,ot){B===null&&(B=Bt);let lt=z.isMesh&&z.matrixWorld.determinant()<0,wt=Dr(M,B,H,V,z);zt.setMaterial(V,lt);let Et=H.index,Wt=1;if(V.wireframe===!0){if(Et=et.getWireframeAttribute(H),Et===void 0)return;Wt=2}let Zt=H.drawRange,Ct=H.attributes.position,Qt=Zt.start*Wt,be=(Zt.start+Zt.count)*Wt;ot!==null&&(Qt=Math.max(Qt,ot.start*Wt),be=Math.min(be,(ot.start+ot.count)*Wt)),Et!==null?(Qt=Math.max(Qt,0),be=Math.min(be,Et.count)):Ct!=null&&(Qt=Math.max(Qt,0),be=Math.min(be,Ct.count));let fe=be-Qt;if(fe<0||fe===1/0)return;ce.setup(z,V,wt,H,Et);let Ze,se=_t;if(Et!==null&&(Ze=Z.get(Et),se=ie,se.setIndex(Ze)),z.isMesh)V.wireframe===!0?(zt.setLineWidth(V.wireframeLinewidth*Ht()),se.setMode(F.LINES)):se.setMode(F.TRIANGLES);else if(z.isLine){let St=V.linewidth;St===void 0&&(St=1),zt.setLineWidth(St*Ht()),z.isLineSegments?se.setMode(F.LINES):z.isLineLoop?se.setMode(F.LINE_LOOP):se.setMode(F.LINE_STRIP)}else z.isPoints?se.setMode(F.POINTS):z.isSprite&&se.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)se.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let St=z._multiDrawStarts,Qe=z._multiDrawCounts,ae=z._multiDrawCount,hn=Et?Z.get(Et).bytesPerElement:1,ri=Ft.get(V).currentProgram.getUniforms();for(let Ke=0;Ke<ae;Ke++)ri.setValue(F,"_gl_DrawID",Ke),se.render(St[Ke]/hn,Qe[Ke])}else if(z.isInstancedMesh)se.renderInstances(Qt,fe,z.count);else if(H.isInstancedBufferGeometry){let St=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Qe=Math.min(H.instanceCount,St);se.renderInstances(Qt,fe,Qe)}else se.render(Qt,fe)};function he(M,B,H){M.transparent===!0&&M.side===Jn&&M.forceSinglePass===!1?(M.side=yn,M.needsUpdate=!0,rs(M,B,H),M.side=Qi,M.needsUpdate=!0,rs(M,B,H),M.side=Jn):rs(M,B,H)}this.compile=function(M,B,H=null){H===null&&(H=M),h=ne.get(H),h.init(B),S.push(h),H.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights();let V=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ot=z.material;if(ot)if(Array.isArray(ot))for(let lt=0;lt<ot.length;lt++){let wt=ot[lt];he(wt,H,z),V.add(wt)}else he(ot,H,z),V.add(ot)}),S.pop(),h=null,V},this.compileAsync=function(M,B,H=null){let V=this.compile(M,B,H);return new Promise(z=>{function ot(){if(V.forEach(function(lt){Ft.get(lt).currentProgram.isReady()&&V.delete(lt)}),V.size===0){z(M);return}setTimeout(ot,10)}Xt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ze=null;function nn(M){ze&&ze(M)}function ss(){wn.stop()}function si(){wn.start()}let wn=new If;wn.setAnimationLoop(nn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(M){ze=M,q.setAnimationLoop(M),M===null?wn.stop():wn.start()},q.addEventListener("sessionstart",ss),q.addEventListener("sessionend",si),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,B,U),h=ne.get(M,S.length),h.init(B),S.push(h),Rt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Rt),bt=this.localClippingEnabled,st=it.init(this.clippingPlanes,bt),p=Mt.get(M,w.length),p.init(),w.push(p),q.enabled===!0&&q.isPresenting===!0){let ot=v.xr.getDepthSensingMesh();ot!==null&&Bi(ot,B,-1/0,v.sortObjects)}Bi(M,B,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ct,xt),kt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,kt&&Ut.addToRenderList(p,M),this.info.render.frame++,st===!0&&it.beginShadows();let H=h.state.shadowsArray;gt.render(H,M,B),st===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=p.opaque,z=p.transmissive;if(h.setupLights(),B.isArrayCamera){let ot=B.cameras;if(z.length>0)for(let lt=0,wt=ot.length;lt<wt;lt++){let Et=ot[lt];Cr(V,z,M,Et)}kt&&Ut.render(M);for(let lt=0,wt=ot.length;lt<wt;lt++){let Et=ot[lt];zi(p,M,Et,Et.viewport)}}else z.length>0&&Cr(V,z,M,B),kt&&Ut.render(M),zi(p,M,B);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(v,M,B),ce.resetDefaultState(),E=-1,b=null,S.pop(),S.length>0?(h=S[S.length-1],st===!0&&it.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Bi(M,B,H,V){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){V&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Rt);let lt=Q.update(M),wt=M.material;wt.visible&&p.push(M,lt,wt,H,Nt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$.intersectsObject(M))){let lt=Q.update(M),wt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Nt.copy(lt.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(Rt)),Array.isArray(wt)){let Et=lt.groups;for(let Wt=0,Zt=Et.length;Wt<Zt;Wt++){let Ct=Et[Wt],Qt=wt[Ct.materialIndex];Qt&&Qt.visible&&p.push(M,lt,Qt,H,Nt.z,Ct)}}else wt.visible&&p.push(M,lt,wt,H,Nt.z,null)}}let ot=M.children;for(let lt=0,wt=ot.length;lt<wt;lt++)Bi(ot[lt],B,H,V)}function zi(M,B,H,V){let z=M.opaque,ot=M.transmissive,lt=M.transparent;h.setupLightsView(H),st===!0&&it.setGlobalState(v.clippingPlanes,H),V&&zt.viewport(I.copy(V)),z.length>0&&On(z,B,H),ot.length>0&&On(ot,B,H),lt.length>0&&On(lt,B,H),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function Cr(M,B,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new mn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?ni:Ii,minFilter:Ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let ot=h.state.transmissionRenderTarget[V.id],lt=V.viewport||I;ot.setSize(lt.z,lt.w);let wt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(K),nt=v.getClearAlpha(),nt<1&&v.setClearColor(16777215,.5),v.clear(),kt&&Ut.render(H);let Et=v.toneMapping;v.toneMapping=ji;let Wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),st===!0&&it.setGlobalState(v.clippingPlanes,V),On(M,H,V),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ct=0,Qt=B.length;Ct<Qt;Ct++){let be=B[Ct],fe=be.object,Ze=be.geometry,se=be.material,St=be.group;if(se.side===Jn&&fe.layers.test(V.layers)){let Qe=se.side;se.side=yn,se.needsUpdate=!0,Rr(fe,H,V,Ze,se,St),se.side=Qe,se.needsUpdate=!0,Zt=!0}}Zt===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}v.setRenderTarget(wt),v.setClearColor(K,nt),Wt!==void 0&&(V.viewport=Wt),v.toneMapping=Et}function On(M,B,H){let V=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ot=M.length;z<ot;z++){let lt=M[z],wt=lt.object,Et=lt.geometry,Wt=V===null?lt.material:V,Zt=lt.group;wt.layers.test(H.layers)&&Rr(wt,B,H,Et,Wt,Zt)}}function Rr(M,B,H,V,z,ot){M.onBeforeRender(v,B,H,V,z,ot),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(v,B,H,V,M,ot),z.transparent===!0&&z.side===Jn&&z.forceSinglePass===!1?(z.side=yn,z.needsUpdate=!0,v.renderBufferDirect(H,B,V,z,M,ot),z.side=Qi,z.needsUpdate=!0,v.renderBufferDirect(H,B,V,z,M,ot),z.side=Jn):v.renderBufferDirect(H,B,V,z,M,ot),M.onAfterRender(v,B,H,V,z,ot)}function rs(M,B,H){B.isScene!==!0&&(B=Bt);let V=Ft.get(M),z=h.state.lights,ot=h.state.shadowsArray,lt=z.state.version,wt=It.getParameters(M,z.state,ot,B,H),Et=It.getProgramCacheKey(wt),Wt=V.programs;V.environment=M.isMeshStandardMaterial?B.environment:null,V.fog=B.fog,V.envMap=(M.isMeshStandardMaterial?D:y).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Wt===void 0&&(M.addEventListener("dispose",Gt),Wt=new Map,V.programs=Wt);let Zt=Wt.get(Et);if(Zt!==void 0){if(V.currentProgram===Zt&&V.lightsStateVersion===lt)return Ir(M,wt),Zt}else wt.uniforms=It.getUniforms(M),M.onBeforeCompile(wt,v),Zt=It.acquireProgram(wt,Et),Wt.set(Et,Zt),V.uniforms=wt.uniforms;let Ct=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=it.uniform),Ir(M,wt),V.needsLights=So(M),V.lightsStateVersion=lt,V.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.directionalShadowMap.value=z.state.directionalShadowMap,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotShadowMap.value=z.state.spotShadowMap,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMap.value=z.state.pointShadowMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Zt,V.uniformsList=null,Zt}function Pr(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=hr.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Ir(M,B){let H=Ft.get(M);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.batchingColor=B.batchingColor,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function Dr(M,B,H,V,z){B.isScene!==!0&&(B=Bt),C.resetTextureUnits();let ot=B.fog,lt=V.isMeshStandardMaterial?B.environment:null,wt=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:br,Et=(V.isMeshStandardMaterial?D:y).get(V.envMap||lt),Wt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Zt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ct=!!H.morphAttributes.position,Qt=!!H.morphAttributes.normal,be=!!H.morphAttributes.color,fe=ji;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(fe=v.toneMapping);let Ze=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Ze!==void 0?Ze.length:0,St=Ft.get(V),Qe=h.state.lights;if(st===!0&&(bt===!0||M!==b)){let xn=M===b&&V.id===E;it.setState(V,M,xn)}let ae=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Qe.state.version||St.outputColorSpace!==wt||z.isBatchedMesh&&St.batching===!1||!z.isBatchedMesh&&St.batching===!0||z.isBatchedMesh&&St.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&St.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&St.instancing===!1||!z.isInstancedMesh&&St.instancing===!0||z.isSkinnedMesh&&St.skinning===!1||!z.isSkinnedMesh&&St.skinning===!0||z.isInstancedMesh&&St.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&St.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&St.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&St.instancingMorph===!1&&z.morphTexture!==null||St.envMap!==Et||V.fog===!0&&St.fog!==ot||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==it.numPlanes||St.numIntersection!==it.numIntersection)||St.vertexAlphas!==Wt||St.vertexTangents!==Zt||St.morphTargets!==Ct||St.morphNormals!==Qt||St.morphColors!==be||St.toneMapping!==fe||St.morphTargetsCount!==se)&&(ae=!0):(ae=!0,St.__version=V.version);let hn=St.currentProgram;ae===!0&&(hn=rs(V,B,z));let ri=!1,Ke=!1,_n=!1,pe=hn.getUniforms(),En=St.uniforms;if(zt.useProgram(hn.program)&&(ri=!0,Ke=!0,_n=!0),V.id!==E&&(E=V.id,Ke=!0),ri||b!==M){zt.buffers.depth.getReversed()?(ft.copy(M.projectionMatrix),Rg(ft),Pg(ft),pe.setValue(F,"projectionMatrix",ft)):pe.setValue(F,"projectionMatrix",M.projectionMatrix),pe.setValue(F,"viewMatrix",M.matrixWorldInverse);let Tn=pe.map.cameraPosition;Tn!==void 0&&Tn.setValue(F,Lt.setFromMatrixPosition(M.matrixWorld)),jt.logarithmicDepthBuffer&&pe.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Ke=!0,_n=!0)}if(z.isSkinnedMesh){pe.setOptional(F,z,"bindMatrix"),pe.setOptional(F,z,"bindMatrixInverse");let xn=z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),pe.setValue(F,"boneTexture",xn.boneTexture,C))}z.isBatchedMesh&&(pe.setOptional(F,z,"batchingTexture"),pe.setValue(F,"batchingTexture",z._matricesTexture,C),pe.setOptional(F,z,"batchingIdTexture"),pe.setValue(F,"batchingIdTexture",z._indirectTexture,C),pe.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&pe.setValue(F,"batchingColorTexture",z._colorsTexture,C));let os=H.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&Ot.update(z,H,hn),(Ke||St.receiveShadow!==z.receiveShadow)&&(St.receiveShadow=z.receiveShadow,pe.setValue(F,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(En.envMap.value=Et,En.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&B.environment!==null&&(En.envMapIntensity.value=B.environmentIntensity),Ke&&(pe.setValue(F,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&hl(En,_n),ot&&V.fog===!0&&pt.refreshFogUniforms(En,ot),pt.refreshMaterialUniforms(En,V,Y,rt,h.state.transmissionRenderTarget[M.id]),hr.upload(F,Pr(St),En,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hr.upload(F,Pr(St),En,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(F,"center",z.center),pe.setValue(F,"modelViewMatrix",z.modelViewMatrix),pe.setValue(F,"normalMatrix",z.normalMatrix),pe.setValue(F,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let xn=V.uniformsGroups;for(let Tn=0,sn=xn.length;Tn<sn;Tn++){let bo=xn[Tn];N.update(bo,hn),N.bind(bo,hn)}}return hn}function hl(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function So(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,B,H){Ft.get(M.texture).__webglTexture=B,Ft.get(M.depthTexture).__webglTexture=H;let V=Ft.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,B){let H=Ft.get(M);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,H=0){U=M,A=B,P=H;let V=!0,z=null,ot=!1,lt=!1;if(M){let Et=Ft.get(M);if(Et.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(Et.__webglFramebuffer===void 0)C.setupRenderTarget(M);else if(Et.__hasExternalTextures)C.rebindTextures(M,Ft.get(M.texture).__webglTexture,Ft.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ct=M.depthTexture;if(Et.__boundDepthTexture!==Ct){if(Ct!==null&&Ft.has(Ct)&&(M.width!==Ct.image.width||M.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(M)}}let Wt=M.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(lt=!0);let Zt=Ft.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Zt[B])?z=Zt[B][H]:z=Zt[B],ot=!0):M.samples>0&&C.useMultisampledRTT(M)===!1?z=Ft.get(M).__webglMultisampledFramebuffer:Array.isArray(Zt)?z=Zt[H]:z=Zt,I.copy(M.viewport),W.copy(M.scissor),G=M.scissorTest}else I.copy(Pt).multiplyScalar(Y).floor(),W.copy(Kt).multiplyScalar(Y).floor(),G=de;if(zt.bindFramebuffer(F.FRAMEBUFFER,z)&&V&&zt.drawBuffers(M,z),zt.viewport(I),zt.scissor(W),zt.setScissorTest(G),ot){let Et=Ft.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,H)}else if(lt){let Et=Ft.get(M.texture),Wt=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.__webglTexture,H||0,Wt)}E=-1},this.readRenderTargetPixels=function(M,B,H,V,z,ot,lt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(wt=wt[lt]),wt){zt.bindFramebuffer(F.FRAMEBUFFER,wt);try{let Et=M.texture,Wt=Et.format,Zt=Et.type;if(!jt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-V&&H>=0&&H<=M.height-z&&F.readPixels(B,H,V,z,qt.convert(Wt),qt.convert(Zt),ot)}finally{let Et=U!==null?Ft.get(U).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,B,H,V,z,ot,lt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(wt=wt[lt]),wt){let Et=M.texture,Wt=Et.format,Zt=Et.type;if(!jt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=M.width-V&&H>=0&&H<=M.height-z){zt.bindFramebuffer(F.FRAMEBUFFER,wt);let Ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ct),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(B,H,V,z,qt.convert(Wt),qt.convert(Zt),0);let Qt=U!==null?Ft.get(U).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,Qt);let be=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Cg(F,be,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(Ct),F.deleteSync(be),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,B=null,H=0){M.isTexture!==!0&&(eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1]);let V=Math.pow(2,-H),z=Math.floor(M.image.width*V),ot=Math.floor(M.image.height*V),lt=B!==null?B.x:0,wt=B!==null?B.y:0;C.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,lt,wt,z,ot),zt.unbindTexture()},this.copyTextureToTexture=function(M,B,H=null,V=null,z=0){M.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],B=arguments[2],z=arguments[3]||0,H=null);let ot,lt,wt,Et,Wt,Zt,Ct,Qt,be,fe=M.isCompressedTexture?M.mipmaps[z]:M.image;H!==null?(ot=H.max.x-H.min.x,lt=H.max.y-H.min.y,wt=H.isBox3?H.max.z-H.min.z:1,Et=H.min.x,Wt=H.min.y,Zt=H.isBox3?H.min.z:0):(ot=fe.width,lt=fe.height,wt=fe.depth||1,Et=0,Wt=0,Zt=0),V!==null?(Ct=V.x,Qt=V.y,be=V.z):(Ct=0,Qt=0,be=0);let Ze=qt.convert(B.format),se=qt.convert(B.type),St;B.isData3DTexture?(C.setTexture3D(B,0),St=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),St=F.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),St=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let Qe=F.getParameter(F.UNPACK_ROW_LENGTH),ae=F.getParameter(F.UNPACK_IMAGE_HEIGHT),hn=F.getParameter(F.UNPACK_SKIP_PIXELS),ri=F.getParameter(F.UNPACK_SKIP_ROWS),Ke=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Et),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt);let _n=M.isDataArrayTexture||M.isData3DTexture,pe=B.isDataArrayTexture||B.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let En=Ft.get(M),os=Ft.get(B),xn=Ft.get(En.__renderTarget),Tn=Ft.get(os.__renderTarget);zt.bindFramebuffer(F.READ_FRAMEBUFFER,xn.__webglFramebuffer),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let sn=0;sn<wt;sn++)_n&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(M).__webglTexture,z,Zt+sn),M.isDepthTexture?(pe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(B).__webglTexture,z,be+sn),F.blitFramebuffer(Et,Wt,ot,lt,Ct,Qt,ot,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):pe?F.copyTexSubImage3D(St,z,Ct,Qt,be+sn,Et,Wt,ot,lt):F.copyTexSubImage2D(St,z,Ct,Qt,be+sn,Et,Wt,ot,lt);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pe?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(St,z,Ct,Qt,be,ot,lt,wt,Ze,se,fe.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(St,z,Ct,Qt,be,ot,lt,wt,Ze,fe.data):F.texSubImage3D(St,z,Ct,Qt,be,ot,lt,wt,Ze,se,fe):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,Ct,Qt,ot,lt,Ze,se,fe.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,Ct,Qt,fe.width,fe.height,Ze,fe.data):F.texSubImage2D(F.TEXTURE_2D,z,Ct,Qt,ot,lt,Ze,se,fe);F.pixelStorei(F.UNPACK_ROW_LENGTH,Qe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae),F.pixelStorei(F.UNPACK_SKIP_PIXELS,hn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ri),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke),z===0&&B.generateMipmaps&&F.generateMipmap(St),zt.unbindTexture()},this.copyTextureToTexture3D=function(M,B,H=null,V=null,z=0){return M.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,M=arguments[2],B=arguments[3],z=arguments[4]||0),eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,B,H,V,z)},this.initRenderTarget=function(M){Ft.get(M).__webglFramebuffer===void 0&&C.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?C.setTextureCube(M,0):M.isData3DTexture?C.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?C.setTexture2DArray(M,0):C.setTexture2D(M,0),zt.unbindTexture()},this.resetState=function(){A=0,P=0,U=null,zt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var La=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},bh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new L,Na=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ps=class extends Ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nr,$r=new L,ir=new L,sr=new L,rr=new At,jr=new At,Ff=new Ie,aa=new L,Qr=new L,la=new L,ef=new At,xc=new At,nf=new At,xr=class extends Mn{constructor(t=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bh(e,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Na(n,3,0,!1)),nr.setAttribute("uv",new Na(n,2,3,!1))}this.geometry=nr,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),Ff.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ca(aa.set(-.5,-.5,0),sr,o,ir,s,r),ca(Qr.set(.5,-.5,0),sr,o,ir,s,r),ca(la.set(.5,.5,0),sr,o,ir,s,r),ef.set(0,0),xc.set(1,0),nf.set(1,1);let a=t.ray.intersectTriangle(aa,Qr,la,!1,$r);if(a===null&&(ca(Qr.set(-.5,.5,0),sr,o,ir,s,r),xc.set(0,1),a=t.ray.intersectTriangle(aa,la,Qr,!1,$r),a===null))return;let l=t.ray.origin.distanceTo($r);l<t.near||l>t.far||e.push({distance:l,point:$r.clone(),uv:Ji.getInterpolation($r,aa,Qr,la,ef,xc,nf,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ca(i,t,e,n,s,r){rr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(jr.x=r*rr.x-s*rr.y,jr.y=s*rr.x+r*rr.y):jr.copy(rr),i.copy(t),i.x+=jr.x,i.y+=jr.y,i.applyMatrix4(Ff)}var Fi=class extends Ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ua=new L,Fa=new L,sf=new Ie,to=new ts,ha=new Rs,vc=new L,rf=new L,vr=class extends Mn{constructor(t=new De,e=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ua.fromBufferAttribute(e,s-1),Fa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ua.distanceTo(Fa);t.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,t.ray.intersectsSphere(ha)===!1)return;sf.copy(s).invert(),to.copy(t.ray).applyMatrix4(sf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){let h=u.getX(_),w=u.getX(_+1),S=ua(this,t,to,l,h,w);S&&e.push(S)}if(this.isLineLoop){let _=u.getX(g-1),p=u.getX(m),h=ua(this,t,to,l,_,p);h&&e.push(h)}}else{let m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){let h=ua(this,t,to,l,_,_+1);h&&e.push(h)}if(this.isLineLoop){let _=ua(this,t,to,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ua(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Ua.fromBufferAttribute(o,s),Fa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ua,Fa,vc,rf)>n)return;vc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(vc);if(!(l<t.near||l>t.far))return{distance:l,point:rf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var of=new L,af=new L,yr=class extends vr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)of.fromBufferAttribute(e,s),af.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+of.distanceTo(af);t.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oa=class extends vr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},es=class extends Ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lf=new Ie,wh=new ts,da=new Rs,fa=new L,Is=class extends Mn{constructor(t=new De,e=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;lf.copy(s).invert(),wh.copy(t.ray).applyMatrix4(lf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){let p=c.getX(g);fa.fromBufferAttribute(d,p),cf(fa,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)fa.fromBufferAttribute(d,g),cf(fa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cf(i,t,e,n,s,r,o){let a=wh.distanceSqToPoint(i);if(a<e){let l=new L;wh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Mr=class extends Nn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ba=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new L,f=new L,m=[],g=[],_=[],p=[];for(let h=0;h<=n;h++){let w=[],S=h/n,v=0;h===0&&o===0?v=.5/e:h===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let A=R/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+v,1-S),w.push(c++)}u.push(w)}for(let h=0;h<n;h++)for(let w=0;w<e;w++){let S=u[h][w+1],v=u[h][w],R=u[h+1][w],A=u[h+1][w+1];(h!==0||o>0)&&m.push(S,v,A),(h!==n-1||l<Math.PI)&&m.push(v,R,A)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var za=class extends Ge{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};function pa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function by(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Sr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eh=class extends Sr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rd,endingEnd:rd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case od:r=t,a=2*e-n;break;case ad:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case od:o=t,l=2*n-e;break;case ad:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,h=-f*p+2*f*_-f*g,w=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-m)*p+(1.5+m)*_+.5*g,v=m*p-m*_;for(let R=0;R!==a;++R)r[R]=h*o[u+R]+w*o[c+R]+S*o[l+R]+v*o[d+R];return r}},Th=class extends Sr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},Ah=class extends Sr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ei=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pa(e,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pa(t.times,Array),values:pa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ah(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Eh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ya:e=this.InterpolantFactoryMethodDiscrete;break;case rh:e=this.InterpolantFactoryMethodLinear;break;case Xl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return rh;case this.InterpolantFactoryMethodSmooth:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&by(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=rh;var Ds=class extends ei{constructor(t,e,n){super(t,e,n)}};Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ya;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ch=class extends ei{};Ch.prototype.ValueTypeName="color";var Rh=class extends ei{};Rh.prototype.ValueTypeName="number";var Ph=class extends Sr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)ti.slerpFlat(r,0,o,c-a,o,c,l);return r}},ka=class extends ei{InterpolantFactoryMethodLinear(t){return new Ph(this.times,this.values,this.getValueSize(),t)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends ei{constructor(t,e,n){super(t,e,n)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ya;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Ih=class extends ei{};Ih.prototype.ValueTypeName="vector";var Dh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},wy=new Dh,Lh=class{constructor(t){this.manager=t!==void 0?t:wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Lh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Va=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=hf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function hf(){return performance.now()}var Jh="\\[\\]\\.:\\/",Ey=new RegExp("["+Jh+"]","g"),$h="[^"+Jh+"]",Ty="[^"+Jh.replace("\\.","")+"]",Ay=/((?:WC+[\/:])*)/.source.replace("WC",$h),Cy=/(WCOD+)?/.source.replace("WCOD",Ty),Ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),Py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),Iy=new RegExp("^"+Ay+Cy+Ry+Py+"$"),Dy=["material","materials","bones","map"],Nh=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ey,"")}static parseTrackName(t){let e=Iy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Nh;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fM=new Float32Array(1);var uf=new Ie,Ha=class{constructor(t,e,n=0,s=1/0){this.ray=new ts(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(t,e=!0,n=[]){return Uh(t,this,n,e),n.sort(df),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Uh(t[s],this,n,e);return n.sort(df),n}};function df(i,t){return i.distance-t.distance}function Uh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Uh(r[o],t,e,!0)}}var uo=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(an(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ga=class extends Di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Of={type:"change"},Qh={type:"start"},zf={type:"end"},Ya=new ts,Bf=new Kn,Ny=Math.cos(70*Af.DEG2RAD),qe=new L,Sn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jh=1e-6,Za=class extends Ga{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new ti,this._lastTargetPosition=new L,this._quat=new ti().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uo,this._sphericalDelta=new uo,this._scale=1,this._panOffset=new L,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new L,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fy.bind(this),this._onPointerDown=Uy.bind(this),this._onPointerUp=Oy.bind(this),this._onContextMenu=Wy.bind(this),this._onMouseWheel=ky.bind(this),this._onKeyDown=Vy.bind(this),this._onTouchStart=Hy.bind(this),this._onTouchMove=Gy.bind(this),this._onMouseDown=By.bind(this),this._onMouseMove=zy.bind(this),this._interceptControlDown=Xy.bind(this),this._interceptControlUp=qy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Of),this.update(),this.state=Te.NONE}update(t=null){let e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Sn:n>Math.PI&&(n-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=qe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ya.origin.copy(this.object.position),Ya.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ya.direction))<Ny?this.object.lookAt(this.target):(Bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ya.intersectPlane(Bf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jh||this._lastTargetPosition.distanceToSquared(this.target)>jh?(this.dispatchEvent(Of),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Sn/60*this.autoRotateSpeed*t:Sn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qe.copy(s).sub(this.target);let r=qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Uy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Fy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Oy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zf),this.state=Te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function By(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case Ns.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case Ns.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Qh)}function zy(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ky(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(Qh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zf))}function Vy(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Hy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case Us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case Us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Qh)}function Gy(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function Wy(i){this.enabled!==!1&&i.preventDefault()}function Xy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ka={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Yy=new ho(-1,1,1,-1,0,1),tu=class extends De{constructor(){super(),this.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tn([0,2,0,0,2,0],2))}},Zy=new tu,is=class{constructor(t){this._mesh=new ln(Zy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Yy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Er=class extends Un{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ns.clone(t.uniforms),this.material=new Ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new is(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var fo=class extends Un{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ja=class extends Un{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var $a=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new At);this._width=n.width,this._height=n.height,e=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Er(Ka),this.copyPass.material.blending=pi,this.clock=new Va}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fo!==void 0&&(o instanceof fo?n=!0:o instanceof Ja&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ja=class extends Un{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Vt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var kf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Tr=class i extends Un{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new Vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,o,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new mn(r,o,{type:ni});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new mn(r,o,{type:ni});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=kf;this.highPassUniforms=ns.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new At(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ka;this.copyUniforms=ns.clone(u.uniforms),this.blendMaterial=new Ge({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:cn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Vt,this.oldClearAlpha=1,this.basic=new Ui,this.fsQuad=new is(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Tr.BlurDirectionX=new At(1,0);Tr.BlurDirectionY=new At(0,1);var Vf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Qa=class extends Un{constructor(){super();let t=Vf;this.uniforms=ns.clone(t.uniforms),this.material=new za({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new is(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function eu(i,t,e){var n,s=1;i==null&&(i=0),t==null&&(t=0),e==null&&(e=0);function r(){var o,a=n.length,l,c=0,u=0,d=0;for(o=0;o<a;++o)l=n[o],c+=l.x||0,u+=l.y||0,d+=l.z||0;for(c=(c/a-i)*s,u=(u/a-t)*s,d=(d/a-e)*s,o=0;o<a;++o)l=n[o],c&&(l.x-=c),u&&(l.y-=u),d&&(l.z-=d)}return r.initialize=function(o){n=o},r.x=function(o){return arguments.length?(i=+o,r):i},r.y=function(o){return arguments.length?(t=+o,r):t},r.z=function(o){return arguments.length?(e=+o,r):e},r.strength=function(o){return arguments.length?(s=+o,r):s},r}function Hf(i){let t=+this._x.call(null,i);return Gf(this.cover(t),t,i)}function Gf(i,t,e){if(isNaN(t))return i;var n,s=i._root,r={data:e},o=i._x0,a=i._x1,l,c,u,d,f;if(!s)return i._root=r,i;for(;s.length;)if((u=t>=(l=(o+a)/2))?o=l:a=l,n=s,!(s=s[d=+u]))return n[d]=r,i;if(c=+i._x.call(null,s.data),t===c)return r.next=s,n?n[d]=r:i._root=r,i;do n=n?n[d]=new Array(2):i._root=new Array(2),(u=t>=(l=(o+a)/2))?o=l:a=l;while((d=+u)==(f=+(c>=l)));return n[f]=s,n[d]=r,i}function Wf(i){Array.isArray(i)||(i=Array.from(i));let t=i.length,e=new Float64Array(t),n=1/0,s=-1/0;for(let r=0,o;r<t;++r)isNaN(o=+this._x.call(null,i[r]))||(e[r]=o,o<n&&(n=o),o>s&&(s=o));if(n>s)return this;this.cover(n).cover(s);for(let r=0;r<t;++r)Gf(this,e[r],i[r]);return this}function Xf(i){if(isNaN(i=+i))return this;var t=this._x0,e=this._x1;if(isNaN(t))e=(t=Math.floor(i))+1;else{for(var n=e-t||1,s=this._root,r,o;t>i||i>=e;)switch(o=+(i<t),r=new Array(2),r[o]=s,s=r,n*=2,o){case 0:e=t+n;break;case 1:t=e-n;break}this._root&&this._root.length&&(this._root=s)}return this._x0=t,this._x1=e,this}function qf(){var i=[];return this.visit(function(t){if(!t.length)do i.push(t.data);while(t=t.next)}),i}function Yf(i){return arguments.length?this.cover(+i[0][0]).cover(+i[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Hn(i,t,e){this.node=i,this.x0=t,this.x1=e}function Zf(i,t){var e,n=this._x0,s,r,o=this._x1,a=[],l=this._root,c,u;for(l&&a.push(new Hn(l,n,o)),t==null?t=1/0:(n=i-t,o=i+t);c=a.pop();)if(!(!(l=c.node)||(s=c.x0)>o||(r=c.x1)<n))if(l.length){var d=(s+r)/2;a.push(new Hn(l[1],d,r),new Hn(l[0],s,d)),(u=+(i>=d))&&(c=a[a.length-1],a[a.length-1]=a[a.length-1-u],a[a.length-1-u]=c)}else{var f=Math.abs(i-+this._x.call(null,l.data));f<t&&(t=f,n=i-f,o=i+f,e=l.data)}return e}function Kf(i){if(isNaN(l=+this._x.call(null,i)))return this;var t,e=this._root,n,s,r,o=this._x0,a=this._x1,l,c,u,d,f;if(!e)return this;if(e.length)for(;;){if((u=l>=(c=(o+a)/2))?o=c:a=c,t=e,!(e=e[d=+u]))return this;if(!e.length)break;t[d+1&1]&&(n=t,f=d)}for(;e.data!==i;)if(s=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,s?(r?s.next=r:delete s.next,this):t?(r?t[d]=r:delete t[d],(e=t[0]||t[1])&&e===(t[1]||t[0])&&!e.length&&(n?n[f]=e:this._root=e),this):(this._root=r,this)}function Jf(i){for(var t=0,e=i.length;t<e;++t)this.remove(i[t]);return this}function $f(){return this._root}function jf(){var i=0;return this.visit(function(t){if(!t.length)do++i;while(t=t.next)}),i}function Qf(i){var t=[],e,n=this._root,s,r,o;for(n&&t.push(new Hn(n,this._x0,this._x1));e=t.pop();)if(!i(n=e.node,r=e.x0,o=e.x1)&&n.length){var a=(r+o)/2;(s=n[1])&&t.push(new Hn(s,a,o)),(s=n[0])&&t.push(new Hn(s,r,a))}return this}function tp(i){var t=[],e=[],n;for(this._root&&t.push(new Hn(this._root,this._x0,this._x1));n=t.pop();){var s=n.node;if(s.length){var r,o=n.x0,a=n.x1,l=(o+a)/2;(r=s[0])&&t.push(new Hn(r,o,l)),(r=s[1])&&t.push(new Hn(r,l,a))}e.push(n)}for(;n=e.pop();)i(n.node,n.x0,n.x1);return this}function ep(i){return i[0]}function np(i){return arguments.length?(this._x=i,this):this._x}function po(i,t){var e=new nu(t??ep,NaN,NaN);return i==null?e:e.addAll(i)}function nu(i,t,e){this._x=i,this._x0=t,this._x1=e,this._root=void 0}function ip(i){for(var t={data:i.data},e=t;i=i.next;)e=e.next={data:i.data};return t}var bn=po.prototype=nu.prototype;bn.copy=function(){var i=new nu(this._x,this._x0,this._x1),t=this._root,e,n;if(!t)return i;if(!t.length)return i._root=ip(t),i;for(e=[{source:t,target:i._root=new Array(2)}];t=e.pop();)for(var s=0;s<2;++s)(n=t.source[s])&&(n.length?e.push({source:n,target:t.target[s]=new Array(2)}):t.target[s]=ip(n));return i};bn.add=Hf;bn.addAll=Wf;bn.cover=Xf;bn.data=qf;bn.extent=Yf;bn.find=Zf;bn.remove=Kf;bn.removeAll=Jf;bn.root=$f;bn.size=jf;bn.visit=Qf;bn.visitAfter=tp;bn.x=np;function sp(i){let t=+this._x.call(null,i),e=+this._y.call(null,i);return rp(this.cover(t,e),t,e,i)}function rp(i,t,e,n){if(isNaN(t)||isNaN(e))return i;var s,r=i._root,o={data:n},a=i._x0,l=i._y0,c=i._x1,u=i._y1,d,f,m,g,_,p,h,w;if(!r)return i._root=o,i;for(;r.length;)if((_=t>=(d=(a+c)/2))?a=d:c=d,(p=e>=(f=(l+u)/2))?l=f:u=f,s=r,!(r=r[h=p<<1|_]))return s[h]=o,i;if(m=+i._x.call(null,r.data),g=+i._y.call(null,r.data),t===m&&e===g)return o.next=r,s?s[h]=o:i._root=o,i;do s=s?s[h]=new Array(4):i._root=new Array(4),(_=t>=(d=(a+c)/2))?a=d:c=d,(p=e>=(f=(l+u)/2))?l=f:u=f;while((h=p<<1|_)===(w=(g>=f)<<1|m>=d));return s[w]=r,s[h]=o,i}function op(i){var t,e,n=i.length,s,r,o=new Array(n),a=new Array(n),l=1/0,c=1/0,u=-1/0,d=-1/0;for(e=0;e<n;++e)isNaN(s=+this._x.call(null,t=i[e]))||isNaN(r=+this._y.call(null,t))||(o[e]=s,a[e]=r,s<l&&(l=s),s>u&&(u=s),r<c&&(c=r),r>d&&(d=r));if(l>u||c>d)return this;for(this.cover(l,c).cover(u,d),e=0;e<n;++e)rp(this,o[e],a[e],i[e]);return this}function ap(i,t){if(isNaN(i=+i)||isNaN(t=+t))return this;var e=this._x0,n=this._y0,s=this._x1,r=this._y1;if(isNaN(e))s=(e=Math.floor(i))+1,r=(n=Math.floor(t))+1;else{for(var o=s-e||1,a=this._root,l,c;e>i||i>=s||n>t||t>=r;)switch(c=(t<n)<<1|i<e,l=new Array(4),l[c]=a,a=l,o*=2,c){case 0:s=e+o,r=n+o;break;case 1:e=s-o,r=n+o;break;case 2:s=e+o,n=r-o;break;case 3:e=s-o,n=r-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=e,this._y0=n,this._x1=s,this._y1=r,this}function lp(){var i=[];return this.visit(function(t){if(!t.length)do i.push(t.data);while(t=t.next)}),i}function cp(i){return arguments.length?this.cover(+i[0][0],+i[0][1]).cover(+i[1][0],+i[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function je(i,t,e,n,s){this.node=i,this.x0=t,this.y0=e,this.x1=n,this.y1=s}function hp(i,t,e){var n,s=this._x0,r=this._y0,o,a,l,c,u=this._x1,d=this._y1,f=[],m=this._root,g,_;for(m&&f.push(new je(m,s,r,u,d)),e==null?e=1/0:(s=i-e,r=t-e,u=i+e,d=t+e,e*=e);g=f.pop();)if(!(!(m=g.node)||(o=g.x0)>u||(a=g.y0)>d||(l=g.x1)<s||(c=g.y1)<r))if(m.length){var p=(o+l)/2,h=(a+c)/2;f.push(new je(m[3],p,h,l,c),new je(m[2],o,h,p,c),new je(m[1],p,a,l,h),new je(m[0],o,a,p,h)),(_=(t>=h)<<1|i>=p)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-_],f[f.length-1-_]=g)}else{var w=i-+this._x.call(null,m.data),S=t-+this._y.call(null,m.data),v=w*w+S*S;if(v<e){var R=Math.sqrt(e=v);s=i-R,r=t-R,u=i+R,d=t+R,n=m.data}}return n}function up(i){if(isNaN(u=+this._x.call(null,i))||isNaN(d=+this._y.call(null,i)))return this;var t,e=this._root,n,s,r,o=this._x0,a=this._y0,l=this._x1,c=this._y1,u,d,f,m,g,_,p,h;if(!e)return this;if(e.length)for(;;){if((g=u>=(f=(o+l)/2))?o=f:l=f,(_=d>=(m=(a+c)/2))?a=m:c=m,t=e,!(e=e[p=_<<1|g]))return this;if(!e.length)break;(t[p+1&3]||t[p+2&3]||t[p+3&3])&&(n=t,h=p)}for(;e.data!==i;)if(s=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,s?(r?s.next=r:delete s.next,this):t?(r?t[p]=r:delete t[p],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(n?n[h]=e:this._root=e),this):(this._root=r,this)}function dp(i){for(var t=0,e=i.length;t<e;++t)this.remove(i[t]);return this}function fp(){return this._root}function pp(){var i=0;return this.visit(function(t){if(!t.length)do++i;while(t=t.next)}),i}function mp(i){var t=[],e,n=this._root,s,r,o,a,l;for(n&&t.push(new je(n,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!i(n=e.node,r=e.x0,o=e.y0,a=e.x1,l=e.y1)&&n.length){var c=(r+a)/2,u=(o+l)/2;(s=n[3])&&t.push(new je(s,c,u,a,l)),(s=n[2])&&t.push(new je(s,r,u,c,l)),(s=n[1])&&t.push(new je(s,c,o,a,u)),(s=n[0])&&t.push(new je(s,r,o,c,u))}return this}function gp(i){var t=[],e=[],n;for(this._root&&t.push(new je(this._root,this._x0,this._y0,this._x1,this._y1));n=t.pop();){var s=n.node;if(s.length){var r,o=n.x0,a=n.y0,l=n.x1,c=n.y1,u=(o+l)/2,d=(a+c)/2;(r=s[0])&&t.push(new je(r,o,a,u,d)),(r=s[1])&&t.push(new je(r,u,a,l,d)),(r=s[2])&&t.push(new je(r,o,d,u,c)),(r=s[3])&&t.push(new je(r,u,d,l,c))}e.push(n)}for(;n=e.pop();)i(n.node,n.x0,n.y0,n.x1,n.y1);return this}function _p(i){return i[0]}function xp(i){return arguments.length?(this._x=i,this):this._x}function vp(i){return i[1]}function yp(i){return arguments.length?(this._y=i,this):this._y}function mo(i,t,e){var n=new iu(t??_p,e??vp,NaN,NaN,NaN,NaN);return i==null?n:n.addAll(i)}function iu(i,t,e,n,s,r){this._x=i,this._y=t,this._x0=e,this._y0=n,this._x1=s,this._y1=r,this._root=void 0}function Mp(i){for(var t={data:i.data},e=t;i=i.next;)e=e.next={data:i.data};return t}var gn=mo.prototype=iu.prototype;gn.copy=function(){var i=new iu(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,n;if(!t)return i;if(!t.length)return i._root=Mp(t),i;for(e=[{source:t,target:i._root=new Array(4)}];t=e.pop();)for(var s=0;s<4;++s)(n=t.source[s])&&(n.length?e.push({source:n,target:t.target[s]=new Array(4)}):t.target[s]=Mp(n));return i};gn.add=sp;gn.addAll=op;gn.cover=ap;gn.data=lp;gn.extent=cp;gn.find=hp;gn.remove=up;gn.removeAll=dp;gn.root=fp;gn.size=pp;gn.visit=mp;gn.visitAfter=gp;gn.x=xp;gn.y=yp;function Sp(i){let t=+this._x.call(null,i),e=+this._y.call(null,i),n=+this._z.call(null,i);return bp(this.cover(t,e,n),t,e,n,i)}function bp(i,t,e,n,s){if(isNaN(t)||isNaN(e)||isNaN(n))return i;var r,o=i._root,a={data:s},l=i._x0,c=i._y0,u=i._z0,d=i._x1,f=i._y1,m=i._z1,g,_,p,h,w,S,v,R,A,P,U;if(!o)return i._root=a,i;for(;o.length;)if((v=t>=(g=(l+d)/2))?l=g:d=g,(R=e>=(_=(c+f)/2))?c=_:f=_,(A=n>=(p=(u+m)/2))?u=p:m=p,r=o,!(o=o[P=A<<2|R<<1|v]))return r[P]=a,i;if(h=+i._x.call(null,o.data),w=+i._y.call(null,o.data),S=+i._z.call(null,o.data),t===h&&e===w&&n===S)return a.next=o,r?r[P]=a:i._root=a,i;do r=r?r[P]=new Array(8):i._root=new Array(8),(v=t>=(g=(l+d)/2))?l=g:d=g,(R=e>=(_=(c+f)/2))?c=_:f=_,(A=n>=(p=(u+m)/2))?u=p:m=p;while((P=A<<2|R<<1|v)===(U=(S>=p)<<2|(w>=_)<<1|h>=g));return r[U]=o,r[P]=a,i}function wp(i){Array.isArray(i)||(i=Array.from(i));let t=i.length,e=new Float64Array(t),n=new Float64Array(t),s=new Float64Array(t),r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let d=0,f,m,g,_;d<t;++d)isNaN(m=+this._x.call(null,f=i[d]))||isNaN(g=+this._y.call(null,f))||isNaN(_=+this._z.call(null,f))||(e[d]=m,n[d]=g,s[d]=_,m<r&&(r=m),m>l&&(l=m),g<o&&(o=g),g>c&&(c=g),_<a&&(a=_),_>u&&(u=_));if(r>l||o>c||a>u)return this;this.cover(r,o,a).cover(l,c,u);for(let d=0;d<t;++d)bp(this,e[d],n[d],s[d],i[d]);return this}function Ep(i,t,e){if(isNaN(i=+i)||isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,s=this._y0,r=this._z0,o=this._x1,a=this._y1,l=this._z1;if(isNaN(n))o=(n=Math.floor(i))+1,a=(s=Math.floor(t))+1,l=(r=Math.floor(e))+1;else{for(var c=o-n||1,u=this._root,d,f;n>i||i>=o||s>t||t>=a||r>e||e>=l;)switch(f=(e<r)<<2|(t<s)<<1|i<n,d=new Array(8),d[f]=u,u=d,c*=2,f){case 0:o=n+c,a=s+c,l=r+c;break;case 1:n=o-c,a=s+c,l=r+c;break;case 2:o=n+c,s=a-c,l=r+c;break;case 3:n=o-c,s=a-c,l=r+c;break;case 4:o=n+c,a=s+c,r=l-c;break;case 5:n=o-c,a=s+c,r=l-c;break;case 6:o=n+c,s=a-c,r=l-c;break;case 7:n=o-c,s=a-c,r=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=n,this._y0=s,this._z0=r,this._x1=o,this._y1=a,this._z1=l,this}function Tp(){var i=[];return this.visit(function(t){if(!t.length)do i.push(t.data);while(t=t.next)}),i}function Ap(i){return arguments.length?this.cover(+i[0][0],+i[0][1],+i[0][2]).cover(+i[1][0],+i[1][1],+i[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function _e(i,t,e,n,s,r,o){this.node=i,this.x0=t,this.y0=e,this.z0=n,this.x1=s,this.y1=r,this.z1=o}function Cp(i,t,e,n){var s,r=this._x0,o=this._y0,a=this._z0,l,c,u,d,f,m,g=this._x1,_=this._y1,p=this._z1,h=[],w=this._root,S,v;for(w&&h.push(new _e(w,r,o,a,g,_,p)),n==null?n=1/0:(r=i-n,o=t-n,a=e-n,g=i+n,_=t+n,p=e+n,n*=n);S=h.pop();)if(!(!(w=S.node)||(l=S.x0)>g||(c=S.y0)>_||(u=S.z0)>p||(d=S.x1)<r||(f=S.y1)<o||(m=S.z1)<a))if(w.length){var R=(l+d)/2,A=(c+f)/2,P=(u+m)/2;h.push(new _e(w[7],R,A,P,d,f,m),new _e(w[6],l,A,P,R,f,m),new _e(w[5],R,c,P,d,A,m),new _e(w[4],l,c,P,R,A,m),new _e(w[3],R,A,u,d,f,P),new _e(w[2],l,A,u,R,f,P),new _e(w[1],R,c,u,d,A,P),new _e(w[0],l,c,u,R,A,P)),(v=(e>=P)<<2|(t>=A)<<1|i>=R)&&(S=h[h.length-1],h[h.length-1]=h[h.length-1-v],h[h.length-1-v]=S)}else{var U=i-+this._x.call(null,w.data),E=t-+this._y.call(null,w.data),b=e-+this._z.call(null,w.data),I=U*U+E*E+b*b;if(I<n){var W=Math.sqrt(n=I);r=i-W,o=t-W,a=e-W,g=i+W,_=t+W,p=e+W,s=w.data}}return s}var Ky=(i,t,e,n,s,r)=>Math.sqrt((i-n)**2+(t-s)**2+(e-r)**2);function Rp(i,t,e,n){let s=[],r=i-n,o=t-n,a=e-n,l=i+n,c=t+n,u=e+n;return this.visit((d,f,m,g,_,p,h)=>{if(!d.length)do{let w=d.data;Ky(i,t,e,this._x(w),this._y(w),this._z(w))<=n&&s.push(w)}while(d=d.next);return f>l||m>c||g>u||_<r||p<o||h<a}),s}function Pp(i){if(isNaN(f=+this._x.call(null,i))||isNaN(m=+this._y.call(null,i))||isNaN(g=+this._z.call(null,i)))return this;var t,e=this._root,n,s,r,o=this._x0,a=this._y0,l=this._z0,c=this._x1,u=this._y1,d=this._z1,f,m,g,_,p,h,w,S,v,R,A;if(!e)return this;if(e.length)for(;;){if((w=f>=(_=(o+c)/2))?o=_:c=_,(S=m>=(p=(a+u)/2))?a=p:u=p,(v=g>=(h=(l+d)/2))?l=h:d=h,t=e,!(e=e[R=v<<2|S<<1|w]))return this;if(!e.length)break;(t[R+1&7]||t[R+2&7]||t[R+3&7]||t[R+4&7]||t[R+5&7]||t[R+6&7]||t[R+7&7])&&(n=t,A=R)}for(;e.data!==i;)if(s=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,s?(r?s.next=r:delete s.next,this):t?(r?t[R]=r:delete t[R],(e=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&e===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!e.length&&(n?n[A]=e:this._root=e),this):(this._root=r,this)}function Ip(i){for(var t=0,e=i.length;t<e;++t)this.remove(i[t]);return this}function Dp(){return this._root}function Lp(){var i=0;return this.visit(function(t){if(!t.length)do++i;while(t=t.next)}),i}function Np(i){var t=[],e,n=this._root,s,r,o,a,l,c,u;for(n&&t.push(new _e(n,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));e=t.pop();)if(!i(n=e.node,r=e.x0,o=e.y0,a=e.z0,l=e.x1,c=e.y1,u=e.z1)&&n.length){var d=(r+l)/2,f=(o+c)/2,m=(a+u)/2;(s=n[7])&&t.push(new _e(s,d,f,m,l,c,u)),(s=n[6])&&t.push(new _e(s,r,f,m,d,c,u)),(s=n[5])&&t.push(new _e(s,d,o,m,l,f,u)),(s=n[4])&&t.push(new _e(s,r,o,m,d,f,u)),(s=n[3])&&t.push(new _e(s,d,f,a,l,c,m)),(s=n[2])&&t.push(new _e(s,r,f,a,d,c,m)),(s=n[1])&&t.push(new _e(s,d,o,a,l,f,m)),(s=n[0])&&t.push(new _e(s,r,o,a,d,f,m))}return this}function Up(i){var t=[],e=[],n;for(this._root&&t.push(new _e(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=t.pop();){var s=n.node;if(s.length){var r,o=n.x0,a=n.y0,l=n.z0,c=n.x1,u=n.y1,d=n.z1,f=(o+c)/2,m=(a+u)/2,g=(l+d)/2;(r=s[0])&&t.push(new _e(r,o,a,l,f,m,g)),(r=s[1])&&t.push(new _e(r,f,a,l,c,m,g)),(r=s[2])&&t.push(new _e(r,o,m,l,f,u,g)),(r=s[3])&&t.push(new _e(r,f,m,l,c,u,g)),(r=s[4])&&t.push(new _e(r,o,a,g,f,m,d)),(r=s[5])&&t.push(new _e(r,f,a,g,c,m,d)),(r=s[6])&&t.push(new _e(r,o,m,g,f,u,d)),(r=s[7])&&t.push(new _e(r,f,m,g,c,u,d))}e.push(n)}for(;n=e.pop();)i(n.node,n.x0,n.y0,n.z0,n.x1,n.y1,n.z1);return this}function Fp(i){return i[0]}function Op(i){return arguments.length?(this._x=i,this):this._x}function Bp(i){return i[1]}function zp(i){return arguments.length?(this._y=i,this):this._y}function kp(i){return i[2]}function Vp(i){return arguments.length?(this._z=i,this):this._z}function go(i,t,e,n){var s=new su(t??Fp,e??Bp,n??kp,NaN,NaN,NaN,NaN,NaN,NaN);return i==null?s:s.addAll(i)}function su(i,t,e,n,s,r,o,a,l){this._x=i,this._y=t,this._z=e,this._x0=n,this._y0=s,this._z0=r,this._x1=o,this._y1=a,this._z1=l,this._root=void 0}function Hp(i){for(var t={data:i.data},e=t;i=i.next;)e=e.next={data:i.data};return t}var en=go.prototype=su.prototype;en.copy=function(){var i=new su(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,e,n;if(!t)return i;if(!t.length)return i._root=Hp(t),i;for(e=[{source:t,target:i._root=new Array(8)}];t=e.pop();)for(var s=0;s<8;++s)(n=t.source[s])&&(n.length?e.push({source:n,target:t.target[s]=new Array(8)}):t.target[s]=Hp(n));return i};en.add=Sp;en.addAll=wp;en.cover=Ep;en.data=Tp;en.extent=Ap;en.find=Cp;en.findAllWithinRadius=Rp;en.remove=Pp;en.removeAll=Ip;en.root=Dp;en.size=Lp;en.visit=Np;en.visitAfter=Up;en.x=Op;en.y=zp;en.z=Vp;function Fs(i){return function(){return i}}function ii(i){return(i()-.5)*1e-6}function Jy(i){return i.index}function Gp(i,t){var e=i.get(t);if(!e)throw new Error("node not found: "+t);return e}function ru(i){var t=Jy,e=f,n,s=Fs(30),r,o,a,l,c,u,d=1;i==null&&(i=[]);function f(h){return 1/Math.min(l[h.source.index],l[h.target.index])}function m(h){for(var w=0,S=i.length;w<d;++w)for(var v=0,R,A,P,U=0,E=0,b=0,I,W;v<S;++v)R=i[v],A=R.source,P=R.target,U=P.x+P.vx-A.x-A.vx||ii(u),a>1&&(E=P.y+P.vy-A.y-A.vy||ii(u)),a>2&&(b=P.z+P.vz-A.z-A.vz||ii(u)),I=Math.sqrt(U*U+E*E+b*b),I=(I-r[v])/I*h*n[v],U*=I,E*=I,b*=I,P.vx-=U*(W=c[v]),a>1&&(P.vy-=E*W),a>2&&(P.vz-=b*W),A.vx+=U*(W=1-W),a>1&&(A.vy+=E*W),a>2&&(A.vz+=b*W)}function g(){if(o){var h,w=o.length,S=i.length,v=new Map(o.map((A,P)=>[t(A,P,o),A])),R;for(h=0,l=new Array(w);h<S;++h)R=i[h],R.index=h,typeof R.source!="object"&&(R.source=Gp(v,R.source)),typeof R.target!="object"&&(R.target=Gp(v,R.target)),l[R.source.index]=(l[R.source.index]||0)+1,l[R.target.index]=(l[R.target.index]||0)+1;for(h=0,c=new Array(S);h<S;++h)R=i[h],c[h]=l[R.source.index]/(l[R.source.index]+l[R.target.index]);n=new Array(S),_(),r=new Array(S),p()}}function _(){if(o)for(var h=0,w=i.length;h<w;++h)n[h]=+e(i[h],h,i)}function p(){if(o)for(var h=0,w=i.length;h<w;++h)r[h]=+s(i[h],h,i)}return m.initialize=function(h,...w){o=h,u=w.find(S=>typeof S=="function")||Math.random,a=w.find(S=>[1,2,3].includes(S))||2,g()},m.links=function(h){return arguments.length?(i=h,g(),m):i},m.id=function(h){return arguments.length?(t=h,m):t},m.iterations=function(h){return arguments.length?(d=+h,m):d},m.strength=function(h){return arguments.length?(e=typeof h=="function"?h:Fs(+h),_(),m):e},m.distance=function(h){return arguments.length?(s=typeof h=="function"?h:Fs(+h),p(),m):s},m}var $y={value:()=>{}};function Xp(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e||/[\s.]/.test(n))throw new Error("illegal type: "+n);e[n]=[]}return new tl(e)}function tl(i){this._=i}function jy(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",s=e.indexOf(".");if(s>=0&&(n=e.slice(s+1),e=e.slice(0,s)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}tl.prototype=Xp.prototype={constructor:tl,on:function(i,t){var e=this._,n=jy(i+"",e),s,r=-1,o=n.length;if(arguments.length<2){for(;++r<o;)if((s=(i=n[r]).type)&&(s=Qy(e[s],i.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<o;)if(s=(i=n[r]).type)e[s]=Wp(e[s],i.name,t);else if(t==null)for(s in e)e[s]=Wp(e[s],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new tl(i)},call:function(i,t){if((s=arguments.length-2)>0)for(var e=new Array(s),n=0,s,r;n<s;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(r=this._[i],n=0,s=r.length;n<s;++n)r[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],s=0,r=n.length;s<r;++s)n[s].value.apply(t,e)}};function Qy(i,t){for(var e=0,n=i.length,s;e<n;++e)if((s=i[e]).name===t)return s.value}function Wp(i,t,e){for(var n=0,s=i.length;n<s;++n)if(i[n].name===t){i[n]=$y,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}var ou=Xp;var Ar=0,xo=0,_o=0,Yp=1e3,el,vo,nl=0,Os=0,il=0,yo=typeof performance=="object"&&performance.now?performance:Date,Zp=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function cu(){return Os||(Zp(tM),Os=yo.now()+il)}function tM(){Os=0}function au(){this._call=this._time=this._next=null}au.prototype=sl.prototype={constructor:au,restart:function(i,t,e){if(typeof i!="function")throw new TypeError("callback is not a function");e=(e==null?cu():+e)+(t==null?0:+t),!this._next&&vo!==this&&(vo?vo._next=this:el=this,vo=this),this._call=i,this._time=e,lu()},stop:function(){this._call&&(this._call=null,this._time=1/0,lu())}};function sl(i,t,e){var n=new au;return n.restart(i,t,e),n}function Kp(){cu(),++Ar;for(var i=el,t;i;)(t=Os-i._time)>=0&&i._call.call(void 0,t),i=i._next;--Ar}function qp(){Os=(nl=yo.now())+il,Ar=xo=0;try{Kp()}finally{Ar=0,nM(),Os=0}}function eM(){var i=yo.now(),t=i-nl;t>Yp&&(il-=t,nl=i)}function nM(){for(var i,t=el,e,n=1/0;t;)t._call?(n>t._time&&(n=t._time),i=t,t=t._next):(e=t._next,t._next=null,t=i?i._next=e:el=e);vo=i,lu(n)}function lu(i){if(!Ar){xo&&(xo=clearTimeout(xo));var t=i-Os;t>24?(i<1/0&&(xo=setTimeout(qp,i-yo.now()-il)),_o&&(_o=clearInterval(_o))):(_o||(nl=yo.now(),_o=setInterval(eM,Yp)),Ar=1,Zp(qp))}}function Jp(){let i=1;return()=>(i=(1664525*i+1013904223)%4294967296)/4294967296}var $p=3;function rl(i){return i.x}function hu(i){return i.y}function jp(i){return i.z}var iM=10,sM=Math.PI*(3-Math.sqrt(5)),rM=Math.PI*20/(9+Math.sqrt(221));function uu(i,t){t=t||2;var e=Math.min($p,Math.max(1,Math.round(t))),n,s=1,r=.001,o=1-Math.pow(r,1/300),a=0,l=.6,c=new Map,u=sl(m),d=ou("tick","end"),f=Jp();i==null&&(i=[]);function m(){g(),d.call("tick",n),s<r&&(u.stop(),d.call("end",n))}function g(h){var w,S=i.length,v;h===void 0&&(h=1);for(var R=0;R<h;++R)for(s+=(a-s)*o,c.forEach(function(A){A(s)}),w=0;w<S;++w)v=i[w],v.fx==null?v.x+=v.vx*=l:(v.x=v.fx,v.vx=0),e>1&&(v.fy==null?v.y+=v.vy*=l:(v.y=v.fy,v.vy=0)),e>2&&(v.fz==null?v.z+=v.vz*=l:(v.z=v.fz,v.vz=0));return n}function _(){for(var h=0,w=i.length,S;h<w;++h){if(S=i[h],S.index=h,S.fx!=null&&(S.x=S.fx),S.fy!=null&&(S.y=S.fy),S.fz!=null&&(S.z=S.fz),isNaN(S.x)||e>1&&isNaN(S.y)||e>2&&isNaN(S.z)){var v=iM*(e>2?Math.cbrt(.5+h):e>1?Math.sqrt(.5+h):h),R=h*sM,A=h*rM;e===1?S.x=v:e===2?(S.x=v*Math.cos(R),S.y=v*Math.sin(R)):(S.x=v*Math.sin(R)*Math.cos(A),S.y=v*Math.cos(R),S.z=v*Math.sin(R)*Math.sin(A))}(isNaN(S.vx)||e>1&&isNaN(S.vy)||e>2&&isNaN(S.vz))&&(S.vx=0,e>1&&(S.vy=0),e>2&&(S.vz=0))}}function p(h){return h.initialize&&h.initialize(i,f,e),h}return _(),n={tick:g,restart:function(){return u.restart(m),n},stop:function(){return u.stop(),n},numDimensions:function(h){return arguments.length?(e=Math.min($p,Math.max(1,Math.round(h))),c.forEach(p),n):e},nodes:function(h){return arguments.length?(i=h,_(),c.forEach(p),n):i},alpha:function(h){return arguments.length?(s=+h,n):s},alphaMin:function(h){return arguments.length?(r=+h,n):r},alphaDecay:function(h){return arguments.length?(o=+h,n):+o},alphaTarget:function(h){return arguments.length?(a=+h,n):a},velocityDecay:function(h){return arguments.length?(l=1-h,n):1-l},randomSource:function(h){return arguments.length?(f=h,c.forEach(p),n):f},force:function(h,w){return arguments.length>1?(w==null?c.delete(h):c.set(h,p(w)),n):c.get(h)},find:function(){var h=Array.prototype.slice.call(arguments),w=h.shift()||0,S=(e>1?h.shift():null)||0,v=(e>2?h.shift():null)||0,R=h.shift()||1/0,A=0,P=i.length,U,E,b,I,W,G;for(R*=R,A=0;A<P;++A)W=i[A],U=w-W.x,E=S-(W.y||0),b=v-(W.z||0),I=U*U+E*E+b*b,I<R&&(G=W,R=I);return G},on:function(h,w){return arguments.length>1?(d.on(h,w),n):d.on(h)}}}function du(){var i,t,e,n,s,r=Fs(-30),o,a=1,l=1/0,c=.81;function u(g){var _,p=i.length,h=(t===1?po(i,rl):t===2?mo(i,rl,hu):t===3?go(i,rl,hu,jp):null).visitAfter(f);for(s=g,_=0;_<p;++_)e=i[_],h.visit(m)}function d(){if(i){var g,_=i.length,p;for(o=new Array(_),g=0;g<_;++g)p=i[g],o[p.index]=+r(p,g,i)}}function f(g){var _=0,p,h,w=0,S,v,R,A,P=g.length;if(P){for(S=v=R=A=0;A<P;++A)(p=g[A])&&(h=Math.abs(p.value))&&(_+=p.value,w+=h,S+=h*(p.x||0),v+=h*(p.y||0),R+=h*(p.z||0));_*=Math.sqrt(4/P),g.x=S/w,t>1&&(g.y=v/w),t>2&&(g.z=R/w)}else{p=g,p.x=p.data.x,t>1&&(p.y=p.data.y),t>2&&(p.z=p.data.z);do _+=o[p.data.index];while(p=p.next)}g.value=_}function m(g,_,p,h,w){if(!g.value)return!0;var S=[p,h,w][t-1],v=g.x-e.x,R=t>1?g.y-e.y:0,A=t>2?g.z-e.z:0,P=S-_,U=v*v+R*R+A*A;if(P*P/c<U)return U<l&&(v===0&&(v=ii(n),U+=v*v),t>1&&R===0&&(R=ii(n),U+=R*R),t>2&&A===0&&(A=ii(n),U+=A*A),U<a&&(U=Math.sqrt(a*U)),e.vx+=v*g.value*s/U,t>1&&(e.vy+=R*g.value*s/U),t>2&&(e.vz+=A*g.value*s/U)),!0;if(g.length||U>=l)return;(g.data!==e||g.next)&&(v===0&&(v=ii(n),U+=v*v),t>1&&R===0&&(R=ii(n),U+=R*R),t>2&&A===0&&(A=ii(n),U+=A*A),U<a&&(U=Math.sqrt(a*U)));do g.data!==e&&(P=o[g.data.index]*s/U,e.vx+=v*P,t>1&&(e.vy+=R*P),t>2&&(e.vz+=A*P));while(g=g.next)}return u.initialize=function(g,..._){i=g,n=_.find(p=>typeof p=="function")||Math.random,t=_.find(p=>[1,2,3].includes(p))||2,d()},u.strength=function(g){return arguments.length?(r=typeof g=="function"?g:Fs(+g),d(),u):r},u.distanceMin=function(g){return arguments.length?(a=g*g,u):Math.sqrt(a)},u.distanceMax=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u.theta=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u}var al="stellar-graph",Qp={galaxy:[8037119,16743096,8060872,16765562,11565823,16751226,8054527,13172602,16743034,10134984],nebula:[10980346,15772668,9684477,6809849,16622767,12891645,8843180,16639626,16628340,9741240],mono:[14412542,12573694,9684477,6333946,14739455,13095678,10859772,8490232,15857145,9741240],cvd:[15113984,5682409,40563,15787074,29362,13983232,13400487,16777215,10066329,8965358]},ol=[10470655,15397375,16769690,16751194,16734794].map(i=>new Vt(i)),tm=new Vt(1,.86,.55),em=[261.63,293.66,329.63,392,440],nm={language:"auto",cometCount:260,glow:.35,nebula:1,shootingStars:!0,pulseDays:7,timeSeconds:60,holeMinLinks:10,excludeFolders:"",palette:"galaxy",ageBasis:"mtime",performance:!1,cameraReverse:!1,startView:"default",spinClockwise:!0,darkMatter:!0,moons:!0,planets:!0,rings:!0,lens:!0,sound:!1,volume:.5,autoThrottle:!0,subClusters:!0,showStats:!1,denseCore:!1},oM={de:{openGraph:"3D-Graph \xF6ffnen",rotation:"Rotation",focus:"Fokus",colorFolder:"Farbe: Ordner",colorAge:"Farbe: Alter",expansion:"Expansion",spiral:"Spirale",route:"Route",cinema:"Kino",photo:"Foto",video:"Video",sound:"Ton",reorder:"Neu ordnen",reset:"Reset",settings:"Einstellungen",focusTip:"Fokus: Hebt die gerade ge\xF6ffnete Notiz als Zentralgestirn hervor und blendet den Rest ab. Die Kamera folgt, wenn du eine andere Notiz \xF6ffnest.",colorTipBtn:"Umschalten zwischen Ordnerfarben und Alters-Farben (frisch bl\xE4ulich, verstaubt r\xF6tlich).",expansionTip:"Ordnet nach Alter wie ein expandierendes Universum: die \xE4ltesten Notizen au\xDFen, die frischesten im Kern.",spiralTip:"Dr\xFCckt den Graphen zu einer drehenden Spiralgalaxie flach. Regler f\xFCr Neigung und Drehung erscheinen.",routeTip:"K\xFCrzester Link-Weg zwischen zwei Notizen: erst Start, dann Ziel anklicken. Esc beendet.",cinemaTip:"Kino: Automatische Kamerafahrt \xFCber die gr\xF6\xDFten Hubs, ohne Bedienelemente. Klick oder Esc beendet.",photoTip:"Speichert ein Bild (PNG) des Graphen im Downloads-Ordner.",videoTip:"Nimmt den Graphen als Video (WebM) auf. Nochmal klicken beendet die Aufnahme.",soundTip:"Ambient-Klang und T\xF6ne beim \xDCberfahren und Klicken an oder aus.",resetTip:"Kamera zur\xFCck zur Startansicht.",playTip:"Zeitreise abspielen oder pausieren.",speedTip:"Tempo der Zeitreise: 0,25\xD7 bis 4\xD7.",sliderTip:"Zeitreise: Notizen nach ihrer Entstehung ein- und ausblenden.",miniTip:"Minimap: Klick verschiebt die Kamera dorthin. Ziehen dreht die Karte, Doppelklick setzt sie zur\xFCck.",searchTip:"Notiz suchen, oder mit # einen Tag als Sternbild anzeigen.",legendTip:"Klick: nur diesen Ordner zeigen (mehrere m\xF6glich). Klick auf den Punkt: Farbe \xE4ndern.",helpTitle:"Kurzanleitung",helpTip:"Kurzanleitung zeigen",help1:"Klick|Notiz neben dem Graphen \xF6ffnen",help2:"Strg/Cmd + Klick|Notiz in neuem Reiter \xF6ffnen",help3:"Doppelklick|Kamera zur Notiz fliegen",help4:"Ziehen \xB7 Mausrad|Drehen \xB7 Zoomen (rechte Maustaste verschiebt)",help5:"Legende|Klick filtert Ordner, Klick auf den Punkt \xE4ndert die Farbe",help6:"#tag in der Suche|Notizen eines Tags als Sternbild zeigen",help7:"Route|K\xFCrzester Link-Weg zwischen zwei Notizen",help8:"Violette Punkte|Dunkle Materie: Links auf fehlende Notizen, Klick legt sie an",help9:"R\xF6tliche / bl\xE4uliche Punkte|Monde: offene Aufgaben \xB7 Planeten: Anh\xE4nge",help10:"Zeitleiste|\u25B6 abspielen \xB7 \u23FA als Video aufnehmen \xB7 Tempo-Knopf",help11:"Esc|Route, Sternbild, Hilfe oder Kinomodus beenden",throttle:"Niedrige Bildrate: Effekte wurden automatisch reduziert. Mehr Optionen in den Einstellungen (Performance-Modus).",sDense:"Dichter, heller Kern",sDenseD:"Schaltet die Helligkeits- und Dichte-Anpassungen f\xFCr gro\xDFe Vaults ab: Im Expansionsmodus sitzen alle Notizen dicht im Kern, der Kern leuchtet maximal.",sStats:"Bildrate anzeigen",sStatsD:"Zeigt Bildrate, Zahl der Notizen und Links und die Effekt-Stufe oben im Graphen. Praktisch zum Testen gro\xDFer Vaults.",sAuto:"Effekte automatisch drosseln",sAutoD:"Schaltet Kometen und Zusatzeffekte herunter, wenn die Bildrate dauerhaft niedrig ist.",sSub:"Unterordner als Sternhaufen",sSubD:"Notizen im selben Unterordner r\xFCcken enger zusammen.",tilt:"Neigung",spinSpeed:"Drehung",reorderTip:"Layout neu berechnen: Die Sterne ordnen sich anhand ihrer Verbindungen neu.",rotationTip:"Kamera-Rotation an oder aus",search:"Stern suchen \u2026 oder #tag",showAll:"Alle anzeigen",resetColors:"Farben zur\xFCcksetzen",ageLegend:"frisch  \u2192  verstaubt",pulseHint:"\u2726 pulsiert = in den letzten {0} Tagen bearbeitet",today:"heute",colorTip:"Klick: Farbe \xE4ndern",ageNotice:"Zum \xC4ndern der Ordnerfarben auf \u201EFarbe: Ordner\u201C umschalten.",routeStart:"Route: Klick auf Start-Stern, dann auf Ziel-Stern.",routeFrom:"Start: {0} \u2013 jetzt das Ziel w\xE4hlen.",routeNone:"Keine Verbindung zwischen diesen beiden Sternen.",routeChip:"Route \xB7 {0} Schritte",cardMeta:"{0} \xB7 {1} Links \xB7 {2}",cardTasks:"{0} offene Aufgaben",cardAttach:"{0} Anh\xE4nge",cardEmpty:"(leer)",dmTitle:"Dunkle Materie",dmInfo:"{0} Notizen verlinken hierher \xB7 Klick legt sie an",dmCreated:"Notiz \u201E{0}\u201C angelegt.",dmFail:"Konnte \u201E{0}\u201C nicht anlegen.",cineHint:"Klick oder Esc beendet den Kinomodus",photoSaved:"Foto gespeichert (Downloads-Ordner).",videoStart:"Aufnahme l\xE4uft \u2013 nochmal klicken zum Beenden.",videoSaved:"Video gespeichert (Downloads-Ordner).",videoUnsupported:"Videoaufnahme wird hier nicht unterst\xFCtzt.",ringOld:"\xE4lteste",ringNew:"frischeste",timelapse:"Zeitraffer aufnehmen",sTitle:"Stellar Graph 3D",sLanguage:"Sprache",sLanguageD:"Sprache der Oberfl\xE4che.",sLangAuto:"Automatisch",sComets:"Kometen",sCometsD:"Anzahl der Lichtpunkte auf den Kanten. 0 schaltet sie ab.",sGlow:"Glow",sGlowD:"St\xE4rke des Leuchtens (Bloom).",sNebula:"Nebel",sNebulaD:"Deckkraft der Ordner-Nebel.",sShooting:"Sternschnuppen",sShootingD:"Gelegentliche Sternschnuppen im Hintergrund.",sTime:"Dauer der Zeitreise (Sekunden)",sTimeD:"Wie lange ein Durchlauf von der ersten bis zur letzten Notiz dauert. Im Graphen zus\xE4tzlich per Tempo-Knopf \xE4nderbar.",sPulse:"Pulszeitraum (Tage)",sPulseD:"Notizen, die so k\xFCrzlich bearbeitet wurden, pulsieren.",sHoles:"Schwarze L\xF6cher ab \u2026 Links",sHolesD:"Mindestzahl an Links, damit ein Hub zum schwarzen Loch wird.",sExclude:"Ordner ausblenden",sExcludeD:"Kommagetrennt, zum Beispiel: _archive, templates",sPalette:"Farbpalette",sPaletteD:"Vorbelegung der Ordnerfarben. Eigene Farben per Klick auf den Punkt in der Legende.",pGalaxy:"Galaxie",pNebula:"Nebel (pastell)",pMono:"Eisblau (einfarbig)",pCvd:"Farbfehlsichtigkeit (Okabe-Ito)",sAge:"Ma\xDF f\xFCr das Alter",sAgeD:"Bestimmt Alters-Farben und Expansion.",aMtime:"Letzte \xC4nderung",aCtime:"Erstellt",sPerf:"Performance-Modus",sPerfD:"Weniger Effekte f\xFCr gro\xDFe Vaults oder schwache Rechner.",sStart:"Startansicht",sStartD:"Beim \xD6ffnen des Graphen.",vDefault:"Letzte Ansicht",vExpansion:"Expansion",vSpiral:"Spirale",sCamRev:"Kamera-Rotation umkehren",sCamRevD:"Dreht nur die Kamera-Rotation um, falls sie sich entgegengesetzt zur Spirale anf\xFChlt.",sSpin:"Drehrichtung im Uhrzeigersinn",sSpinD:"Gilt f\xFCr Spirale und Kamera-Rotation. Aus = gegen den Uhrzeigersinn.",sDark:"Dunkle Materie",sDarkD:"Links auf nicht existierende Notizen als Geisterpunkte. Klick legt die Notiz an.",sMoons:"Monde",sMoonsD:"Offene Aufgaben kreisen als kleine Punkte um ihre Notiz.",sPlanets:"Planeten",sPlanetsD:"Verlinkte Anh\xE4nge (Bilder, PDFs) kreisen um ihre Notiz.",sRings:"Schalen-Ringe",sRingsD:"Orientierungsringe im Expansions-Modus.",sLens:"Gravitationslinse",sLensD:"Verzerrt das Bild um schwarze L\xF6cher.",sSound:"Ton",sSoundD:"Sanfter Ambient-Klang und T\xF6ne beim \xDCberfahren und Klicken.",sVolume:"Lautst\xE4rke"},en:{openGraph:"Open 3D graph",rotation:"Rotation",focus:"Focus",colorFolder:"Color: folder",colorAge:"Color: age",expansion:"Expansion",spiral:"Spiral",route:"Route",cinema:"Cinema",photo:"Photo",video:"Video",sound:"Sound",reorder:"Re-layout",reset:"Reset",settings:"Settings",focusTip:"Focus: highlights the note you have open as the central star and dims the rest. The camera follows when you open another note.",colorTipBtn:"Switch between folder colors and age colors (fresh bluish, dusty reddish).",expansionTip:"Arranges by age like an expanding universe: oldest notes outside, freshest in the core.",spiralTip:"Flattens the graph into a rotating spiral galaxy. Tilt and spin sliders appear.",routeTip:"Shortest link path between two notes: click the start, then the target. Esc cancels.",cinemaTip:"Cinema: automatic camera tour over the biggest hubs, without controls. Click or Esc exits.",photoTip:"Saves an image (PNG) of the graph to your Downloads folder.",videoTip:"Records the graph as a video (WebM). Click again to stop.",soundTip:"Ambient sound and tones on hover and click on or off.",resetTip:"Camera back to the start view.",playTip:"Play or pause the time travel.",speedTip:"Time travel speed: 0.25\xD7 to 4\xD7.",sliderTip:"Time travel: show and hide notes by creation date.",miniTip:"Minimap: click moves the camera there. Drag to rotate the map, double click resets it.",searchTip:"Find a note, or type # to show a tag as a constellation.",legendTip:"Click: show only this folder (several possible). Click the dot: change color.",helpTitle:"Quick guide",helpTip:"Show quick guide",help1:"Click|Open the note beside the graph",help2:"Ctrl/Cmd + click|Open the note in a new tab",help3:"Double click|Fly the camera to the note",help4:"Drag \xB7 wheel|Rotate \xB7 zoom (right mouse button pans)",help5:"Legend|Click filters folders, click the dot to change its color",help6:"#tag in search|Show the notes of a tag as a constellation",help7:"Route|Shortest link path between two notes",help8:"Violet points|Dark matter: links to missing notes, click creates them",help9:"Reddish / bluish points|Moons: open tasks \xB7 Planets: attachments",help10:"Timeline|\u25B6 play \xB7 \u23FA record as video \xB7 speed button",help11:"Esc|End route, constellation, guide or cinema mode",throttle:"Low frame rate: effects were reduced automatically. More options in the settings (performance mode).",sDense:"Dense, bright core",sDenseD:"Turns off the brightness and density adjustments for large vaults: in expansion layout all notes sit tightly in the core and the core glows at full strength.",sStats:"Show frame rate",sStatsD:"Shows frame rate, number of notes and links and the effect level at the top of the graph. Handy for testing large vaults.",sAuto:"Throttle effects automatically",sAutoD:"Turns down comets and extra effects when the frame rate stays low.",sSub:"Subfolders as star clusters",sSubD:"Notes in the same subfolder move closer together.",tilt:"Tilt",spinSpeed:"Spin",reorderTip:"Recompute the layout: stars settle again based on their links.",rotationTip:"Camera rotation on or off",search:"Find star \u2026 or #tag",showAll:"Show all",resetColors:"Reset colors",ageLegend:"fresh  \u2192  dusty",pulseHint:"\u2726 pulsing = edited in the last {0} days",today:"today",colorTip:"Click: change color",ageNotice:"Switch to \u201CColor: folder\u201D to change folder colors.",routeStart:"Route: click a start star, then a target star.",routeFrom:"Start: {0} \u2013 now pick the target.",routeNone:"No connection between these two stars.",routeChip:"Route \xB7 {0} steps",cardMeta:"{0} \xB7 {1} links \xB7 {2}",cardTasks:"{0} open tasks",cardAttach:"{0} attachments",cardEmpty:"(empty)",dmTitle:"Dark matter",dmInfo:"{0} notes link here \xB7 click to create it",dmCreated:"Created note \u201C{0}\u201D.",dmFail:"Could not create \u201C{0}\u201D.",cineHint:"Click or Esc exits cinema mode",photoSaved:"Photo saved (Downloads folder).",videoStart:"Recording \u2013 click again to stop.",videoSaved:"Video saved (Downloads folder).",videoUnsupported:"Video recording is not supported here.",ringOld:"oldest",ringNew:"newest",timelapse:"Record timelapse",sTitle:"Stellar Graph 3D",sLanguage:"Language",sLanguageD:"Interface language.",sLangAuto:"Automatic",sComets:"Comets",sCometsD:"Number of light points running along links. 0 turns them off.",sGlow:"Glow",sGlowD:"Strength of the glow (bloom).",sNebula:"Nebulae",sNebulaD:"Opacity of the folder nebulae.",sShooting:"Shooting stars",sShootingD:"Occasional shooting stars in the background.",sTime:"Time travel duration (seconds)",sTimeD:"How long one run from the first to the last note takes. Also adjustable in the graph with the speed button.",sPulse:"Pulse period (days)",sPulseD:"Notes edited this recently pulse.",sHoles:"Black holes from \u2026 links",sHolesD:"Minimum links for a hub to become a black hole.",sExclude:"Hide folders",sExcludeD:"Comma separated, for example: _archive, templates",sPalette:"Color palette",sPaletteD:"Default folder colors. Pick your own by clicking the dot in the legend.",pGalaxy:"Galaxy",pNebula:"Nebula (pastel)",pMono:"Ice blue (monochrome)",pCvd:"Color-blind safe (Okabe-Ito)",sAge:"Measure of age",sAgeD:"Drives age colors and expansion.",aMtime:"Last modified",aCtime:"Created",sPerf:"Performance mode",sPerfD:"Fewer effects for large vaults or slow machines.",sStart:"Start view",sStartD:"When the graph opens.",vDefault:"Last view",vExpansion:"Expansion",vSpiral:"Spiral",sCamRev:"Reverse camera rotation",sCamRevD:"Reverses only the camera rotation, in case it feels opposite to the spiral.",sSpin:"Spin clockwise",sSpinD:"Applies to the spiral and the camera rotation. Off = counterclockwise.",sDark:"Dark matter",sDarkD:"Links to notes that do not exist yet as ghost points. A click creates the note.",sMoons:"Moons",sMoonsD:"Open tasks orbit their note as small points.",sPlanets:"Planets",sPlanetsD:"Linked attachments (images, PDFs) orbit their note.",sRings:"Shell rings",sRingsD:"Orientation rings in expansion mode.",sLens:"Gravitational lens",sLensD:"Bends the image around black holes.",sSound:"Sound",sSoundD:"Soft ambient sound plus tones on hover and click.",sVolume:"Volume"}},Mo=i=>i.language==="auto"?String(Se.moment.locale()).startsWith("de")?"de":"en":i.language,ll=i=>(t,...e)=>(oM[i][t]??t).replace(/\{(\d)\}/g,(n,s)=>String(e[+s]??"")),cl=class extends Se.Plugin{constructor(){super(...arguments);this.settings={...nm};this.refreshTimer=0}async onload(){this.settings=Object.assign({},nm,await this.loadData()),this.registerView(al,e=>new pu(e,this)),this.addRibbonIcon("orbit",ll(Mo(this.settings))("openGraph"),()=>this.open()),this.addCommand({id:"open",name:ll(Mo(this.settings))("openGraph"),callback:()=>this.open()}),this.addSettingTab(new fu(this.app,this))}async open(){let e=this.app.workspace.getLeaf("tab");await e.setViewState({type:al,active:!0}),await this.app.workspace.revealLeaf(e)}async persist(){await this.saveData(this.settings),window.clearTimeout(this.refreshTimer),this.refreshTimer=window.setTimeout(()=>{this.app.workspace.getLeavesOfType(al).forEach(e=>e.view.refresh())},500)}},fu=class extends Se.PluginSettingTab{constructor(e,n){super(e,n);this.plugin=n}getControlValue(e){return this.plugin.settings[e]}setControlValue(e,n){this.plugin.settings[e]=n,this.plugin.persist(),e==="language"&&this.update()}getSettingDefinitions(){let e=ll(Mo(this.plugin.settings)),n=(r,o)=>({name:e("s"+o),desc:e("s"+o+"D"),control:{type:"toggle",key:r}}),s=(r,o,a,l,c)=>({name:e("s"+o),desc:e("s"+o+"D"),control:{type:"slider",key:r,min:a,max:l,step:c}});return[{name:e("sLanguage"),desc:e("sLanguageD"),control:{type:"dropdown",key:"language",options:{auto:e("sLangAuto"),de:"Deutsch",en:"English"}}},{name:e("sStart"),desc:e("sStartD"),control:{type:"dropdown",key:"startView",options:{default:e("vDefault"),expansion:e("vExpansion"),spiral:e("vSpiral")}}},n("spinClockwise","Spin"),{name:e("sPalette"),desc:e("sPaletteD"),control:{type:"dropdown",key:"palette",options:{galaxy:e("pGalaxy"),nebula:e("pNebula"),mono:e("pMono"),cvd:e("pCvd")}}},{name:e("sAge"),desc:e("sAgeD"),control:{type:"dropdown",key:"ageBasis",options:{mtime:e("aMtime"),ctime:e("aCtime")}}},{name:e("sExclude"),desc:e("sExcludeD"),control:{type:"text",key:"excludeFolders",placeholder:"_archive, templates"}},s("pulseDays","Pulse",1,60,1),s("timeSeconds","Time",10,300,5),s("glow","Glow",0,1.5,.05),s("nebula","Nebula",0,2,.1),s("cometCount","Comets",0,600,20),s("holeMinLinks","Holes",3,40,1),n("shootingStars","Shooting"),n("darkMatter","Dark"),n("moons","Moons"),n("planets","Planets"),n("rings","Rings"),n("lens","Lens"),n("performance","Perf"),n("cameraReverse","CamRev"),n("autoThrottle","Auto"),n("subClusters","Sub"),n("showStats","Stats"),n("denseCore","Dense"),n("sound","Sound"),{name:e("sVolume"),control:{type:"slider",key:"volume",min:0,max:1,step:.05}}]}},aM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Fn=(i,t)=>i+Math.random()*(t-i),Oi=(i,t)=>{let e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},im=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0},sm=i=>{let t=Math.max(0,(Date.now()-i)/864e5),n=Math.min(1,Math.log10(1+t)/Math.log10(721))*(ol.length-1),s=Math.min(ol.length-2,Math.floor(n));return ol[s].clone().lerp(ol[s+1],n-s)},rm=(i,t)=>{let e=createEl("a");e.href=URL.createObjectURL(i),e.download=t,e.click(),window.setTimeout(()=>URL.revokeObjectURL(e.href),4e3)},om=()=>new Date().toISOString().slice(0,16).replace(/[:T]/g,"-");function lM(){let i=createEl("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.6)"),e.addColorStop(.45,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Mr(i)}function cM(){let i=createEl("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Mr(i)}function hM(){let i=createEl("canvas");i.width=i.height=256;let t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"rgba(255,230,190,0)"),e.addColorStop(.44,"rgba(255,230,190,0)"),e.addColorStop(.5,"rgba(255,240,215,1)"),e.addColorStop(.68,"rgba(255,190,120,0.55)"),e.addColorStop(1,"rgba(255,150,80,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);let n=typeof t.createConicGradient=="function"?t.createConicGradient(0,128,128):null;return n&&(n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.25,"rgba(0,0,0,0.35)"),n.addColorStop(.5,"rgba(0,0,0,1)"),n.addColorStop(.78,"rgba(0,0,0,0.4)"),n.addColorStop(1,"rgba(0,0,0,1)"),t.globalCompositeOperation="destination-in",t.fillStyle=n,t.fillRect(0,0,256,256)),new Mr(i)}var am={uniforms:{tDiffuse:{value:null},uHoles:{value:[new L,new L,new L]},uAspect:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec3 uHoles[3]; uniform float uAspect; varying vec2 vUv;
    void main(){
      vec2 uv = vUv;
      for (int i = 0; i < 3; i++) {
        vec3 h = uHoles[i];
        if (h.z <= 0.0) continue;
        vec2 d = vUv - h.xy; d.x *= uAspect;
        float r = length(d);
        float R = h.z * 1.7;
        float s = R * R / (r * r + R * R * 0.15);
        vec2 off = (d / (r + 1e-5)) * s * 0.35 * R;
        off.x /= uAspect;
        uv -= off;
      }
      gl_FragColor = texture2D(tDiffuse, uv);
    }`},pu=class extends Se.ItemView{constructor(e,n){super(e);this.plugin=n;this.raf=0;this.disposeFns=[];this.state=null;this.rebuildTimer=0}getViewType(){return al}getDisplayText(){return"Stellar Graph 3D"}getIcon(){return"orbit"}storeKey(){return"stellar-graph:"+this.app.vault.getName()}async onOpen(){let e=this.contentEl;e.empty(),e.addClass("n3d-root");try{let r=this.app.loadLocalStorage(this.storeKey());r&&(this.state=r)}catch{}let n=this.plugin.settings.startView;n!=="default"&&(this.state={...this.state??{},expansion:!0,disc:n==="spiral"},n==="spiral"&&(this.state.cam=[0,0,320],this.state.target=[0,0,0]));let s=r=>r instanceof Se.TFile&&r.extension==="md";this.registerEvent(this.app.workspace.on("file-open",r=>this.onFile?.(r))),this.registerEvent(this.app.vault.on("modify",r=>{s(r)&&this.live?.modify(r.path)})),this.registerEvent(this.app.vault.on("create",r=>{s(r)&&this.live?.structural()})),this.registerEvent(this.app.vault.on("delete",r=>{s(r)&&this.live?.structural()})),this.registerEvent(this.app.vault.on("rename",r=>{s(r)&&this.live?.structural()})),this.registerEvent(this.app.metadataCache.on("resolved",()=>this.live?.resolved())),this.build(e,!1)}async onClose(){window.clearTimeout(this.rebuildTimer),this.teardown()}refresh(){this.scheduleRebuild(60)}teardown(){window.cancelAnimationFrame(this.raf),this.ro?.disconnect(),this.disposeFns.forEach(e=>e()),this.disposeFns=[],this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer=void 0,this.live=void 0,this.onFile=void 0}scheduleRebuild(e=1500){window.clearTimeout(this.rebuildTimer),this.rebuildTimer=window.setTimeout(()=>{this.teardown(),this.contentEl.empty(),this.build(this.contentEl,!0)},e)}build(e,n){let s=this.state??{},r=this.plugin.settings,o=ll(Mo(r)),l=Mo(r)==="de"?"de-DE":"en-US",c=r.spinClockwise?1:-1,u=-.35*c*(r.cameraReverse?-1:1),d=this.app.metadataCache.resolvedLinks,f=this.app.metadataCache.unresolvedLinks,m=r.excludeFolders.split(",").map(x=>x.trim().replace(/^\/+|\/+$/g,"")).filter(Boolean),g=this.app.vault.getMarkdownFiles().filter(x=>!m.some(T=>x.path.startsWith(T+"/")||x.path===T+".md")),_=g.map(x=>({id:x.path,path:x.path,name:x.basename,folder:x.path.includes("/")?x.path.split("/")[0]:"(root)",deg:0,mtime:x.stat.mtime,ctime:x.stat.ctime||x.stat.mtime})),p=_.length,h=r.denseCore?1:1-.5*Math.min(1,Math.max(0,(p-600)/2e3)),w=x=>34+210*Math.pow(Math.max(0,Math.min(1,x)),h),S=new Map(_.map(x=>[x.id,x])),v=new Map(_.map((x,T)=>[x.id,T])),R=x=>r.ageBasis==="ctime"?x.ctime:x.mtime,A=[],P=new Map;for(let[x,T]of Object.entries(d))if(S.has(x))for(let O of Object.keys(T))x===O||!S.has(O)||(A.push({source:x,target:O}),S.get(x).deg++,S.get(O).deg++,(P.get(x)??P.set(x,[]).get(x)).push(O),(P.get(O)??P.set(O,[]).get(O)).push(x));let U=()=>{let x=0;for(let T of _){let O=d[T.id];if(O)for(let at of Object.keys(O))S.has(at)&&(x=x+im(T.id+">"+at)|0);let X=f[T.id];if(X)for(let at of Object.keys(X))x=x+im(T.id+"?"+at)|0}return x},E=U(),b=[...new Set(_.map(x=>x.folder))].sort(),I=Qp[r.palette]??Qp.galaxy,W={...s.colors??{}},G=x=>new Vt(W[x]??I[b.indexOf(x)%I.length]),K=_.map(x=>G(x.folder)),nt=_.filter(x=>x.deg===0),J=_.map(x=>x.deg===0),rt=[..._].sort((x,T)=>T.deg-x.deg).slice(0,3).filter(x=>x.deg>=r.holeMinLinks),Y=_.map(x=>rt.includes(x)),ct=new Map,xt=_.map(()=>[]),Pt=_.map(()=>0),Kt=_.map(()=>0);g.forEach((x,T)=>{let O=this.app.metadataCache.getFileCache(x),X=[...new Set((O?(0,Se.getAllTags)(O):null)??[])];xt[T]=X,X.forEach(at=>(ct.get(at)??ct.set(at,new Set).get(at)).add(T)),Pt[T]=(O?.listItems??[]).filter(at=>at.task===" ").length,Kt[T]=Object.keys(d[x.path]??{}).filter(at=>!S.has(at)&&!at.toLowerCase().endsWith(".md")).length});let de=new Map;if(r.darkMatter)for(let[x,T]of Object.entries(f)){let O=v.get(x);if(O!==void 0)for(let X of Object.keys(T))/\.[a-z0-9]{2,5}$/i.test(X)&&!X.toLowerCase().endsWith(".md")||(de.get(X)??de.set(X,[]).get(X)).push(O)}let $=[...de.entries()].sort((x,T)=>T[1].length-x[1].length).slice(0,300).map(([x,T],O)=>{let X=Oi(O,5)*Math.PI*2,at=Math.acos(2*Oi(O,6)-1);return{name:x,srcs:[...new Set(T)],off:new L(Math.sin(at)*Math.cos(X),Math.cos(at),Math.sin(at)*Math.sin(X)).multiplyScalar(16+Oi(O,7)*12)}}),st=[],bt=[],ft=0;s.pos&&(_.forEach(x=>{let T=s.pos[x.id];T&&(x.x=T[0],x.y=T[1],x.z=T[2],ft++)}),_.forEach((x,T)=>{if(x.x!==void 0)return;let O=(P.get(x.id)??[]).map(X=>S.get(X)).find(X=>X.x!==void 0);O&&(x.x=O.x+Fn(-6,6),x.y=O.y+Fn(-6,6),x.z=O.z+Fn(-6,6)),n&&st.push(T)}),n&&Object.keys(s.pos).forEach(x=>{if(!S.has(x)){let T=s.pos[x];bt.push(new L(T[0],T[1],T[2]))}}));let Rt=()=>e.clientWidth||800,Lt=()=>e.clientHeight||600,Nt=new La,Bt=new pn(60,Rt()/Lt(),.1,5e3);Bt.position.set(0,0,320);let kt=new Da({antialias:!0,alpha:!0});kt.setPixelRatio(r.performance?1:Math.min(window.devicePixelRatio,2)),kt.setSize(Rt(),Lt()),kt.setClearColor(0,0),e.appendChild(kt.domElement),this.renderer=kt;let Ht=new Za(Bt,kt.domElement);Ht.enableDamping=!0,Ht.dampingFactor=.06,Ht.autoRotate=!0,Ht.autoRotateSpeed=u,s.cam&&s.target&&(Bt.position.set(s.cam[0],s.cam[1],s.cam[2]),Ht.target.set(s.target[0],s.target[1],s.target[2]),Ht.autoRotate=!1);let F=null,Ye=[],Xt=new $a(kt);Xt.addPass(new ja(Nt,Bt)),Xt.addPass(new Tr(new At(Rt(),Lt()),r.glow*(r.denseCore?1:Math.min(1,Math.pow(1500/Math.max(p,1),.4))),r.performance?.3:.45,.55));let jt=new Er(am);jt.enabled=r.lens&&!r.performance&&rt.length>0,Xt.addPass(jt),Xt.addPass(new Qa),this.composer=Xt;let zt=new De,xe=new Float32Array(1500*3);for(let x=0;x<xe.length;x++)xe[x]=(Math.random()-.5)*2400;zt.setAttribute("position",new Ee(xe,3));let Ft=new Is(zt,new es({size:1.2,color:9082056,transparent:!0,opacity:.5,depthWrite:!1}));Nt.add(Ft);let C=new Ba(1,20,20),y=_.map(x=>{let T=new ln(C,new Ui({color:16777215}));return T.scale.setScalar(1.3+Math.sqrt(x.deg)*.7),T.userData.node=x,T.userData.base=T.scale.x,Nt.add(T),T}),D=_.map(()=>new L),Z=_.map((x,T)=>st.includes(T)?0:1),et=_.map(()=>0),Q=_.map(()=>-99),It=Date.now()-r.pulseDays*864e5,pt=_.map(x=>x.mtime>It),Mt=hM(),ne=rt.map((x,T)=>{let O=new Ui({map:Mt,color:G(x.folder).lerp(new Vt(16777215),.45),transparent:!0,blending:cn,depthWrite:!1,side:Jn}),X=new ln(new _r(2,2),O);return X.rotation.x=1.1+T*.15,X.rotation.y=.35*(T+1),Nt.add(X),{n:x,i:v.get(x.id),mesh:X,mat:O}}),it=new Float32Array(A.length*6),gt=new Float32Array(A.length*6),Ut=new De;Ut.setAttribute("position",new Ee(it,3)),Ut.setAttribute("color",new Ee(gt,3)),Nt.add(new yr(Ut,new Fi({vertexColors:!0,transparent:!0,opacity:.22,blending:cn,depthWrite:!1})));let Ot=new Float32Array(Math.max(1,p)*6),_t=new De;_t.setAttribute("position",new Ee(Ot,3)),_t.setDrawRange(0,0);let ie=new yr(_t,new Fi({color:16767392,transparent:!0,opacity:.75,blending:cn,depthWrite:!1}));ie.frustumCulled=!1,Nt.add(ie);let qt=[],ce=$.length,N=$.map(()=>new L),ht=new Float32Array(ce*3),q=new Float32Array(ce*3),tt=new De;tt.setAttribute("position",new Ee(ht,3)),tt.setAttribute("color",new Ee(q,3));let mt=new Is(tt,new es({size:3.4,vertexColors:!0,transparent:!0,blending:cn,depthWrite:!1}));mt.frustumCulled=!1,Nt.add(mt);let ut=[];$.forEach((x,T)=>x.srcs.slice(0,6).forEach(O=>ut.push([T,O])));let Gt=new Float32Array(ut.length*6),me=new Float32Array(ut.length*6),Le=new De;Le.setAttribute("position",new Ee(Gt,3)),Le.setAttribute("color",new Ee(me,3));let he=new yr(Le,new Fi({vertexColors:!0,transparent:!0,blending:cn,depthWrite:!1}));he.frustumCulled=!1,Nt.add(he);let ze=new Vt(9403391),nn=[];r.performance||_.forEach((x,T)=>{let O=Oi(T,1)*Math.PI*2,X=Math.acos(2*Oi(T,2)-1),at=new L(Math.sin(X)*Math.cos(O),Math.cos(X),Math.sin(X)*Math.sin(O)),yt=new L().crossVectors(at,new L(0,1,0));yt.lengthSq()<1e-4&&yt.set(1,0,0),yt.normalize();let Yt=new L().crossVectors(at,yt).normalize();if(r.moons)for(let re=0;re<Math.min(6,Pt[T]);re++)nn.push({i:T,planet:!1,phase:Oi(T,re+3)*Math.PI*2,speed:.8+Oi(T,re+9)*.4,u:yt,v:Yt});if(r.planets)for(let re=0;re<Math.min(5,Kt[T]);re++)nn.push({i:T,planet:!0,phase:Oi(T,re+13)*Math.PI*2,speed:(.22+Oi(T,re+19)*.12)*(re%2?-1:1),u:yt,v:Yt})});let ss=new Float32Array(nn.length*3),si=new Float32Array(nn.length*3),wn=new De;wn.setAttribute("position",new Ee(ss,3)),wn.setAttribute("color",new Ee(si,3));let Bi=new Is(wn,new es({size:2.5,vertexColors:!0,transparent:!0,blending:cn,depthWrite:!1}));Bi.frustumCulled=!1,Nt.add(Bi);let zi=new $i,Cr=new Fi({color:8160952,transparent:!0,opacity:0,depthWrite:!1});[0,.33,.66,1].forEach(x=>{let T=w(x),O=[];for(let X=0;X<128;X++)O.push(new L(Math.cos(X/128*Math.PI*2)*T,0,Math.sin(X/128*Math.PI*2)*T));zi.add(new Oa(new De().setFromPoints(O),Cr))}),zi.visible=!1,Nt.add(zi);let On=uu(_,3).force("link",ru(A).id(x=>x.id).distance(34).strength(.4)).force("charge",du().strength(-140)).force("center",eu(0,0,0)).alphaDecay(.02),Rr=JSON.stringify([r.subClusters,r.ageBasis]);ft>p*.5&&On.alpha(s.sig===Rr?.12:.7);let rs=x=>{nt.forEach((T,O)=>{let X=Math.hypot(T.x??0,T.y??0,T.z??0)||1,yt=(190+O*37%90-X)/X*.12*x;T.vx=(T.vx??0)+(T.x??0)*yt,T.vy=(T.vy??0)+(T.y??0)*yt,T.vz=(T.vz??0)+(T.z??0)*yt})};rs.initialize=()=>{},On.force("orphan",rs);let Pr=new Float32Array(p);[..._.keys()].sort((x,T)=>R(_[x])-R(_[T])).forEach((x,T)=>{Pr[x]=w(1-T/Math.max(1,p-1))});let Ir=x=>{ai&&_.forEach((T,O)=>{if(J[O])return;let X=Math.hypot(T.x??0,T.y??0,T.z??0)||1,at=(Pr[O]-X)/X*.8*x;T.vx=(T.vx??0)+(T.x??0)*at,T.vy=(T.vy??0)+(T.y??0)*at,T.vz=(T.vz??0)+(T.z??0)*at})};Ir.initialize=()=>{},On.force("age",Ir);let Dr=new Map;_.forEach((x,T)=>{let O=x.path.split("/");if(O.length>=3&&!J[T]){let X=O.slice(0,-1).join("/");(Dr.get(X)??Dr.set(X,[]).get(X)).push(T)}});let hl=[...Dr.values()].filter(x=>x.length>=3),So=x=>{r.subClusters&&hl.forEach(T=>{let O=0,X=0,at=0;T.forEach(yt=>{O+=_[yt].x??0,X+=_[yt].y??0,at+=_[yt].z??0}),O/=T.length,X/=T.length,at/=T.length,T.forEach(yt=>{let Yt=_[yt];Yt.vx=(Yt.vx??0)+(O-(Yt.x??0))*.25*x,Yt.vy=(Yt.vy??0)+(X-(Yt.y??0))*.25*x,Yt.vz=(Yt.vz??0)+(at-(Yt.z??0))*.25*x})})};So.initialize=()=>{},On.force("cluster",So);let M=A.map(x=>v.get(x.source.id)),B=A.map(x=>v.get(x.target.id)),H=A.map((x,T)=>Math.min(M[T],B[T])*p+Math.max(M[T],B[T])),V=_.map(()=>new Set);A.forEach((x,T)=>{V[M[T]].add(B[T]),V[B[T]].add(M[T])});let z=e.createDiv({cls:"n3d-labels"}),ot=_.map(x=>z.createDiv({cls:"n3d-label",text:x.name})),lt=z.createDiv({cls:"n3d-folder"}),wt=z.createDiv({cls:"n3d-ringlbl",text:o("ringOld")}),Et=z.createDiv({cls:"n3d-ringlbl",text:o("ringNew")}),Wt=lM(),Zt=b.map(x=>{let T=_.map((at,yt)=>at.folder===x&&!J[yt]?yt:-1).filter(at=>at>=0);if(T.length<3)return null;let O=new xr(new Ps({map:Wt,color:G(x),transparent:!0,opacity:.14,blending:cn,depthWrite:!1}));Nt.add(O);let X=z.createDiv({cls:"n3d-folder",text:x});return{folder:x,members:T,sprite:O,label:X}}),Ct=new Set([..._].sort((x,T)=>T.deg-x.deg).slice(0,8).map(x=>x.id)),Qt=new xr(new Ps({map:Wt,color:16777215,transparent:!0,opacity:.4,blending:cn,depthWrite:!1}));Qt.visible=!1,Nt.add(Qt);let be=cM(),fe=[],Ze=(x,T,O)=>{let X=new xr(new Ps({map:be,color:T,transparent:!0,blending:cn,depthWrite:!1}));X.position.copy(x),Nt.add(X),fe.push({sprite:X,t0:O})},se=6,St=A.length?Math.min(Math.round(r.cometCount*(r.performance?.3:1)),A.length):0,Qe=new Int32Array(St).fill(-1),ae=new Float32Array(St),hn=new Float32Array(St),ri=new Int8Array(St),Ke=new Float32Array(St*se*3),_n=new Float32Array(St*se*3),pe=new De;pe.setAttribute("position",new Ee(Ke,3)),pe.setAttribute("color",new Ee(_n,3));let En=new Is(pe,new es({size:2.1,vertexColors:!0,transparent:!0,blending:cn,depthWrite:!1}));En.frustumCulled=!1,Nt.add(En);let os=[0,.016,.034,.056,.082,.112],xn=[2.4,1.2,.85,.55,.3,.14],Tn=new De,sn=new Float32Array(6),bo=new Float32Array([0,0,0,1.6,1.7,2.2]);Tn.setAttribute("position",new Ee(sn,3)),Tn.setAttribute("color",new Ee(bo,3));let ul=new Fi({vertexColors:!0,transparent:!0,opacity:0,blending:cn,depthWrite:!1}),mu=new vr(Tn,ul);mu.frustumCulled=!1,Nt.add(mu);let Ae={active:!1,t:0,dur:.8,head:new L,dir:new L,next:3},An=new Set(s.selected??[]),mi=x=>An.size===0||An.has(x.folder),Bn=!!s.focusOn,Cn=null,oi=s.colorMode??"folder",ai=!!s.expansion,Gn=!!s.disc,as=Gn?1:0,Lr=0,wo=ai?1:0,lm=r.denseCore?1:Math.min(1,Math.pow(900/Math.max(p,1),.3)),Eo=s.tilt??60,Nr=s.spinSpeed??1,dl=0,Ur=new Set,Je=null,gi=-1,Pe=null,Bs=null,_i=!1,ls=-1,fl=null,pl=null,zn=0,To=0,Ao=0,Fr=60,Co=0,gu=-99,ml=20,_u=!1,Ro=null,xu=[1,.5,.2],ve={on:!1,step:-1,wait:0,target:-1},Po=_.map(x=>x.ctime).sort((x,T)=>x-T),gl=new Int32Array(p);[..._.keys()].sort((x,T)=>_[x].ctime-_[T].ctime).forEach((x,T)=>{gl[x]=T});let cs=1e3,hs=1/0,us=!1,Io=1,cm=()=>{if(!isFinite(hs))return p;let x=0,T=p;for(;x<T;){let O=x+T>>1;Po[O]<=hs?x=O+1:T=O}return x},Or=new Float32Array(p).fill(NaN),vu=new Float32Array(p),_l=!1,xl=()=>{_.forEach((x,T)=>K[T]=oi==="age"?sm(R(x)):G(x.folder))};xl();let ds=(x,T,O=1.4)=>{Ht.autoRotate=!1,F={t:0,dur:O,fp:Bt.position.clone(),ft:Ht.target.clone(),tp:x,tt:T}},zs=(x,T=1.4,O=80)=>{let X=Bt.position.clone().sub(D[x]);X.lengthSq()<1&&X.set(0,0,1),X.normalize(),ds(D[x].clone().add(X.multiplyScalar(O)),D[x].clone(),T)};this.onFile=x=>{Cn=x?S.get(x.path)??null:null,Bn&&Cn&&zs(v.get(Cn.id))};let yu=this.app.workspace.getActiveFile();yu&&(Cn=S.get(yu.path)??null);let ki=r.sound,Mu=0,hm=(x,T)=>{let O=x.createGain(),X=x.createBiquadFilter();X.type="highpass",X.frequency.value=160;let at=x.createBiquadFilter();at.type="lowpass",at.frequency.value=2400,O.connect(X),X.connect(at),at.connect(T),[{time:.37,fbk:.4},{time:.61,fbk:.35}].forEach(re=>{let ue=x.createDelay(2),Ve=x.createGain(),Ne=x.createGain();ue.delayTime.value=re.time,Ve.gain.value=re.fbk,Ne.gain.value=.45,at.connect(ue),ue.connect(Ve),Ve.connect(ue),ue.connect(Ne),Ne.connect(T)});let yt=[220,261.63,293.66,329.63,392],Yt=()=>{if(ki){let re=Math.random()<.35?2:1;for(let ue=0;ue<re;ue++){let Ve=yt[Math.random()*yt.length|0]*(Math.random()<.35?2:1),Ne=x.createGain(),In=x.currentTime;Ne.gain.setValueAtTime(0,In),Ne.gain.linearRampToValueAtTime(.05,In+3.2),Ne.gain.linearRampToValueAtTime(0,In+9),Ne.connect(O),[{fq:Ve,type:"sine",amp:1},{fq:Ve*1.004,type:"triangle",amp:.35}].forEach(Ce=>{let Wn=x.createOscillator(),ms=x.createGain();Wn.type=Ce.type,Wn.frequency.value=Ce.fq,ms.gain.value=Ce.amp,Wn.connect(ms),ms.connect(Ne),Wn.start(In),Wn.stop(In+9.2)})}}Mu=window.setTimeout(Yt,3500+Math.random()*4500)};Yt()},Rn=null,Vi=null,vl=()=>{if(!ki)return null;if(!Rn)try{Rn=new AudioContext,Vi=Rn.createGain(),Vi.gain.value=r.volume*.5,Vi.connect(Rn.destination),hm(Rn,Vi)}catch{return Rn=null,null}return Rn.state==="suspended"&&Rn.resume(),Rn},yl=(x,T=.07,O=.8)=>{let X=vl();if(!X||!Vi)return;let at=X.createOscillator(),yt=X.createGain();at.type="sine",at.frequency.value=x,yt.gain.setValueAtTime(0,X.currentTime),yt.gain.linearRampToValueAtTime(T,X.currentTime+.02),yt.gain.exponentialRampToValueAtTime(1e-4,X.currentTime+O),at.connect(yt),yt.connect(Vi),at.start(),at.stop(X.currentTime+O+.05)},Su=x=>em[(b.indexOf(_[x].folder)*2+_[x].deg%3)%5]*(_[x].deg>12?.5:1),Do=(x,T)=>{Ze(D[x],K[x].clone().lerp(new Vt(16777215),.4),T),et[x]=T,yl(Su(x)*2,.09,1.1)},Br=e.createDiv({cls:"n3d-legend"}),bu=new Map,wu=new Map,Eu=Br.createDiv({cls:"n3d-row n3d-all",text:o("showAll")}),Tu=Br.createDiv({cls:"n3d-row n3d-all",text:o("resetColors")}),Ml=Br.createDiv({cls:"n3d-agebar"});Ml.createDiv({cls:"bar"}),Ml.createDiv({cls:"lbl",text:o("ageLegend")});let zr=()=>{Eu.style.display=An.size?"":"none",Tu.style.display=Object.keys(W).length?"":"none",bu.forEach((x,T)=>x.toggleClass("off",An.size>0&&!An.has(T))),Ml.style.display=oi==="age"?"":"none",wu.forEach((x,T)=>{let O=oi==="age"?"#6b7399":"#"+G(T).getHexString();x.style.background=O,x.style.boxShadow=`0 0 6px ${O}`})};Eu.onclick=()=>{An.clear(),zr()};let Au=()=>{xl(),zr(),Zt.forEach(x=>{x&&x.sprite.material.color.copy(G(x.folder))}),ne.forEach(x=>x.mat.color.copy(G(x.n.folder)).lerp(new Vt(16777215),.45))};Tu.onclick=()=>{Object.keys(W).forEach(x=>delete W[x]),Au()},b.forEach(x=>{let T=Br.createDiv({cls:"n3d-row"});T.title=o("legendTip"),bu.set(x,T),T.onclick=()=>{An.has(x)?An.delete(x):An.add(x),zr()};let O=T.createSpan({cls:"dot"});O.title=o("colorTip"),wu.set(x,O);let X=T.createEl("input",{type:"color",cls:"n3d-pick"});X.onclick=at=>at.stopPropagation(),X.oninput=()=>{W[x]=X.value,Au()},O.onclick=at=>{if(at.stopPropagation(),oi==="age"){new Se.Notice(o("ageNotice"));return}X.value="#"+G(x).getHexString(),X.click()},T.appendText(x)}),zr(),Br.createDiv({cls:"n3d-hint",text:o("pulseHint",r.pulseDays)});let Cu=e.createDiv({cls:"n3d-ui"}),vn=(x,T)=>{let O=Cu.createEl("button",{text:x});return O.onclick=T,O},Sl=vn(o("rotation"),()=>{Ht.autoRotate=!Ht.autoRotate,Ht.autoRotateSpeed=u});Sl.title=o("rotationTip"),Sl.style.display=Gn?"none":"";let bl=vn(o("focus"),()=>{if(Bn=!Bn,bl.toggleClass("active",Bn),Bn&&!Cn){let x=this.app.workspace.getActiveFile();x&&(Cn=S.get(x.path)??null)}Bn&&Cn&&zs(v.get(Cn.id))});bl.toggleClass("active",Bn);let Ru=vn(o(oi==="age"?"colorAge":"colorFolder"),()=>{oi=oi==="age"?"folder":"age",Ru.setText(o(oi==="age"?"colorAge":"colorFolder")),xl(),zr()}),wl=vn(o("expansion"),()=>{ai=!ai,wl.toggleClass("active",ai),On.alpha(1).restart()});wl.toggleClass("active",ai);let El=vn(o("spiral"),()=>{Gn=!Gn,El.toggleClass("active",Gn),ds(new L(0,0,320),new L(0,0,0),2.2),Rl.style.display=Gn?"flex":"none",Sl.style.display=Gn?"none":""});El.toggleClass("active",Gn);let Lo=vn(o("route"),()=>{if(_i||Pe){ks();return}_i=!0,ls=-1,Lo.addClass("active"),new Se.Notice(o("routeStart"))});vn(o("cinema"),()=>pm()).title=o("cinemaTip"),vn(o("photo"),()=>{_l=!0}).title=o("photoTip");let Tl=vn(o("video"),()=>{Pn?Fo():Bu(!1)}),Al=vn(o("sound"),()=>{ki=!ki,Al.toggleClass("active",ki),ki&&vl(),Vi&&Rn&&Vi.gain.setTargetAtTime(ki?r.volume*.5:0,Rn.currentTime,.2)});Al.toggleClass("active",ki),vn(o("reorder"),()=>On.alpha(1).restart()).title=o("reorderTip"),vn(o("reset"),()=>ds(new L(0,0,320),new L(0,0,0))).title=o("resetTip");let Pu=e.createDiv({cls:"n3d-stats"});Pu.style.display=r.showStats?"":"none";let Cl=60,xi=e.createDiv({cls:"n3d-help"});xi.addClass("n3d-hidden"),xi.createDiv({cls:"h",text:o("helpTitle")});for(let x=1;x<=11;x++){let[T,O]=o("help"+x).split("|"),X=xi.createDiv({cls:"r"});X.createSpan({cls:"k",text:T}),X.createSpan({cls:"d",text:O})}xi.onclick=()=>{xi.addClass("n3d-hidden")},vn("?",()=>{xi.toggleClass("n3d-hidden",!xi.hasClass("n3d-hidden"))}).title=o("helpTip"),bl.title=o("focusTip"),Ru.title=o("colorTipBtn"),wl.title=o("expansionTip"),El.title=o("spiralTip"),Lo.title=o("routeTip"),Tl.title=o("videoTip"),Al.title=o("soundTip"),vn("\u2699",()=>{let x=this.app.setting;x?.open?.(),x?.openTabById?.(this.plugin.manifest.id)}).title=o("settings");let Rl=Cu.createDiv({cls:"n3d-spiralpanel"});Rl.style.display=Gn?"flex":"none";let Iu=(x,T,O,X,at,yt,Yt)=>{let re=Rl.createDiv({cls:"n3d-sl"});re.createSpan({text:x});let ue=re.createEl("input",{type:"range"});ue.min=String(T),ue.max=String(O),ue.step=String(X),ue.value=String(at);let Ve=re.createSpan({cls:"v",text:at+yt});ue.oninput=()=>{Yt(+ue.value),Ve.setText(ue.value+yt)}};Iu(o("tilt"),0,90,1,Eo,"\xB0",x=>{Eo=x}),Iu(o("spinSpeed"),0,3,.1,Nr,"\xD7",x=>{Nr=x});let Pl=e.createDiv({cls:"n3d-search"}),li=Pl.createEl("input",{type:"text",placeholder:o("search")});li.title=o("searchTip");let kr=Pl.createDiv({cls:"n3d-chip"});kr.addClass("n3d-hidden");let Vr=Pl.createDiv({cls:"n3d-results"}),Du=x=>{let T=v.get(x.id);zs(T),Do(T,performance.now()/1e3)},ks=()=>{Pe=null,Bs=null,_i=!1,ls=-1,qt=[],fl=null,pl=null,_t.setDrawRange(0,0),lt.removeClass("on"),kr.addClass("n3d-hidden"),Ye.length=0,Lo.removeClass("active")};kr.onclick=ks;let Lu=x=>{kr.setText("\u2726 "+x+"  \xD7"),kr.removeClass("n3d-hidden")},Nu=(x,T)=>{let O=new Int32Array(p).fill(-2);O[x]=-1;let X=[x];for(let yt=0;yt<X.length;yt++){let Yt=X[yt];if(Yt===T)break;V[Yt].forEach(re=>{O[re]===-2&&(O[re]=Yt,X.push(re))})}if(O[T]===-2)return null;let at=[];for(let yt=T;yt!==-1;yt=O[yt])at.push(yt);return at.reverse()},Uu=(x,T=!0)=>{ks(),Pe=new Set(x),Bs=new Set;for(let O=0;O+1<x.length;O++)Bs.add(Math.min(x[O],x[O+1])*p+Math.max(x[O],x[O+1]));Lu(o("routeChip",x.length-1)),T&&Ye.push(...x),fl=[_[x[0]].id,_[x[x.length-1]].id]},Il=(x,T=!0)=>{let O=ct.get(x);if(!O||!O.size)return;ks(),pl=x,Pe=new Set(O);let X=[...O],at=new Set([X[0]]);for(;at.size<X.length;){let ue=1/0,Ve=-1,Ne=-1;at.forEach(In=>X.forEach(Ce=>{if(at.has(Ce))return;let Wn=D[In].distanceToSquared(D[Ce]);Wn<ue&&(ue=Wn,Ve=In,Ne=Ce)})),at.add(Ne),qt.push([Ve,Ne])}let yt=new L;X.forEach(ue=>yt.add(D[ue])),yt.divideScalar(X.length);let Yt=0;X.forEach(ue=>{Yt=Math.max(Yt,D[ue].distanceTo(yt))}),lt.setText(x),lt.dataset.cx=yt.x+","+yt.y+","+yt.z,Lu(`${x} \xB7 ${X.length}`);let re=Bt.position.clone().sub(yt).normalize();T&&ds(yt.clone().add(re.multiplyScalar(Yt*2.1+60)),yt.clone())},Dl=()=>{let x=li.value.trim().toLowerCase();if(Vr.empty(),Ur=new Set,!x)return;if(x.startsWith("#")){[...ct.entries()].filter(([O])=>O.toLowerCase().includes(x)).sort((O,X)=>X[1].size-O[1].size).slice(0,8).forEach(([O,X])=>{let at=Vr.createDiv({cls:"n3d-result",text:`${O} \xB7 ${X.size}`});at.onclick=()=>{Il(O),li.value="",Vr.empty()}});return}let T=_.filter(O=>O.name.toLowerCase().includes(x));T.slice(0,80).forEach(O=>Ur.add(O.id)),T.slice(0,8).forEach(O=>{let X=Vr.createDiv({cls:"n3d-result",text:O.name}),at=X.createSpan({cls:"dot"});at.style.background="#"+G(O.folder).getHexString(),X.prepend(at),X.onclick=()=>Du(O)})};li.oninput=Dl,li.onkeydown=x=>{x.stopPropagation();let T=li.value.trim().toLowerCase();if(x.key==="Enter"&&T)if(T.startsWith("#")){let O=[...ct.keys()].find(X=>X.toLowerCase().includes(T));O&&(Il(O),li.value="",Vr.empty())}else{let O=_.find(X=>X.name.toLowerCase().includes(T));O&&Du(O)}x.key==="Escape"&&(li.value="",Dl())};let Hr=e.createDiv({cls:"n3d-time"}),fs=Hr.createEl("button",{text:"\u25B6"}),Ll=Hr.createEl("button",{text:"1\xD7"}),Nl=[.25,.5,1,2,4];Ll.onclick=()=>{Io=Nl[(Nl.indexOf(Io)+1)%Nl.length],Ll.setText(Io+"\xD7")};let No=Hr.createEl("button",{text:"\u23FA"});No.title=o("timelapse"),fs.title=o("playTip"),Ll.title=o("speedTip");let vi=Hr.createEl("input",{type:"range"});vi.min="0",vi.max="1000",vi.value="1000",vi.title=o("sliderTip");let Fu=Hr.createSpan({cls:"n3d-tlabel",text:o("today")+" \xB7 "+p}),Uo=x=>{if(cs=x,x>=1e3){hs=1/0,Fu.setText(o("today")+" \xB7 "+Po.length);return}let T=Math.max(1,Math.floor(x/1e3*Po.length));hs=Po[T-1],Fu.setText(new Date(hs).toLocaleDateString(l,{day:"numeric",month:"short",year:"numeric"})+" \xB7 "+T)};vi.oninput=()=>{us=!1,fs.setText("\u25B6"),Uo(+vi.value)},fs.onclick=()=>{if(us){us=!1,fs.setText("\u25B6");return}cs>=1e3&&(Uo(0),vi.value="0"),us=!0,fs.setText("\u275A\u275A")};let Pn=null,Ul=[],Ou=!1,Bu=x=>{if(Pn)return;if(typeof MediaRecorder>"u"||!kt.domElement.captureStream){new Se.Notice(o("videoUnsupported"));return}let T=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(O=>MediaRecorder.isTypeSupported(O));try{Pn=new MediaRecorder(kt.domElement.captureStream(30),{mimeType:T,videoBitsPerSecond:8e6})}catch{new Se.Notice(o("videoUnsupported"));return}Ul=[],Ou=x,Pn.ondataavailable=O=>{O.data.size&&Ul.push(O.data)},Pn.onstop=()=>{rm(new Blob(Ul,{type:"video/webm"}),`galaxie-${om()}.webm`),new Se.Notice(o("videoSaved")),Pn=null,Tl.removeClass("active"),No.removeClass("active")},Pn.start(250),Tl.addClass("active"),x&&No.addClass("active"),x||new Se.Notice(o("videoStart"))},Fo=()=>{Pn&&Pn.state!=="inactive"&&Pn.stop()};No.onclick=()=>{if(Pn){Fo();return}Bu(!0),Pn&&(Uo(0),vi.value="0",us=!0,fs.setText("\u275A\u275A"))};let ci=e.createEl("canvas",{cls:"n3d-mini"});ci.width=300,ci.height=300,ci.title=o("miniTip");let ke=ci.getContext("2d"),yi=1,ps=s.mini?.[0]??0,Hi=s.mini?.[1]??0,Gr=(x,T,O)=>{let X=Math.cos(ps),at=Math.sin(ps),yt=Math.cos(Hi),Yt=Math.sin(Hi),re=x*X+O*at,ue=-x*at+O*X;return[re,T*yt-ue*Yt,T*Yt+ue*yt]},um=(x,T,O)=>{let X=Math.cos(ps),at=Math.sin(ps),yt=Math.cos(Hi),Yt=Math.sin(Hi),re=T*yt+O*Yt,ue=-T*Yt+O*yt;return[x*X-ue*at,re,x*at+ue*X]},hi=null;ci.onpointerdown=x=>{hi={x:x.clientX,y:x.clientY,moved:!1},ci.setPointerCapture(x.pointerId)},ci.onpointermove=x=>{if(!hi)return;let T=x.clientX-hi.x,O=x.clientY-hi.y;!hi.moved&&Math.hypot(T,O)<4||(hi.moved=!0,ps+=T*.012,Hi=Math.max(-1.5,Math.min(1.5,Hi+O*.012)),hi.x=x.clientX,hi.y=x.clientY)},ci.onpointerup=x=>{let T=hi;if(hi=null,!T||T.moved)return;let O=ci.getBoundingClientRect(),X=((x.clientX-O.left)/O.width*300-150)/yi,at=-((x.clientY-O.top)/O.height*300-150)/yi,yt=Gr(Ht.target.x,Ht.target.y,Ht.target.z)[2],Yt=um(X,at,yt),re=new L(Yt[0],Yt[1],Yt[2]);ds(Bt.position.clone().add(re.clone().sub(Ht.target)),re)},ci.ondblclick=()=>{ps=0,Hi=0};let un=e.createDiv({cls:"n3d-card"}),Fl=new Map,Oo="",zu=0,Ol=0,Bl=0,dm=x=>{let T=v.get(x.id);un.empty(),un.createDiv({cls:"t",text:x.name}),un.createDiv({cls:"m",text:o("cardMeta",x.folder,x.deg,new Date(x.mtime).toLocaleDateString(l))});let O=[];Pt[T]&&O.push("\u2610 "+o("cardTasks",Pt[T])),Kt[T]&&O.push("\u25CE "+o("cardAttach",Kt[T])),O.length&&un.createDiv({cls:"m",text:O.join("   ")}),xt[T].length&&un.createDiv({cls:"g",text:xt[T].slice(0,6).join("  ")});let X=un.createDiv({cls:"b",text:Fl.get(x.id)??"\u2026"});if(!Fl.has(x.id)){let at=this.app.vault.getAbstractFileByPath(x.path);at instanceof Se.TFile&&this.app.vault.cachedRead(at).then(yt=>{let Yt=yt.replace(/^---[\s\S]*?---\s*/,"").replace(/[#>*_`]|\[\[|\]\]|!\[/g,"").replace(/\s+/g," ").trim().slice(0,190);Fl.set(x.id,Yt||o("cardEmpty")),Oo==="n:"+x.id&&X.setText(Yt||o("cardEmpty"))})}},fm=x=>{un.empty(),un.createDiv({cls:"t",text:$[x].name}),un.createDiv({cls:"g",text:"\u2726 "+o("dmTitle")}),un.createDiv({cls:"b",text:o("dmInfo",$[x].srcs.length)})},Wr=e.createDiv({cls:"n3d-cine"}),zl=e.createDiv({cls:"n3d-cinehint",text:o("cineHint")}),kl=[..._.keys()].sort((x,T)=>_[T].deg-_[x].deg).slice(0,8),pm=()=>{p&&(ks(),ve.on=!0,ve.step=-1,ve.wait=0,ve.target=-1,e.addClass("n3d-cinema"),zl.removeClass("show"),zl.offsetWidth,zl.addClass("show"))},ku=()=>{ve.on=!1,ve.target=-1,Wr.setText(""),Wr.removeClass("on"),e.removeClass("n3d-cinema"),Ht.autoRotate=!1,Ht.autoRotateSpeed=u},Vu=new Ha,Hu=new At,ui=kt.domElement,Gu=x=>{let T=ui.getBoundingClientRect();Hu.set((x.clientX-T.left)/T.width*2-1,-((x.clientY-T.top)/T.height)*2+1),Ol=x.clientX-T.left,Bl=x.clientY-T.top},Vl=[0,0],Wu=x=>{Vl=[x.clientX,x.clientY],Ht.autoRotate=!1,F=null,Ye.length=0,vl(),ve.on&&ku()},Bo=null,Xu=async(x,T)=>{let O=this.app.vault.getAbstractFileByPath(x);if(!(O instanceof Se.TFile))return;if(T){await this.app.workspace.getLeaf("tab").openFile(O);return}let X=!1;Bo&&this.app.workspace.iterateAllLeaves(at=>{at===Bo&&(X=!0)}),X||(Bo=this.app.workspace.getLeaf("split","vertical")),await Bo.openFile(O,{active:!1})},mm=async x=>{let T=$[x],O=_[T.srcs[0]],X=T.name.includes("/")?"":this.app.fileManager.getNewFileParent(O.path).path,at=T.name.toLowerCase().endsWith(".md")?T.name:T.name+".md",yt=(0,Se.normalizePath)((X&&X!=="/"?X+"/":"")+at);try{let Yt=yt.lastIndexOf("/");Yt>0&&!this.app.vault.getAbstractFileByPath(yt.slice(0,Yt))&&await this.app.vault.createFolder(yt.slice(0,Yt));let re=await this.app.vault.create(yt,"");new Se.Notice(o("dmCreated",T.name)),yl(em[0]*2,.1,1.4),Ze(N[x],ze.clone().lerp(new Vt(16777215),.4),performance.now()/1e3),Xu(re.path,!1)}catch{new Se.Notice(o("dmFail",T.name))}},qu=x=>{if(Math.hypot(x.clientX-Vl[0],x.clientY-Vl[1])>4)return;if(!Je&&gi>=0&&!_i){mm(gi);return}if(!Je)return;let T=v.get(Je.id);if(Do(T,performance.now()/1e3),_i){if(ls<0){ls=T,new Se.Notice(o("routeFrom",Je.name));return}let O=T===ls?null:Nu(ls,T);_i=!1,Lo.removeClass("active"),O?Uu(O):new Se.Notice(o("routeNone")),ls=-1;return}Cn=Je,Bn&&zs(T),Xu(Je.path,x.ctrlKey||x.metaKey)},Yu=()=>{Je&&!_i&&zs(v.get(Je.id))},Zu=x=>{x.key!=="Escape"||e.clientWidth===0||(xi.hasClass("n3d-hidden")?ve.on?ku():(Pe||_i)&&ks():xi.addClass("n3d-hidden"))};ui.addEventListener("pointermove",Gu),ui.addEventListener("pointerdown",Wu),ui.addEventListener("pointerup",qu),ui.addEventListener("dblclick",Yu),window.addEventListener("keydown",Zu),this.live={modify:x=>{let T=v.get(x);if(T===void 0)return;let O=performance.now()/1e3;O-Q[T]<3||(Q[T]=O,pt[T]=!0,_[T].mtime=Date.now(),oi==="age"&&(K[T]=sm(R(_[T]))),Do(T,O))},structural:()=>this.scheduleRebuild(),resolved:()=>{let x=U();x!==E&&(E=x,this.scheduleRebuild())}};let Ku=()=>{let x={};_.forEach(T=>{x[T.id]=[Math.round((T.x??0)*100)/100,Math.round((T.y??0)*100)/100,Math.round((T.z??0)*100)/100]}),this.state={cam:Bt.position.toArray(),target:Ht.target.toArray(),selected:[...An],focusOn:Bn,colorMode:oi,expansion:ai,disc:Gn,colors:W,tilt:Eo,spinSpeed:Nr,pos:x,query:li.value,route:fl??void 0,tag:pl??void 0,sig:Rr,mini:[ps,Hi]};try{this.app.saveLocalStorage(this.storeKey(),this.state)}catch{}},gm=window.setInterval(Ku,5e3),we=new L,Xr=new L,Ju=new Uint8Array(A.length),qr=[],$u=performance.now()/1e3,Vs=0,ju=100,_m=()=>{let x=kt.domElement,T=createEl("canvas");T.width=x.width,T.height=x.height;let O=T.getContext("2d"),X=O.createRadialGradient(T.width*.5,T.height*.4,0,T.width*.5,T.height*.4,Math.max(T.width,T.height)*.75);X.addColorStop(0,"#12162b"),X.addColorStop(1,"#05060d"),O.fillStyle=X,O.fillRect(0,0,T.width,T.height),O.drawImage(x,0,0),T.toBlob(at=>{at&&(rm(at,`galaxie-${om()}.png`),new Se.Notice(o("photoSaved")))},"image/png")},xm=x=>{zn++,Co=x,x-gu<60&&(ml=Math.min(300,ml*2)),zn===1&&(Xt.setPixelRatio(1),kt.setPixelRatio(1),kt.setSize(Rt(),Lt()),Xt.setSize(Rt(),Lt())),zn===2&&(jt.enabled=!1,Bi.visible=!1);let T=Math.round(St*xu[Math.min(zn,2)]);for(let O=T;O<St;O++){Qe[O]=-1;for(let X=0;X<se*3;X++)_n[O*se*3+X]=0}_u||(_u=!0,new Se.Notice(o("throttle")))},vm=x=>{if(zn--,Co=x,gu=x,Fr=45,zn===1&&(jt.enabled=r.lens&&!r.performance&&rt.length>0,Bi.visible=!0),zn===0){let T=Math.min(window.devicePixelRatio,2);Xt.setPixelRatio(T),kt.setPixelRatio(T),kt.setSize(Rt(),Lt()),Xt.setSize(Rt(),Lt())}},Qu=()=>{if(this.raf=window.requestAnimationFrame(Qu),!e.isConnected||e.clientWidth===0)return;let x=performance.now()/1e3,T=x-$u,O=Math.min(.05,T);if($u=x,Vs++,T>0&&T<.25&&(Cl+=(1/T-Cl)*.05),r.showStats&&Vs%20===0&&Pu.setText(`${Math.round(Cl)} fps \xB7 ${p} notes \xB7 ${A.length} links \xB7 effects ${zn===0?"full":zn===1?"reduced":"minimal"} \xB7 ${kt.info.render.calls} draw calls`),r.autoThrottle&&!r.performance&&Vs>180&&T>0&&T<.25&&!Pn&&(Fr+=(1/T-Fr)*.04,To=Fr<38?To+1:0,Ao=Fr>56?Ao+1:0,zn<2&&To>150&&x-Co>6?(To=0,xm(x)):zn>0&&Ao>600&&x-Co>ml&&(Ao=0,vm(x))),F){F.t+=O;let k=aM(Math.min(1,F.t/F.dur));Bt.position.lerpVectors(F.fp,F.tp,k),Ht.target.lerpVectors(F.ft,F.tt,k),F.t>=F.dur&&(F=null)}if(!F&&Ye.length&&!ve.on&&zs(Ye.shift(),1.1,70),ve.on&&!F)if(Ht.autoRotate=!0,Ht.autoRotateSpeed=u*3.1,ve.wait>0)ve.wait-=O;else{if(ve.step=(ve.step+1)%(kl.length+1),ve.step===kl.length)ve.target=-1,Wr.removeClass("on"),ds(new L(0,0,330),new L(0,0,0),6);else{let k=kl[ve.step];ve.target=k;let j=new L(Fn(-1,1),Fn(-.35,.35),Fn(-1,1)).normalize();ds(D[k].clone().addScaledVector(j,120),D[k].clone(),6.5),Wr.setText(_[k].name),Wr.addClass("on")}ve.wait=2.8}Ht.update(),us&&(cs+=O*1e3/r.timeSeconds*Io,cs>=1e3&&(cs=1e3,us=!1,fs.setText("\u25B6"),Ou&&window.setTimeout(Fo,1500)),vi.value=String(cs),Uo(cs)),dl+=O*.03*Nr;let X=Math.cos(dl),at=Math.sin(dl);as+=((Gn?1:0)-as)*Math.min(1,O*1.6),Lr+=((ai&&r.rings?1:0)-Lr)*Math.min(1,O*2),wo+=((ai?1:0)-wo)*Math.min(1,O*2);let yt=r.denseCore?1:1-wo*.45*(1-Math.min(1,900/Math.max(p,1))),Yt=ai&&isFinite(hs),re=Yt?cm():p;if(_.forEach((k,j)=>{let vt=k.x??0,Dt=k.y??0,Jt=k.z??0;if(J[j])D[j].set(vt*X-Jt*at,Dt,vt*at+Jt*X);else{let Tt=Math.hypot(vt,Dt,Jt)||1,oe=Yt?gl[j]<re?w((re-1-gl[j])/Math.max(1,p-1)):w(0):Tt;Or[j]=Number.isNaN(Or[j])?Tt:Or[j]+(oe-Or[j])*Math.min(1,O*3);let ee=Or[j]/Tt;D[j].set(vt*ee,Dt*ee,Jt*ee)}if(as>.001){let Tt=D[j];Tt.y*=1-.93*as,vu[j]+=O*as*c*Nr/(1+Math.hypot(Tt.x,Tt.z)/40);let oe=vu[j]*as,ee=Math.cos(oe),ye=Math.sin(oe),Ue=Tt.x*ee-Tt.z*ye,Fe=Tt.x*ye+Tt.z*ee;Tt.x=Ue,Tt.z=Fe;let He=Eo*Math.PI/180*as,Xn=Math.cos(He),ed=Math.sin(He),Mm=Tt.y*Xn-Tt.z*ed,Sm=Tt.y*ed+Tt.z*Xn;Tt.y=Mm,Tt.z=Sm}}),st.length&&(st.forEach(k=>Do(k,x)),st.length=0),bt.length&&(bt.forEach(k=>Ze(k,new Vt(16751226),x)),bt.length=0),Ro){let k=Ro;Ro=null,k()}Vu.setFromCamera(Hu,Bt);let ue=ve.on?void 0:Vu.intersectObjects(y,!1).find(k=>{let j=k.object.userData.node;return mi(j)&&Z[v.get(j.id)]>.5});Je=ue?ue.object.userData.node:null;let Ve=Rt(),Ne=Lt();if(gi=-1,!Je&&!ve.on&&ce){let k=13;for(let j=0;j<ce;j++){if(we.copy(N[j]).project(Bt),we.z>1)continue;let vt=Math.hypot((we.x*.5+.5)*Ve-Ol,(-we.y*.5+.5)*Ne-Bl);vt<k&&$[j].srcs.some(Dt=>Z[Dt]>.5&&mi(_[Dt]))&&(k=vt,gi=j)}}ui.style.cursor=_i?"crosshair":Je||gi>=0?"pointer":"grab";let In=ve.on?ve.target>=0?_[ve.target]:null:Je??(Bn?Cn:null),Ce=In?v.get(In.id):-1,Wn=In?V[Ce]:null,ms=k=>mi(_[k])&&(Pe?Pe.has(k)||k===Ce:Ce<0||k===Ce||Wn.has(k)),td=Je?"n:"+Je.id:gi>=0?"d:"+gi:"";td!==Oo&&(Oo=td,zu=x,un.removeClass("on"),Je&&yl(Su(v.get(Je.id)),.035,.5)),Oo&&x-zu>.35&&(un.hasClass("on")||(Je?dm(Je):fm(gi),un.addClass("on")),un.style.left=Math.min(Ol+18,Ve-270)+"px",un.style.top=Math.min(Bl+18,Ne-140)+"px"),_.forEach((k,j)=>{let vt=y[j],Dt=k.ctime<=hs;if(Z[j]+=((Dt?1:0)-Z[j])*Math.min(1,O*6),vt.visible=Z[j]>.02,!vt.visible)return;vt.position.copy(D[j]);let Jt=(ms(j)?j===Ce?1.8:Pe?1.3:.9:.12)*yt,Tt=vt.userData.base*Z[j];if(pt[j]){let ee=Math.sin(x*2.2+j);Jt*=1+.35*ee,Tt*=1+.22*ee}if((Bn&&k===Cn||j===ve.target)&&(Tt*=1.6),et[j]){let ee=(x-et[j])/1.2;ee<1?(Jt+=3*(1-ee)*(1-ee),Tt*=1+.8*(1-ee)):et[j]=0}Ur.has(k.id)&&(Jt*=1.7+.7*Math.sin(x*6)),J[j]&&(Jt*=.65),vt.scale.setScalar(Tt);let oe=vt.material;Y[j]?oe.color.setRGB(0,0,0):oe.color.copy(K[j]).multiplyScalar(Jt)}),qr.length=0;for(let k=0;k<A.length;k++){let j=M[k],vt=B[k],Dt=_[j],Jt=_[vt],Tt=k*6;it[Tt]=D[j].x,it[Tt+1]=D[j].y,it[Tt+2]=D[j].z,it[Tt+3]=D[vt].x,it[Tt+4]=D[vt].y,it[Tt+5]=D[vt].z;let oe=Math.min(Z[j],Z[vt]),ee=Pe?Pe.has(j)&&Pe.has(vt)&&(!Bs||Bs.has(H[k])):Ce<0||j===Ce||vt===Ce,ye=oe>.05&&mi(Dt)&&mi(Jt)&&ee;Ju[k]=ye?1:0,ye&&qr.push(k);let Ue=ye&&!!Bs,Fe=(oe<.05?0:Ue?2.2:ye?Ce>=0||Pe?1.2:.55:.03)*oe,He=Ue?tm:K[j],Xn=Ue?tm:K[vt];gt[Tt]=He.r*Fe,gt[Tt+1]=He.g*Fe,gt[Tt+2]=He.b*Fe,gt[Tt+3]=Xn.r*Fe,gt[Tt+4]=Xn.g*Fe,gt[Tt+5]=Xn.b*Fe}Ut.attributes.position.needsUpdate=!0,Ut.attributes.color.needsUpdate=!0,Ft.rotation.y+=8e-5;for(let k=0;k<ce;k++){let j=$[k];Xr.set(0,0,0);let vt=0,Dt=0;j.srcs.forEach(oe=>{Xr.add(D[oe]),vt=Math.max(vt,Z[oe]),mi(_[oe])&&(Dt=Math.max(Dt,1))}),Xr.divideScalar(j.srcs.length),N[k].copy(Xr).add(j.off),ht[k*3]=N[k].x,ht[k*3+1]=N[k].y,ht[k*3+2]=N[k].z;let Jt=.55+.25*Math.sin(x*1.3+k),Tt=Ce>=0?j.srcs.includes(Ce):Pe?j.srcs.some(oe=>Pe.has(oe)):!0;Jt*=vt*Dt*(Tt?1:.12)*(k===gi?2.6:1),q[k*3]=ze.r*Jt,q[k*3+1]=ze.g*Jt,q[k*3+2]=ze.b*Jt}if(ce&&(tt.attributes.position.needsUpdate=!0,tt.attributes.color.needsUpdate=!0,ut.forEach(([k,j],vt)=>{let Dt=vt*6;Gt[Dt]=N[k].x,Gt[Dt+1]=N[k].y,Gt[Dt+2]=N[k].z,Gt[Dt+3]=D[j].x,Gt[Dt+4]=D[j].y,Gt[Dt+5]=D[j].z;let Jt=Math.min(1,Z[j])*(mi(_[j])?1:0)*(Ce>=0?j===Ce?1:.03:Pe?Pe.has(j)?.8:.03:.35)*.55;me[Dt]=me[Dt+3]=ze.r*Jt,me[Dt+1]=me[Dt+4]=ze.g*Jt,me[Dt+2]=me[Dt+5]=ze.b*Jt}),Le.attributes.position.needsUpdate=!0,Le.attributes.color.needsUpdate=!0),nn.length&&(nn.forEach((k,j)=>{let vt=k.i,Dt=y[vt].userData.base,Jt=k.planet?Dt*4.2+7:Dt*2.4+3,Tt=x*k.speed+k.phase,oe=D[vt];ss[j*3]=oe.x+(k.u.x*Math.cos(Tt)+k.v.x*Math.sin(Tt))*Jt,ss[j*3+1]=oe.y+(k.u.y*Math.cos(Tt)+k.v.y*Math.sin(Tt))*Jt,ss[j*3+2]=oe.z+(k.u.z*Math.cos(Tt)+k.v.z*Math.sin(Tt))*Jt;let ee=(Z[vt]>.5?1:0)*(ms(vt)?1.5:.08);k.planet?(si[j*3]=.6*ee,si[j*3+1]=.9*ee,si[j*3+2]=1*ee):(si[j*3]=1*ee,si[j*3+1]=.5*ee,si[j*3+2]=.34*ee)}),wn.attributes.position.needsUpdate=!0,wn.attributes.color.needsUpdate=!0),zi.visible=Lr>.02,zi.visible){Cr.opacity=.22*Lr;let k=Lr>.5&&!ve.on;wt.toggleClass("on",k),Et.toggleClass("on",k),[[wt,244],[Et,34]].forEach(([j,vt])=>{we.set(vt,0,0).project(Bt),j.style.left=(we.x*.5+.5)*Ve+"px",j.style.top=(-we.y*.5+.5)*Ne+"px",we.z>1&&j.removeClass("on")})}else wt.removeClass("on"),Et.removeClass("on");if(qt.length){qt.forEach(([Dt,Jt],Tt)=>{Ot[Tt*6]=D[Dt].x,Ot[Tt*6+1]=D[Dt].y,Ot[Tt*6+2]=D[Dt].z,Ot[Tt*6+3]=D[Jt].x,Ot[Tt*6+4]=D[Jt].y,Ot[Tt*6+5]=D[Jt].z}),_t.setDrawRange(0,qt.length*2),_t.attributes.position.needsUpdate=!0;let[k,j,vt]=(lt.dataset.cx??"0,0,0").split(",").map(Number);we.set(k,j,vt).project(Bt),lt.toggleClass("on",we.z<1),lt.style.left=(we.x*.5+.5)*Ve+"px",lt.style.top=(-we.y*.5+.5)*Ne+"px"}let ym=Math.round(St*xu[Math.min(zn,2)]);for(let k=0;k<ym;k++){if(ae[k]+=hn[k]*O,Qe[k]<0||ae[k]>=1||!Ju[Qe[k]])if(qr.length){let j=hn[k]===0;Qe[k]=qr[Math.random()*qr.length|0],ae[k]=j?Math.random():0,hn[k]=Fn(.28,.65),ri[k]=Math.random()<.5?1:-1}else Qe[k]=-1;for(let j=0;j<se;j++){let vt=k*se*3+j*3;if(Qe[k]<0){_n[vt]=_n[vt+1]=_n[vt+2]=0;continue}let Dt=Qe[k],Jt=Math.min(1,Math.max(0,ae[k]-os[j])),Tt=ri[k]>0?Jt:1-Jt,oe=D[M[Dt]],ee=D[B[Dt]];Ke[vt]=oe.x+(ee.x-oe.x)*Tt,Ke[vt+1]=oe.y+(ee.y-oe.y)*Tt,Ke[vt+2]=oe.z+(ee.z-oe.z)*Tt;let ye=K[ri[k]>0?M[Dt]:B[Dt]],Ue=xn[j]*Math.sin(Math.PI*Math.min(1,Math.max(0,ae[k])))*(Ce>=0||Pe?1.5:1),Fe=j===0?.6:j===1?.25:0;_n[vt]=(ye.r+(1-ye.r)*Fe)*Ue,_n[vt+1]=(ye.g+(1-ye.g)*Fe)*Ue,_n[vt+2]=(ye.b+(1-ye.b)*Fe)*Ue}}pe.attributes.position.needsUpdate=!0,pe.attributes.color.needsUpdate=!0,Zt.forEach(k=>{if(!k)return;let j=0,vt=0,Dt=0,Jt=0;k.members.forEach(He=>{Z[He]>.5&&(j+=D[He].x,vt+=D[He].y,Dt+=D[He].z,Jt++)});let Tt=An.size===0||An.has(k.folder);if(Jt<3){k.sprite.material.opacity=0,k.label.removeClass("on");return}j/=Jt,vt/=Jt,Dt/=Jt;let oe=0;k.members.forEach(He=>{Z[He]>.5&&(oe+=Math.hypot(D[He].x-j,D[He].y-vt,D[He].z-Dt))}),oe=oe/Jt*2.4+30,k.sprite.position.set(j,vt,Dt),k.sprite.scale.setScalar(oe*2.2);let ee=Bt.position.distanceTo(k.sprite.position),ye=Math.min(1,Math.max(0,(ee-oe*.5)/(oe*1.3))),Ue=ye*ye*(3-2*ye);k.sprite.material.opacity=.14*r.nebula*lm*(1-(r.denseCore?0:.35)*wo)*Ue*(An.size===0?1:Tt?1.6:.12)*(Pe?.4:1),we.set(j,vt,Dt).project(Bt);let Fe=we.z<1&&!In&&!Pe&&Ue>.15&&Tt&&r.nebula>.05;k.label.toggleClass("on",Fe),Fe&&(k.label.style.left=(we.x*.5+.5)*Ve+"px",k.label.style.top=(-we.y*.5+.5)*Ne+"px")});let Hl=am.uniforms.uHoles.value;jt.uniforms.uAspect.value=Ve/Ne,ne.forEach((k,j)=>{k.mesh.visible=y[k.i].visible,k.mesh.position.copy(D[k.i]);let vt=y[k.i].scale.x*3.2;if(k.mesh.scale.setScalar(vt),k.mesh.rotation.z+=O*.5*c,k.mat.opacity=(ms(k.i)?.95:.08)*Math.min(1,Z[k.i]),we.copy(D[k.i]).project(Bt),we.z<1&&k.mesh.visible){let Dt=Bt.position.distanceTo(D[k.i]);Hl[j].set(we.x*.5+.5,we.y*.5+.5,vt/(Dt*Math.tan(Bt.fov*Math.PI/360))*.5*.9)}else Hl[j].z=0});for(let k=ne.length;k<3;k++)Hl[k].z=0;let zo=ve.on?ve.target:Bn&&Cn?v.get(Cn.id):-1;Qt.visible=zo>=0&&Z[zo]>.5,Qt.visible&&(Qt.position.copy(D[zo]),Qt.scale.setScalar(50+8*Math.sin(x*1.8)),Qt.material.color.copy(K[zo]).lerp(new Vt(16777215),.5));for(let k=fe.length-1;k>=0;k--){let j=(x-fe[k].t0)/1.3,vt=fe[k].sprite;if(j>=1){Nt.remove(vt),vt.material.dispose(),fe.splice(k,1);continue}vt.scale.setScalar(10+j*120),vt.material.opacity=.95*(1-j)*(1-j)}if(!Ae.active&&x>Ae.next&&r.shootingStars){Bt.getWorldDirection(we);let k=Xr.crossVectors(we,Bt.up).normalize().clone(),j=new L().crossVectors(k,we).normalize();Ae.head.copy(Bt.position).addScaledVector(we,500).addScaledVector(k,Fn(-380,380)).addScaledVector(j,Fn(-100,300)),Ae.dir.copy(k).multiplyScalar(Fn(-1,1)).addScaledVector(j,-Fn(.25,.8)).normalize(),Ae.active=!0,Ae.t=0,Ae.dur=Fn(.6,1)}if(Ae.active){Ae.t+=O,Ae.head.addScaledVector(Ae.dir,850*O);let k=150*Math.min(1,Ae.t*6);sn[3]=Ae.head.x,sn[4]=Ae.head.y,sn[5]=Ae.head.z,sn[0]=Ae.head.x-Ae.dir.x*k,sn[1]=Ae.head.y-Ae.dir.y*k,sn[2]=Ae.head.z-Ae.dir.z*k,Tn.attributes.position.needsUpdate=!0,ul.opacity=Math.max(0,1-Ae.t/Ae.dur),Ae.t>=Ae.dur&&(Ae.active=!1,ul.opacity=0,Ae.next=x+Fn(4,10))}if(_.forEach((k,j)=>{let vt=Z[j]>.5&&mi(k)&&!ve.on&&(j===Ce||(Wn?.has(j)??!1)||!Pe&&Ce<0&&Ct.has(k.id)||!!Pe&&Pe.size<=14&&Pe.has(j)||Ur.has(k.id)&&Ur.size<=8),Dt=ot[j];if(Dt.toggleClass("on",vt),!!vt){if(we.copy(D[j]).project(Bt),we.z>1){Dt.removeClass("on");return}Dt.style.left=(we.x*.5+.5)*Ve+"px",Dt.style.top=(-we.y*.5+.5)*Ne+"px"}}),Vs%2===0){if(Vs%40===2||Vs<5){let ee=_.map((ye,Ue)=>{let Fe=Gr(D[Ue].x,D[Ue].y,D[Ue].z);return Math.max(Math.abs(Fe[0]),Math.abs(Fe[1]))}).sort((ye,Ue)=>ye-Ue);ju=Math.max(40,ee[Math.min(ee.length-1,Math.floor(ee.length*.9))]??100)*1.15}yi=140/ju;let k=ee=>Math.max(-145,Math.min(145,ee));ke.clearRect(0,0,300,300),_.forEach((ee,ye)=>{if(Z[ye]<.05)return;ke.globalAlpha=(mi(ee)?.9:.12)*Math.min(1,Z[ye]),ke.fillStyle="#"+K[ye].getHexString();let Ue=Gr(D[ye].x,D[ye].y,D[ye].z),Fe=150+k(Ue[0]*yi),He=150-k(Ue[1]*yi);if(Y[ye])ke.beginPath(),ke.arc(Fe,He,4,0,Math.PI*2),ke.fill();else{let Xn=1.6+Math.min(2,ee.deg*.08);ke.fillRect(Fe-Xn/2,He-Xn/2,Xn,Xn)}}),ke.globalAlpha=.9,ke.strokeStyle="#ffffff",ke.lineWidth=2;let j=Gr(Ht.target.x,Ht.target.y,Ht.target.z),vt=150+k(j[0]*yi),Dt=150-k(j[1]*yi);ke.beginPath(),ke.arc(vt,Dt,9,0,Math.PI*2),ke.stroke();let Jt=Gr(Bt.position.x,Bt.position.y,Bt.position.z),Tt=150+k(Jt[0]*yi),oe=150-k(Jt[1]*yi);ke.globalAlpha=.5,ke.beginPath(),ke.moveTo(vt,Dt),ke.lineTo(Tt,oe),ke.stroke(),ke.globalAlpha=1}Xt.render(),_l&&(_l=!1,_m())};Ro=()=>{if(s.query&&(li.value=s.query,Dl()),s.tag)Il(s.tag,!1);else if(s.route){let x=v.get(s.route[0]),T=v.get(s.route[1]);if(x!==void 0&&T!==void 0){let O=Nu(x,T);O&&Uu(O,!1)}}},Qu(),this.ro=new ResizeObserver(()=>{kt.setSize(Rt(),Lt()),Xt.setSize(Rt(),Lt()),Bt.aspect=Rt()/Lt(),Bt.updateProjectionMatrix()}),this.ro.observe(e),this.disposeFns.push(()=>{if(Ku(),Fo(),window.clearInterval(gm),window.removeEventListener("keydown",Zu),On.stop(),ui.removeEventListener("pointermove",Gu),ui.removeEventListener("pointerdown",Wu),ui.removeEventListener("pointerup",qu),ui.removeEventListener("dblclick",Yu),Ht.dispose(),window.clearTimeout(Mu),Rn)try{Rn.close()}catch{}})}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

/* nosourcemap */