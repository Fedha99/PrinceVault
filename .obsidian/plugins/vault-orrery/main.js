/*
 * Vault Orrery — bundled by esbuild. Do not edit main.js directly.
 * Engine source: vault-orrery-v2.html  ->  scripts/build-engine.mjs
 */

var sf=Object.defineProperty;var aS=Object.getOwnPropertyDescriptor;var sS=Object.getOwnPropertyNames;var lS=Object.prototype.hasOwnProperty;var cS=(r,e)=>{for(var t in e)sf(r,t,{get:e[t],enumerable:!0})},dS=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of sS(e))!lS.call(r,a)&&a!==t&&sf(r,a,{get:()=>e[a],enumerable:!(i=aS(e,a))||i.enumerable});return r};var hS=r=>dS(sf({},"__esModule",{value:!0}),r);var q2={};cS(q2,{default:()=>Ch});module.exports=hS(q2);var Xi=require("obsidian");var Mi=require("obsidian");var Wn=[];for(let r=0;r<256;r++)Wn[r]=(r<16?"0":"")+r.toString(16);var Bd=Math.PI/180,lf=180/Math.PI;function Fi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]).toUpperCase()}function xi(r,e,t){return Math.max(e,Math.min(t,r))}function P0(r,e){return(r%e+e)%e}function Ud(r,e,t){return(1-t)*r+t*e}function cf(r){return(r&r-1)===0&&r!==0}function F0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function N0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var yi=class{constructor(e=0,t=0,i=0,a=1){this._x=e,this._y=t,this._z=i,this._w=a}static slerp(e,t,i,a){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,a)}static slerpFlat(e,t,i,a,l,d,p){let v=i[a+0],g=i[a+1],_=i[a+2],b=i[a+3],w=l[d+0],f=l[d+1],C=l[d+2],R=l[d+3];if(p===0){e[t+0]=v,e[t+1]=g,e[t+2]=_,e[t+3]=b;return}if(p===1){e[t+0]=w,e[t+1]=f,e[t+2]=C,e[t+3]=R;return}if(b!==R||v!==w||g!==f||_!==C){let I=1-p,E=v*w+g*f+_*C+b*R,x=E>=0?1:-1,Y=1-E*E;if(Y>Number.EPSILON){let Q=Math.sqrt(Y),F=Math.atan2(Q,E*x);I=Math.sin(I*F)/Q,p=Math.sin(p*F)/Q}let W=p*x;if(v=v*I+w*W,g=g*I+f*W,_=_*I+C*W,b=b*I+R*W,I===1-p){let Q=1/Math.sqrt(v*v+g*g+_*_+b*b);v*=Q,g*=Q,_*=Q,b*=Q}}e[t]=v,e[t+1]=g,e[t+2]=_,e[t+3]=b}static multiplyQuaternionsFlat(e,t,i,a,l,d){let p=i[a],v=i[a+1],g=i[a+2],_=i[a+3],b=l[d],w=l[d+1],f=l[d+2],C=l[d+3];return e[t]=p*C+_*b+v*f-g*w,e[t+1]=v*C+_*w+g*b-p*f,e[t+2]=g*C+_*f+p*w-v*b,e[t+3]=_*C-p*b-v*w-g*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,a=e._y,l=e._z,d=e._order,p=Math.cos,v=Math.sin,g=p(i/2),_=p(a/2),b=p(l/2),w=v(i/2),f=v(a/2),C=v(l/2);switch(d){case"XYZ":this._x=w*_*b+g*f*C,this._y=g*f*b-w*_*C,this._z=g*_*C+w*f*b,this._w=g*_*b-w*f*C;break;case"YXZ":this._x=w*_*b+g*f*C,this._y=g*f*b-w*_*C,this._z=g*_*C-w*f*b,this._w=g*_*b+w*f*C;break;case"ZXY":this._x=w*_*b-g*f*C,this._y=g*f*b+w*_*C,this._z=g*_*C+w*f*b,this._w=g*_*b-w*f*C;break;case"ZYX":this._x=w*_*b-g*f*C,this._y=g*f*b+w*_*C,this._z=g*_*C-w*f*b,this._w=g*_*b+w*f*C;break;case"YZX":this._x=w*_*b+g*f*C,this._y=g*f*b+w*_*C,this._z=g*_*C-w*f*b,this._w=g*_*b-w*f*C;break;case"XZY":this._x=w*_*b-g*f*C,this._y=g*f*b-w*_*C,this._z=g*_*C+w*f*b,this._w=g*_*b+w*f*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],a=t[4],l=t[8],d=t[1],p=t[5],v=t[9],g=t[2],_=t[6],b=t[10],w=i+p+b;if(w>0){let f=.5/Math.sqrt(w+1);this._w=.25/f,this._x=(_-v)*f,this._y=(l-g)*f,this._z=(d-a)*f}else if(i>p&&i>b){let f=2*Math.sqrt(1+i-p-b);this._w=(_-v)/f,this._x=.25*f,this._y=(a+d)/f,this._z=(l+g)/f}else if(p>b){let f=2*Math.sqrt(1+p-i-b);this._w=(l-g)/f,this._x=(a+d)/f,this._y=.25*f,this._z=(v+_)/f}else{let f=2*Math.sqrt(1+b-i-p);this._w=(d-a)/f,this._x=(l+g)/f,this._y=(v+_)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xi(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,a=e._y,l=e._z,d=e._w,p=t._x,v=t._y,g=t._z,_=t._w;return this._x=i*_+d*p+a*g-l*v,this._y=a*_+d*v+l*p-i*g,this._z=l*_+d*g+i*v-a*p,this._w=d*_-i*p-a*v-l*g,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,a=this._y,l=this._z,d=this._w,p=d*e._w+i*e._x+a*e._y+l*e._z;if(p<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,p=-p):this.copy(e),p>=1)return this._w=d,this._x=i,this._y=a,this._z=l,this;let v=1-p*p;if(v<=Number.EPSILON){let f=1-t;return this._w=f*d+t*this._w,this._x=f*i+t*this._x,this._y=f*a+t*this._y,this._z=f*l+t*this._z,this.normalize(),this._onChangeCallback(),this}let g=Math.sqrt(v),_=Math.atan2(g,p),b=Math.sin((1-t)*_)/g,w=Math.sin(t*_)/g;return this._w=d*b+this._w*w,this._x=i*b+this._x*w,this._y=a*b+this._y*w,this._z=l*b+this._z*w,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};yi.prototype.isQuaternion=!0;var z=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(I0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(I0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,l=e.elements,d=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*d,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*d,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*d,this}applyQuaternion(e){let t=this.x,i=this.y,a=this.z,l=e.x,d=e.y,p=e.z,v=e.w,g=v*t+d*a-p*i,_=v*i+p*t-l*a,b=v*a+l*i-d*t,w=-l*t-d*i-p*a;return this.x=g*v+w*-l+_*-p-b*-d,this.y=_*v+w*-d+b*-l-g*-p,this.z=b*v+w*-p+g*-d-_*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,a=e.y,l=e.z,d=t.x,p=t.y,v=t.z;return this.x=a*v-l*p,this.y=l*d-i*v,this.z=i*p-a*d,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};z.prototype.isVector3=!0;var df=new z,I0=new yi;var xt=class r{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,a,l,d,p,v,g,_,b,w,f,C,R,I){let E=this.elements;return E[0]=e,E[4]=t,E[8]=i,E[12]=a,E[1]=l,E[5]=d,E[9]=p,E[13]=v,E[2]=g,E[6]=_,E[10]=b,E[14]=w,E[3]=f,E[7]=C,E[11]=R,E[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,a=1/xs.setFromMatrixColumn(e,0).length(),l=1/xs.setFromMatrixColumn(e,1).length(),d=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*d,t[9]=i[9]*d,t[10]=i[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,i=e.x,a=e.y,l=e.z,d=Math.cos(i),p=Math.sin(i),v=Math.cos(a),g=Math.sin(a),_=Math.cos(l),b=Math.sin(l);if(e.order==="XYZ"){let w=d*_,f=d*b,C=p*_,R=p*b;t[0]=v*_,t[4]=-v*b,t[8]=g,t[1]=f+C*g,t[5]=w-R*g,t[9]=-p*v,t[2]=R-w*g,t[6]=C+f*g,t[10]=d*v}else if(e.order==="YXZ"){let w=v*_,f=v*b,C=g*_,R=g*b;t[0]=w+R*p,t[4]=C*p-f,t[8]=d*g,t[1]=d*b,t[5]=d*_,t[9]=-p,t[2]=f*p-C,t[6]=R+w*p,t[10]=d*v}else if(e.order==="ZXY"){let w=v*_,f=v*b,C=g*_,R=g*b;t[0]=w-R*p,t[4]=-d*b,t[8]=C+f*p,t[1]=f+C*p,t[5]=d*_,t[9]=R-w*p,t[2]=-d*g,t[6]=p,t[10]=d*v}else if(e.order==="ZYX"){let w=d*_,f=d*b,C=p*_,R=p*b;t[0]=v*_,t[4]=C*g-f,t[8]=w*g+R,t[1]=v*b,t[5]=R*g+w,t[9]=f*g-C,t[2]=-g,t[6]=p*v,t[10]=d*v}else if(e.order==="YZX"){let w=d*v,f=d*g,C=p*v,R=p*g;t[0]=v*_,t[4]=R-w*b,t[8]=C*b+f,t[1]=b,t[5]=d*_,t[9]=-p*_,t[2]=-g*_,t[6]=f*b+C,t[10]=w-R*b}else if(e.order==="XZY"){let w=d*v,f=d*g,C=p*v,R=p*g;t[0]=v*_,t[4]=-b,t[8]=g*_,t[1]=w*b+R,t[5]=d*_,t[9]=f*b-C,t[2]=C*b-f,t[6]=p*_,t[10]=R*b+w}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,fS)}lookAt(e,t,i){let a=this.elements;return Ni.subVectors(e,t),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),Uo.crossVectors(i,Ni),Uo.lengthSq()===0&&(Math.abs(i.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),Uo.crossVectors(i,Ni)),Uo.normalize(),zd.crossVectors(Ni,Uo),a[0]=Uo.x,a[4]=zd.x,a[8]=Ni.x,a[1]=Uo.y,a[5]=zd.y,a[9]=Ni.y,a[2]=Uo.z,a[6]=zd.z,a[10]=Ni.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,l=this.elements,d=i[0],p=i[4],v=i[8],g=i[12],_=i[1],b=i[5],w=i[9],f=i[13],C=i[2],R=i[6],I=i[10],E=i[14],x=i[3],Y=i[7],W=i[11],Q=i[15],F=a[0],oe=a[4],ue=a[8],fe=a[12],j=a[1],Me=a[5],we=a[9],ie=a[13],le=a[2],k=a[6],re=a[10],Le=a[14],Ve=a[3],Oe=a[7],qe=a[11],Ye=a[15];return l[0]=d*F+p*j+v*le+g*Ve,l[4]=d*oe+p*Me+v*k+g*Oe,l[8]=d*ue+p*we+v*re+g*qe,l[12]=d*fe+p*ie+v*Le+g*Ye,l[1]=_*F+b*j+w*le+f*Ve,l[5]=_*oe+b*Me+w*k+f*Oe,l[9]=_*ue+b*we+w*re+f*qe,l[13]=_*fe+b*ie+w*Le+f*Ye,l[2]=C*F+R*j+I*le+E*Ve,l[6]=C*oe+R*Me+I*k+E*Oe,l[10]=C*ue+R*we+I*re+E*qe,l[14]=C*fe+R*ie+I*Le+E*Ye,l[3]=x*F+Y*j+W*le+Q*Ve,l[7]=x*oe+Y*Me+W*k+Q*Oe,l[11]=x*ue+Y*we+W*re+Q*qe,l[15]=x*fe+Y*ie+W*Le+Q*Ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],d=e[1],p=e[5],v=e[9],g=e[13],_=e[2],b=e[6],w=e[10],f=e[14],C=e[3],R=e[7],I=e[11],E=e[15];return C*(+l*v*b-a*g*b-l*p*w+i*g*w+a*p*f-i*v*f)+R*(+t*v*f-t*g*w+l*d*w-a*d*f+a*g*_-l*v*_)+I*(+t*g*b-t*p*f-l*d*b+i*d*f+l*p*_-i*g*_)+E*(-a*p*_-t*v*b+t*p*w+a*d*b-i*d*w+i*v*_)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],d=e[4],p=e[5],v=e[6],g=e[7],_=e[8],b=e[9],w=e[10],f=e[11],C=e[12],R=e[13],I=e[14],E=e[15],x=b*I*g-R*w*g+R*v*f-p*I*f-b*v*E+p*w*E,Y=C*w*g-_*I*g-C*v*f+d*I*f+_*v*E-d*w*E,W=_*R*g-C*b*g+C*p*f-d*R*f-_*p*E+d*b*E,Q=C*b*v-_*R*v-C*p*w+d*R*w+_*p*I-d*b*I,F=t*x+i*Y+a*W+l*Q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let oe=1/F;return e[0]=x*oe,e[1]=(R*w*l-b*I*l-R*a*f+i*I*f+b*a*E-i*w*E)*oe,e[2]=(p*I*l-R*v*l+R*a*g-i*I*g-p*a*E+i*v*E)*oe,e[3]=(b*v*l-p*w*l-b*a*g+i*w*g+p*a*f-i*v*f)*oe,e[4]=Y*oe,e[5]=(_*I*l-C*w*l+C*a*f-t*I*f-_*a*E+t*w*E)*oe,e[6]=(C*v*l-d*I*l-C*a*g+t*I*g+d*a*E-t*v*E)*oe,e[7]=(d*w*l-_*v*l+_*a*g-t*w*g-d*a*f+t*v*f)*oe,e[8]=W*oe,e[9]=(C*b*l-_*R*l-C*i*f+t*R*f+_*i*E-t*b*E)*oe,e[10]=(d*R*l-C*p*l+C*i*g-t*R*g-d*i*E+t*p*E)*oe,e[11]=(_*p*l-d*b*l-_*i*g+t*b*g+d*i*f-t*p*f)*oe,e[12]=Q*oe,e[13]=(_*R*a-C*b*a+C*i*w-t*R*w-_*i*I+t*b*I)*oe,e[14]=(C*p*a-d*R*a-C*i*v+t*R*v+d*i*I-t*p*I)*oe,e[15]=(d*b*a-_*p*a+_*i*v-t*b*v-d*i*w+t*p*w)*oe,this}scale(e){let t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),a=Math.sin(t),l=1-i,d=e.x,p=e.y,v=e.z,g=l*d,_=l*p;return this.set(g*d+i,g*p-a*v,g*v+a*p,0,g*p+a*v,_*p+i,_*v-a*d,0,g*v-a*p,_*v+a*d,l*v*v+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){let a=this.elements,l=t._x,d=t._y,p=t._z,v=t._w,g=l+l,_=d+d,b=p+p,w=l*g,f=l*_,C=l*b,R=d*_,I=d*b,E=p*b,x=v*g,Y=v*_,W=v*b,Q=i.x,F=i.y,oe=i.z;return a[0]=(1-(R+E))*Q,a[1]=(f+W)*Q,a[2]=(C-Y)*Q,a[3]=0,a[4]=(f-W)*F,a[5]=(1-(w+E))*F,a[6]=(I+x)*F,a[7]=0,a[8]=(C+Y)*oe,a[9]=(I-x)*oe,a[10]=(1-(w+R))*oe,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){let a=this.elements,l=xs.set(a[0],a[1],a[2]).length(),d=xs.set(a[4],a[5],a[6]).length(),p=xs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],dr.copy(this);let g=1/l,_=1/d,b=1/p;return dr.elements[0]*=g,dr.elements[1]*=g,dr.elements[2]*=g,dr.elements[4]*=_,dr.elements[5]*=_,dr.elements[6]*=_,dr.elements[8]*=b,dr.elements[9]*=b,dr.elements[10]*=b,t.setFromRotationMatrix(dr),i.x=l,i.y=d,i.z=p,this}makePerspective(e,t,i,a,l,d){d===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let p=this.elements,v=2*l/(t-e),g=2*l/(i-a),_=(t+e)/(t-e),b=(i+a)/(i-a),w=-(d+l)/(d-l),f=-2*d*l/(d-l);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=f,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,i,a,l,d){let p=this.elements,v=1/(t-e),g=1/(i-a),_=1/(d-l),b=(t+e)*v,w=(i+a)*g,f=(d+l)*_;return p[0]=2*v,p[4]=0,p[8]=0,p[12]=-b,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-w,p[2]=0,p[6]=0,p[10]=-2*_,p[14]=-f,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};xt.prototype.isMatrix4=!0;var xs=new z,dr=new xt,uS=new z(0,0,0),fS=new z(1,1,1),Uo=new z,zd=new z,Ni=new z;var wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let a=this._listeners[e];if(a!==void 0){let l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}};var k0=new xt,O0=new yi,so=class r{constructor(e=0,t=0,i=0,a=r.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._order=a||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){let a=e.elements,l=a[0],d=a[4],p=a[8],v=a[1],g=a[5],_=a[9],b=a[2],w=a[6],f=a[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(xi(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,f),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(w,g),this._z=0);break;case"YXZ":this._x=Math.asin(-xi(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,f),this._z=Math.atan2(v,g)):(this._y=Math.atan2(-b,l),this._z=0);break;case"ZXY":this._x=Math.asin(xi(w,-1,1)),Math.abs(w)<.9999999?(this._y=Math.atan2(-b,f),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(v,l));break;case"ZYX":this._y=Math.asin(-xi(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(w,f),this._z=Math.atan2(v,l)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(xi(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-b,l)):(this._x=0,this._y=Math.atan2(p,f));break;case"XZY":this._z=Math.asin(-xi(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(w,g),this._y=Math.atan2(p,l)):(this._x=Math.atan2(-_,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return k0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k0,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return O0.setFromEuler(this),this.setFromQuaternion(O0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new z(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};so.prototype.isEuler=!0;so.DefaultOrder="XYZ";so.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Gd=class{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}};var bn=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,a,l,d,p,v,g){let _=this.elements;return _[0]=e,_[1]=a,_[2]=p,_[3]=t,_[4]=l,_[5]=v,_[6]=i,_[7]=d,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,l=this.elements,d=i[0],p=i[3],v=i[6],g=i[1],_=i[4],b=i[7],w=i[2],f=i[5],C=i[8],R=a[0],I=a[3],E=a[6],x=a[1],Y=a[4],W=a[7],Q=a[2],F=a[5],oe=a[8];return l[0]=d*R+p*x+v*Q,l[3]=d*I+p*Y+v*F,l[6]=d*E+p*W+v*oe,l[1]=g*R+_*x+b*Q,l[4]=g*I+_*Y+b*F,l[7]=g*E+_*W+b*oe,l[2]=w*R+f*x+C*Q,l[5]=w*I+f*Y+C*F,l[8]=w*E+f*W+C*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],d=e[4],p=e[5],v=e[6],g=e[7],_=e[8];return t*d*_-t*p*g-i*l*_+i*p*v+a*l*g-a*d*v}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],d=e[4],p=e[5],v=e[6],g=e[7],_=e[8],b=_*d-p*g,w=p*v-_*l,f=g*l-d*v,C=t*b+i*w+a*f;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/C;return e[0]=b*R,e[1]=(a*g-_*i)*R,e[2]=(p*i-a*d)*R,e[3]=w*R,e[4]=(_*t-a*v)*R,e[5]=(a*l-p*t)*R,e[6]=f*R,e[7]=(i*v-g*t)*R,e[8]=(d*t-i*l)*R,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,d,p){let v=Math.cos(l),g=Math.sin(l);return this.set(i*v,i*g,-i*(v*d+g*p)+d+e,-a*g,a*v,-a*(-g*d+v*p)+p+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),a=this.elements,l=a[0],d=a[3],p=a[6],v=a[1],g=a[4],_=a[7];return a[0]=t*l+i*v,a[3]=t*d+i*g,a[6]=t*p+i*_,a[1]=-i*l+t*v,a[4]=-i*d+t*g,a[7]=-i*p+t*_,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bn.prototype.isMatrix3=!0;var pS=0,B0=new z,ys=new yi,lo=new xt,Vd=new z,Xl=new z,mS=new z,gS=new yi,U0=new z(1,0,0),z0=new z(0,1,0),G0=new z(0,0,1),vS={type:"added"},V0={type:"removed"},Jt=class r extends wi{constructor(){super(),Object.defineProperty(this,"id",{value:pS++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DefaultUp.clone();let e=new z,t=new so,i=new yi,a=new z(1,1,1);function l(){i.setFromEuler(t,!1)}function d(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new xt},normalMatrix:{value:new bn}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=r.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(U0,e)}rotateY(e){return this.rotateOnAxis(z0,e)}rotateZ(e){return this.rotateOnAxis(G0,e)}translateOnAxis(e,t){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(U0,e)}translateY(e){return this.translateOnAxis(z0,e)}translateZ(e){return this.translateOnAxis(G0,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(lo.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vd.copy(e):Vd.set(e,t,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lo.lookAt(Xl,Vd,this.up):lo.lookAt(Vd,Xl,this.up),this.quaternion.setFromRotationMatrix(lo),a&&(lo.extractRotation(a.matrixWorld),ys.setFromRotationMatrix(lo),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V0)),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(V0)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),lo.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lo.multiply(e.parent.matrixWorld)),e.applyMatrix4(lo),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){let d=this.children[i].getObjectByProperty(e,t);if(d!==void 0)return d}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new z),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new yi),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,e,mS),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new z),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,gS,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new z),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function l(p,v){return p[v.uuid]===void 0&&(p[v.uuid]=v.toJSON(e)),v.uuid}if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);let p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){let v=p.shapes;if(Array.isArray(v))for(let g=0,_=v.length;g<_;g++){let b=v[g];l(e.shapes,b)}else l(e.shapes,v)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let p=[];for(let v=0,g=this.material.length;v<g;v++)p.push(l(e.materials,this.material[v]));a.material=p}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let p=0;p<this.children.length;p++)a.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let p=0;p<this.animations.length;p++){let v=this.animations[p];a.animations.push(l(e.animations,v))}}if(t){let p=d(e.geometries),v=d(e.materials),g=d(e.textures),_=d(e.images),b=d(e.shapes),w=d(e.skeletons),f=d(e.animations);p.length>0&&(i.geometries=p),v.length>0&&(i.materials=v),g.length>0&&(i.textures=g),_.length>0&&(i.images=_),b.length>0&&(i.shapes=b),w.length>0&&(i.skeletons=w),f.length>0&&(i.animations=f)}return i.object=a,i;function d(p){let v=[];for(let g in p){let _=p[g];delete _.metadata,v.push(_)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}};Jt.DefaultUp=new z(0,1,0);Jt.DefaultMatrixAutoUpdate=!0;Jt.prototype.isObject3D=!0;var co=class extends Jt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new z),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};co.prototype.isCamera=!0;var Cn=class extends co{constructor(e=50,t=1,i=.1,a=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lf*2*Math.atan(Math.tan(Bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bd*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a,d=this.view;if(this.view!==null&&this.view.enabled){let v=d.fullWidth,g=d.fullHeight;l+=d.offsetX*a/v,t-=d.offsetY*i/g,a*=d.width/v,i*=d.height/g}let p=this.filmOffset;p!==0&&(l+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};Cn.prototype.isPerspectiveCamera=!0;var H0=0,hf=1,W0=2;var Hd=1,q0=2,La=3,Ra=0,tn=1,Sr=2,X0=1;var zo=0,Ca=1,Yl=2,uf=3,ff=4,Wd=5,Go=100,Y0=101,j0=102,pf=103,mf=104,K0=200,qd=201,Z0=202,J0=203,Xd=204,ws=205,Q0=206,$0=207,eg=208,tg=209,ng=210,ig=0,rg=1,og=2,jl=3,ag=4,sg=5,lg=6,cg=7,bs=0,dg=1,hg=2,Vo=0,ug=1,fg=2,pg=3,mg=4,gg=5,gf=300,_s=301,Kl=302,vf=303,xf=304,Ms=306,Zl=307,Da=1e3,oi=1001,Jl=1002,_n=1003,yf=1004;var wf=1005;var qn=1006,vg=1007;var Ho=1008;var Wo=1009,xg=1010,yg=1011,Ql=1012,wg=1013,Ss=1014,hr=1015,ho=1016,bg=1017,_g=1018,Mg=1019,Es=1020,Sg=1021,qo=1022,On=1023,Eg=1024,Ag=1025;var $l=1026,ec=1027,Tg=1028,Lg=1029,Rg=1030,Cg=1031,Dg=1032,Pg=1033,bf=33776,_f=33777,Mf=33778,Sf=33779,Ef=35840,Af=35841,Tf=35842,Lf=35843,Fg=36196,Rf=37492,Cf=37496,Ng=37808,Ig=37809,kg=37810,Og=37811,Bg=37812,Ug=37813,zg=37814,Gg=37815,Vg=37816,Hg=37817,Wg=37818,qg=37819,Xg=37820,Yg=37821,jg=36492,Kg=37840,Zg=37841,Jg=37842,Qg=37843,$g=37844,ev=37845,tv=37846,nv=37847,iv=37848,rv=37849,ov=37850,av=37851,sv=37852,lv=37853;var Xo=3e3,Yd=3001,cv=3007,dv=3002,hv=3003,uv=3004,fv=3005,pv=3006,mv=3200,gv=3201,jd=0,vv=1;var Kd=7680;var xv=519,tc=35044,yv=35048;var Df="300 es";var Ct=class{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*i+d[8]*a+d[12]*l,this.y=d[1]*t+d[5]*i+d[9]*a+d[13]*l,this.z=d[2]*t+d[6]*i+d[10]*a+d[14]*l,this.w=d[3]*t+d[7]*i+d[11]*a+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l,v=e.elements,g=v[0],_=v[4],b=v[8],w=v[1],f=v[5],C=v[9],R=v[2],I=v[6],E=v[10];if(Math.abs(_-w)<.01&&Math.abs(b-R)<.01&&Math.abs(C-I)<.01){if(Math.abs(_+w)<.1&&Math.abs(b+R)<.1&&Math.abs(C+I)<.1&&Math.abs(g+f+E-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let Y=(g+1)/2,W=(f+1)/2,Q=(E+1)/2,F=(_+w)/4,oe=(b+R)/4,ue=(C+I)/4;return Y>W&&Y>Q?Y<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(Y),a=F/i,l=oe/i):W>Q?W<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(W),i=F/a,l=ue/a):Q<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(Q),i=oe/l,a=ue/l),this.set(i,a,l,t),this}let x=Math.sqrt((I-C)*(I-C)+(b-R)*(b-R)+(w-_)*(w-_));return Math.abs(x)<.001&&(x=1),this.x=(I-C)/x,this.y=(b-R)/x,this.z=(w-_)/x,this.w=Math.acos((g+f+E-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Ct.prototype.isVector4=!0;var je=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*i-d*a+e.x,this.y=l*a+d*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};je.prototype.isVector2=!0;var wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Zd={h:0,s:0,l:0};function Pf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ff(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var at=class{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=P0(e,1),t=xi(t,0,1),i=xi(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,l=2*i-a;this.r=Pf(l,a,e+1/3),this.g=Pf(l,a,e),this.b=Pf(l,a,e-1/3)}return this}setStyle(e){function t(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a,l=i[1],d=i[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,t(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,t(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d)){let p=parseFloat(a[1])/360,v=parseInt(a[2],10)/100,g=parseInt(a[3],10)/100;return t(a[4]),this.setHSL(p,v,g)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],l=a.length;if(l===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,this;if(l===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=wv[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}copyLinearToSRGB(e){return this.r=Nf(e.r),this.g=Nf(e.g),this.b=Nf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,i=this.g,a=this.b,l=Math.max(t,i,a),d=Math.min(t,i,a),p,v,g=(d+l)/2;if(d===l)p=0,v=0;else{let _=l-d;switch(v=g<=.5?_/(l+d):_/(2-l-d),l){case t:p=(i-a)/_+(i<a?6:0);break;case i:p=(a-t)/_+2;break;case a:p=(t-i)/_+4;break}p/=6}return e.h=p,e.s=v,e.l=g,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(ur),ur.h+=e,ur.s+=t,ur.l+=i,this.setHSL(ur.h,ur.s,ur.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(Zd);let i=Ud(ur.h,Zd.h,t),a=Ud(ur.s,Zd.s,t),l=Ud(ur.l,Zd.l,t);return this.setHSL(i,a,l),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};at.NAMES=wv;at.prototype.isColor=!0;at.prototype.r=1;at.prototype.g=1;at.prototype.b=1;var nn=new z,Jd=new je,un=class{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=tc,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,i=0;for(let a=0,l=e.length;a<l;a++){let d=e[a];d===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",a),d=new at),t[i++]=d.r,t[i++]=d.g,t[i++]=d.b}return this}copyVector2sArray(e){let t=this.array,i=0;for(let a=0,l=e.length;a<l;a++){let d=e[a];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",a),d=new je),t[i++]=d.x,t[i++]=d.y}return this}copyVector3sArray(e){let t=this.array,i=0;for(let a=0,l=e.length;a<l;a++){let d=e[a];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",a),d=new z),t[i++]=d.x,t[i++]=d.y,t[i++]=d.z}return this}copyVector4sArray(e){let t=this.array,i=0;for(let a=0,l=e.length;a<l;a++){let d=e[a];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",a),d=new Ct),t[i++]=d.x,t[i++]=d.y,t[i++]=d.z,t[i++]=d.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jd.fromBufferAttribute(this,t),Jd.applyMatrix3(e),this.setXY(t,Jd.x,Jd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.x=this.getX(t),nn.y=this.getY(t),nn.z=this.getZ(t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.x=this.getX(t),nn.y=this.getY(t),nn.z=this.getZ(t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.x=this.getX(t),nn.y=this.getY(t),nn.z=this.getZ(t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};un.prototype.isBufferAttribute=!0;var As=class extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ts=class extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}},If=class extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};If.prototype.isFloat16BufferAttribute=!0;var zt=class extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}};var fr=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,a=1/0,l=-1/0,d=-1/0,p=-1/0;for(let v=0,g=e.length;v<g;v+=3){let _=e[v],b=e[v+1],w=e[v+2];_<t&&(t=_),b<i&&(i=b),w<a&&(a=w),_>l&&(l=_),b>d&&(d=b),w>p&&(p=w)}return this.min.set(t,i,a),this.max.set(l,d,p),this}setFromBufferAttribute(e){let t=1/0,i=1/0,a=1/0,l=-1/0,d=-1/0,p=-1/0;for(let v=0,g=e.count;v<g;v++){let _=e.getX(v),b=e.getY(v),w=e.getZ(v);_<t&&(t=_),b<i&&(i=b),w<a&&(a=w),_>l&&(l=_),b>d&&(d=b),w>p&&(p=w)}return this.min.set(t,i,a),this.max.set(l,d,p),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=nc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new z),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new z),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),kf.copy(t.boundingBox),kf.applyMatrix4(e.matrixWorld),this.union(kf));let i=e.children;for(let a=0,l=i.length;a<l;a++)this.expandByObject(i[a]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new z),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nc),nc.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ic),Qd.subVectors(this.max,ic),Ls.subVectors(e.a,ic),Rs.subVectors(e.b,ic),Cs.subVectors(e.c,ic),Yo.subVectors(Rs,Ls),jo.subVectors(Cs,Rs),Pa.subVectors(Ls,Cs);let t=[0,-Yo.z,Yo.y,0,-jo.z,jo.y,0,-Pa.z,Pa.y,Yo.z,0,-Yo.x,jo.z,0,-jo.x,Pa.z,0,-Pa.x,-Yo.y,Yo.x,0,-jo.y,jo.x,0,-Pa.y,Pa.x,0];return!Of(t,Ls,Rs,Cs,Qd)||(t=[1,0,0,0,1,0,0,0,1],!Of(t,Ls,Rs,Cs,Qd))?!1:($d.crossVectors(Yo,jo),t=[$d.x,$d.y,$d.z],Of(t,Ls,Rs,Cs,Qd))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new z),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return nc.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(nc).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(uo[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),uo[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),uo[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),uo[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),uo[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),uo[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),uo[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),uo[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(uo),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};fr.prototype.isBox3=!0;var uo=[new z,new z,new z,new z,new z,new z,new z,new z],nc=new z,kf=new fr,Ls=new z,Rs=new z,Cs=new z,Yo=new z,jo=new z,Pa=new z,ic=new z,Qd=new z,$d=new z,Fa=new z;function Of(r,e,t,i,a){for(let l=0,d=r.length-3;l<=d;l+=3){Fa.fromArray(r,l);let p=a.x*Math.abs(Fa.x)+a.y*Math.abs(Fa.y)+a.z*Math.abs(Fa.z),v=e.dot(Fa),g=t.dot(Fa),_=i.dot(Fa);if(Math.max(-Math.max(v,g,_),Math.min(v,g,_))>p)return!1}return!0}var xS=new fr,bv=new z,Bf=new z,Uf=new z,bi=class{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xS.setFromPoints(e).getCenter(i);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new z),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new fr),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Uf.subVectors(e,this.center);let t=Uf.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.add(Uf.multiplyScalar(a/i)),this.radius+=a}return this}union(e){return Bf.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(bv.copy(e.center).add(Bf)),this.expandByPoint(bv.copy(e.center).sub(Bf)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};function eh(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,i=r.length;t<i;++t)r[t]>e&&(e=r[t]);return e}var yS=0,Er=new xt,zf=new Jt,Ds=new z,Ii=new fr,rc=new fr,Bn=new z,Xt=class r extends wi{constructor(){super(),Object.defineProperty(this,"id",{value:yS++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)>65535?Ts:As)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let l=new bn().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Er.makeRotationX(e),this.applyMatrix4(Er),this}rotateY(e){return Er.makeRotationY(e),this.applyMatrix4(Er),this}rotateZ(e){return Er.makeRotationZ(e),this.applyMatrix4(Er),this}translate(e,t,i){return Er.makeTranslation(e,t,i),this.applyMatrix4(Er),this}scale(e,t,i){return Er.makeScale(e,t,i),this.applyMatrix4(Er),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=[];for(let i=0,a=e.length;i<a;i++){let l=e[i];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){let l=t[i];Ii.setFromBufferAttribute(l),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(Ii.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){let p=t[l];rc.setFromBufferAttribute(p),this.morphTargetsRelative?(Bn.addVectors(Ii.min,rc.min),Ii.expandByPoint(Bn),Bn.addVectors(Ii.max,rc.max),Ii.expandByPoint(Bn)):(Ii.expandByPoint(rc.min),Ii.expandByPoint(rc.max))}Ii.getCenter(i);let a=0;for(let l=0,d=e.count;l<d;l++)Bn.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(Bn));if(t)for(let l=0,d=t.length;l<d;l++){let p=t[l],v=this.morphTargetsRelative;for(let g=0,_=p.count;g<_;g++)Bn.fromBufferAttribute(p,g),v&&(Ds.fromBufferAttribute(e,g),Bn.add(Ds)),a=Math.max(a,i.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,a=t.position.array,l=t.normal.array,d=t.uv.array,p=a.length/3;t.tangent===void 0&&this.setAttribute("tangent",new un(new Float32Array(4*p),4));let v=t.tangent.array,g=[],_=[];for(let j=0;j<p;j++)g[j]=new z,_[j]=new z;let b=new z,w=new z,f=new z,C=new je,R=new je,I=new je,E=new z,x=new z;function Y(j,Me,we){b.fromArray(a,j*3),w.fromArray(a,Me*3),f.fromArray(a,we*3),C.fromArray(d,j*2),R.fromArray(d,Me*2),I.fromArray(d,we*2),w.sub(b),f.sub(b),R.sub(C),I.sub(C);let ie=1/(R.x*I.y-I.x*R.y);isFinite(ie)&&(E.copy(w).multiplyScalar(I.y).addScaledVector(f,-R.y).multiplyScalar(ie),x.copy(f).multiplyScalar(R.x).addScaledVector(w,-I.x).multiplyScalar(ie),g[j].add(E),g[Me].add(E),g[we].add(E),_[j].add(x),_[Me].add(x),_[we].add(x))}let W=this.groups;W.length===0&&(W=[{start:0,count:i.length}]);for(let j=0,Me=W.length;j<Me;++j){let we=W[j],ie=we.start,le=we.count;for(let k=ie,re=ie+le;k<re;k+=3)Y(i[k+0],i[k+1],i[k+2])}let Q=new z,F=new z,oe=new z,ue=new z;function fe(j){oe.fromArray(l,j*3),ue.copy(oe);let Me=g[j];Q.copy(Me),Q.sub(oe.multiplyScalar(oe.dot(Me))).normalize(),F.crossVectors(ue,Me);let ie=F.dot(_[j])<0?-1:1;v[j*4]=Q.x,v[j*4+1]=Q.y,v[j*4+2]=Q.z,v[j*4+3]=ie}for(let j=0,Me=W.length;j<Me;++j){let we=W[j],ie=we.start,le=we.count;for(let k=ie,re=ie+le;k<re;k+=3)fe(i[k+0]),fe(i[k+1]),fe(i[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let w=0,f=i.count;w<f;w++)i.setXYZ(w,0,0,0);let a=new z,l=new z,d=new z,p=new z,v=new z,g=new z,_=new z,b=new z;if(e)for(let w=0,f=e.count;w<f;w+=3){let C=e.getX(w+0),R=e.getX(w+1),I=e.getX(w+2);a.fromBufferAttribute(t,C),l.fromBufferAttribute(t,R),d.fromBufferAttribute(t,I),_.subVectors(d,l),b.subVectors(a,l),_.cross(b),p.fromBufferAttribute(i,C),v.fromBufferAttribute(i,R),g.fromBufferAttribute(i,I),p.add(_),v.add(_),g.add(_),i.setXYZ(C,p.x,p.y,p.z),i.setXYZ(R,v.x,v.y,v.z),i.setXYZ(I,g.x,g.y,g.z)}else for(let w=0,f=t.count;w<f;w+=3)a.fromBufferAttribute(t,w+0),l.fromBufferAttribute(t,w+1),d.fromBufferAttribute(t,w+2),_.subVectors(d,l),b.subVectors(a,l),_.cross(b),i.setXYZ(w+0,_.x,_.y,_.z),i.setXYZ(w+1,_.x,_.y,_.z),i.setXYZ(w+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let i=this.attributes;for(let a in i){if(e.attributes[a]===void 0)continue;let d=i[a].array,p=e.attributes[a],v=p.array,g=p.itemSize*t,_=Math.min(v.length,d.length-g);for(let b=0,w=g;b<_;b++,w++)d[w]=v[b]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(p,v){let g=p.array,_=p.itemSize,b=p.normalized,w=new g.constructor(v.length*_),f=0,C=0;for(let R=0,I=v.length;R<I;R++){f=v[R]*_;for(let E=0;E<_;E++)w[C++]=g[f++]}return new un(w,_,b)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,a=this.attributes;for(let p in a){let v=a[p],g=e(v,i);t.setAttribute(p,g)}let l=this.morphAttributes;for(let p in l){let v=[],g=l[p];for(let _=0,b=g.length;_<b;_++){let w=g[_],f=e(w,i);v.push(f)}t.morphAttributes[p]=v}t.morphTargetsRelative=this.morphTargetsRelative;let d=this.groups;for(let p=0,v=d.length;p<v;p++){let g=d[p];t.addGroup(g.start,g.count,g.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let v=this.parameters;for(let g in v)v[g]!==void 0&&(e[g]=v[g]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let v in i){let g=i[v];e.data.attributes[v]=g.toJSON(e.data)}let a={},l=!1;for(let v in this.morphAttributes){let g=this.morphAttributes[v],_=[];for(let b=0,w=g.length;b<w;b++){let f=g[b];_.push(f.toJSON(e.data))}_.length>0&&(a[v]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));let p=this.boundingSphere;return p!==null&&(e.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),e}clone(){return new r().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let a=e.attributes;for(let g in a){let _=a[g];this.setAttribute(g,_.clone(t))}let l=e.morphAttributes;for(let g in l){let _=[],b=l[g];for(let w=0,f=b.length;w<f;w++)_.push(b[w].clone(t));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;let d=e.groups;for(let g=0,_=d.length;g<_;g++){let b=d[g];this.addGroup(b.start,b.count,b.materialIndex)}let p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());let v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.prototype.isBufferGeometry=!0;var oc=class extends un{constructor(e,t,i,a){typeof i=="number"&&(a=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=a||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};oc.prototype.isInstancedBufferAttribute=!0;var ac=class extends Xt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};ac.prototype.isInstancedBufferGeometry=!0;var th=class extends Xt{constructor(e=1,t=8,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);let l=[],d=[],p=[],v=[],g=new z,_=new je;d.push(0,0,0),p.push(0,0,1),v.push(.5,.5);for(let b=0,w=3;b<=t;b++,w+=3){let f=i+b/t*a;g.x=e*Math.cos(f),g.y=e*Math.sin(f),d.push(g.x,g.y,g.z),p.push(0,0,1),_.x=(d[w]/e+1)/2,_.y=(d[w+1]/e+1)/2,v.push(_.x,_.y)}for(let b=1;b<=t;b++)l.push(b,b+1,0);this.setIndex(l),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(p,3)),this.setAttribute("uv",new zt(v,2))}};var Ps=class extends Xt{constructor(e,t,i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};let l=[],d=[];p(a),g(i),_(),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(l.slice(),3)),this.setAttribute("uv",new zt(d,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function p(x){let Y=new z,W=new z,Q=new z;for(let F=0;F<t.length;F+=3)f(t[F+0],Y),f(t[F+1],W),f(t[F+2],Q),v(Y,W,Q,x)}function v(x,Y,W,Q){let F=Q+1,oe=[];for(let ue=0;ue<=F;ue++){oe[ue]=[];let fe=x.clone().lerp(W,ue/F),j=Y.clone().lerp(W,ue/F),Me=F-ue;for(let we=0;we<=Me;we++)we===0&&ue===F?oe[ue][we]=fe:oe[ue][we]=fe.clone().lerp(j,we/Me)}for(let ue=0;ue<F;ue++)for(let fe=0;fe<2*(F-ue)-1;fe++){let j=Math.floor(fe/2);fe%2===0?(w(oe[ue][j+1]),w(oe[ue+1][j]),w(oe[ue][j])):(w(oe[ue][j+1]),w(oe[ue+1][j+1]),w(oe[ue+1][j]))}}function g(x){let Y=new z;for(let W=0;W<l.length;W+=3)Y.x=l[W+0],Y.y=l[W+1],Y.z=l[W+2],Y.normalize().multiplyScalar(x),l[W+0]=Y.x,l[W+1]=Y.y,l[W+2]=Y.z}function _(){let x=new z;for(let Y=0;Y<l.length;Y+=3){x.x=l[Y+0],x.y=l[Y+1],x.z=l[Y+2];let W=I(x)/2/Math.PI+.5,Q=E(x)/Math.PI+.5;d.push(W,1-Q)}C(),b()}function b(){for(let x=0;x<d.length;x+=6){let Y=d[x+0],W=d[x+2],Q=d[x+4],F=Math.max(Y,W,Q),oe=Math.min(Y,W,Q);F>.9&&oe<.1&&(Y<.2&&(d[x+0]+=1),W<.2&&(d[x+2]+=1),Q<.2&&(d[x+4]+=1))}}function w(x){l.push(x.x,x.y,x.z)}function f(x,Y){let W=x*3;Y.x=e[W+0],Y.y=e[W+1],Y.z=e[W+2]}function C(){let x=new z,Y=new z,W=new z,Q=new z,F=new je,oe=new je,ue=new je;for(let fe=0,j=0;fe<l.length;fe+=9,j+=6){x.set(l[fe+0],l[fe+1],l[fe+2]),Y.set(l[fe+3],l[fe+4],l[fe+5]),W.set(l[fe+6],l[fe+7],l[fe+8]),F.set(d[j+0],d[j+1]),oe.set(d[j+2],d[j+3]),ue.set(d[j+4],d[j+5]),Q.copy(x).add(Y).add(W).divideScalar(3);let Me=I(Q);R(F,j+0,x,Me),R(oe,j+2,Y,Me),R(ue,j+4,W,Me)}}function R(x,Y,W,Q){Q<0&&x.x===1&&(d[Y]=x.x-1),W.x===0&&W.z===0&&(d[Y]=Q/2/Math.PI+.5)}function I(x){return Math.atan2(x.z,-x.x)}function E(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}};var nh=class extends Ps{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}};var Fs=class extends Xt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};let l=e/2,d=t/2,p=Math.floor(i),v=Math.floor(a),g=p+1,_=v+1,b=e/p,w=t/v,f=[],C=[],R=[],I=[];for(let E=0;E<_;E++){let x=E*w-d;for(let Y=0;Y<g;Y++){let W=Y*b-l;C.push(W,-x,0),R.push(0,0,1),I.push(Y/p),I.push(1-E/v)}}for(let E=0;E<v;E++)for(let x=0;x<p;x++){let Y=x+g*E,W=x+g*(E+1),Q=x+1+g*(E+1),F=x+1+g*E;f.push(Y,W,F),f.push(W,Q,F)}this.setIndex(f),this.setAttribute("position",new zt(C,3)),this.setAttribute("normal",new zt(R,3)),this.setAttribute("uv",new zt(I,2))}};var ih=class extends Xt{constructor(e=.5,t=1,i=8,a=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:l,thetaLength:d},i=Math.max(3,i),a=Math.max(1,a);let p=[],v=[],g=[],_=[],b=e,w=(t-e)/a,f=new z,C=new je;for(let R=0;R<=a;R++){for(let I=0;I<=i;I++){let E=l+I/i*d;f.x=b*Math.cos(E),f.y=b*Math.sin(E),v.push(f.x,f.y,f.z),g.push(0,0,1),C.x=(f.x/t+1)/2,C.y=(f.y/t+1)/2,_.push(C.x,C.y)}b+=w}for(let R=0;R<a;R++){let I=R*(i+1);for(let E=0;E<i;E++){let x=E+I,Y=x,W=x+i+1,Q=x+i+2,F=x+1;p.push(Y,W,F),p.push(W,Q,F)}}this.setIndex(p),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(g,3)),this.setAttribute("uv",new zt(_,2))}};var rh=class extends Xt{constructor(e=1,t=8,i=6,a=0,l=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:l,thetaStart:d,thetaLength:p},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let v=Math.min(d+p,Math.PI),g=0,_=[],b=new z,w=new z,f=[],C=[],R=[],I=[];for(let E=0;E<=i;E++){let x=[],Y=E/i,W=0;E==0&&d==0?W=.5/t:E==i&&v==Math.PI&&(W=-.5/t);for(let Q=0;Q<=t;Q++){let F=Q/t;b.x=-e*Math.cos(a+F*l)*Math.sin(d+Y*p),b.y=e*Math.cos(d+Y*p),b.z=e*Math.sin(a+F*l)*Math.sin(d+Y*p),C.push(b.x,b.y,b.z),w.copy(b).normalize(),R.push(w.x,w.y,w.z),I.push(F+W,1-Y),x.push(g++)}_.push(x)}for(let E=0;E<i;E++)for(let x=0;x<t;x++){let Y=_[E][x+1],W=_[E][x],Q=_[E+1][x],F=_[E+1][x+1];(E!==0||d>0)&&f.push(Y,W,F),(E!==i-1||v<Math.PI)&&f.push(W,Q,F)}this.setIndex(f),this.setAttribute("position",new zt(C,3)),this.setAttribute("normal",new zt(R,3)),this.setAttribute("uv",new zt(I,2))}};var oh=class extends Ps{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,a,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}};var fo=class extends Jt{constructor(e,t=1){super(),this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};fo.prototype.isLight=!0;var sc=class extends fo{constructor(e,t){super(e,t),this.type="AmbientLight"}};sc.prototype.isAmbientLight=!0;var Gf=new z,wS=new z,bS=new bn,_i=class{constructor(e=new z(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let a=Gf.subVectors(i,t).cross(wS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new z),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new z);let i=e.delta(Gf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(i).multiplyScalar(l).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new z),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||bS.getNormalMatrix(e),a=this.coplanarPoint(Gf).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};_i.prototype.isPlane=!0;var Ns=new bi,ah=new z,Ar=class{constructor(e=new _i,t=new _i,i=new _i,a=new _i,l=new _i,d=new _i){this.planes=[e,t,i,a,l,d]}set(e,t,i,a,l,d){let p=this.planes;return p[0].copy(e),p[1].copy(t),p[2].copy(i),p[3].copy(a),p[4].copy(l),p[5].copy(d),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,a=i[0],l=i[1],d=i[2],p=i[3],v=i[4],g=i[5],_=i[6],b=i[7],w=i[8],f=i[9],C=i[10],R=i[11],I=i[12],E=i[13],x=i[14],Y=i[15];return t[0].setComponents(p-a,b-v,R-w,Y-I).normalize(),t[1].setComponents(p+a,b+v,R+w,Y+I).normalize(),t[2].setComponents(p+l,b+g,R+f,Y+E).normalize(),t[3].setComponents(p-l,b-g,R-f,Y-E).normalize(),t[4].setComponents(p-d,b-_,R-C,Y-x).normalize(),t[5].setComponents(p+d,b+_,R+C,Y+x).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let a=t[i];if(ah.x=a.normal.x>0?e.max.x:e.min.x,ah.y=a.normal.y>0?e.max.y:e.min.y,ah.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ah)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _v=new xt,Mv=new z,Sv=new z,Is=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Mv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mv),Sv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sv),t.updateMatrixWorld(),_v.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_v),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var lc=class extends co{constructor(e=-1,t=1,i=1,a=-1,l=.1,d=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,l=i-e,d=i+e,p=a+t,v=a-t;if(this.view!==null&&this.view.enabled){let g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,d=l+g*this.view.width,p-=_*this.view.offsetY,v=p-_*this.view.height}this.projectionMatrix.makeOrthographic(l,d,p,v,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};lc.prototype.isOrthographicCamera=!0;var cc=class extends Is{constructor(){super(new lc(-5,5,5,-5,.5,500))}};cc.prototype.isDirectionalLightShadow=!0;var dc=class extends fo{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Jt.DefaultUp),this.updateMatrix(),this.target=new Jt,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};dc.prototype.isDirectionalLight=!0;var Ev=new xt,hc=new z,Vf=new z,uc=class extends Is{constructor(){super(new Cn(90,1,.5,500)),this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,a=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),hc.setFromMatrixPosition(e.matrixWorld),i.position.copy(hc),Vf.copy(i.position),Vf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vf),i.updateMatrixWorld(),a.makeTranslation(-hc.x,-hc.y,-hc.z),Ev.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ev)}};uc.prototype.isPointLightShadow=!0;var fc=class extends fo{constructor(e,t,i=0,a=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new uc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};fc.prototype.isPointLight=!0;var _S=0;function Dn(){Object.defineProperty(this,"id",{value:_S++}),this.uuid=Fi(),this.name="",this.type="Material",this.fog=!0,this.blending=Ca,this.side=Ra,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xd,this.blendDst=ws,this.blendEquation=Go,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kd,this.stencilZFail=Kd,this.stencilZPass=Kd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Dn.prototype=Object.assign(Object.create(wi.prototype),{constructor:Dn,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(r){if(r!==void 0)for(let e in r){let t=r[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===X0;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(r){let e=r===void 0||typeof r=="string";e&&(r={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(r).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(r).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(r).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(r).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(r).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(r).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Ca&&(t.blending=this.blending),this.side!==Ra&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(a){let l=[];for(let d in a){let p=a[d];delete p.metadata,l.push(p)}return l}if(e){let a=i(r.textures),l=i(r.images);a.length>0&&(t.textures=a),l.length>0&&(t.images=l)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(r){this.name=r.name,this.fog=r.fog,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;let e=r.clippingPlanes,t=null;if(e!==null){let i=e.length;t=new Array(i);for(let a=0;a!==i;++a)t[a]=e[a].clone()}return this.clippingPlanes=t,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Dn.prototype,"needsUpdate",{set:function(r){r===!0&&this.version++}});var Na=class extends Dn{constructor(e){super(),this.type="LineBasicMaterial",this.color=new at(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};Na.prototype.isLineBasicMaterial=!0;var Ia=class extends Dn{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};Ia.prototype.isMeshBasicMaterial=!0;var pc=class extends Dn{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new at(16777215),this.specular=new at(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};pc.prototype.isMeshPhongMaterial=!0;function po(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Xn(r){let e={};for(let t=0;t<r.length;t++){let i=po(r[t]);for(let a in i)e[a]=i[a]}return e}var Av={clone:po,merge:Xn};var Tv=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Lv=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var Wi=class extends Dn{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Tv,this.fragmentShader=Lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let d=this.uniforms[a].value;d&&d.isTexture?t.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[a]={type:"m4",value:d.toArray()}:t.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}};Wi.prototype.isShaderMaterial=!0;var ka=class extends Dn{constructor(e){super(),this.type="SpriteMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};ka.prototype.isSpriteMaterial=!0;var Tr=class extends Jt{constructor(){super(),this.type="Group"}};Tr.prototype.isGroup=!0;var mo=new z,Hf=new z,sh=new z,Ko=new z,Wf=new z,lh=new z,qf=new z,Zo=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new z),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mo)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new z),t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mo.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mo.copy(this.direction).multiplyScalar(t).add(this.origin),mo.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Hf.copy(e).add(t).multiplyScalar(.5),sh.copy(t).sub(e).normalize(),Ko.copy(this.origin).sub(Hf);let l=e.distanceTo(t)*.5,d=-this.direction.dot(sh),p=Ko.dot(this.direction),v=-Ko.dot(sh),g=Ko.lengthSq(),_=Math.abs(1-d*d),b,w,f,C;if(_>0)if(b=d*v-p,w=d*p-v,C=l*_,b>=0)if(w>=-C)if(w<=C){let R=1/_;b*=R,w*=R,f=b*(b+d*w+2*p)+w*(d*b+w+2*v)+g}else w=l,b=Math.max(0,-(d*w+p)),f=-b*b+w*(w+2*v)+g;else w=-l,b=Math.max(0,-(d*w+p)),f=-b*b+w*(w+2*v)+g;else w<=-C?(b=Math.max(0,-(-d*l+p)),w=b>0?-l:Math.min(Math.max(-l,-v),l),f=-b*b+w*(w+2*v)+g):w<=C?(b=0,w=Math.min(Math.max(-l,-v),l),f=w*(w+2*v)+g):(b=Math.max(0,-(d*l+p)),w=b>0?l:Math.min(Math.max(-l,-v),l),f=-b*b+w*(w+2*v)+g);else w=d>0?-l:l,b=Math.max(0,-(d*w+p)),f=-b*b+w*(w+2*v)+g;return i&&i.copy(this.direction).multiplyScalar(b).add(this.origin),a&&a.copy(sh).multiplyScalar(w).add(Hf),f}intersectSphere(e,t){mo.subVectors(e.center,this.origin);let i=mo.dot(this.direction),a=mo.dot(mo)-i*i,l=e.radius*e.radius;if(a>l)return null;let d=Math.sqrt(l-a),p=i-d,v=i+d;return p<0&&v<0?null:p<0?this.at(v,t):this.at(p,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,d,p,v,g=1/this.direction.x,_=1/this.direction.y,b=1/this.direction.z,w=this.origin;return g>=0?(i=(e.min.x-w.x)*g,a=(e.max.x-w.x)*g):(i=(e.max.x-w.x)*g,a=(e.min.x-w.x)*g),_>=0?(l=(e.min.y-w.y)*_,d=(e.max.y-w.y)*_):(l=(e.max.y-w.y)*_,d=(e.min.y-w.y)*_),i>d||l>a||((l>i||i!==i)&&(i=l),(d<a||a!==a)&&(a=d),b>=0?(p=(e.min.z-w.z)*b,v=(e.max.z-w.z)*b):(p=(e.max.z-w.z)*b,v=(e.min.z-w.z)*b),i>v||p>a)||((p>i||i!==i)&&(i=p),(v<a||a!==a)&&(a=v),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,mo)!==null}intersectTriangle(e,t,i,a,l){Wf.subVectors(t,e),lh.subVectors(i,e),qf.crossVectors(Wf,lh);let d=this.direction.dot(qf),p;if(d>0){if(a)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Ko.subVectors(this.origin,e);let v=p*this.direction.dot(lh.crossVectors(Ko,lh));if(v<0)return null;let g=p*this.direction.dot(Wf.cross(Ko));if(g<0||v+g>d)return null;let _=-p*Ko.dot(qf);return _<0?null:this.at(_/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var pr=new z,go=new z,Xf=new z,vo=new z,ks=new z,Os=new z,Rv=new z,Yf=new z,jf=new z,Kf=new z,Jo=class r{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),a=new z),a.subVectors(i,t),pr.subVectors(e,t),a.cross(pr);let l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){pr.subVectors(a,t),go.subVectors(i,t),Xf.subVectors(e,t);let d=pr.dot(pr),p=pr.dot(go),v=pr.dot(Xf),g=go.dot(go),_=go.dot(Xf),b=d*g-p*p;if(l===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),l=new z),b===0)return l.set(-2,-1,-1);let w=1/b,f=(g*v-p*_)*w,C=(d*_-p*v)*w;return l.set(1-f-C,C,f)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,vo),vo.x>=0&&vo.y>=0&&vo.x+vo.y<=1}static getUV(e,t,i,a,l,d,p,v){return this.getBarycoord(e,t,i,a,vo),v.set(0,0),v.addScaledVector(l,vo.x),v.addScaledVector(d,vo.y),v.addScaledVector(p,vo.z),v}static isFrontFacing(e,t,i,a){return pr.subVectors(i,t),go.subVectors(e,t),pr.cross(go).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pr.subVectors(this.c,this.b),go.subVectors(this.a,this.b),pr.cross(go).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new z),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new _i),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,l){return r.getUV(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new z);let i=this.a,a=this.b,l=this.c,d,p;ks.subVectors(a,i),Os.subVectors(l,i),Yf.subVectors(e,i);let v=ks.dot(Yf),g=Os.dot(Yf);if(v<=0&&g<=0)return t.copy(i);jf.subVectors(e,a);let _=ks.dot(jf),b=Os.dot(jf);if(_>=0&&b<=_)return t.copy(a);let w=v*b-_*g;if(w<=0&&v>=0&&_<=0)return d=v/(v-_),t.copy(i).addScaledVector(ks,d);Kf.subVectors(e,l);let f=ks.dot(Kf),C=Os.dot(Kf);if(C>=0&&f<=C)return t.copy(l);let R=f*g-v*C;if(R<=0&&g>=0&&C<=0)return p=g/(g-C),t.copy(i).addScaledVector(Os,p);let I=_*C-f*b;if(I<=0&&b-_>=0&&f-C>=0)return Rv.subVectors(l,a),p=(b-_)/(b-_+(f-C)),t.copy(a).addScaledVector(Rv,p);let E=1/(I+R+w);return d=R*E,p=w*E,t.copy(i).addScaledVector(ks,d).addScaledVector(Os,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Cv=new xt,Bs=new Zo,Zf=new bi,Qo=new z,$o=new z,ea=new z,Jf=new z,Qf=new z,$f=new z,ch=new z,dh=new z,hh=new z,uh=new je,fh=new je,ph=new je,ep=new z,mh=new z,ai=class extends Jt{constructor(e=new Xt,t=new Ia){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){let p=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=l}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let i=this.geometry,a=this.material,l=this.matrixWorld;if(a===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Zf.copy(i.boundingSphere),Zf.applyMatrix4(l),e.ray.intersectsSphere(Zf)===!1)||(Cv.copy(l).invert(),Bs.copy(e.ray).applyMatrix4(Cv),i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1))return;let d;if(i.isBufferGeometry){let p=i.index,v=i.attributes.position,g=i.morphAttributes.position,_=i.morphTargetsRelative,b=i.attributes.uv,w=i.attributes.uv2,f=i.groups,C=i.drawRange;if(p!==null)if(Array.isArray(a))for(let R=0,I=f.length;R<I;R++){let E=f[R],x=a[E.materialIndex],Y=Math.max(E.start,C.start),W=Math.min(E.start+E.count,C.start+C.count);for(let Q=Y,F=W;Q<F;Q+=3){let oe=p.getX(Q),ue=p.getX(Q+1),fe=p.getX(Q+2);d=gh(this,x,e,Bs,v,g,_,b,w,oe,ue,fe),d&&(d.faceIndex=Math.floor(Q/3),d.face.materialIndex=E.materialIndex,t.push(d))}}else{let R=Math.max(0,C.start),I=Math.min(p.count,C.start+C.count);for(let E=R,x=I;E<x;E+=3){let Y=p.getX(E),W=p.getX(E+1),Q=p.getX(E+2);d=gh(this,a,e,Bs,v,g,_,b,w,Y,W,Q),d&&(d.faceIndex=Math.floor(E/3),t.push(d))}}else if(v!==void 0)if(Array.isArray(a))for(let R=0,I=f.length;R<I;R++){let E=f[R],x=a[E.materialIndex],Y=Math.max(E.start,C.start),W=Math.min(E.start+E.count,C.start+C.count);for(let Q=Y,F=W;Q<F;Q+=3){let oe=Q,ue=Q+1,fe=Q+2;d=gh(this,x,e,Bs,v,g,_,b,w,oe,ue,fe),d&&(d.faceIndex=Math.floor(Q/3),d.face.materialIndex=E.materialIndex,t.push(d))}}else{let R=Math.max(0,C.start),I=Math.min(v.count,C.start+C.count);for(let E=R,x=I;E<x;E+=3){let Y=E,W=E+1,Q=E+2;d=gh(this,a,e,Bs,v,g,_,b,w,Y,W,Q),d&&(d.faceIndex=Math.floor(E/3),t.push(d))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};ai.prototype.isMesh=!0;function MS(r,e,t,i,a,l,d,p){let v;if(e.side===tn?v=i.intersectTriangle(d,l,a,!0,p):v=i.intersectTriangle(a,l,d,e.side!==Sr,p),v===null)return null;mh.copy(p),mh.applyMatrix4(r.matrixWorld);let g=t.ray.origin.distanceTo(mh);return g<t.near||g>t.far?null:{distance:g,point:mh.clone(),object:r}}function gh(r,e,t,i,a,l,d,p,v,g,_,b){Qo.fromBufferAttribute(a,g),$o.fromBufferAttribute(a,_),ea.fromBufferAttribute(a,b);let w=r.morphTargetInfluences;if(e.morphTargets&&l&&w){ch.set(0,0,0),dh.set(0,0,0),hh.set(0,0,0);for(let C=0,R=l.length;C<R;C++){let I=w[C],E=l[C];I!==0&&(Jf.fromBufferAttribute(E,g),Qf.fromBufferAttribute(E,_),$f.fromBufferAttribute(E,b),d?(ch.addScaledVector(Jf,I),dh.addScaledVector(Qf,I),hh.addScaledVector($f,I)):(ch.addScaledVector(Jf.sub(Qo),I),dh.addScaledVector(Qf.sub($o),I),hh.addScaledVector($f.sub(ea),I)))}Qo.add(ch),$o.add(dh),ea.add(hh)}r.isSkinnedMesh&&e.skinning&&(r.boneTransform(g,Qo),r.boneTransform(_,$o),r.boneTransform(b,ea));let f=MS(r,e,t,i,Qo,$o,ea,ep);if(f){p&&(uh.fromBufferAttribute(p,g),fh.fromBufferAttribute(p,_),ph.fromBufferAttribute(p,b),f.uv=Jo.getUV(ep,Qo,$o,ea,uh,fh,ph,new je)),v&&(uh.fromBufferAttribute(v,g),fh.fromBufferAttribute(v,_),ph.fromBufferAttribute(v,b),f.uv2=Jo.getUV(ep,Qo,$o,ea,uh,fh,ph,new je));let C={a:g,b:_,c:b,normal:new z,materialIndex:0};Jo.getNormal(Qo,$o,ea,C.normal),f.face=C}return f}var Dv=new xt,Pv=new xt,vh=[],mc=new ai,gc=class extends ai{constructor(e,t,i){super(e,t),this.instanceMatrix=new un(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,a=this.count;if(mc.geometry=this.geometry,mc.material=this.material,mc.material!==void 0)for(let l=0;l<a;l++){this.getMatrixAt(l,Dv),Pv.multiplyMatrices(i,Dv),mc.matrixWorld=Pv,mc.raycast(e,vh);for(let d=0,p=vh.length;d<p;d++){let v=vh[d];v.instanceId=l,v.object=this,t.push(v)}vh.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new un(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};gc.prototype.isInstancedMesh=!0;var Fv=new z,Nv=new z,Iv=new xt,tp=new Zo,xh=new bi,xo=class extends Jt{constructor(e=new Xt,t=new Na){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[0];for(let a=1,l=t.count;a<l;a++)Fv.fromBufferAttribute(t,a-1),Nv.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Fv.distanceTo(Nv);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let i=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,d=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xh.copy(i.boundingSphere),xh.applyMatrix4(a),xh.radius+=l,e.ray.intersectsSphere(xh)===!1)return;Iv.copy(a).invert(),tp.copy(e.ray).applyMatrix4(Iv);let p=l/((this.scale.x+this.scale.y+this.scale.z)/3),v=p*p,g=new z,_=new z,b=new z,w=new z,f=this.isLineSegments?2:1;if(i.isBufferGeometry){let C=i.index,I=i.attributes.position;if(C!==null){let E=Math.max(0,d.start),x=Math.min(C.count,d.start+d.count);for(let Y=E,W=x-1;Y<W;Y+=f){let Q=C.getX(Y),F=C.getX(Y+1);if(g.fromBufferAttribute(I,Q),_.fromBufferAttribute(I,F),tp.distanceSqToSegment(g,_,w,b)>v)continue;w.applyMatrix4(this.matrixWorld);let ue=e.ray.origin.distanceTo(w);ue<e.near||ue>e.far||t.push({distance:ue,point:b.clone().applyMatrix4(this.matrixWorld),index:Y,face:null,faceIndex:null,object:this})}}else{let E=Math.max(0,d.start),x=Math.min(I.count,d.start+d.count);for(let Y=E,W=x-1;Y<W;Y+=f){if(g.fromBufferAttribute(I,Y),_.fromBufferAttribute(I,Y+1),tp.distanceSqToSegment(g,_,w,b)>v)continue;w.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(w);F<e.near||F>e.far||t.push({distance:F,point:b.clone().applyMatrix4(this.matrixWorld),index:Y,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){let p=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=l}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};xo.prototype.isLine=!0;var vc=class extends xo{constructor(e,t){super(e,t),this.type="LineLoop"}};vc.prototype.isLineLoop=!0;var kv=new z,Ov=new z,xc=class extends xo{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[];for(let a=0,l=t.count;a<l;a+=2)kv.fromBufferAttribute(t,a),Ov.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+kv.distanceTo(Ov);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};xc.prototype.isLineSegments=!0;var yc=class extends Dn{constructor(e){super(),this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};yc.prototype.isPointsMaterial=!0;var Bv=new xt,np=new Zo,yh=new bi,wh=new z,wc=class extends Jt{constructor(e=new Xt,t=new yc){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,d=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yh.copy(i.boundingSphere),yh.applyMatrix4(a),yh.radius+=l,e.ray.intersectsSphere(yh)===!1)return;Bv.copy(a).invert(),np.copy(e.ray).applyMatrix4(Bv);let p=l/((this.scale.x+this.scale.y+this.scale.z)/3),v=p*p;if(i.isBufferGeometry){let g=i.index,b=i.attributes.position;if(g!==null){let w=Math.max(0,d.start),f=Math.min(g.count,d.start+d.count);for(let C=w,R=f;C<R;C++){let I=g.getX(C);wh.fromBufferAttribute(b,I),Uv(wh,I,v,a,e,t,this)}}else{let w=Math.max(0,d.start),f=Math.min(b.count,d.start+d.count);for(let C=w,R=f;C<R;C++)wh.fromBufferAttribute(b,C),Uv(wh,C,v,a,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){let p=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=l}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};wc.prototype.isPoints=!0;function Uv(r,e,t,i,a,l,d){let p=np.distanceSqToPoint(r);if(p<t){let v=new z;np.closestPointToPoint(r,v),v.applyMatrix4(i);let g=a.ray.origin.distanceTo(v);if(g<a.near||g>a.far)return;l.push({distance:g,distanceToRay:Math.sqrt(p),point:v,index:e,face:null,object:d})}}var bc=class r{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Fi(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new r(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};bc.prototype.isInterleavedBuffer=!0;var xn=new z,Us=class r{constructor(e,t,i,a){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.x=this.getX(t),xn.y=this.getY(t),xn.z=this.getZ(t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.x=this.getX(t),xn.y=this.getY(t),xn.z=this.getZ(t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.x=this.getX(t),xn.y=this.getY(t),xn.z=this.getZ(t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};Us.prototype.isInterleavedBufferAttribute=!0;var zs,_c=new z,Gs=new z,Vs=new z,Hs=new je,Mc=new je,Vv=new xt,bh=new z,Sc=new z,_h=new z,zv=new je,ip=new je,Gv=new je,Ec=class extends Jt{constructor(e){if(super(),this.type="Sprite",zs===void 0){zs=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bc(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Us(i,3,0,!1)),zs.setAttribute("uv",new Us(i,2,3,!1))}this.geometry=zs,this.material=e!==void 0?e:new ka,this.center=new je(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Vv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Vs.z);let i=this.material.rotation,a,l;i!==0&&(l=Math.cos(i),a=Math.sin(i));let d=this.center;Mh(bh.set(-.5,-.5,0),Vs,d,Gs,a,l),Mh(Sc.set(.5,-.5,0),Vs,d,Gs,a,l),Mh(_h.set(.5,.5,0),Vs,d,Gs,a,l),zv.set(0,0),ip.set(1,0),Gv.set(1,1);let p=e.ray.intersectTriangle(bh,Sc,_h,!1,_c);if(p===null&&(Mh(Sc.set(-.5,.5,0),Vs,d,Gs,a,l),ip.set(0,1),p=e.ray.intersectTriangle(bh,_h,Sc,!1,_c),p===null))return;let v=e.ray.origin.distanceTo(_c);v<e.near||v>e.far||t.push({distance:v,point:_c.clone(),uv:Jo.getUV(_c,bh,Sc,_h,zv,ip,Gv,new je),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Ec.prototype.isSprite=!0;function Mh(r,e,t,i,a,l){Hs.subVectors(r,t).addScalar(.5).multiply(i),a!==void 0?(Mc.x=l*Hs.x-a*Hs.y,Mc.y=a*Hs.x+l*Hs.y):Mc.copy(Hs),r.copy(e),r.x+=Mc.x,r.y+=Mc.y,r.applyMatrix4(Vv)}var Ws,Sh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Ws.width=e.width,Ws.height=e.height;let i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}};var SS=0,Pn=class r extends wi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=oi,a=oi,l=qn,d=Ho,p=On,v=Wo,g=1,_=Xo){super(),Object.defineProperty(this,"id",{value:SS++}),this.uuid=Fi(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=g,this.format=p,this.internalFormat=null,this.type=v,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=_,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let a=this.image;if(a.uuid===void 0&&(a.uuid=Fi()),!t&&e.images[a.uuid]===void 0){let l;if(Array.isArray(a)){l=[];for(let d=0,p=a.length;d<p;d++)a[d].isDataTexture?l.push(rp(a[d].image)):l.push(rp(a[d]))}else l=rp(a);e.images[a.uuid]={uuid:a.uuid,url:l}}i.image=a.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};Pn.DEFAULT_IMAGE=void 0;Pn.DEFAULT_MAPPING=gf;Pn.prototype.isTexture=!0;function rp(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Sh.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ac=class extends Pn{constructor(e,t,i,a,l,d,p,v,g,_,b,w){super(null,d,p,v,g,_,a,l,b,w),this.image={data:e||null,width:t||1,height:i||1},this.magFilter=g!==void 0?g:_n,this.minFilter=_!==void 0?_:_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Ac.prototype.isDataTexture=!0;function Eh(){let r=null,e=!1,t=null,i=null;function a(l,d){t(l,d),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Hv(r,e){let t=e.isWebGL2,i=new WeakMap;function a(g,_){let b=g.array,w=g.usage,f=r.createBuffer();r.bindBuffer(_,f),r.bufferData(_,b,w),g.onUploadCallback();let C=r.FLOAT;return b instanceof Float32Array?C=r.FLOAT:b instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):b instanceof Uint16Array?g.isFloat16BufferAttribute?t?C=r.HALF_FLOAT:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):C=r.UNSIGNED_SHORT:b instanceof Int16Array?C=r.SHORT:b instanceof Uint32Array?C=r.UNSIGNED_INT:b instanceof Int32Array?C=r.INT:b instanceof Int8Array?C=r.BYTE:b instanceof Uint8Array&&(C=r.UNSIGNED_BYTE),{buffer:f,type:C,bytesPerElement:b.BYTES_PER_ELEMENT,version:g.version}}function l(g,_,b){let w=_.array,f=_.updateRange;r.bindBuffer(b,g),f.count===-1?r.bufferSubData(b,0,w):(t?r.bufferSubData(b,f.offset*w.BYTES_PER_ELEMENT,w,f.offset,f.count):r.bufferSubData(b,f.offset*w.BYTES_PER_ELEMENT,w.subarray(f.offset,f.offset+f.count)),f.count=-1)}function d(g){return g.isInterleavedBufferAttribute&&(g=g.data),i.get(g)}function p(g){g.isInterleavedBufferAttribute&&(g=g.data);let _=i.get(g);_&&(r.deleteBuffer(_.buffer),i.delete(g))}function v(g,_){if(g.isGLBufferAttribute){let w=i.get(g);(!w||w.version<g.version)&&i.set(g,{buffer:g.buffer,type:g.type,bytesPerElement:g.elementSize,version:g.version});return}g.isInterleavedBufferAttribute&&(g=g.data);let b=i.get(g);b===void 0?i.set(g,a(g,_)):b.version<g.version&&(l(b.buffer,g,_),b.version=g.version)}return{get:d,remove:p,update:v}}var qs=class extends Xt{constructor(e=1,t=1,i=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:d};let p=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);let v=[],g=[],_=[],b=[],w=0,f=0;C("z","y","x",-1,-1,i,t,e,d,l,0),C("z","y","x",1,-1,i,t,-e,d,l,1),C("x","z","y",1,1,e,i,t,a,d,2),C("x","z","y",1,-1,e,i,-t,a,d,3),C("x","y","z",1,-1,e,t,i,a,l,4),C("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(v),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(b,2));function C(R,I,E,x,Y,W,Q,F,oe,ue,fe){let j=W/oe,Me=Q/ue,we=W/2,ie=Q/2,le=F/2,k=oe+1,re=ue+1,Le=0,Ve=0,Oe=new z;for(let qe=0;qe<re;qe++){let Ye=qe*Me-ie;for(let st=0;st<k;st++){let gt=st*j-we;Oe[R]=gt*x,Oe[I]=Ye*Y,Oe[E]=le,g.push(Oe.x,Oe.y,Oe.z),Oe[R]=0,Oe[I]=0,Oe[E]=F>0?1:-1,_.push(Oe.x,Oe.y,Oe.z),b.push(st/oe),b.push(1-qe/ue),Le+=1}}for(let qe=0;qe<ue;qe++)for(let Ye=0;Ye<oe;Ye++){let st=w+Ye+k*qe,gt=w+Ye+k*(qe+1),ee=w+(Ye+1)+k*(qe+1),Qt=w+(Ye+1)+k*qe;v.push(st,gt,Qt),v.push(gt,ee,Qt),Ve+=6}p.addGroup(f,Ve,fe),f+=Ve,w+=Le}}};var Wv=`
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif
`;var qv=`
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif
`;var Xv=`
#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif
`;var Yv=`
#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif
`;var jv=`
#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif
`;var Kv=`
vec3 transformed = vec3( position );
`;var Zv=`
vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif
`;var Jv=`
vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif
`;var Qv=`
#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif
`;var $v=`
#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
`;var ex=`
#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif
`;var tx=`
#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif
`;var nx=`
#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif
`;var ix=`
#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif
`;var rx=`
#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif
`;var ox=`
#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif
`;var ax=`
#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
`;var sx=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
`;var lx=`
#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif
`;var cx=`
vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif
`;var dx=`
#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif
`;var hx=`
#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif
`;var ux=`
#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif
`;var fx=`
#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif
`;var px=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var mx=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}
`;var gx=`
#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif
`;var vx=`
#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;var xx=`
#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif
`;var yx=`
#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif
`;var wx=`
#ifdef USE_ENVMAP
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
#endif
`;var bx=`
#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif
`;var _x=`
#ifdef USE_FOG
	varying float fogDepth;
#endif
`;var Mx=`
#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif
`;var Sx=`
#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif
`;var Ex=`
#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}
`;var Ax=`
#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif
`;var Tx=`
#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif
`;var Lx=`
vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif
`;var Rx=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif
`;var Cx=`
#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif
`;var Dx=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var Px=`
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)
`;var Fx=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var Nx=`
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)
`;var Ix=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif
`;var kx=`
struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}
`;var Ox=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif
`;var Bx=`
#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif
`;var Ux=`
#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif
`;var zx=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif
`;var Gx=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif
`;var Vx=`
#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif
`;var Hx=`
#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif
`;var Wx=`
#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif
`;var qx=`
#ifdef USE_MAP
	uniform sampler2D map;
#endif
`;var Xx=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif
`;var Yx=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif
`;var jx=`
float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif
`;var Kx=`
#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif
`;var Zx=`
#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif
`;var Jx=`
#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif
`;var Qx=`
#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif
`;var $x=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;
`;var ey=`
#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif
`;var ty=`
#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif
`;var ny=`
#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif
`;var iy=`
#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif
`;var ry=`
#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
`;var oy=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`;var ay=`
#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif
`;var sy=`
vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;
`;var ly=`
#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif
`;var cy=`
#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif
`;var dy=`
float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif
`;var hy=`
#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif
`;var uy=`
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif
`;var fy=`
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif
`;var py=`
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
`;var my=`
float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}
`;var gy=`
#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif
`;var vy=`
#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif
`;var xy=`
#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif
`;var yy=`
#ifdef USE_SKINNING
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
#endif
`;var wy=`
float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif
`;var by=`
#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif
`;var _y=`
#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif
`;var My=`
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }
`;var Sy=`
#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif
`;var Ey=`
#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif
`;var Ay=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif
`;var Ty=`
#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif
`;var Ly=`
#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif
`;var Ry=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif
`;var Cy=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif
`;var Dy=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif
`;var Py=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif
`;var Fy=`
uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}
`;var Ny=`
varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}
`;var Iy=`
#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}
`;var ky=`
varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}
`;var Oy=`
#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}
`;var By=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}
`;var Uy=`
#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}
`;var zy=`
#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}
`;var Gy=`
uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}
`;var Vy=`
varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}
`;var Hy=`
uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}
`;var Wy=`
uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}
`;var qy=`
uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var Xy=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}
`;var Yy=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var jy=`
#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;var Ky=`
#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var Zy=`
#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}
`;var Jy=`
#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var Qy=`
#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}
`;var $y=`
#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var ew=`
#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}
`;var tw=`
#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var nw=`
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}
`;var iw=`
#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}
`;var rw=`
#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}
`;var ow=`
uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}
`;var aw=`
uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}
`;var sw=`
uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`;var lw=`
#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;var cw=`
uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`;var dw=`
uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}
`;var bt={alphamap_fragment:Wv,alphamap_pars_fragment:qv,alphatest_fragment:Xv,aomap_fragment:Yv,aomap_pars_fragment:jv,begin_vertex:Kv,beginnormal_vertex:Zv,bsdfs:Jv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:$v,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:rx,color_pars_vertex:ox,color_vertex:ax,common:sx,cube_uv_reflection_fragment:lx,defaultnormal_vertex:cx,displacementmap_pars_vertex:dx,displacementmap_vertex:hx,emissivemap_fragment:ux,emissivemap_pars_fragment:fx,encodings_fragment:px,encodings_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:vx,envmap_pars_fragment:xx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Cx,envmap_vertex:wx,fog_vertex:bx,fog_pars_vertex:_x,fog_fragment:Mx,fog_pars_fragment:Sx,gradientmap_pars_fragment:Ex,lightmap_fragment:Ax,lightmap_pars_fragment:Tx,lights_lambert_vertex:Lx,lights_pars_begin:Rx,lights_toon_fragment:Dx,lights_toon_pars_fragment:Px,lights_phong_fragment:Fx,lights_phong_pars_fragment:Nx,lights_physical_fragment:Ix,lights_physical_pars_fragment:kx,lights_fragment_begin:Ox,lights_fragment_maps:Bx,lights_fragment_end:Ux,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Hx,map_fragment:Wx,map_pars_fragment:qx,map_particle_fragment:Xx,map_particle_pars_fragment:Yx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:Kx,morphnormal_vertex:Zx,morphtarget_pars_vertex:Jx,morphtarget_vertex:Qx,normal_fragment_begin:$x,normal_fragment_maps:ey,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:ry,packing:oy,premultiplied_alpha_fragment:ay,project_vertex:sy,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:uy,shadowmap_pars_vertex:fy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:vy,skinning_vertex:xy,skinnormal_vertex:yy,specularmap_fragment:wy,specularmap_pars_fragment:by,tonemapping_fragment:_y,tonemapping_pars_fragment:My,transmissionmap_fragment:Sy,transmissionmap_pars_fragment:Ey,uv_pars_fragment:Ay,uv_pars_vertex:Ty,uv_vertex:Ly,uv2_pars_fragment:Ry,uv2_pars_vertex:Cy,uv2_vertex:Dy,worldpos_vertex:Py,background_frag:Fy,background_vert:Ny,cube_frag:Iy,cube_vert:ky,depth_frag:Oy,depth_vert:By,distanceRGBA_frag:Uy,distanceRGBA_vert:zy,equirect_frag:Gy,equirect_vert:Vy,linedashed_frag:Hy,linedashed_vert:Wy,meshbasic_frag:qy,meshbasic_vert:Xy,meshlambert_frag:Yy,meshlambert_vert:jy,meshmatcap_frag:Ky,meshmatcap_vert:Zy,meshtoon_frag:Jy,meshtoon_vert:Qy,meshphong_frag:$y,meshphong_vert:ew,meshphysical_frag:tw,meshphysical_vert:nw,normal_frag:iw,normal_vert:rw,points_frag:ow,points_vert:aw,shadow_frag:sw,shadow_vert:lw,sprite_frag:cw,sprite_vert:dw};var ze={common:{diffuse:{value:new at(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new bn},uv2Transform:{value:new bn},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new bn}},sprite:{diffuse:{value:new at(15658734)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new bn}}};var qi={basic:{uniforms:Xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.fog,ze.lights,{emissive:{value:new at(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Xn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Xn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new at(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Xn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Xn([ze.points,ze.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Xn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Xn([ze.common,ze.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Xn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:bt.normal_vert,fragmentShader:bt.normal_frag},sprite:{uniforms:Xn([ze.sprite,ze.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new bn},t2D:{value:null}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},cube:{uniforms:Xn([ze.envmap,{opacity:{value:1}}]),vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:Xn([ze.common,ze.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:Xn([ze.lights,ze.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};qi.physical={uniforms:Xn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new je(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new at(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};function hw(r,e,t,i,a){let l=new at(0),d=0,p,v,g=null,_=0,b=null;function w(C,R,I,E){let x=R.isScene===!0?R.background:null;x&&x.isTexture&&(x=e.get(x));let Y=r.xr,W=Y.getSession&&Y.getSession();W&&W.environmentBlendMode==="additive"&&(x=null),x===null?f(l,d):x&&x.isColor&&(f(x,1),E=!0),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ms)?(v===void 0&&(v=new ai(new qs(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:po(qi.cube.uniforms),vertexShader:qi.cube.vertexShader,fragmentShader:qi.cube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(Q,F,oe){this.matrixWorld.copyPosition(oe.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(v)),v.material.uniforms.envMap.value=x,v.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x._needsFlipEnvMap?-1:1,(g!==x||_!==x.version||b!==r.toneMapping)&&(v.material.needsUpdate=!0,g=x,_=x.version,b=r.toneMapping),C.unshift(v,v.geometry,v.material,0,0,null)):x&&x.isTexture&&(p===void 0&&(p=new ai(new Fs(2,2),new Wi({name:"BackgroundMaterial",uniforms:po(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Ra,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(p)),p.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),p.material.uniforms.uvTransform.value.copy(x.matrix),(g!==x||_!==x.version||b!==r.toneMapping)&&(p.material.needsUpdate=!0,g=x,_=x.version,b=r.toneMapping),C.unshift(p,p.geometry,p.material,0,0,null))}function f(C,R){t.buffers.color.setClear(C.r,C.g,C.b,R,a)}return{getClearColor:function(){return l},setClearColor:function(C,R=1){l.set(C),d=R,f(l,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,f(l,d)},render:w}}function uw(r,e,t,i){let a=r.getParameter(r.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:e.get("OES_vertex_array_object"),d=i.isWebGL2||l!==null,p={},v=R(null),g=v;function _(ie,le,k,re,Le){let Ve=!1;if(d){let Oe=C(re,k,le);g!==Oe&&(g=Oe,w(g.object)),Ve=I(re,Le),Ve&&E(re,Le)}else{let Oe=le.wireframe===!0;(g.geometry!==re.id||g.program!==k.id||g.wireframe!==Oe)&&(g.geometry=re.id,g.program=k.id,g.wireframe=Oe,Ve=!0)}ie.isInstancedMesh===!0&&(Ve=!0),Le!==null&&t.update(Le,r.ELEMENT_ARRAY_BUFFER),Ve&&(oe(ie,le,k,re),Le!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Le).buffer))}function b(){return i.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function w(ie){return i.isWebGL2?r.bindVertexArray(ie):l.bindVertexArrayOES(ie)}function f(ie){return i.isWebGL2?r.deleteVertexArray(ie):l.deleteVertexArrayOES(ie)}function C(ie,le,k){let re=k.wireframe===!0,Le=p[ie.id];Le===void 0&&(Le={},p[ie.id]=Le);let Ve=Le[le.id];Ve===void 0&&(Ve={},Le[le.id]=Ve);let Oe=Ve[re];return Oe===void 0&&(Oe=R(b()),Ve[re]=Oe),Oe}function R(ie){let le=[],k=[],re=[];for(let Le=0;Le<a;Le++)le[Le]=0,k[Le]=0,re[Le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:le,enabledAttributes:k,attributeDivisors:re,object:ie,attributes:{},index:null}}function I(ie,le){let k=g.attributes,re=ie.attributes,Le=0;for(let Ve in re){let Oe=k[Ve],qe=re[Ve];if(Oe===void 0||Oe.attribute!==qe||Oe.data!==qe.data)return!0;Le++}return g.attributesNum!==Le||g.index!==le}function E(ie,le){let k={},re=ie.attributes,Le=0;for(let Ve in re){let Oe=re[Ve],qe={};qe.attribute=Oe,Oe.data&&(qe.data=Oe.data),k[Ve]=qe,Le++}g.attributes=k,g.attributesNum=Le,g.index=le}function x(){let ie=g.newAttributes;for(let le=0,k=ie.length;le<k;le++)ie[le]=0}function Y(ie){W(ie,0)}function W(ie,le){let k=g.newAttributes,re=g.enabledAttributes,Le=g.attributeDivisors;k[ie]=1,re[ie]===0&&(r.enableVertexAttribArray(ie),re[ie]=1),Le[ie]!==le&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](ie,le),Le[ie]=le)}function Q(){let ie=g.newAttributes,le=g.enabledAttributes;for(let k=0,re=le.length;k<re;k++)le[k]!==ie[k]&&(r.disableVertexAttribArray(k),le[k]=0)}function F(ie,le,k,re,Le,Ve){i.isWebGL2===!0&&(k===r.INT||k===r.UNSIGNED_INT)?r.vertexAttribIPointer(ie,le,k,Le,Ve):r.vertexAttribPointer(ie,le,k,re,Le,Ve)}function oe(ie,le,k,re){if(i.isWebGL2===!1&&(ie.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Le=re.attributes,Ve=k.getAttributes(),Oe=le.defaultAttributeValues;for(let qe in Ve){let Ye=Ve[qe];if(Ye>=0){let st=Le[qe];if(st!==void 0){let gt=st.normalized,ee=st.itemSize,Qt=t.get(st);if(Qt===void 0)continue;let St=Qt.buffer,mt=Qt.type,$e=Qt.bytesPerElement;if(st.isInterleavedBufferAttribute){let kt=st.data,Dt=kt.stride,Yt=st.offset;kt&&kt.isInstancedInterleavedBuffer?(W(Ye,kt.meshPerAttribute),re._maxInstanceCount===void 0&&(re._maxInstanceCount=kt.meshPerAttribute*kt.count)):Y(Ye),r.bindBuffer(r.ARRAY_BUFFER,St),F(Ye,ee,mt,gt,Dt*$e,Yt*$e)}else st.isInstancedBufferAttribute?(W(Ye,st.meshPerAttribute),re._maxInstanceCount===void 0&&(re._maxInstanceCount=st.meshPerAttribute*st.count)):Y(Ye),r.bindBuffer(r.ARRAY_BUFFER,St),F(Ye,ee,mt,gt,0,0)}else if(qe==="instanceMatrix"){let gt=t.get(ie.instanceMatrix);if(gt===void 0)continue;let ee=gt.buffer,Qt=gt.type;W(Ye+0,1),W(Ye+1,1),W(Ye+2,1),W(Ye+3,1),r.bindBuffer(r.ARRAY_BUFFER,ee),r.vertexAttribPointer(Ye+0,4,Qt,!1,64,0),r.vertexAttribPointer(Ye+1,4,Qt,!1,64,16),r.vertexAttribPointer(Ye+2,4,Qt,!1,64,32),r.vertexAttribPointer(Ye+3,4,Qt,!1,64,48)}else if(qe==="instanceColor"){let gt=t.get(ie.instanceColor);if(gt===void 0)continue;let ee=gt.buffer,Qt=gt.type;W(Ye,1),r.bindBuffer(r.ARRAY_BUFFER,ee),r.vertexAttribPointer(Ye,3,Qt,!1,12,0)}else if(Oe!==void 0){let gt=Oe[qe];if(gt!==void 0)switch(gt.length){case 2:r.vertexAttrib2fv(Ye,gt);break;case 3:r.vertexAttrib3fv(Ye,gt);break;case 4:r.vertexAttrib4fv(Ye,gt);break;default:r.vertexAttrib1fv(Ye,gt)}}}}Q()}function ue(){Me();for(let ie in p){let le=p[ie];for(let k in le){let re=le[k];for(let Le in re)f(re[Le].object),delete re[Le];delete le[k]}delete p[ie]}}function fe(ie){if(p[ie.id]===void 0)return;let le=p[ie.id];for(let k in le){let re=le[k];for(let Le in re)f(re[Le].object),delete re[Le];delete le[k]}delete p[ie.id]}function j(ie){for(let le in p){let k=p[le];if(k[ie.id]===void 0)continue;let re=k[ie.id];for(let Le in re)f(re[Le].object),delete re[Le];delete k[ie.id]}}function Me(){we(),g!==v&&(g=v,w(g.object))}function we(){v.geometry=null,v.program=null,v.wireframe=!1}return{setup:_,reset:Me,resetDefaultState:we,dispose:ue,releaseStatesOfGeometry:fe,releaseStatesOfProgram:j,initAttributes:x,enableAttribute:Y,disableUnusedAttributes:Q}}function fw(r,e,t,i){let a=i.isWebGL2,l;function d(g){l=g}function p(g,_){r.drawArrays(l,g,_),t.update(_,l,1)}function v(g,_,b){if(b===0)return;let w,f;if(a)w=r,f="drawArraysInstanced";else if(w=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",w===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[f](l,g,_,b),t.update(_,l,b)}this.setMode=d,this.render=p,this.renderInstances=v}function pw(r,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let F=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,p=t.precision!==void 0?t.precision:"highp",v=l(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);let g=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),C=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=b>0,Y=d||e.has("OES_texture_float"),W=x&&Y,Q=d?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:d,getMaxAnisotropy:a,getMaxPrecision:l,precision:p,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:f,maxAttributes:C,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:Y,floatVertexTextures:W,maxSamples:Q}}function mw(r){let e=this,t=null,i=0,a=!1,l=!1,d=new _i,p=new bn,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(b,w,f){let C=b.length!==0||w||i!==0||a;return a=w,t=_(b,f,0),i=b.length,C},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1,g()},this.setState=function(b,w,f){let C=b.clippingPlanes,R=b.clipIntersection,I=b.clipShadows,E=r.get(b);if(!a||C===null||C.length===0||l&&!I)l?_(null):g();else{let x=l?0:i,Y=x*4,W=E.clippingState||null;v.value=W,W=_(C,w,Y,f);for(let Q=0;Q!==Y;++Q)W[Q]=t[Q];E.clippingState=W,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=x}};function g(){v.value!==t&&(v.value=t,v.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function _(b,w,f,C){let R=b!==null?b.length:0,I=null;if(R!==0){if(I=v.value,C!==!0||I===null){let E=f+R*4,x=w.matrixWorldInverse;p.getNormalMatrix(x),(I===null||I.length<E)&&(I=new Float32Array(E));for(let Y=0,W=f;Y!==R;++Y,W+=4)d.copy(b[Y]).applyMatrix4(x,p),d.normal.toArray(I,W),I[W+3]=d.constant}v.value=I,v.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,I}}var mr=class extends wi{constructor(e,t,i){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),i=i||{},this.texture=new Pn(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:qn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};mr.prototype.isWebGLRenderTarget=!0;var Xs=90,Ys=1,Ah=class extends Jt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let a=new Cn(Xs,Ys,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new z(1,0,0)),this.add(a);let l=new Cn(Xs,Ys,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(-1,0,0)),this.add(l);let d=new Cn(Xs,Ys,e,t);d.layers=this.layers,d.up.set(0,0,1),d.lookAt(new z(0,1,0)),this.add(d);let p=new Cn(Xs,Ys,e,t);p.layers=this.layers,p.up.set(0,0,-1),p.lookAt(new z(0,-1,0)),this.add(p);let v=new Cn(Xs,Ys,e,t);v.layers=this.layers,v.up.set(0,-1,0),v.lookAt(new z(0,0,1)),this.add(v);let g=new Cn(Xs,Ys,e,t);g.layers=this.layers,g.up.set(0,-1,0),g.lookAt(new z(0,0,-1)),this.add(g)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[a,l,d,p,v,g]=this.children,_=e.xr.enabled,b=e.getRenderTarget();e.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,a),e.setRenderTarget(i,1),e.render(t,l),e.setRenderTarget(i,2),e.render(t,d),e.setRenderTarget(i,3),e.render(t,p),e.setRenderTarget(i,4),e.render(t,v),i.texture.generateMipmaps=w,e.setRenderTarget(i,5),e.render(t,g),e.setRenderTarget(b),e.xr.enabled=_}};var Oa=class extends Pn{constructor(e,t,i,a,l,d,p,v,g,_){e=e!==void 0?e:[],t=t!==void 0?t:_s,p=p!==void 0?p:qo,super(e,t,i,a,l,d,p,v,g,_),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Oa.prototype.isCubeTexture=!0;var Tc=class extends mr{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Oa(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=On,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new qs(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:zo});l.uniforms.tEquirect.value=t;let d=new ai(a,l),p=t.minFilter;return t.minFilter===Ho&&(t.minFilter=qn),new Ah(1,10,this).update(e,d),t.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,i,a){let l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,i,a);e.setRenderTarget(l)}};Tc.prototype.isWebGLCubeRenderTarget=!0;function gw(r){let e=new WeakMap;function t(d,p){return p===vf?d.mapping=_s:p===xf&&(d.mapping=Kl),d}function i(d){if(d&&d.isTexture){let p=d.mapping;if(p===vf||p===xf)if(e.has(d)){let v=e.get(d).texture;return t(v,d.mapping)}else{let v=d.image;if(v&&v.height>0){let g=r.getRenderTarget(),_=new Tc(v.height/2);return _.fromEquirectangularTexture(r,d),e.set(d,_),r.setRenderTarget(g),d.addEventListener("dispose",a),t(_.texture,d.mapping)}else return null}}return d}function a(d){let p=d.target;p.removeEventListener("dispose",a);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}function vw(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){let a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function xw(r,e,t,i){let a={},l=new WeakMap;function d(b){let w=b.target;w.index!==null&&e.remove(w.index);for(let C in w.attributes)e.remove(w.attributes[C]);w.removeEventListener("dispose",d),delete a[w.id];let f=l.get(w);f&&(e.remove(f),l.delete(w)),i.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function p(b,w){return a[w.id]===!0||(w.addEventListener("dispose",d),a[w.id]=!0,t.memory.geometries++),w}function v(b){let w=b.attributes;for(let C in w)e.update(w[C],r.ARRAY_BUFFER);let f=b.morphAttributes;for(let C in f){let R=f[C];for(let I=0,E=R.length;I<E;I++)e.update(R[I],r.ARRAY_BUFFER)}}function g(b){let w=[],f=b.index,C=b.attributes.position,R=0;if(f!==null){let x=f.array;R=f.version;for(let Y=0,W=x.length;Y<W;Y+=3){let Q=x[Y+0],F=x[Y+1],oe=x[Y+2];w.push(Q,F,F,oe,oe,Q)}}else{let x=C.array;R=C.version;for(let Y=0,W=x.length/3-1;Y<W;Y+=3){let Q=Y+0,F=Y+1,oe=Y+2;w.push(Q,F,F,oe,oe,Q)}}let I=new(eh(w)>65535?Ts:As)(w,1);I.version=R;let E=l.get(b);E&&e.remove(E),l.set(b,I)}function _(b){let w=l.get(b);if(w){let f=b.index;f!==null&&w.version<f.version&&g(b)}else g(b);return l.get(b)}return{get:p,update:v,getWireframeAttribute:_}}function yw(r,e,t,i){let a=i.isWebGL2,l;function d(w){l=w}let p,v;function g(w){p=w.type,v=w.bytesPerElement}function _(w,f){r.drawElements(l,f,p,w*v),t.update(f,l,1)}function b(w,f,C){if(C===0)return;let R,I;if(a)R=r,I="drawElementsInstanced";else if(R=e.get("ANGLE_instanced_arrays"),I="drawElementsInstancedANGLE",R===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}R[I](l,f,p,w*v,C),t.update(f,l,C)}this.setMode=d,this.setIndex=g,this.render=_,this.renderInstances=b}function ww(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,d,p){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=p*(l/3);break;case r.LINES:t.lines+=p*(l/2);break;case r.LINE_STRIP:t.lines+=p*(l-1);break;case r.LINE_LOOP:t.lines+=p*l;break;case r.POINTS:t.points+=p*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function ES(r,e){return r[0]-e[0]}function AS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bw(r){let e={},t=new Float32Array(8),i=[];for(let l=0;l<8;l++)i[l]=[l,0];function a(l,d,p,v){let g=l.morphTargetInfluences,_=g===void 0?0:g.length,b=e[d.id];if(b===void 0){b=[];for(let I=0;I<_;I++)b[I]=[I,0];e[d.id]=b}for(let I=0;I<_;I++){let E=b[I];E[0]=I,E[1]=g[I]}b.sort(AS);for(let I=0;I<8;I++)I<_&&b[I][1]?(i[I][0]=b[I][0],i[I][1]=b[I][1]):(i[I][0]=Number.MAX_SAFE_INTEGER,i[I][1]=0);i.sort(ES);let w=p.morphTargets&&d.morphAttributes.position,f=p.morphNormals&&d.morphAttributes.normal,C=0;for(let I=0;I<8;I++){let E=i[I],x=E[0],Y=E[1];x!==Number.MAX_SAFE_INTEGER&&Y?(w&&d.getAttribute("morphTarget"+I)!==w[x]&&d.setAttribute("morphTarget"+I,w[x]),f&&d.getAttribute("morphNormal"+I)!==f[x]&&d.setAttribute("morphNormal"+I,f[x]),t[I]=Y,C+=Y):(w&&d.hasAttribute("morphTarget"+I)===!0&&d.deleteAttribute("morphTarget"+I),f&&d.hasAttribute("morphNormal"+I)===!0&&d.deleteAttribute("morphNormal"+I),t[I]=0)}let R=d.morphTargetsRelative?1:1-C;v.getUniforms().setValue(r,"morphTargetBaseInfluence",R),v.getUniforms().setValue(r,"morphTargetInfluences",t)}return{update:a}}function _w(r,e,t,i){let a=new WeakMap;function l(v){let g=i.render.frame,_=v.geometry,b=e.get(v,_);return a.get(b)!==g&&(e.update(b),a.set(b,g)),v.isInstancedMesh&&(v.hasEventListener("dispose",p)===!1&&v.addEventListener("dispose",p),t.update(v.instanceMatrix,r.ARRAY_BUFFER),v.instanceColor!==null&&t.update(v.instanceColor,r.ARRAY_BUFFER)),b}function d(){a=new WeakMap}function p(v){let g=v.target;g.removeEventListener("dispose",p),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:l,dispose:d}}var Lc=class extends Pn{constructor(e=null,t=1,i=1,a=1){super(null),this.image={data:e,width:t,height:i,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Lc.prototype.isDataTexture2DArray=!0;var Rc=class extends Pn{constructor(e=null,t=1,i=1,a=1){super(null),this.image={data:e,width:t,height:i,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Rc.prototype.isDataTexture3D=!0;var Rw=new Pn,TS=new Lc,LS=new Rc,Cw=new Oa,Mw=[],Sw=[],Ew=new Float32Array(16),Aw=new Float32Array(9),Tw=new Float32Array(4);function js(r,e,t){let i=r[0];if(i<=0||i>0)return r;let a=e*t,l=Mw[a];if(l===void 0&&(l=new Float32Array(a),Mw[a]=l),e!==0){i.toArray(l,0);for(let d=1,p=0;d!==e;++d)p+=t,r[d].toArray(l,p)}return l}function si(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function $n(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Dw(r,e){let t=Sw[e];t===void 0&&(t=new Int32Array(e),Sw[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function RS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function CS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(si(t,e))return;r.uniform2fv(this.addr,e),$n(t,e)}}function DS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(si(t,e))return;r.uniform3fv(this.addr,e),$n(t,e)}}function PS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(si(t,e))return;r.uniform4fv(this.addr,e),$n(t,e)}}function FS(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(si(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$n(t,e)}else{if(si(t,i))return;Tw.set(i),r.uniformMatrix2fv(this.addr,!1,Tw),$n(t,i)}}function NS(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(si(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$n(t,e)}else{if(si(t,i))return;Aw.set(i),r.uniformMatrix3fv(this.addr,!1,Aw),$n(t,i)}}function IS(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(si(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$n(t,e)}else{if(si(t,i))return;Ew.set(i),r.uniformMatrix4fv(this.addr,!1,Ew),$n(t,i)}}function kS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function OS(r,e){let t=this.cache;si(t,e)||(r.uniform2iv(this.addr,e),$n(t,e))}function BS(r,e){let t=this.cache;si(t,e)||(r.uniform3iv(this.addr,e),$n(t,e))}function US(r,e){let t=this.cache;si(t,e)||(r.uniform4iv(this.addr,e),$n(t,e))}function zS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function GS(r,e){let t=this.cache;si(t,e)||(r.uniform2uiv(this.addr,e),$n(t,e))}function VS(r,e){let t=this.cache;si(t,e)||(r.uniform3uiv(this.addr,e),$n(t,e))}function HS(r,e){let t=this.cache;si(t,e)||(r.uniform4uiv(this.addr,e),$n(t,e))}function WS(r,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.safeSetTexture2D(e||Rw,a)}function qS(r,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||LS,a)}function XS(r,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.safeSetTextureCube(e||Cw,a)}function YS(r,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||TS,a)}function jS(r){switch(r){case 5126:return RS;case 35664:return CS;case 35665:return DS;case 35666:return PS;case 35674:return FS;case 35675:return NS;case 35676:return IS;case 5124:case 35670:return kS;case 35667:case 35671:return OS;case 35668:case 35672:return BS;case 35669:case 35673:return US;case 5125:return zS;case 36294:return GS;case 36295:return VS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return YS}}function KS(r,e){r.uniform1fv(this.addr,e)}function ZS(r,e){let t=js(e,this.size,2);r.uniform2fv(this.addr,t)}function JS(r,e){let t=js(e,this.size,3);r.uniform3fv(this.addr,t)}function QS(r,e){let t=js(e,this.size,4);r.uniform4fv(this.addr,t)}function $S(r,e){let t=js(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function e2(r,e){let t=js(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function t2(r,e){let t=js(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function n2(r,e){r.uniform1iv(this.addr,e)}function i2(r,e){r.uniform2iv(this.addr,e)}function r2(r,e){r.uniform3iv(this.addr,e)}function o2(r,e){r.uniform4iv(this.addr,e)}function a2(r,e){r.uniform1uiv(this.addr,e)}function s2(r,e){r.uniform2uiv(this.addr,e)}function l2(r,e){r.uniform3uiv(this.addr,e)}function c2(r,e){r.uniform4uiv(this.addr,e)}function d2(r,e,t){let i=e.length,a=Dw(t,i);r.uniform1iv(this.addr,a);for(let l=0;l!==i;++l)t.safeSetTexture2D(e[l]||Rw,a[l])}function h2(r,e,t){let i=e.length,a=Dw(t,i);r.uniform1iv(this.addr,a);for(let l=0;l!==i;++l)t.safeSetTextureCube(e[l]||Cw,a[l])}function u2(r){switch(r){case 5126:return KS;case 35664:return ZS;case 35665:return JS;case 35666:return QS;case 35674:return $S;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return r2;case 35669:case 35673:return o2;case 5125:return a2;case 36294:return s2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35680:case 36300:case 36308:case 36293:return h2}}function f2(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=jS(e.type)}function Pw(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=u2(e.type)}Pw.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),$n(e,r)};function Fw(r){this.id=r,this.seq=[],this.map={}}Fw.prototype.setValue=function(r,e,t){let i=this.seq;for(let a=0,l=i.length;a!==l;++a){let d=i[a];d.setValue(r,e[d.id],t)}};var op=/(\w+)(\])?(\[|\.)?/g;function Lw(r,e){r.seq.push(e),r.map[e.id]=e}function p2(r,e,t){let i=r.name,a=i.length;for(op.lastIndex=0;;){let l=op.exec(i),d=op.lastIndex,p=l[1],v=l[2]==="]",g=l[3];if(v&&(p=p|0),g===void 0||g==="["&&d+2===a){Lw(t,g===void 0?new f2(p,r,e):new Pw(p,r,e));break}else{let b=t.map[p];b===void 0&&(b=new Fw(p),Lw(t,b)),t=b}}}function Lr(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,r.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){let a=r.getActiveUniform(e,i),l=r.getUniformLocation(e,a.name);p2(a,l,this)}}Lr.prototype.setValue=function(r,e,t,i){let a=this.map[e];a!==void 0&&a.setValue(r,t,i)};Lr.prototype.setOptional=function(r,e,t){let i=e[t];i!==void 0&&this.setValue(r,t,i)};Lr.upload=function(r,e,t,i){for(let a=0,l=e.length;a!==l;++a){let d=e[a],p=t[d.id];p.needsUpdate!==!1&&d.setValue(r,p.value,i)}};Lr.seqWithValue=function(r,e){let t=[];for(let i=0,a=r.length;i!==a;++i){let l=r[i];l.id in e&&t.push(l)}return t};function ap(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var m2=0;function g2(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Uw(r){switch(r){case Xo:return["Linear","( value )"];case Yd:return["sRGB","( value )"];case dv:return["RGBE","( value )"];case uv:return["RGBM","( value, 7.0 )"];case fv:return["RGBM","( value, 16.0 )"];case pv:return["RGBD","( value, 256.0 )"];case cv:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case hv:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Nw(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(i&&a==="")return"";let l=r.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+a+g2(l)}function Cc(r,e){let t=Uw(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function v2(r,e){let t=Uw(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function x2(r,e){let t;switch(e){case ug:t="Linear";break;case fg:t="Reinhard";break;case pg:t="OptimizedCineon";break;case mg:t="ACESFilmic";break;case gg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function y2(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dc).join(`
`)}function w2(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b2(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let d=r.getActiveAttrib(e,a).name;t[d]=r.getAttribLocation(e,d)}return t}function Dc(r){return r!==""}function Iw(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kw(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _2=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(_2,M2)}function M2(r,e){let t=bt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return sp(t)}var S2=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ow(r){return r.replace(E2,zw).replace(S2,A2)}function A2(r,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),zw(r,e,t,i)}function zw(r,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Bw(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===q0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===La&&(e="SHADOWMAP_TYPE_VSM"),e}function L2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _s:case Kl:e="ENVMAP_TYPE_CUBE";break;case Ms:case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R2(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Kl:case Zl:e="ENVMAP_MODE_REFRACTION";break}return e}function C2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bs:e="ENVMAP_BLENDING_MULTIPLY";break;case dg:e="ENVMAP_BLENDING_MIX";break;case hg:e="ENVMAP_BLENDING_ADD";break}return e}function Gw(r,e,t,i){let a=r.getContext(),l=t.defines,d=t.vertexShader,p=t.fragmentShader,v=T2(t),g=L2(t),_=R2(t),b=C2(t),w=r.gammaFactor>0?r.gammaFactor:1,f=t.isWebGL2?"":y2(t),C=w2(l),R=a.createProgram(),I,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(I=[C].filter(Dc).join(`
`),I.length>0&&(I+=`
`),E=[f,C].filter(Dc).join(`
`),E.length>0&&(E+=`
`)):(I=[Bw(t),"#define SHADER_NAME "+t.shaderName,C,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+w,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+v:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dc).join(`
`),E=[f,Bw(t),"#define SHADER_NAME "+t.shaderName,C,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+v:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vo?"#define TONE_MAPPING":"",t.toneMapping!==Vo?bt.tonemapping_pars_fragment:"",t.toneMapping!==Vo?x2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",bt.encodings_pars_fragment,t.map?Cc("mapTexelToLinear",t.mapEncoding):"",t.matcap?Cc("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Cc("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Cc("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Cc("lightMapTexelToLinear",t.lightMapEncoding):"",v2("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dc).join(`
`)),d=sp(d),d=Iw(d,t),d=kw(d,t),p=sp(p),p=Iw(p,t),p=kw(p,t),d=Ow(d),p=Ow(p),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,I=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,E=["#define varying in",t.glslVersion===Df?"":"out highp vec4 pc_fragColor;",t.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let Y=x+I+d,W=x+E+p,Q=ap(a,a.VERTEX_SHADER,Y),F=ap(a,a.FRAGMENT_SHADER,W);if(a.attachShader(R,Q),a.attachShader(R,F),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R),r.debug.checkShaderErrors){let fe=a.getProgramInfoLog(R).trim(),j=a.getShaderInfoLog(Q).trim(),Me=a.getShaderInfoLog(F).trim(),we=!0,ie=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1){we=!1;let le=Nw(a,Q,"vertex"),k=Nw(a,F,"fragment");console.error("THREE.WebGLProgram: shader error: ",a.getError(),"gl.VALIDATE_STATUS",a.getProgramParameter(R,a.VALIDATE_STATUS),"gl.getProgramInfoLog",fe,le,k)}else fe!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",fe):(j===""||Me==="")&&(ie=!1);ie&&(this.diagnostics={runnable:we,programLog:fe,vertexShader:{log:j,prefix:I},fragmentShader:{log:Me,prefix:E}})}a.deleteShader(Q),a.deleteShader(F);let oe;this.getUniforms=function(){return oe===void 0&&(oe=new Lr(a,R)),oe};let ue;return this.getAttributes=function(){return ue===void 0&&(ue=b2(a,R)),ue},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.name=t.shaderName,this.id=m2++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Q,this.fragmentShader=F,this}function Vw(r,e,t,i,a,l){let d=[],p=i.isWebGL2,v=i.logarithmicDepthBuffer,g=i.floatVertexTextures,_=i.maxVertexUniforms,b=i.vertexTextures,w=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},C=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function R(F){let ue=F.skeleton.bones;if(g)return 1024;{let j=Math.floor((_-20)/4),Me=Math.min(j,ue.length);return Me<ue.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+ue.length+" bones. This GPU supports "+Me+"."),0):Me}}function I(F){let oe;return F&&F.isTexture?oe=F.encoding:F&&F.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),oe=F.texture.encoding):oe=Xo,oe}function E(F,oe,ue,fe,j){let Me=fe.fog,we=F.isMeshStandardMaterial?fe.environment:null,ie=e.get(F.envMap||we),le=f[F.type],k=j.isSkinnedMesh?R(j):0;F.precision!==null&&(w=i.getMaxPrecision(F.precision),w!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",w,"instead."));let re,Le;if(le){let qe=qi[le];re=qe.vertexShader,Le=qe.fragmentShader}else re=F.vertexShader,Le=F.fragmentShader;let Ve=r.getRenderTarget();return{isWebGL2:p,shaderID:le,shaderName:F.type,vertexShader:re,fragmentShader:Le,defines:F.defines,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:w,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:b,outputEncoding:Ve!==null?I(Ve.texture):r.outputEncoding,map:!!F.map,mapEncoding:I(F.map),matcap:!!F.matcap,matcapEncoding:I(F.matcap),envMap:!!ie,envMapMode:ie&&ie.mapping,envMapEncoding:I(ie),envMapCubeUV:!!ie&&(ie.mapping===Ms||ie.mapping===Zl),lightMap:!!F.lightMap,lightMapEncoding:I(F.lightMap),aoMap:!!F.aoMap,emissiveMap:!!F.emissiveMap,emissiveMapEncoding:I(F.emissiveMap),bumpMap:!!F.bumpMap,normalMap:!!F.normalMap,objectSpaceNormalMap:F.normalMapType===vv,tangentSpaceNormalMap:F.normalMapType===jd,clearcoatMap:!!F.clearcoatMap,clearcoatRoughnessMap:!!F.clearcoatRoughnessMap,clearcoatNormalMap:!!F.clearcoatNormalMap,displacementMap:!!F.displacementMap,roughnessMap:!!F.roughnessMap,metalnessMap:!!F.metalnessMap,specularMap:!!F.specularMap,alphaMap:!!F.alphaMap,gradientMap:!!F.gradientMap,sheen:!!F.sheen,transmissionMap:!!F.transmissionMap,combine:F.combine,vertexTangents:F.normalMap&&F.vertexTangents,vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&j.geometry&&j.geometry.attributes.color&&j.geometry.attributes.color.itemSize===4,vertexUvs:!!F.map||!!F.bumpMap||!!F.normalMap||!!F.specularMap||!!F.alphaMap||!!F.emissiveMap||!!F.roughnessMap||!!F.metalnessMap||!!F.clearcoatMap||!!F.clearcoatRoughnessMap||!!F.clearcoatNormalMap||!!F.displacementMap||!!F.transmissionMap,uvsVertexOnly:!(F.map||F.bumpMap||F.normalMap||F.specularMap||F.alphaMap||F.emissiveMap||F.roughnessMap||F.metalnessMap||F.clearcoatNormalMap||F.transmissionMap)&&!!F.displacementMap,fog:!!Me,useFog:F.fog,fogExp2:Me&&Me.isFogExp2,flatShading:!!F.flatShading,sizeAttenuation:F.sizeAttenuation,logarithmicDepthBuffer:v,skinning:F.skinning&&k>0,maxBones:k,useVertexTexture:g,morphTargets:F.morphTargets,morphNormals:F.morphNormals,numDirLights:oe.directional.length,numPointLights:oe.point.length,numSpotLights:oe.spot.length,numRectAreaLights:oe.rectArea.length,numHemiLights:oe.hemi.length,numDirLightShadows:oe.directionalShadowMap.length,numPointLightShadows:oe.pointShadowMap.length,numSpotLightShadows:oe.spotShadowMap.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:F.dithering,shadowMapEnabled:r.shadowMap.enabled&&ue.length>0,shadowMapType:r.shadowMap.type,toneMapping:F.toneMapped?r.toneMapping:Vo,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:F.premultipliedAlpha,alphaTest:F.alphaTest,doubleSided:F.side===Sr,flipSided:F.side===tn,depthPacking:F.depthPacking!==void 0?F.depthPacking:!1,index0AttributeName:F.index0AttributeName,extensionDerivatives:F.extensions&&F.extensions.derivatives,extensionFragDepth:F.extensions&&F.extensions.fragDepth,extensionDrawBuffers:F.extensions&&F.extensions.drawBuffers,extensionShaderTextureLOD:F.extensions&&F.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||t.has("EXT_shader_texture_lod"),customProgramCacheKey:F.customProgramCacheKey()}}function x(F){let oe=[];if(F.shaderID?oe.push(F.shaderID):(oe.push(F.fragmentShader),oe.push(F.vertexShader)),F.defines!==void 0)for(let ue in F.defines)oe.push(ue),oe.push(F.defines[ue]);if(F.isRawShaderMaterial===!1){for(let ue=0;ue<C.length;ue++)oe.push(F[C[ue]]);oe.push(r.outputEncoding),oe.push(r.gammaFactor)}return oe.push(F.customProgramCacheKey),oe.join()}function Y(F){let oe=f[F.type],ue;if(oe){let fe=qi[oe];ue=Av.clone(fe.uniforms)}else ue=F.uniforms;return ue}function W(F,oe){let ue;for(let fe=0,j=d.length;fe<j;fe++){let Me=d[fe];if(Me.cacheKey===oe){ue=Me,++ue.usedTimes;break}}return ue===void 0&&(ue=new Gw(r,oe,F,a),d.push(ue)),ue}function Q(F){if(--F.usedTimes===0){let oe=d.indexOf(F);d[oe]=d[d.length-1],d.pop(),F.destroy()}}return{getParameters:E,getProgramCacheKey:x,getUniforms:Y,acquireProgram:W,releaseProgram:Q,programs:d}}function Hw(){let r=new WeakMap;function e(l){let d=r.get(l);return d===void 0&&(d={},r.set(l,d)),d}function t(l){r.delete(l)}function i(l,d,p){r.get(l)[d]=p}function a(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function D2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function P2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ww(r){let e=[],t=0,i=[],a=[],l={id:-1};function d(){t=0,i.length=0,a.length=0}function p(w,f,C,R,I,E){let x=e[t],Y=r.get(C);return x===void 0?(x={id:w.id,object:w,geometry:f,material:C,program:Y.program||l,groupOrder:R,renderOrder:w.renderOrder,z:I,group:E},e[t]=x):(x.id=w.id,x.object=w,x.geometry=f,x.material=C,x.program=Y.program||l,x.groupOrder=R,x.renderOrder=w.renderOrder,x.z=I,x.group=E),t++,x}function v(w,f,C,R,I,E){let x=p(w,f,C,R,I,E);(C.transparent===!0?a:i).push(x)}function g(w,f,C,R,I,E){let x=p(w,f,C,R,I,E);(C.transparent===!0?a:i).unshift(x)}function _(w,f){i.length>1&&i.sort(w||D2),a.length>1&&a.sort(f||P2)}function b(){for(let w=t,f=e.length;w<f;w++){let C=e[w];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.program=null,C.group=null}}return{opaque:i,transparent:a,init:d,push:v,unshift:g,finish:b,sort:_}}function qw(r){let e=new WeakMap;function t(a,l){let d;return e.has(a)===!1?(d=new Ww(r),e.set(a,[d])):l>=e.get(a).length?(d=new Ww(r),e.get(a).push(d)):d=e.get(a)[l],d}function i(){e=new WeakMap}return{get:t,dispose:i}}function F2(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new at};break;case"SpotLight":t={position:new z,direction:new z,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function N2(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var I2=0;function k2(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Xw(r,e){let t=new F2,i=N2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let _=0;_<9;_++)a.probe.push(new z);let l=new z,d=new xt,p=new xt;function v(_){let b=0,w=0,f=0;for(let oe=0;oe<9;oe++)a.probe[oe].set(0,0,0);let C=0,R=0,I=0,E=0,x=0,Y=0,W=0,Q=0;_.sort(k2);for(let oe=0,ue=_.length;oe<ue;oe++){let fe=_[oe],j=fe.color,Me=fe.intensity,we=fe.distance,ie=fe.shadow&&fe.shadow.map?fe.shadow.map.texture:null;if(fe.isAmbientLight)b+=j.r*Me,w+=j.g*Me,f+=j.b*Me;else if(fe.isLightProbe)for(let le=0;le<9;le++)a.probe[le].addScaledVector(fe.sh.coefficients[le],Me);else if(fe.isDirectionalLight){let le=t.get(fe);if(le.color.copy(fe.color).multiplyScalar(fe.intensity),fe.castShadow){let k=fe.shadow,re=i.get(fe);re.shadowBias=k.bias,re.shadowNormalBias=k.normalBias,re.shadowRadius=k.radius,re.shadowMapSize=k.mapSize,a.directionalShadow[C]=re,a.directionalShadowMap[C]=ie,a.directionalShadowMatrix[C]=fe.shadow.matrix,Y++}a.directional[C]=le,C++}else if(fe.isSpotLight){let le=t.get(fe);if(le.position.setFromMatrixPosition(fe.matrixWorld),le.color.copy(j).multiplyScalar(Me),le.distance=we,le.coneCos=Math.cos(fe.angle),le.penumbraCos=Math.cos(fe.angle*(1-fe.penumbra)),le.decay=fe.decay,fe.castShadow){let k=fe.shadow,re=i.get(fe);re.shadowBias=k.bias,re.shadowNormalBias=k.normalBias,re.shadowRadius=k.radius,re.shadowMapSize=k.mapSize,a.spotShadow[I]=re,a.spotShadowMap[I]=ie,a.spotShadowMatrix[I]=fe.shadow.matrix,Q++}a.spot[I]=le,I++}else if(fe.isRectAreaLight){let le=t.get(fe);le.color.copy(j).multiplyScalar(Me),le.halfWidth.set(fe.width*.5,0,0),le.halfHeight.set(0,fe.height*.5,0),a.rectArea[E]=le,E++}else if(fe.isPointLight){let le=t.get(fe);if(le.color.copy(fe.color).multiplyScalar(fe.intensity),le.distance=fe.distance,le.decay=fe.decay,fe.castShadow){let k=fe.shadow,re=i.get(fe);re.shadowBias=k.bias,re.shadowNormalBias=k.normalBias,re.shadowRadius=k.radius,re.shadowMapSize=k.mapSize,re.shadowCameraNear=k.camera.near,re.shadowCameraFar=k.camera.far,a.pointShadow[R]=re,a.pointShadowMap[R]=ie,a.pointShadowMatrix[R]=fe.shadow.matrix,W++}a.point[R]=le,R++}else if(fe.isHemisphereLight){let le=t.get(fe);le.skyColor.copy(fe.color).multiplyScalar(Me),le.groundColor.copy(fe.groundColor).multiplyScalar(Me),a.hemi[x]=le,x++}}E>0&&(e.isWebGL2?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=b,a.ambient[1]=w,a.ambient[2]=f;let F=a.hash;(F.directionalLength!==C||F.pointLength!==R||F.spotLength!==I||F.rectAreaLength!==E||F.hemiLength!==x||F.numDirectionalShadows!==Y||F.numPointShadows!==W||F.numSpotShadows!==Q)&&(a.directional.length=C,a.spot.length=I,a.rectArea.length=E,a.point.length=R,a.hemi.length=x,a.directionalShadow.length=Y,a.directionalShadowMap.length=Y,a.pointShadow.length=W,a.pointShadowMap.length=W,a.spotShadow.length=Q,a.spotShadowMap.length=Q,a.directionalShadowMatrix.length=Y,a.pointShadowMatrix.length=W,a.spotShadowMatrix.length=Q,F.directionalLength=C,F.pointLength=R,F.spotLength=I,F.rectAreaLength=E,F.hemiLength=x,F.numDirectionalShadows=Y,F.numPointShadows=W,F.numSpotShadows=Q,a.version=I2++)}function g(_,b){let w=0,f=0,C=0,R=0,I=0,E=b.matrixWorldInverse;for(let x=0,Y=_.length;x<Y;x++){let W=_[x];if(W.isDirectionalLight){let Q=a.directional[w];Q.direction.setFromMatrixPosition(W.matrixWorld),l.setFromMatrixPosition(W.target.matrixWorld),Q.direction.sub(l),Q.direction.transformDirection(E),w++}else if(W.isSpotLight){let Q=a.spot[C];Q.position.setFromMatrixPosition(W.matrixWorld),Q.position.applyMatrix4(E),Q.direction.setFromMatrixPosition(W.matrixWorld),l.setFromMatrixPosition(W.target.matrixWorld),Q.direction.sub(l),Q.direction.transformDirection(E),C++}else if(W.isRectAreaLight){let Q=a.rectArea[R];Q.position.setFromMatrixPosition(W.matrixWorld),Q.position.applyMatrix4(E),p.identity(),d.copy(W.matrixWorld),d.premultiply(E),p.extractRotation(d),Q.halfWidth.set(W.width*.5,0,0),Q.halfHeight.set(0,W.height*.5,0),Q.halfWidth.applyMatrix4(p),Q.halfHeight.applyMatrix4(p),R++}else if(W.isPointLight){let Q=a.point[f];Q.position.setFromMatrixPosition(W.matrixWorld),Q.position.applyMatrix4(E),f++}else if(W.isHemisphereLight){let Q=a.hemi[I];Q.direction.setFromMatrixPosition(W.matrixWorld),Q.direction.transformDirection(E),Q.direction.normalize(),I++}}}return{setup:v,setupView:g,state:a}}function Yw(r,e){let t=new Xw(r,e),i=[],a=[];function l(){i.length=0,a.length=0}function d(b){i.push(b)}function p(b){a.push(b)}function v(){t.setup(i)}function g(b){t.setupView(i,b)}return{init:l,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:v,setupLightsView:g,pushLight:d,pushShadow:p}}function jw(r,e){let t=new WeakMap;function i(l,d=0){let p;return t.has(l)===!1?(p=new Yw(r,e),t.set(l,[p])):d>=t.get(l).length?(p=new Yw(r,e),t.get(l).push(p)):p=t.get(l)[d],p}function a(){t=new WeakMap}return{get:i,dispose:a}}var Pc=class extends Dn{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=mv,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Pc.prototype.isMeshDepthMaterial=!0;var Fc=class extends Dn{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Fc.prototype.isMeshDistanceMaterial=!0;var Kw=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}
`;var Zw=`
void main() {
	gl_Position = vec4( position, 1.0 );
}
`;function Jw(r,e,t){let i=new Ar,a=new je,l=new je,d=new Ct,p=[],v=[],g={},_=t.maxTextureSize,b={0:tn,1:Ra,2:Sr},w=new Wi({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Zw,fragmentShader:Kw}),f=w.clone();f.defines.HORIZONTAL_PASS=1;let C=new Xt;C.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let R=new ai(C,w),I=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hd,this.render=function(F,oe,ue){if(I.enabled===!1||I.autoUpdate===!1&&I.needsUpdate===!1||F.length===0)return;let fe=r.getRenderTarget(),j=r.getActiveCubeFace(),Me=r.getActiveMipmapLevel(),we=r.state;we.setBlending(zo),we.buffers.color.setClear(1,1,1,1),we.buffers.depth.setTest(!0),we.setScissorTest(!1);for(let ie=0,le=F.length;ie<le;ie++){let k=F[ie],re=k.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;a.copy(re.mapSize);let Le=re.getFrameExtents();if(a.multiply(Le),l.copy(re.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/Le.x),a.x=l.x*Le.x,re.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/Le.y),a.y=l.y*Le.y,re.mapSize.y=l.y)),re.map===null&&!re.isPointLightShadow&&this.type===La){let Oe={minFilter:qn,magFilter:qn,format:On};re.map=new mr(a.x,a.y,Oe),re.map.texture.name=k.name+".shadowMap",re.mapPass=new mr(a.x,a.y,Oe),re.camera.updateProjectionMatrix()}if(re.map===null){let Oe={minFilter:_n,magFilter:_n,format:On};re.map=new mr(a.x,a.y,Oe),re.map.texture.name=k.name+".shadowMap",re.camera.updateProjectionMatrix()}r.setRenderTarget(re.map),r.clear();let Ve=re.getViewportCount();for(let Oe=0;Oe<Ve;Oe++){let qe=re.getViewport(Oe);d.set(l.x*qe.x,l.y*qe.y,l.x*qe.z,l.y*qe.w),we.viewport(d),re.updateMatrices(k,Oe),i=re.getFrustum(),Q(oe,ue,re.camera,k,this.type)}!re.isPointLightShadow&&this.type===La&&E(re,ue),re.needsUpdate=!1}I.needsUpdate=!1,r.setRenderTarget(fe,j,Me)};function E(F,oe){let ue=e.update(R);w.uniforms.shadow_pass.value=F.map.texture,w.uniforms.resolution.value=F.mapSize,w.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(oe,null,ue,w,R,null),f.uniforms.shadow_pass.value=F.mapPass.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(oe,null,ue,f,R,null)}function x(F,oe,ue){let fe=F<<0|oe<<1|ue<<2,j=p[fe];return j===void 0&&(j=new Pc({depthPacking:gv,morphTargets:F,skinning:oe}),p[fe]=j),j}function Y(F,oe,ue){let fe=F<<0|oe<<1|ue<<2,j=v[fe];return j===void 0&&(j=new Fc({morphTargets:F,skinning:oe}),v[fe]=j),j}function W(F,oe,ue,fe,j,Me,we){let ie=null,le=x,k=F.customDepthMaterial;if(fe.isPointLight===!0&&(le=Y,k=F.customDistanceMaterial),k===void 0){let re=!1;ue.morphTargets===!0&&(re=oe.morphAttributes&&oe.morphAttributes.position&&oe.morphAttributes.position.length>0);let Le=!1;F.isSkinnedMesh===!0&&(ue.skinning===!0?Le=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",F));let Ve=F.isInstancedMesh===!0;ie=le(re,Le,Ve)}else ie=k;if(r.localClippingEnabled&&ue.clipShadows===!0&&ue.clippingPlanes.length!==0){let re=ie.uuid,Le=ue.uuid,Ve=g[re];Ve===void 0&&(Ve={},g[re]=Ve);let Oe=Ve[Le];Oe===void 0&&(Oe=ie.clone(),Ve[Le]=Oe),ie=Oe}return ie.visible=ue.visible,ie.wireframe=ue.wireframe,we===La?ie.side=ue.shadowSide!==null?ue.shadowSide:ue.side:ie.side=ue.shadowSide!==null?ue.shadowSide:b[ue.side],ie.clipShadows=ue.clipShadows,ie.clippingPlanes=ue.clippingPlanes,ie.clipIntersection=ue.clipIntersection,ie.wireframeLinewidth=ue.wireframeLinewidth,ie.linewidth=ue.linewidth,fe.isPointLight===!0&&ie.isMeshDistanceMaterial===!0&&(ie.referencePosition.setFromMatrixPosition(fe.matrixWorld),ie.nearDistance=j,ie.farDistance=Me),ie}function Q(F,oe,ue,fe,j){if(F.visible===!1)return;if(F.layers.test(oe.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&j===La)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,F.matrixWorld);let ie=e.update(F),le=F.material;if(Array.isArray(le)){let k=ie.groups;for(let re=0,Le=k.length;re<Le;re++){let Ve=k[re],Oe=le[Ve.materialIndex];if(Oe&&Oe.visible){let qe=W(F,ie,Oe,fe,ue.near,ue.far,j);r.renderBufferDirect(ue,null,ie,qe,F,Ve)}}}else if(le.visible){let k=W(F,ie,le,fe,ue.near,ue.far,j);r.renderBufferDirect(ue,null,ie,k,F,null)}}let we=F.children;for(let ie=0,le=we.length;ie<le;ie++)Q(we[ie],oe,ue,fe,j)}}function Qw(r,e,t){let i=t.isWebGL2;function a(){let te=!1,Be=new Ct,Ge=null,nt=new Ct(0,0,0,0);return{setMask:function(Se){Ge!==Se&&!te&&(r.colorMask(Se,Se,Se,Se),Ge=Se)},setLocked:function(Se){te=Se},setClear:function(Se,ft,Pt,ut,on){on===!0&&(Se*=ut,ft*=ut,Pt*=ut),Be.set(Se,ft,Pt,ut),nt.equals(Be)===!1&&(r.clearColor(Se,ft,Pt,ut),nt.copy(Be))},reset:function(){te=!1,Ge=null,nt.set(-1,0,0,0)}}}function l(){let te=!1,Be=null,Ge=null,nt=null;return{setTest:function(Se){Se?st(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(Se){Be!==Se&&!te&&(r.depthMask(Se),Be=Se)},setFunc:function(Se){if(Ge!==Se){if(Se)switch(Se){case ig:r.depthFunc(r.NEVER);break;case rg:r.depthFunc(r.ALWAYS);break;case og:r.depthFunc(r.LESS);break;case jl:r.depthFunc(r.LEQUAL);break;case ag:r.depthFunc(r.EQUAL);break;case sg:r.depthFunc(r.GEQUAL);break;case lg:r.depthFunc(r.GREATER);break;case cg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}else r.depthFunc(r.LEQUAL);Ge=Se}},setLocked:function(Se){te=Se},setClear:function(Se){nt!==Se&&(r.clearDepth(Se),nt=Se)},reset:function(){te=!1,Be=null,Ge=null,nt=null}}}function d(){let te=!1,Be=null,Ge=null,nt=null,Se=null,ft=null,Pt=null,ut=null,on=null;return{setTest:function(At){te||(At?st(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(At){Be!==At&&!te&&(r.stencilMask(At),Be=At)},setFunc:function(At,li,ci){(Ge!==At||nt!==li||Se!==ci)&&(r.stencilFunc(At,li,ci),Ge=At,nt=li,Se=ci)},setOp:function(At,li,ci){(ft!==At||Pt!==li||ut!==ci)&&(r.stencilOp(At,li,ci),ft=At,Pt=li,ut=ci)},setLocked:function(At){te=At},setClear:function(At){on!==At&&(r.clearStencil(At),on=At)},reset:function(){te=!1,Be=null,Ge=null,nt=null,Se=null,ft=null,Pt=null,ut=null,on=null}}}let p=new a,v=new l,g=new d,_={},b=null,w={},f=null,C=!1,R=null,I=null,E=null,x=null,Y=null,W=null,Q=null,F=!1,oe=null,ue=null,fe=null,j=null,Me=null,we=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,le=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(k)[1]),ie=le>=1):k.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ie=le>=2);let re=null,Le={},Ve=new Ct(0,0,r.canvas.width,r.canvas.height),Oe=new Ct(0,0,r.canvas.width,r.canvas.height);function qe(te,Be,Ge){let nt=new Uint8Array(4),Se=r.createTexture();r.bindTexture(te,Se),r.texParameteri(te,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(te,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ft=0;ft<Ge;ft++)r.texImage2D(Be+ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return Se}let Ye={};Ye[r.TEXTURE_2D]=qe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ye[r.TEXTURE_CUBE_MAP]=qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),p.setClear(0,0,0,1),v.setClear(1),g.setClear(0),st(r.DEPTH_TEST),v.setFunc(jl),Yt(!1),Mn(hf),st(r.CULL_FACE),kt(zo);function st(te){_[te]!==!0&&(r.enable(te),_[te]=!0)}function gt(te){_[te]!==!1&&(r.disable(te),_[te]=!1)}function ee(te){te!==b&&(r.bindFramebuffer(r.FRAMEBUFFER,te),b=te)}function Qt(te,Be){Be===null&&b!==null&&(Be=b),w[te]!==Be&&(r.bindFramebuffer(te,Be),w[te]=Be,i&&(te===r.DRAW_FRAMEBUFFER&&(w[r.FRAMEBUFFER]=Be),te===r.FRAMEBUFFER&&(w[r.DRAW_FRAMEBUFFER]=Be)))}function St(te){return f!==te?(r.useProgram(te),f=te,!0):!1}let mt={[Go]:r.FUNC_ADD,[Y0]:r.FUNC_SUBTRACT,[j0]:r.FUNC_REVERSE_SUBTRACT};if(i)mt[pf]=r.MIN,mt[mf]=r.MAX;else{let te=e.get("EXT_blend_minmax");te!==null&&(mt[pf]=te.MIN_EXT,mt[mf]=te.MAX_EXT)}let $e={[K0]:r.ZERO,[qd]:r.ONE,[Z0]:r.SRC_COLOR,[Xd]:r.SRC_ALPHA,[ng]:r.SRC_ALPHA_SATURATE,[eg]:r.DST_COLOR,[Q0]:r.DST_ALPHA,[J0]:r.ONE_MINUS_SRC_COLOR,[ws]:r.ONE_MINUS_SRC_ALPHA,[tg]:r.ONE_MINUS_DST_COLOR,[$0]:r.ONE_MINUS_DST_ALPHA};function kt(te,Be,Ge,nt,Se,ft,Pt,ut){if(te===zo){C===!0&&(gt(r.BLEND),C=!1);return}if(C===!1&&(st(r.BLEND),C=!0),te!==Wd){if(te!==R||ut!==F){if((I!==Go||Y!==Go)&&(r.blendEquation(r.FUNC_ADD),I=Go,Y=Go),ut)switch(te){case Ca:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yl:r.blendFunc(r.ONE,r.ONE);break;case uf:r.blendFuncSeparate(r.ZERO,r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ONE_MINUS_SRC_ALPHA);break;case ff:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}else switch(te){case Ca:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case uf:r.blendFunc(r.ZERO,r.ONE_MINUS_SRC_COLOR);break;case ff:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}E=null,x=null,W=null,Q=null,R=te,F=ut}return}Se=Se||Be,ft=ft||Ge,Pt=Pt||nt,(Be!==I||Se!==Y)&&(r.blendEquationSeparate(mt[Be],mt[Se]),I=Be,Y=Se),(Ge!==E||nt!==x||ft!==W||Pt!==Q)&&(r.blendFuncSeparate($e[Ge],$e[nt],$e[ft],$e[Pt]),E=Ge,x=nt,W=ft,Q=Pt),R=te,F=null}function Dt(te,Be){te.side===Sr?gt(r.CULL_FACE):st(r.CULL_FACE);let Ge=te.side===tn;Be&&(Ge=!Ge),Yt(Ge),te.blending===Ca&&te.transparent===!1?kt(zo):kt(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.premultipliedAlpha),v.setFunc(te.depthFunc),v.setTest(te.depthTest),v.setMask(te.depthWrite),p.setMask(te.colorWrite);let nt=te.stencilWrite;g.setTest(nt),nt&&(g.setMask(te.stencilWriteMask),g.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),g.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),ki(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(te){oe!==te&&(te?r.frontFace(r.CW):r.frontFace(r.CCW),oe=te)}function Mn(te){te!==H0?(st(r.CULL_FACE),te!==ue&&(te===hf?r.cullFace(r.BACK):te===W0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),ue=te}function Ot(te){te!==fe&&(ie&&r.lineWidth(te),fe=te)}function ki(te,Be,Ge){te?(st(r.POLYGON_OFFSET_FILL),(j!==Be||Me!==Ge)&&(r.polygonOffset(Be,Ge),j=Be,Me=Ge)):gt(r.POLYGON_OFFSET_FILL)}function Un(te){te?st(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function jt(te){te===void 0&&(te=r.TEXTURE0+we-1),re!==te&&(r.activeTexture(te),re=te)}function K(te,Be){re===null&&jt();let Ge=Le[re];Ge===void 0&&(Ge={type:void 0,texture:void 0},Le[re]=Ge),(Ge.type!==te||Ge.texture!==Be)&&(r.bindTexture(te,Be||Ye[te]),Ge.type=te,Ge.texture=Be)}function U(){let te=Le[re];te!==void 0&&te.type!==void 0&&(r.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function Fe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Re(){try{r.texImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function tt(){try{r.texImage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function it(te){Ve.equals(te)===!1&&(r.scissor(te.x,te.y,te.z,te.w),Ve.copy(te))}function Ft(te){Oe.equals(te)===!1&&(r.viewport(te.x,te.y,te.z,te.w),Oe.copy(te))}function Et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},re=null,Le={},b=null,w={},f=null,C=!1,R=null,I=null,E=null,x=null,Y=null,W=null,Q=null,F=!1,oe=null,ue=null,fe=null,j=null,Me=null,Ve.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),p.reset(),v.reset(),g.reset()}return{buffers:{color:p,depth:v,stencil:g},enable:st,disable:gt,bindFramebuffer:Qt,bindXRFramebuffer:ee,useProgram:St,setBlending:kt,setMaterial:Dt,setFlipSided:Yt,setCullFace:Mn,setLineWidth:Ot,setPolygonOffset:ki,setScissorTest:Un,activeTexture:jt,bindTexture:K,unbindTexture:U,compressedTexImage2D:Fe,texImage2D:Re,texImage3D:tt,scissor:it,viewport:Ft,reset:Et}}function $w(r,e,t,i,a,l,d){let p=a.isWebGL2,v=a.maxTextures,g=a.maxCubemapSize,_=a.maxTextureSize,b=a.maxSamples,w=new WeakMap,f,C=!1;try{C=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(K){}function R(K,U){return C?new OffscreenCanvas(K,U):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function I(K,U,Fe,Re){let tt=1;if((K.width>Re||K.height>Re)&&(tt=Re/Math.max(K.width,K.height)),tt<1||U===!0)if(typeof HTMLImageElement!="undefined"&&K instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&K instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&K instanceof ImageBitmap){let it=U?N0:Math.floor,Ft=it(tt*K.width),Et=it(tt*K.height);f===void 0&&(f=R(Ft,Et));let te=Fe?R(Ft,Et):f;return te.width=Ft,te.height=Et,te.getContext("2d").drawImage(K,0,0,Ft,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Ft+"x"+Et+")."),te}else return"data"in K&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),K;return K}function E(K){return cf(K.width)&&cf(K.height)}function x(K){return p?!1:K.wrapS!==oi||K.wrapT!==oi||K.minFilter!==_n&&K.minFilter!==qn}function Y(K,U){return K.generateMipmaps&&U&&K.minFilter!==_n&&K.minFilter!==qn}function W(K,U,Fe,Re){r.generateMipmap(K);let tt=i.get(U);tt.__maxMipLevel=Math.log2(Math.max(Fe,Re))}function Q(K,U,Fe){if(p===!1)return U;if(K!==null){if(r[K]!==void 0)return r[K];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+K+"'")}let Re=U;return U===r.RED&&(Fe===r.FLOAT&&(Re=r.R32F),Fe===r.HALF_FLOAT&&(Re=r.R16F),Fe===r.UNSIGNED_BYTE&&(Re=r.R8)),U===r.RGB&&(Fe===r.FLOAT&&(Re=r.RGB32F),Fe===r.HALF_FLOAT&&(Re=r.RGB16F),Fe===r.UNSIGNED_BYTE&&(Re=r.RGB8)),U===r.RGBA&&(Fe===r.FLOAT&&(Re=r.RGBA32F),Fe===r.HALF_FLOAT&&(Re=r.RGBA16F),Fe===r.UNSIGNED_BYTE&&(Re=r.RGBA8)),(Re===r.R16F||Re===r.R32F||Re===r.RGBA16F||Re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Re}function F(K){return K===_n||K===yf||K===wf?r.NEAREST:r.LINEAR}function oe(K){let U=K.target;U.removeEventListener("dispose",oe),fe(U),U.isVideoTexture&&w.delete(U),d.memory.textures--}function ue(K){let U=K.target;U.removeEventListener("dispose",ue),j(U),d.memory.textures--}function fe(K){let U=i.get(K);U.__webglInit!==void 0&&(r.deleteTexture(U.__webglTexture),i.remove(K))}function j(K){let U=K.texture,Fe=i.get(K),Re=i.get(U);if(K){if(Re.__webglTexture!==void 0&&r.deleteTexture(Re.__webglTexture),K.depthTexture&&K.depthTexture.dispose(),K.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++)r.deleteFramebuffer(Fe.__webglFramebuffer[tt]),Fe.__webglDepthbuffer&&r.deleteRenderbuffer(Fe.__webglDepthbuffer[tt]);else r.deleteFramebuffer(Fe.__webglFramebuffer),Fe.__webglDepthbuffer&&r.deleteRenderbuffer(Fe.__webglDepthbuffer),Fe.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Fe.__webglMultisampledFramebuffer),Fe.__webglColorRenderbuffer&&r.deleteRenderbuffer(Fe.__webglColorRenderbuffer),Fe.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Fe.__webglDepthRenderbuffer);i.remove(U),i.remove(K)}}let Me=0;function we(){Me=0}function ie(){let K=Me;return K>=v&&console.warn("THREE.WebGLTextures: Trying to use "+K+" texture units while this GPU supports only "+v),Me+=1,K}function le(K,U){let Fe=i.get(K);if(K.isVideoTexture&&Mn(K),K.version>0&&Fe.__version!==K.version){let Re=K.image;if(Re===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(Fe,K,U);return}}t.activeTexture(r.TEXTURE0+U),t.bindTexture(r.TEXTURE_2D,Fe.__webglTexture)}function k(K,U){let Fe=i.get(K);if(K.version>0&&Fe.__version!==K.version){st(Fe,K,U);return}t.activeTexture(r.TEXTURE0+U),t.bindTexture(r.TEXTURE_2D_ARRAY,Fe.__webglTexture)}function re(K,U){let Fe=i.get(K);if(K.version>0&&Fe.__version!==K.version){st(Fe,K,U);return}t.activeTexture(r.TEXTURE0+U),t.bindTexture(r.TEXTURE_3D,Fe.__webglTexture)}function Le(K,U){let Fe=i.get(K);if(K.version>0&&Fe.__version!==K.version){gt(Fe,K,U);return}t.activeTexture(r.TEXTURE0+U),t.bindTexture(r.TEXTURE_CUBE_MAP,Fe.__webglTexture)}let Ve={[Da]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Jl]:r.MIRRORED_REPEAT},Oe={[_n]:r.NEAREST,[yf]:r.NEAREST_MIPMAP_NEAREST,[wf]:r.NEAREST_MIPMAP_LINEAR,[qn]:r.LINEAR,[vg]:r.LINEAR_MIPMAP_NEAREST,[Ho]:r.LINEAR_MIPMAP_LINEAR};function qe(K,U,Fe){if(Fe?(r.texParameteri(K,r.TEXTURE_WRAP_S,Ve[U.wrapS]),r.texParameteri(K,r.TEXTURE_WRAP_T,Ve[U.wrapT]),(K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY)&&r.texParameteri(K,r.TEXTURE_WRAP_R,Ve[U.wrapR]),r.texParameteri(K,r.TEXTURE_MAG_FILTER,Oe[U.magFilter]),r.texParameteri(K,r.TEXTURE_MIN_FILTER,Oe[U.minFilter])):(r.texParameteri(K,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(K,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY)&&r.texParameteri(K,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(U.wrapS!==oi||U.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(K,r.TEXTURE_MAG_FILTER,F(U.magFilter)),r.texParameteri(K,r.TEXTURE_MIN_FILTER,F(U.minFilter)),U.minFilter!==_n&&U.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Re=e.get("EXT_texture_filter_anisotropic");if(U.type===hr&&e.has("OES_texture_float_linear")===!1||p===!1&&U.type===ho&&e.has("OES_texture_half_float_linear")===!1)return;(U.anisotropy>1||i.get(U).__currentAnisotropy)&&(r.texParameterf(K,Re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,a.getMaxAnisotropy())),i.get(U).__currentAnisotropy=U.anisotropy)}}function Ye(K,U){K.__webglInit===void 0&&(K.__webglInit=!0,U.addEventListener("dispose",oe),K.__webglTexture=r.createTexture(),d.memory.textures++)}function st(K,U,Fe){let Re=r.TEXTURE_2D;U.isDataTexture2DArray&&(Re=r.TEXTURE_2D_ARRAY),U.isDataTexture3D&&(Re=r.TEXTURE_3D),Ye(K,U),t.activeTexture(r.TEXTURE0+Fe),t.bindTexture(Re,K.__webglTexture),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,U.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,U.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let tt=x(U)&&E(U.image)===!1,it=I(U.image,tt,!1,_),Ft=E(it)||p,Et=l.convert(U.format),te=l.convert(U.type),Be=Q(U.internalFormat,Et,te);qe(Re,U,Ft);let Ge,nt=U.mipmaps;if(U.isDepthTexture)Be=r.DEPTH_COMPONENT,p?U.type===hr?Be=r.DEPTH_COMPONENT32F:U.type===Ss?Be=r.DEPTH_COMPONENT24:U.type===Es?Be=r.DEPTH24_STENCIL8:Be=r.DEPTH_COMPONENT16:U.type===hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),U.format===$l&&Be===r.DEPTH_COMPONENT&&U.type!==Ql&&U.type!==Ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),U.type=Ql,te=l.convert(U.type)),U.format===ec&&Be===r.DEPTH_COMPONENT&&(Be=r.DEPTH_STENCIL,U.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),U.type=Es,te=l.convert(U.type))),t.texImage2D(r.TEXTURE_2D,0,Be,it.width,it.height,0,Et,te,null);else if(U.isDataTexture)if(nt.length>0&&Ft){for(let Se=0,ft=nt.length;Se<ft;Se++)Ge=nt[Se],t.texImage2D(r.TEXTURE_2D,Se,Be,Ge.width,Ge.height,0,Et,te,Ge.data);U.generateMipmaps=!1,K.__maxMipLevel=nt.length-1}else t.texImage2D(r.TEXTURE_2D,0,Be,it.width,it.height,0,Et,te,it.data),K.__maxMipLevel=0;else if(U.isCompressedTexture){for(let Se=0,ft=nt.length;Se<ft;Se++)Ge=nt[Se],U.format!==On&&U.format!==qo?Et!==null?t.compressedTexImage2D(r.TEXTURE_2D,Se,Be,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(r.TEXTURE_2D,Se,Be,Ge.width,Ge.height,0,Et,te,Ge.data);K.__maxMipLevel=nt.length-1}else if(U.isDataTexture2DArray)t.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,it.width,it.height,it.depth,0,Et,te,it.data),K.__maxMipLevel=0;else if(U.isDataTexture3D)t.texImage3D(r.TEXTURE_3D,0,Be,it.width,it.height,it.depth,0,Et,te,it.data),K.__maxMipLevel=0;else if(nt.length>0&&Ft){for(let Se=0,ft=nt.length;Se<ft;Se++)Ge=nt[Se],t.texImage2D(r.TEXTURE_2D,Se,Be,Et,te,Ge);U.generateMipmaps=!1,K.__maxMipLevel=nt.length-1}else t.texImage2D(r.TEXTURE_2D,0,Be,Et,te,it),K.__maxMipLevel=0;Y(U,Ft)&&W(Re,U,it.width,it.height),K.__version=U.version,U.onUpdate&&U.onUpdate(U)}function gt(K,U,Fe){if(U.image.length!==6)return;Ye(K,U),t.activeTexture(r.TEXTURE0+Fe),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,U.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,U.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let Re=U&&(U.isCompressedTexture||U.image[0].isCompressedTexture),tt=U.image[0]&&U.image[0].isDataTexture,it=[];for(let Se=0;Se<6;Se++)!Re&&!tt?it[Se]=I(U.image[Se],!1,!0,g):it[Se]=tt?U.image[Se].image:U.image[Se];let Ft=it[0],Et=E(Ft)||p,te=l.convert(U.format),Be=l.convert(U.type),Ge=Q(U.internalFormat,te,Be);qe(r.TEXTURE_CUBE_MAP,U,Et);let nt;if(Re){for(let Se=0;Se<6;Se++){nt=it[Se].mipmaps;for(let ft=0;ft<nt.length;ft++){let Pt=nt[ft];U.format!==On&&U.format!==qo?te!==null?t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft,Ge,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft,Ge,Pt.width,Pt.height,0,te,Be,Pt.data)}}K.__maxMipLevel=nt.length-1}else{nt=U.mipmaps;for(let Se=0;Se<6;Se++)if(tt){t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ge,it[Se].width,it[Se].height,0,te,Be,it[Se].data);for(let ft=0;ft<nt.length;ft++){let ut=nt[ft].image[Se].image;t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft+1,Ge,ut.width,ut.height,0,te,Be,ut.data)}}else{t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ge,te,Be,it[Se]);for(let ft=0;ft<nt.length;ft++){let Pt=nt[ft];t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft+1,Ge,te,Be,Pt.image[Se])}}K.__maxMipLevel=nt.length}Y(U,Et)&&W(r.TEXTURE_CUBE_MAP,U,Ft.width,Ft.height),K.__version=U.version,U.onUpdate&&U.onUpdate(U)}function ee(K,U,Fe,Re){let tt=U.texture,it=l.convert(tt.format),Ft=l.convert(tt.type),Et=Q(tt.internalFormat,it,Ft);Re===r.TEXTURE_3D||Re===r.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,Et,U.width,U.height,U.depth,0,it,Ft,null):t.texImage2D(Re,0,Et,U.width,U.height,0,it,Ft,null),t.bindFramebuffer(r.FRAMEBUFFER,K),r.framebufferTexture2D(r.FRAMEBUFFER,Fe,Re,i.get(tt).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(K,U,Fe){if(r.bindRenderbuffer(r.RENDERBUFFER,K),U.depthBuffer&&!U.stencilBuffer){let Re=r.DEPTH_COMPONENT16;if(Fe){let tt=U.depthTexture;tt&&tt.isDepthTexture&&(tt.type===hr?Re=r.DEPTH_COMPONENT32F:tt.type===Ss&&(Re=r.DEPTH_COMPONENT24));let it=Yt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Re,U.width,U.height)}else r.renderbufferStorage(r.RENDERBUFFER,Re,U.width,U.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,K)}else if(U.depthBuffer&&U.stencilBuffer){if(Fe){let Re=Yt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,r.DEPTH24_STENCIL8,U.width,U.height)}else r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,U.width,U.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,K)}else{let Re=U.texture,tt=l.convert(Re.format),it=l.convert(Re.type),Ft=Q(Re.internalFormat,tt,it);if(Fe){let Et=Yt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,Ft,U.width,U.height)}else r.renderbufferStorage(r.RENDERBUFFER,Ft,U.width,U.height)}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(K,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,K),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(U.depthTexture).__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),le(U.depthTexture,0);let Re=i.get(U.depthTexture).__webglTexture;if(U.depthTexture.format===$l)r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Re,0);else if(U.depthTexture.format===ec)r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Re,0);else throw new Error("Unknown depthTexture format")}function mt(K){let U=i.get(K),Fe=K.isWebGLCubeRenderTarget===!0;if(K.depthTexture){if(Fe)throw new Error("target.depthTexture not supported in Cube render targets");St(U.__webglFramebuffer,K)}else if(Fe){U.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer[Re]),U.__webglDepthbuffer[Re]=r.createRenderbuffer(),Qt(U.__webglDepthbuffer[Re],K,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer=r.createRenderbuffer(),Qt(U.__webglDepthbuffer,K,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(K){let U=K.texture,Fe=i.get(K),Re=i.get(U);K.addEventListener("dispose",ue),Re.__webglTexture=r.createTexture(),Re.__version=U.version,d.memory.textures++;let tt=K.isWebGLCubeRenderTarget===!0,it=K.isWebGLMultisampleRenderTarget===!0,Ft=U.isDataTexture3D||U.isDataTexture2DArray,Et=E(K)||p;if(p&&U.format===qo&&(U.type===hr||U.type===ho)&&(U.format=On,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),tt){Fe.__webglFramebuffer=[];for(let te=0;te<6;te++)Fe.__webglFramebuffer[te]=r.createFramebuffer()}else if(Fe.__webglFramebuffer=r.createFramebuffer(),it)if(p){Fe.__webglMultisampledFramebuffer=r.createFramebuffer(),Fe.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Fe.__webglColorRenderbuffer);let te=l.convert(U.format),Be=l.convert(U.type),Ge=Q(U.internalFormat,te,Be),nt=Yt(K);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,Ge,K.width,K.height),t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Fe.__webglColorRenderbuffer),r.bindRenderbuffer(r.RENDERBUFFER,null),K.depthBuffer&&(Fe.__webglDepthRenderbuffer=r.createRenderbuffer(),Qt(Fe.__webglDepthRenderbuffer,K,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(tt){t.bindTexture(r.TEXTURE_CUBE_MAP,Re.__webglTexture),qe(r.TEXTURE_CUBE_MAP,U,Et);for(let te=0;te<6;te++)ee(Fe.__webglFramebuffer[te],K,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te);Y(U,Et)&&W(r.TEXTURE_CUBE_MAP,U,K.width,K.height),t.bindTexture(r.TEXTURE_CUBE_MAP,null)}else{let te=r.TEXTURE_2D;Ft&&(p?te=U.isDataTexture3D?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(te,Re.__webglTexture),qe(te,U,Et),ee(Fe.__webglFramebuffer,K,r.COLOR_ATTACHMENT0,te),Y(U,Et)&&W(r.TEXTURE_2D,U,K.width,K.height),t.bindTexture(r.TEXTURE_2D,null)}K.depthBuffer&&mt(K)}function kt(K){let U=K.texture,Fe=E(K)||p;if(Y(U,Fe)){let Re=K.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,tt=i.get(U).__webglTexture;t.bindTexture(Re,tt),W(Re,U,K.width,K.height),t.bindTexture(Re,null)}}function Dt(K){if(K.isWebGLMultisampleRenderTarget)if(p){let U=K.width,Fe=K.height,Re=r.COLOR_BUFFER_BIT;K.depthBuffer&&(Re|=r.DEPTH_BUFFER_BIT),K.stencilBuffer&&(Re|=r.STENCIL_BUFFER_BIT);let tt=i.get(K);t.bindFramebuffer(r.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,tt.__webglFramebuffer),r.blitFramebuffer(0,0,U,Fe,0,0,U,Fe,Re,r.NEAREST),t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Yt(K){return p&&K.isWebGLMultisampleRenderTarget?Math.min(b,K.samples):0}function Mn(K){let U=d.render.frame;w.get(K)!==U&&(w.set(K,U),K.update())}let Ot=!1,ki=!1;function Un(K,U){K&&K.isWebGLRenderTarget&&(Ot===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Ot=!0),K=K.texture),le(K,U)}function jt(K,U){K&&K.isWebGLCubeRenderTarget&&(ki===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ki=!0),K=K.texture),Le(K,U)}this.allocateTextureUnit=ie,this.resetTextureUnits=we,this.setTexture2D=le,this.setTexture2DArray=k,this.setTexture3D=re,this.setTextureCube=Le,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Dt,this.safeSetTexture2D=Un,this.safeSetTextureCube=jt}function e1(r,e,t){let i=t.isWebGL2;function a(l){let d;if(l===Wo)return r.UNSIGNED_BYTE;if(l===bg)return r.UNSIGNED_SHORT_4_4_4_4;if(l===_g)return r.UNSIGNED_SHORT_5_5_5_1;if(l===Mg)return r.UNSIGNED_SHORT_5_6_5;if(l===xg)return r.BYTE;if(l===yg)return r.SHORT;if(l===Ql)return r.UNSIGNED_SHORT;if(l===wg)return r.INT;if(l===Ss)return r.UNSIGNED_INT;if(l===hr)return r.FLOAT;if(l===ho)return i?r.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(l===Sg)return r.ALPHA;if(l===qo)return r.RGB;if(l===On)return r.RGBA;if(l===Eg)return r.LUMINANCE;if(l===Ag)return r.LUMINANCE_ALPHA;if(l===$l)return r.DEPTH_COMPONENT;if(l===ec)return r.DEPTH_STENCIL;if(l===Tg)return r.RED;if(l===Lg)return r.RED_INTEGER;if(l===Rg)return r.RG;if(l===Cg)return r.RG_INTEGER;if(l===Dg)return r.RGB_INTEGER;if(l===Pg)return r.RGBA_INTEGER;if(l===bf||l===_f||l===Mf||l===Sf)if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(l===bf)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===_f)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Mf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Sf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Ef||l===Af||l===Tf||l===Lf)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(l===Ef)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Af)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Tf)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Lf)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Fg)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if((l===Rf||l===Cf)&&(d=e.get("WEBGL_compressed_texture_etc"),d!==null)){if(l===Rf)return d.COMPRESSED_RGB8_ETC2;if(l===Cf)return d.COMPRESSED_RGBA8_ETC2_EAC}if(l===Ng||l===Ig||l===kg||l===Og||l===Bg||l===Ug||l===zg||l===Gg||l===Vg||l===Hg||l===Wg||l===qg||l===Xg||l===Yg||l===Kg||l===Zg||l===Jg||l===Qg||l===$g||l===ev||l===tv||l===nv||l===iv||l===rv||l===ov||l===av||l===sv||l===lv)return d=e.get("WEBGL_compressed_texture_astc"),d!==null?l:null;if(l===jg)return d=e.get("EXT_texture_compression_bptc"),d!==null?l:null;if(l===Es)return i?r.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:a}}var Nc=class extends Cn{constructor(e=[]){super(),this.cameras=e}};Nc.prototype.isArrayCamera=!0;var O2={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,d=null,p=this._targetRay,v=this._grip,g=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(p!==null&&(a=t.getPose(e.targetRaySpace,i),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(O2))),g&&e.hand){d=!0;for(let R of e.hand.values()){let I=t.getJointPose(R,i);if(g.joints[R.jointName]===void 0){let x=new Tr;x.matrixAutoUpdate=!1,x.visible=!1,g.joints[R.jointName]=x,g.add(x)}let E=g.joints[R.jointName];I!==null&&(E.matrix.fromArray(I.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.jointRadius=I.radius),E.visible=I!==null}let _=g.joints["index-finger-tip"],b=g.joints["thumb-tip"],w=_.position.distanceTo(b.position),f=.02,C=.005;g.inputState.pinching&&w>f+C?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&w<=f-C&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(v.matrix.fromArray(l.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),l.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(l.linearVelocity)):v.hasLinearVelocity=!1,l.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(l.angularVelocity)):v.hasAngularVelocity=!1));return p!==null&&(p.visible=a!==null),v!==null&&(v.visible=l!==null),g!==null&&(g.visible=d!==null),this}};var Th=class extends wi{constructor(e,t){super();let i=this,a=e.state,l=null,d=1,p=null,v="local-floor",g=null,_=[],b=new Map,w=new Cn;w.layers.enable(1),w.viewport=new Ct;let f=new Cn;f.layers.enable(2),f.viewport=new Ct;let C=[w,f],R=new Nc;R.layers.enable(1),R.layers.enable(2);let I=null,E=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(we){let ie=_[we];return ie===void 0&&(ie=new Ks,_[we]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(we){let ie=_[we];return ie===void 0&&(ie=new Ks,_[we]=ie),ie.getGripSpace()},this.getHand=function(we){let ie=_[we];return ie===void 0&&(ie=new Ks,_[we]=ie),ie.getHandSpace()};function x(we){let ie=b.get(we.inputSource);ie&&ie.dispatchEvent({type:we.type,data:we.inputSource})}function Y(){b.forEach(function(we,ie){we.disconnect(ie)}),b.clear(),I=null,E=null,a.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),Me.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(we){d=we,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(we){v=we,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p},this.getSession=function(){return l},this.setSession=async function(we){if(l=we,l!==null){l.addEventListener("select",x),l.addEventListener("selectstart",x),l.addEventListener("selectend",x),l.addEventListener("squeeze",x),l.addEventListener("squeezestart",x),l.addEventListener("squeezeend",x),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",W);let ie=t.getContextAttributes();ie.xrCompatible!==!0&&await t.makeXRCompatible();let le={antialias:ie.antialias,alpha:ie.alpha,depth:ie.depth,stencil:ie.stencil,framebufferScaleFactor:d},k=new XRWebGLLayer(l,t,le);l.updateRenderState({baseLayer:k}),p=await l.requestReferenceSpace(v),Me.setContext(l),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function W(we){let ie=l.inputSources;for(let le=0;le<_.length;le++)b.set(ie[le],_[le]);for(let le=0;le<we.removed.length;le++){let k=we.removed[le],re=b.get(k);re&&(re.dispatchEvent({type:"disconnected",data:k}),b.delete(k))}for(let le=0;le<we.added.length;le++){let k=we.added[le],re=b.get(k);re&&re.dispatchEvent({type:"connected",data:k})}}let Q=new z,F=new z;function oe(we,ie,le){Q.setFromMatrixPosition(ie.matrixWorld),F.setFromMatrixPosition(le.matrixWorld);let k=Q.distanceTo(F),re=ie.projectionMatrix.elements,Le=le.projectionMatrix.elements,Ve=re[14]/(re[10]-1),Oe=re[14]/(re[10]+1),qe=(re[9]+1)/re[5],Ye=(re[9]-1)/re[5],st=(re[8]-1)/re[0],gt=(Le[8]+1)/Le[0],ee=Ve*st,Qt=Ve*gt,St=k/(-st+gt),mt=St*-st;ie.matrixWorld.decompose(we.position,we.quaternion,we.scale),we.translateX(mt),we.translateZ(St),we.matrixWorld.compose(we.position,we.quaternion,we.scale),we.matrixWorldInverse.copy(we.matrixWorld).invert();let $e=Ve+St,kt=Oe+St,Dt=ee-mt,Yt=Qt+(k-mt),Mn=qe*Oe/kt*$e,Ot=Ye*Oe/kt*$e;we.projectionMatrix.makePerspective(Dt,Yt,Mn,Ot,$e,kt)}function ue(we,ie){ie===null?we.matrixWorld.copy(we.matrix):we.matrixWorld.multiplyMatrices(ie.matrixWorld,we.matrix),we.matrixWorldInverse.copy(we.matrixWorld).invert()}this.getCamera=function(we){R.near=f.near=w.near=we.near,R.far=f.far=w.far=we.far,(I!==R.near||E!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,E=R.far);let ie=we.parent,le=R.cameras;ue(R,ie);for(let re=0;re<le.length;re++)ue(le[re],ie);we.matrixWorld.copy(R.matrixWorld),we.matrix.copy(R.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale);let k=we.children;for(let re=0,Le=k.length;re<Le;re++)k[re].updateMatrixWorld(!0);return le.length===2?oe(R,w,f):R.projectionMatrix.copy(w.projectionMatrix),R};let fe=null;function j(we,ie){if(g=ie.getViewerPose(p),g!==null){let k=g.views,re=l.renderState.baseLayer;a.bindXRFramebuffer(re.framebuffer);let Le=!1;k.length!==R.cameras.length&&(R.cameras.length=0,Le=!0);for(let Ve=0;Ve<k.length;Ve++){let Oe=k[Ve],qe=re.getViewport(Oe),Ye=C[Ve];Ye.matrix.fromArray(Oe.transform.matrix),Ye.projectionMatrix.fromArray(Oe.projectionMatrix),Ye.viewport.set(qe.x,qe.y,qe.width,qe.height),Ve===0&&R.matrix.copy(Ye.matrix),Le===!0&&R.cameras.push(Ye)}}let le=l.inputSources;for(let k=0;k<_.length;k++){let re=_[k],Le=le[k];re.update(Le,ie,p)}fe&&fe(we,ie)}let Me=new Eh;Me.setAnimationLoop(j),this.setAnimationLoop=function(we){fe=we},this.dispose=function(){}}};function t1(r){function e(E,x){E.fogColor.value.copy(x.color),x.isFog?(E.fogNear.value=x.near,E.fogFar.value=x.far):x.isFogExp2&&(E.fogDensity.value=x.density)}function t(E,x,Y,W){x.isMeshBasicMaterial?i(E,x):x.isMeshLambertMaterial?(i(E,x),v(E,x)):x.isMeshToonMaterial?(i(E,x),_(E,x)):x.isMeshPhongMaterial?(i(E,x),g(E,x)):x.isMeshStandardMaterial?(i(E,x),x.isMeshPhysicalMaterial?w(E,x):b(E,x)):x.isMeshMatcapMaterial?(i(E,x),f(E,x)):x.isMeshDepthMaterial?(i(E,x),C(E,x)):x.isMeshDistanceMaterial?(i(E,x),R(E,x)):x.isMeshNormalMaterial?(i(E,x),I(E,x)):x.isLineBasicMaterial?(a(E,x),x.isLineDashedMaterial&&l(E,x)):x.isPointsMaterial?d(E,x,Y,W):x.isSpriteMaterial?p(E,x):x.isShadowMaterial?(E.color.value.copy(x.color),E.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function i(E,x){E.opacity.value=x.opacity,x.color&&E.diffuse.value.copy(x.color),x.emissive&&E.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(E.map.value=x.map),x.alphaMap&&(E.alphaMap.value=x.alphaMap),x.specularMap&&(E.specularMap.value=x.specularMap);let Y=r.get(x).envMap;if(Y){E.envMap.value=Y,E.flipEnvMap.value=Y.isCubeTexture&&Y._needsFlipEnvMap?-1:1,E.reflectivity.value=x.reflectivity,E.refractionRatio.value=x.refractionRatio;let F=r.get(Y).__maxMipLevel;F!==void 0&&(E.maxMipLevel.value=F)}x.lightMap&&(E.lightMap.value=x.lightMap,E.lightMapIntensity.value=x.lightMapIntensity),x.aoMap&&(E.aoMap.value=x.aoMap,E.aoMapIntensity.value=x.aoMapIntensity);let W;x.map?W=x.map:x.specularMap?W=x.specularMap:x.displacementMap?W=x.displacementMap:x.normalMap?W=x.normalMap:x.bumpMap?W=x.bumpMap:x.roughnessMap?W=x.roughnessMap:x.metalnessMap?W=x.metalnessMap:x.alphaMap?W=x.alphaMap:x.emissiveMap?W=x.emissiveMap:x.clearcoatMap?W=x.clearcoatMap:x.clearcoatNormalMap?W=x.clearcoatNormalMap:x.clearcoatRoughnessMap&&(W=x.clearcoatRoughnessMap),W!==void 0&&(W.isWebGLRenderTarget&&(W=W.texture),W.matrixAutoUpdate===!0&&W.updateMatrix(),E.uvTransform.value.copy(W.matrix));let Q;x.aoMap?Q=x.aoMap:x.lightMap&&(Q=x.lightMap),Q!==void 0&&(Q.isWebGLRenderTarget&&(Q=Q.texture),Q.matrixAutoUpdate===!0&&Q.updateMatrix(),E.uv2Transform.value.copy(Q.matrix))}function a(E,x){E.diffuse.value.copy(x.color),E.opacity.value=x.opacity}function l(E,x){E.dashSize.value=x.dashSize,E.totalSize.value=x.dashSize+x.gapSize,E.scale.value=x.scale}function d(E,x,Y,W){E.diffuse.value.copy(x.color),E.opacity.value=x.opacity,E.size.value=x.size*Y,E.scale.value=W*.5,x.map&&(E.map.value=x.map),x.alphaMap&&(E.alphaMap.value=x.alphaMap);let Q;x.map?Q=x.map:x.alphaMap&&(Q=x.alphaMap),Q!==void 0&&(Q.matrixAutoUpdate===!0&&Q.updateMatrix(),E.uvTransform.value.copy(Q.matrix))}function p(E,x){E.diffuse.value.copy(x.color),E.opacity.value=x.opacity,E.rotation.value=x.rotation,x.map&&(E.map.value=x.map),x.alphaMap&&(E.alphaMap.value=x.alphaMap);let Y;x.map?Y=x.map:x.alphaMap&&(Y=x.alphaMap),Y!==void 0&&(Y.matrixAutoUpdate===!0&&Y.updateMatrix(),E.uvTransform.value.copy(Y.matrix))}function v(E,x){x.emissiveMap&&(E.emissiveMap.value=x.emissiveMap)}function g(E,x){E.specular.value.copy(x.specular),E.shininess.value=Math.max(x.shininess,1e-4),x.emissiveMap&&(E.emissiveMap.value=x.emissiveMap),x.bumpMap&&(E.bumpMap.value=x.bumpMap,E.bumpScale.value=x.bumpScale,x.side===tn&&(E.bumpScale.value*=-1)),x.normalMap&&(E.normalMap.value=x.normalMap,E.normalScale.value.copy(x.normalScale),x.side===tn&&E.normalScale.value.negate()),x.displacementMap&&(E.displacementMap.value=x.displacementMap,E.displacementScale.value=x.displacementScale,E.displacementBias.value=x.displacementBias)}function _(E,x){x.gradientMap&&(E.gradientMap.value=x.gradientMap),x.emissiveMap&&(E.emissiveMap.value=x.emissiveMap),x.bumpMap&&(E.bumpMap.value=x.bumpMap,E.bumpScale.value=x.bumpScale,x.side===tn&&(E.bumpScale.value*=-1)),x.normalMap&&(E.normalMap.value=x.normalMap,E.normalScale.value.copy(x.normalScale),x.side===tn&&E.normalScale.value.negate()),x.displacementMap&&(E.displacementMap.value=x.displacementMap,E.displacementScale.value=x.displacementScale,E.displacementBias.value=x.displacementBias)}function b(E,x){E.roughness.value=x.roughness,E.metalness.value=x.metalness,x.roughnessMap&&(E.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(E.metalnessMap.value=x.metalnessMap),x.emissiveMap&&(E.emissiveMap.value=x.emissiveMap),x.bumpMap&&(E.bumpMap.value=x.bumpMap,E.bumpScale.value=x.bumpScale,x.side===tn&&(E.bumpScale.value*=-1)),x.normalMap&&(E.normalMap.value=x.normalMap,E.normalScale.value.copy(x.normalScale),x.side===tn&&E.normalScale.value.negate()),x.displacementMap&&(E.displacementMap.value=x.displacementMap,E.displacementScale.value=x.displacementScale,E.displacementBias.value=x.displacementBias),r.get(x).envMap&&(E.envMapIntensity.value=x.envMapIntensity)}function w(E,x){b(E,x),E.reflectivity.value=x.reflectivity,E.clearcoat.value=x.clearcoat,E.clearcoatRoughness.value=x.clearcoatRoughness,x.sheen&&E.sheen.value.copy(x.sheen),x.clearcoatMap&&(E.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(E.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),E.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===tn&&E.clearcoatNormalScale.value.negate()),E.transmission.value=x.transmission,x.transmissionMap&&(E.transmissionMap.value=x.transmissionMap)}function f(E,x){x.matcap&&(E.matcap.value=x.matcap),x.bumpMap&&(E.bumpMap.value=x.bumpMap,E.bumpScale.value=x.bumpScale,x.side===tn&&(E.bumpScale.value*=-1)),x.normalMap&&(E.normalMap.value=x.normalMap,E.normalScale.value.copy(x.normalScale),x.side===tn&&E.normalScale.value.negate()),x.displacementMap&&(E.displacementMap.value=x.displacementMap,E.displacementScale.value=x.displacementScale,E.displacementBias.value=x.displacementBias)}function C(E,x){x.displacementMap&&(E.displacementMap.value=x.displacementMap,E.displacementScale.value=x.displacementScale,E.displacementBias.value=x.displacementBias)}function R(E,x){x.displacementMap&&(E.displacementMap.value=x.displacementMap,E.displacementScale.value=x.displacementScale,E.displacementBias.value=x.displacementBias),E.referencePosition.value.copy(x.referencePosition),E.nearDistance.value=x.nearDistance,E.farDistance.value=x.farDistance}function I(E,x){x.bumpMap&&(E.bumpMap.value=x.bumpMap,E.bumpScale.value=x.bumpScale,x.side===tn&&(E.bumpScale.value*=-1)),x.normalMap&&(E.normalMap.value=x.normalMap,E.normalScale.value.copy(x.normalScale),x.side===tn&&E.normalScale.value.negate()),x.displacementMap&&(E.displacementMap.value=x.displacementMap,E.displacementScale.value=x.displacementScale,E.displacementBias.value=x.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function B2(){let r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function n1(r){r=r||{};let e=r.canvas!==void 0?r.canvas:B2(),t=r.context!==void 0?r.context:null,i=r.alpha!==void 0?r.alpha:!1,a=r.depth!==void 0?r.depth:!0,l=r.stencil!==void 0?r.stencil:!0,d=r.antialias!==void 0?r.antialias:!1,p=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,v=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,g=r.powerPreference!==void 0?r.powerPreference:"default",_=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,b=null,w=null,f=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Xo,this.physicallyCorrectLights=!1,this.toneMapping=Vo,this.toneMappingExposure=1;let R=this,I=!1,E=0,x=0,Y=null,W=-1,Q=null,F=new Ct,oe=new Ct,ue=null,fe=e.width,j=e.height,Me=1,we=null,ie=null,le=new Ct(0,0,fe,j),k=new Ct(0,0,fe,j),re=!1,Le=new Ar,Ve=!1,Oe=!1,qe=new xt,Ye=new z,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return Y===null?Me:1}let ee=t;function Qt(P,ge){for(let ce=0;ce<P.length;ce++){let J=P[ce],Ae=e.getContext(J,ge);if(Ae!==null)return Ae}return null}try{let P={alpha:i,depth:a,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:v,powerPreference:g,failIfMajorPerformanceCaveat:_};if(e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Pt,!1),ee===null){let ge=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&ge.shift(),ee=Qt(ge,P),ee===null)throw Qt(ge)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let St,mt,$e,kt,Dt,Yt,Mn,Ot,ki,Un,jt,K,U,Fe,Re,tt,it,Ft,Et,te,Be,Ge;function nt(){St=new vw(ee),mt=new pw(ee,St,r),St.init(mt),Be=new e1(ee,St,mt),$e=new Qw(ee,St,mt),kt=new ww(ee),Dt=new Hw,Yt=new $w(ee,St,$e,Dt,mt,Be,kt),Mn=new gw(R),Ot=new Hv(ee,mt),Ge=new uw(ee,St,Ot,mt),ki=new xw(ee,Ot,kt,Ge),Un=new _w(ee,ki,Ot,kt),Ft=new bw(ee),Re=new mw(Dt),jt=new Vw(R,Mn,St,mt,Ge,Re),K=new t1(Dt),U=new qw(Dt),Fe=new jw(St,mt),it=new hw(R,Mn,$e,Un,p),tt=new Jw(R,Un,mt),Et=new fw(ee,St,kt,mt),te=new yw(ee,St,kt,mt),kt.programs=jt.programs,R.capabilities=mt,R.extensions=St,R.properties=Dt,R.renderLists=U,R.shadowMap=tt,R.state=$e,R.info=kt}nt();let Se=new Th(R,ee);this.xr=Se,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){let P=St.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=St.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(P){P!==void 0&&(Me=P,this.setSize(fe,j,!1))},this.getSize=function(P){return P===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),P=new je),P.set(fe,j)},this.setSize=function(P,ge,ce){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=P,j=ge,e.width=Math.floor(P*Me),e.height=Math.floor(ge*Me),ce!==!1&&(e.style.width=P+"px",e.style.height=ge+"px"),this.setViewport(0,0,P,ge)},this.getDrawingBufferSize=function(P){return P===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),P=new je),P.set(fe*Me,j*Me).floor()},this.setDrawingBufferSize=function(P,ge,ce){fe=P,j=ge,Me=ce,e.width=Math.floor(P*ce),e.height=Math.floor(ge*ce),this.setViewport(0,0,P,ge)},this.getCurrentViewport=function(P){return P===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),P=new Ct),P.copy(F)},this.getViewport=function(P){return P.copy(le)},this.setViewport=function(P,ge,ce,J){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,ge,ce,J),$e.viewport(F.copy(le).multiplyScalar(Me).floor())},this.getScissor=function(P){return P.copy(k)},this.setScissor=function(P,ge,ce,J){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,ge,ce,J),$e.scissor(oe.copy(k).multiplyScalar(Me).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(P){$e.setScissorTest(re=P)},this.setOpaqueSort=function(P){we=P},this.setTransparentSort=function(P){ie=P},this.getClearColor=function(P){return P===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),P=new at),P.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(P,ge,ce){let J=0;(P===void 0||P)&&(J|=ee.COLOR_BUFFER_BIT),(ge===void 0||ge)&&(J|=ee.DEPTH_BUFFER_BIT),(ce===void 0||ce)&&(J|=ee.STENCIL_BUFFER_BIT),ee.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Pt,!1),U.dispose(),Fe.dispose(),Dt.dispose(),Mn.dispose(),Un.dispose(),Ge.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Js),Se.removeEventListener("sessionend",Qs),Yn.stop()};function ft(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let P=kt.autoReset,ge=tt.enabled,ce=tt.autoUpdate,J=tt.needsUpdate,Ae=tt.type;nt(),kt.autoReset=P,tt.enabled=ge,tt.autoUpdate=ce,tt.needsUpdate=J,tt.type=Ae}function ut(P){let ge=P.target;ge.removeEventListener("dispose",ut),on(ge)}function on(P){At(P),Dt.remove(P)}function At(P){let ge=Dt.get(P).programs;ge!==void 0&&ge.forEach(function(ce){jt.releaseProgram(ce)})}function li(P,ge){P.render(function(ce){R.renderBufferImmediate(ce,ge)})}this.renderBufferImmediate=function(P,ge){Ge.initAttributes();let ce=Dt.get(P);P.hasPositions&&!ce.position&&(ce.position=ee.createBuffer()),P.hasNormals&&!ce.normal&&(ce.normal=ee.createBuffer()),P.hasUvs&&!ce.uv&&(ce.uv=ee.createBuffer()),P.hasColors&&!ce.color&&(ce.color=ee.createBuffer());let J=ge.getAttributes();P.hasPositions&&(ee.bindBuffer(ee.ARRAY_BUFFER,ce.position),ee.bufferData(ee.ARRAY_BUFFER,P.positionArray,ee.DYNAMIC_DRAW),Ge.enableAttribute(J.position),ee.vertexAttribPointer(J.position,3,ee.FLOAT,!1,0,0)),P.hasNormals&&(ee.bindBuffer(ee.ARRAY_BUFFER,ce.normal),ee.bufferData(ee.ARRAY_BUFFER,P.normalArray,ee.DYNAMIC_DRAW),Ge.enableAttribute(J.normal),ee.vertexAttribPointer(J.normal,3,ee.FLOAT,!1,0,0)),P.hasUvs&&(ee.bindBuffer(ee.ARRAY_BUFFER,ce.uv),ee.bufferData(ee.ARRAY_BUFFER,P.uvArray,ee.DYNAMIC_DRAW),Ge.enableAttribute(J.uv),ee.vertexAttribPointer(J.uv,2,ee.FLOAT,!1,0,0)),P.hasColors&&(ee.bindBuffer(ee.ARRAY_BUFFER,ce.color),ee.bufferData(ee.ARRAY_BUFFER,P.colorArray,ee.DYNAMIC_DRAW),Ge.enableAttribute(J.color),ee.vertexAttribPointer(J.color,3,ee.FLOAT,!1,0,0)),Ge.disableUnusedAttributes(),ee.drawArrays(ee.TRIANGLES,0,P.count),P.count=0},this.renderBufferDirect=function(P,ge,ce,J,Ae,G){ge===null&&(ge=st);let Ne=Ae.isMesh&&Ae.matrixWorld.determinant()<0,ct=H(P,ge,J,Ae);$e.setMaterial(J,Ne);let _t=ce.index,dt=ce.attributes.position;if(_t===null){if(dt===void 0||dt.count===0)return}else if(_t.count===0)return;let yt=1;J.wireframe===!0&&(_t=ki.getWireframeAttribute(ce),yt=2),(J.morphTargets||J.morphNormals)&&Ft.update(Ae,ce,J,ct),Ge.setup(Ae,J,ct,ce,_t);let rt,He=Et;_t!==null&&(rt=Ot.get(_t),He=te,He.setIndex(rt));let Kn=_t!==null?_t.count:dt.count,zn=ce.drawRange.start*yt,he=ce.drawRange.count*yt,We=G!==null?G.start*yt:0,Si=G!==null?G.count*yt:1/0,Ze=Math.max(zn,We),$s=Math.min(Kn,zn+he,We+Si)-1,et=Math.max(0,$s-Ze+1);if(et!==0){if(Ae.isMesh)J.wireframe===!0?($e.setLineWidth(J.wireframeLinewidth*gt()),He.setMode(ee.LINES)):He.setMode(ee.TRIANGLES);else if(Ae.isLine){let Nt=J.linewidth;Nt===void 0&&(Nt=1),$e.setLineWidth(Nt*gt()),Ae.isLineSegments?He.setMode(ee.LINES):Ae.isLineLoop?He.setMode(ee.LINE_LOOP):He.setMode(ee.LINE_STRIP)}else Ae.isPoints?He.setMode(ee.POINTS):Ae.isSprite&&He.setMode(ee.TRIANGLES);if(Ae.isInstancedMesh)He.renderInstances(Ze,et,Ae.count);else if(ce.isInstancedBufferGeometry){let Nt=Math.min(ce.instanceCount,ce._maxInstanceCount);He.renderInstances(Ze,et,Nt)}else He.render(Ze,et)}},this.compile=function(P,ge){w=Fe.get(P),w.init(),P.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ge.layers)&&(w.pushLight(ce),ce.castShadow&&w.pushShadow(ce))}),w.setupLights(),P.traverse(function(ce){let J=ce.material;if(J)if(Array.isArray(J))for(let Ae=0;Ae<J.length;Ae++){let G=J[Ae];za(G,P,ce)}else za(J,P,ce)})};let ci=null;function Zs(P){ci&&ci(P)}function Js(){Yn.stop()}function Qs(){Yn.start()}let Yn=new Eh;Yn.setAnimationLoop(Zs),typeof window!="undefined"&&Yn.setContext(window),this.setAnimationLoop=function(P){ci=P,Se.setAnimationLoop(P),P===null?Yn.stop():Yn.start()},Se.addEventListener("sessionstart",Js),Se.addEventListener("sessionend",Qs),this.render=function(P,ge){let ce,J;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),ce=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),J=arguments[3]),ge!==void 0&&ge.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P.autoUpdate===!0&&P.updateMatrixWorld(),ge.parent===null&&ge.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(ge=Se.getCamera(ge)),P.isScene===!0&&P.onBeforeRender(R,P,ge,ce||Y),w=Fe.get(P,C.length),w.init(),C.push(w),qe.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),Le.setFromProjectionMatrix(qe),Oe=this.localClippingEnabled,Ve=Re.init(this.clippingPlanes,Oe,ge),b=U.get(P,f.length),b.init(),f.push(b),yo(P,ge,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(we,ie),Ve===!0&&Re.beginShadows();let Ae=w.state.shadowsArray;tt.render(Ae,P,ge),w.setupLights(),w.setupLightsView(ge),Ve===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce!==void 0&&this.setRenderTarget(ce),it.render(b,P,ge,J);let G=b.opaque,Ne=b.transparent;G.length>0&&ia(G,P,ge),Ne.length>0&&ia(Ne,P,ge),Y!==null&&(Yt.updateRenderTargetMipmap(Y),Yt.updateMultisampleRenderTarget(Y)),P.isScene===!0&&P.onAfterRender(R,P,ge),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1),Ge.resetDefaultState(),W=-1,Q=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,f.pop(),f.length>0?b=f[f.length-1]:b=null};function yo(P,ge,ce,J){if(P.visible===!1)return;if(P.layers.test(ge.layers)){if(P.isGroup)ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ge);else if(P.isLight)w.pushLight(P),P.castShadow&&w.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Le.intersectsSprite(P)){J&&Ye.setFromMatrixPosition(P.matrixWorld).applyMatrix4(qe);let Ne=Un.update(P),ct=P.material;ct.visible&&b.push(P,Ne,ct,ce,Ye.z,null)}}else if(P.isImmediateRenderObject)J&&Ye.setFromMatrixPosition(P.matrixWorld).applyMatrix4(qe),b.push(P,null,P.material,ce,Ye.z,null);else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==kt.render.frame&&(P.skeleton.update(),P.skeleton.frame=kt.render.frame),!P.frustumCulled||Le.intersectsObject(P))){J&&Ye.setFromMatrixPosition(P.matrixWorld).applyMatrix4(qe);let Ne=Un.update(P),ct=P.material;if(Array.isArray(ct)){let _t=Ne.groups;for(let dt=0,yt=_t.length;dt<yt;dt++){let rt=_t[dt],He=ct[rt.materialIndex];He&&He.visible&&b.push(P,Ne,He,ce,Ye.z,rt)}}else ct.visible&&b.push(P,Ne,ct,ce,Ye.z,null)}}let G=P.children;for(let Ne=0,ct=G.length;Ne<ct;Ne++)yo(G[Ne],ge,ce,J)}function ia(P,ge,ce){let J=ge.isScene===!0?ge.overrideMaterial:null;for(let Ae=0,G=P.length;Ae<G;Ae++){let Ne=P[Ae],ct=Ne.object,_t=Ne.geometry,dt=J===null?Ne.material:J,yt=Ne.group;if(ce.isArrayCamera){let rt=ce.cameras;for(let He=0,Kn=rt.length;He<Kn;He++){let zn=rt[He];ct.layers.test(zn.layers)&&($e.viewport(F.copy(zn.viewport)),w.setupLightsView(zn),Rr(ct,ge,zn,_t,dt,yt))}}else Rr(ct,ge,ce,_t,dt,yt)}}function Rr(P,ge,ce,J,Ae,G){if(P.onBeforeRender(R,ge,ce,J,Ae,G),P.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),P.isImmediateRenderObject){let Ne=H(ce,ge,Ae,P);$e.setMaterial(Ae),Ge.reset(),li(P,Ne)}else R.renderBufferDirect(ce,ge,J,Ae,P,G);P.onAfterRender(R,ge,ce,J,Ae,G)}function za(P,ge,ce){ge.isScene!==!0&&(ge=st);let J=Dt.get(P),Ae=w.state.lights,G=w.state.shadowsArray,Ne=Ae.state.version,ct=jt.getParameters(P,Ae.state,G,ge,ce),_t=jt.getProgramCacheKey(ct),dt=J.programs;J.environment=P.isMeshStandardMaterial?ge.environment:null,J.fog=ge.fog,J.envMap=Mn.get(P.envMap||J.environment),dt===void 0&&(P.addEventListener("dispose",ut),dt=new Map,J.programs=dt);let yt=dt.get(_t);if(yt!==void 0){if(J.currentProgram===yt&&J.lightsStateVersion===Ne)return jn(P,ct),yt}else ct.uniforms=jt.getUniforms(P),P.onBuild(ct,R),P.onBeforeCompile(ct,R),yt=jt.acquireProgram(ct,_t),dt.set(_t,yt),J.uniforms=ct.uniforms;let rt=J.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(rt.clippingPlanes=Re.uniform),jn(P,ct),J.needsLights=Ga(P),J.lightsStateVersion=Ne,J.needsLights&&(rt.ambientLightColor.value=Ae.state.ambient,rt.lightProbe.value=Ae.state.probe,rt.directionalLights.value=Ae.state.directional,rt.directionalLightShadows.value=Ae.state.directionalShadow,rt.spotLights.value=Ae.state.spot,rt.spotLightShadows.value=Ae.state.spotShadow,rt.rectAreaLights.value=Ae.state.rectArea,rt.ltc_1.value=Ae.state.rectAreaLTC1,rt.ltc_2.value=Ae.state.rectAreaLTC2,rt.pointLights.value=Ae.state.point,rt.pointLightShadows.value=Ae.state.pointShadow,rt.hemisphereLights.value=Ae.state.hemi,rt.directionalShadowMap.value=Ae.state.directionalShadowMap,rt.directionalShadowMatrix.value=Ae.state.directionalShadowMatrix,rt.spotShadowMap.value=Ae.state.spotShadowMap,rt.spotShadowMatrix.value=Ae.state.spotShadowMatrix,rt.pointShadowMap.value=Ae.state.pointShadowMap,rt.pointShadowMatrix.value=Ae.state.pointShadowMatrix);let He=yt.getUniforms(),Kn=Lr.seqWithValue(He.seq,rt);return J.currentProgram=yt,J.uniformsList=Kn,yt}function jn(P,ge){let ce=Dt.get(P);ce.outputEncoding=ge.outputEncoding,ce.instancing=ge.instancing,ce.numClippingPlanes=ge.numClippingPlanes,ce.numIntersection=ge.numClipIntersection,ce.vertexAlphas=ge.vertexAlphas}function H(P,ge,ce,J){ge.isScene!==!0&&(ge=st),Yt.resetTextureUnits();let Ae=ge.fog,G=ce.isMeshStandardMaterial?ge.environment:null,Ne=Y===null?R.outputEncoding:Y.texture.encoding,ct=Mn.get(ce.envMap||G),_t=ce.vertexColors===!0&&J.geometry&&J.geometry.attributes.color&&J.geometry.attributes.color.itemSize===4,dt=Dt.get(ce),yt=w.state.lights;if(Ve===!0&&(Oe===!0||P!==Q)){let Ze=P===Q&&ce.id===W;Re.setState(ce,P,Ze)}let rt=!1;ce.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==yt.state.version||dt.outputEncoding!==Ne||J.isInstancedMesh&&dt.instancing===!1||!J.isInstancedMesh&&dt.instancing===!0||dt.envMap!==ct||ce.fog&&dt.fog!==Ae||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Re.numPlanes||dt.numIntersection!==Re.numIntersection)||dt.vertexAlphas!==_t)&&(rt=!0):(rt=!0,dt.__version=ce.version);let He=dt.currentProgram;rt===!0&&(He=za(ce,ge,J));let Kn=!1,zn=!1,he=!1,We=He.getUniforms(),Si=dt.uniforms;if($e.useProgram(He.program)&&(Kn=!0,zn=!0,he=!0),ce.id!==W&&(W=ce.id,zn=!0),Kn||Q!==P){if(We.setValue(ee,"projectionMatrix",P.projectionMatrix),mt.logarithmicDepthBuffer&&We.setValue(ee,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),Q!==P&&(Q=P,zn=!0,he=!0),ce.isShaderMaterial||ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshStandardMaterial||ce.envMap){let Ze=We.map.cameraPosition;Ze!==void 0&&Ze.setValue(ee,Ye.setFromMatrixPosition(P.matrixWorld))}(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&We.setValue(ee,"isOrthographic",P.isOrthographicCamera===!0),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial||ce.isShadowMaterial||ce.skinning)&&We.setValue(ee,"viewMatrix",P.matrixWorldInverse)}if(ce.skinning){We.setOptional(ee,J,"bindMatrix"),We.setOptional(ee,J,"bindMatrixInverse");let Ze=J.skeleton;if(Ze){let $s=Ze.bones;if(mt.floatVertexTextures){if(Ze.boneTexture===null){let et=Math.sqrt($s.length*4);et=F0(et),et=Math.max(et,4);let Nt=new Float32Array(et*et*4);Nt.set(Ze.boneMatrices);let Sn=new Ac(Nt,et,et,On,hr);Ze.boneMatrices=Nt,Ze.boneTexture=Sn,Ze.boneTextureSize=et}We.setValue(ee,"boneTexture",Ze.boneTexture,Yt),We.setValue(ee,"boneTextureSize",Ze.boneTextureSize)}else We.setOptional(ee,Ze,"boneMatrices")}}return(zn||dt.receiveShadow!==J.receiveShadow)&&(dt.receiveShadow=J.receiveShadow,We.setValue(ee,"receiveShadow",J.receiveShadow)),zn&&(We.setValue(ee,"toneMappingExposure",R.toneMappingExposure),dt.needsLights&&an(Si,he),Ae&&ce.fog&&K.refreshFogUniforms(Si,Ae),K.refreshMaterialUniforms(Si,ce,Me,j),Lr.upload(ee,dt.uniformsList,Si,Yt)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Lr.upload(ee,dt.uniformsList,Si,Yt),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&We.setValue(ee,"center",J.center),We.setValue(ee,"modelViewMatrix",J.modelViewMatrix),We.setValue(ee,"normalMatrix",J.normalMatrix),We.setValue(ee,"modelMatrix",J.matrixWorld),He}function an(P,ge){P.ambientLightColor.needsUpdate=ge,P.lightProbe.needsUpdate=ge,P.directionalLights.needsUpdate=ge,P.directionalLightShadows.needsUpdate=ge,P.pointLights.needsUpdate=ge,P.pointLightShadows.needsUpdate=ge,P.spotLights.needsUpdate=ge,P.spotLightShadows.needsUpdate=ge,P.rectAreaLights.needsUpdate=ge,P.hemisphereLights.needsUpdate=ge}function Ga(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return Y},this.setRenderTarget=function(P,ge=0,ce=0){Y=P,E=ge,x=ce,P&&Dt.get(P).__webglFramebuffer===void 0&&Yt.setupRenderTarget(P);let J=null,Ae=!1,G=!1;if(P){let Ne=P.texture;(Ne.isDataTexture3D||Ne.isDataTexture2DArray)&&(G=!0);let ct=Dt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(J=ct[ge],Ae=!0):P.isWebGLMultisampleRenderTarget?J=Dt.get(P).__webglMultisampledFramebuffer:J=ct,F.copy(P.viewport),oe.copy(P.scissor),ue=P.scissorTest}else F.copy(le).multiplyScalar(Me).floor(),oe.copy(k).multiplyScalar(Me).floor(),ue=re;if($e.bindFramebuffer(ee.FRAMEBUFFER,J),$e.viewport(F),$e.scissor(oe),$e.setScissorTest(ue),Ae){let Ne=Dt.get(P.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne.__webglTexture,ce)}else if(G){let Ne=Dt.get(P.texture),ct=ge||0;ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Ne.__webglTexture,ce||0,ct)}},this.readRenderTargetPixels=function(P,ge,ce,J,Ae,G,Ne){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=Dt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(ct=ct[Ne]),ct){$e.bindFramebuffer(ee.FRAMEBUFFER,ct);try{let _t=P.texture,dt=_t.format,yt=_t.type;if(dt!==On&&Be.convert(dt)!==ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let rt=yt===ho&&(St.has("EXT_color_buffer_half_float")||mt.isWebGL2&&St.has("EXT_color_buffer_float"));if(yt!==Wo&&Be.convert(yt)!==ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_TYPE)&&!(yt===hr&&(mt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee.checkFramebufferStatus(ee.FRAMEBUFFER)===ee.FRAMEBUFFER_COMPLETE?ge>=0&&ge<=P.width-J&&ce>=0&&ce<=P.height-Ae&&ee.readPixels(ge,ce,J,Ae,Be.convert(dt),Be.convert(yt),G):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let _t=Y!==null?Dt.get(Y).__webglFramebuffer:null;$e.bindFramebuffer(ee.FRAMEBUFFER,_t)}}},this.copyFramebufferToTexture=function(P,ge,ce=0){let J=Math.pow(2,-ce),Ae=Math.floor(ge.image.width*J),G=Math.floor(ge.image.height*J),Ne=Be.convert(ge.format);Yt.setTexture2D(ge,0),ee.copyTexImage2D(ee.TEXTURE_2D,ce,Ne,P.x,P.y,Ae,G,0),$e.unbindTexture()},this.copyTextureToTexture=function(P,ge,ce,J=0){let Ae=ge.image.width,G=ge.image.height,Ne=Be.convert(ce.format),ct=Be.convert(ce.type);Yt.setTexture2D(ce,0),ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,ce.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,ce.unpackAlignment),ge.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,J,P.x,P.y,Ae,G,Ne,ct,ge.image.data):ge.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,J,P.x,P.y,ge.mipmaps[0].width,ge.mipmaps[0].height,Ne,ge.mipmaps[0].data):ee.texSubImage2D(ee.TEXTURE_2D,J,P.x,P.y,Ne,ct,ge.image),J===0&&ce.generateMipmaps&&ee.generateMipmap(ee.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(P,ge,ce,J,Ae=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:G,height:Ne,data:ct}=ce.image,_t=Be.convert(J.format),dt=Be.convert(J.type),yt;if(J.isDataTexture3D)Yt.setTexture3D(J,0),yt=ee.TEXTURE_3D;else if(J.isDataTexture2DArray)Yt.setTexture2DArray(J,0),yt=ee.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,J.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,J.unpackAlignment);let rt=ee.getParameter(ee.UNPACK_ROW_LENGTH),He=ee.getParameter(ee.UNPACK_IMAGE_HEIGHT),Kn=ee.getParameter(ee.UNPACK_SKIP_PIXELS),zn=ee.getParameter(ee.UNPACK_SKIP_ROWS),he=ee.getParameter(ee.UNPACK_SKIP_IMAGES);ee.pixelStorei(ee.UNPACK_ROW_LENGTH,G),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,Ne),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,P.min.x),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,P.min.y),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,P.min.z),ee.texSubImage3D(yt,Ae,ge.x,ge.y,ge.z,P.max.x-P.min.x+1,P.max.y-P.min.y+1,P.max.z-P.min.z+1,_t,dt,ct),ee.pixelStorei(ee.UNPACK_ROW_LENGTH,rt),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,He),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,Kn),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,zn),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,he),Ae===0&&J.generateMipmaps&&ee.generateMipmap(yt),$e.unbindTexture()},this.initTexture=function(P){Yt.setTexture2D(P,0),$e.unbindTexture()},this.resetState=function(){E=0,x=0,Y=null,$e.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Ic=class r{constructor(e,t=25e-5){this.name="",this.color=new at(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};Ic.prototype.isFogExp2=!0;var kc=class extends Jt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};kc.prototype.isScene=!0;var Oc=class extends Pn{constructor(e,t,i,a,l,d,p,v,g){super(e,t,i,a,l,d,p,v,g),this.needsUpdate=!0}};Oc.prototype.isCanvasTexture=!0;var S={AdditiveBlending:Yl,AmbientLight:sc,BackSide:tn,BufferAttribute:un,BufferGeometry:Xt,Camera:co,CanvasTexture:Oc,CircleGeometry:th,Color:at,CustomBlending:Wd,DirectionalLight:dc,DoubleSide:Sr,DynamicDrawUsage:yv,Euler:so,FogExp2:Ic,Frustum:Ar,Group:Tr,HalfFloatType:ho,IcosahedronGeometry:nh,InstancedBufferAttribute:oc,InstancedBufferGeometry:ac,InstancedMesh:gc,Line:xo,LineBasicMaterial:Na,LineLoop:vc,LineSegments:xc,LinearFilter:qn,LinearMipmapLinearFilter:Ho,Matrix4:xt,Mesh:ai,MeshBasicMaterial:Ia,MeshPhongMaterial:pc,NearestFilter:_n,OneFactor:qd,OneMinusSrcAlphaFactor:ws,PerspectiveCamera:Cn,PlaneGeometry:Fs,PointLight:fc,Points:wc,Quaternion:yi,RGBAFormat:On,RepeatWrapping:Da,RingGeometry:ih,Scene:kc,ShaderMaterial:Wi,Sphere:bi,SphereGeometry:rh,Sprite:Ec,SpriteMaterial:ka,TetrahedronGeometry:oh,UnsignedByteType:Wo,Vector2:je,Vector3:z,Vector4:Ct,WebGLRenderTarget:mr,WebGLRenderer:n1,sRGBEncoding:Yd},i1=`<canvas id="gl"></canvas>

<div id="hud">

  <!-- the scale bar, sized by writeHUD to a round number of units -->
  <div id="sbar"><i></i><span id="sbar-t">\u2014</span></div>

  <!-- The rail. Every pane that used to hold a corner of the frame opens from
       here instead, so the cosmos is the whole picture until a tool is asked
       for. The glyphs are the ones the buttons already used. See DOCK. -->
  <div class="glass" id="dock">
    <b id="dkgrip" data-i18n-title="dock.grip"></b>
    <u id="dk-search" data-i18n-title="dock.search">&#x2315;</u>
    <u id="dk-idp" data-i18n-title="dock.idp">&#x25CE;</u>
    <u id="dk-leg" data-i18n-title="dock.leg">&#x2726;</u>
    <u id="dk-ctl" data-i18n-title="dock.ctl">&#x2699;&#xFE0E;</u>
    <u id="dk-keys" data-i18n-title="dock.keys">?</u>
    <i></i>
    <u id="dk-gen" data-i18n-title="dock.gen">&#x25CC;</u>
    <u id="dk-card" data-i18n-title="dock.card">&#x25CF;</u>
  </div>

  <div class="pane glass" id="idp">
    <div class="ttl"><b>VAULT ORRERY</b><i class="fx" id="instog" data-i18n-title="hud.inst.t">[ \u22EF ]</i></div>
    <div class="bd">
      <div class="big" id="vault-name">EMPTY SPACE</div>
      <div class="sub" data-i18n="hud.sub">\uD3F4\uB354\uB294 \uD56D\uC131 \xB7 \uB178\uD2B8\uB294 \uD589\uC131</div>
      <div class="row"><span>NODES</span><span id="s-nodes">0</span></div>
      <div class="row"><span>EDGES</span><span id="s-edges">0</span></div>
      <div class="row"><span>SYSTEMS</span><span id="s-sys">0</span></div>
      <!-- Collected since the host metadata went in and never shown until now.
           Clickable, because a count of dead links is a job rather than a
           statistic: it filters the cosmos down to the notes carrying them. -->
      <div class="row brk" id="r-broken" title=""><span data-i18n="hud.broken">\uB04A\uC5B4\uC9C4 \uB9C1\uD06C</span><span id="s-broken">0</span></div>
      <div class="row"><span>SPAN</span><span id="s-span">\u2014</span></div>
      <!-- which link types are drawn, cycled with L. It used to sit in the
           gesture panel, which is gone; it is vault state, not hand state. -->
      <div class="row"><span>LINK LAYER</span><span id="g-layer">ALL</span></div>
      <!-- the three link types now differ in stroke as well as in colour, and
           a convention nobody is told is not a convention. Tinted to the
           EDGE_TINT entries they stand for, so the key and the cosmos cannot
           drift apart without it being visible here. -->
      <div class="row lk">
        <span style="color:#53d8ff">\u2501\u2501 WIKI</span>
        <span style="color:#ff9d3c">\u2501 \u2501 SRC</span>
      </div>
      <!-- The camera's readings. Instrument data rather than vault data: worth
           having when you are measuring, noise when you are reading, so they
           sit behind the [ \u22EF ] in the title bar. The values are still written
           every frame \u2014 render diagnostics reads them from here. -->
      <div id="inst">
      <div class="row"><span>RANGE</span><span id="s-dist">\u2014</span></div>
      <!-- what one pixel is worth at the range the camera is focused on; the
           bar at the bottom of the frame is the same number drawn -->
      <div class="row"><span>SCALE</span><span id="s-scale">\u2014</span></div>
      <div class="row"><span>FPS</span><span id="s-fps" title="click for frame budget">\u2014</span></div>
      <div class="bar"><i style="width:100%"></i></div>
      </div>
      <!-- opened by clicking FPS; see the PERF block for what fills it -->
      <div id="perf">
        <div class="hd">FRAME BUDGET \xB7 MS</div>
        <div class="row"><span>SIM</span><span id="p-sim">\u2014</span></div>
        <div class="row"><span>PICK</span><span id="p-pick">\u2014</span></div>
        <div class="row"><span>BODIES</span><span id="p-inst">\u2014</span></div>
        <div class="row"><span>LINKS</span><span id="p-link">\u2014</span></div>
        <div class="row"><span>TRAILS</span><span id="p-trlms">\u2014</span></div>
        <div class="row"><span>SPRITES</span><span id="p-spr">\u2014</span></div>
        <div class="row"><span>SUBMIT</span><span id="p-draw">\u2014</span></div>
        <div class="row"><span>CPU TOTAL</span><span id="p-tot">\u2014</span></div>
        <div class="hd" style="margin-top:5px">GEOMETRY</div>
        <div class="row"><span>LINK PTS</span><span id="p-lv">\u2014</span></div>
        <div class="row"><span>OFF SCREEN</span><span id="p-cull">\u2014</span></div>
        <div class="row"><span>TRAILS</span><span id="p-trl">\u2014</span></div>
        <div class="row"><span>DRAW CALLS</span><span id="p-dc">\u2014</span></div>
      </div>
    </div>
  </div>

  <div class="pane glass foldable" id="leg">
    <div class="ttl"><b>STAR SYSTEMS</b>
      <span class="tr"><i id="l-cnt">0</i><i class="fx" id="legfold">[ \u2212 ]</i></span>
    </div>
    <div class="bd" id="legbody"></div>
  </div>

  <div class="pane glass" id="ctl">
    <div class="ttl" id="ctltl"><b>ORRERY CONTROL</b><span id="ctlfold">[ \u2212 ]</span></div>
    <div class="bd">
      <!-- Both shelves are filled by the CONTROL DECK block from the KNOBS
           table, not written out here. Thirty-odd sliders spelt in markup is
           thirty chances for an id to disagree with the code that reads it,
           and \u2014 the reason it changed \u2014 which shelf a knob sits on is the
           reader's to decide and cannot be a fact about the document. -->
      <div id="ctlknobs">
        <!-- Above the knobs because it is the knobs: eight of them at once. -->
        <div id="qrow" data-i18n-title="q.t"><b>QUALITY</b>
          <div class="langsel qsel" id="qsel">
            <u data-q="cinematic">CINEMA</u><u data-q="balanced">BALANCED</u><u data-q="fast">FAST</u>
          </div>
        </div>
        <div id="ctlgrid"></div>
        <div id="advtog">\u25B8 ADVANCED</div>
        <div id="ctladv"></div>
      </div>
      <div class="sep"></div>
      <div class="vs">
        <div class="langsel" id="langsel">
          <u data-l="ko">\uD55C</u><u data-l="en">EN</u><u data-l="ja">\u65E5</u><u data-l="zh">\u4E2D</u>
        </div>
        <div class="mini" id="b-load" data-i18n="btn.load">\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30</div>
        <div class="mini am" id="b-clear" style="display:none" data-i18n="btn.clear">\u2715 \uBCFC\uD2B8 \uBE44\uC6B0\uAE30</div>
        <div class="mini" id="b-gen" data-i18n="btn.gen" data-i18n-title="btn.gen.t">\u25CC \uD56D\uC131\uACC4 \uC0DD\uC131</div>
        <div class="mini" id="b-post" data-i18n="btn.post" data-i18n-title="btn.post.t">\u2913 \uD3EC\uC2A4\uD130</div>
        <div class="mini" id="b-snd" data-i18n="btn.snd" data-i18n-title="btn.snd.t">\u266A \uC0AC\uC6B4\uB4DC</div>
        <div class="mini" id="b-rst" data-i18n="btn.rst">\u21BA \uC124\uC815 \uCD08\uAE30\uD654</div>
      </div>
    </div>
  </div>

  <div class="pane glass foldable" id="keys">
    <div class="ttl"><b>SHORTCUTS</b>
      <span class="tr"><i class="fx" id="keyshelp" data-i18n-title="guide.open">[ ? ]</i><i class="fx" id="keysfold">[ \u2212 ]</i></span>
    </div>
    <div class="bd" style="padding:7px 10px">
      <div class="row" id="k-open" style="display:none"><span>OPEN NOTE</span><span>O \xB7 CTRL-CLICK</span></div>
      <div class="row"><span>COMMAND</span><span>/ \xB7 CTRL-K</span></div>
      <div class="row"><span>MIND MAP</span><span>M \xB7 DBL-CLICK</span></div>
      <div class="row"><span>GENESIS</span><span>G</span></div>
      <div class="row"><span>RIPPLE \xB7 POSTER</span><span>SPACE \xB7 P</span></div>
      <div class="row"><span>PHOTO CARD</span><span>C</span></div>
      <div class="row"><span>LINK LAYER</span><span>L</span></div>
      <div class="row"><span>REFERENCE PLANE</span><span>X</span></div>
      <div class="row"><span>RESET \xB7 HIDE HUD</span><span>R \xB7 H</span></div>
      <div class="row"><span>GUIDE</span><span>?</span></div>
      <div class="row"><span>DRAG / WHEEL</span><span>ORBIT \xB7 ZOOM</span></div>
      <div class="row"><span>RIGHT-DRAG</span><span>PAN</span></div>
      <div class="row"><span>SHIFT+DRAG</span><span>MOVE NODE</span></div>
    </div>
  </div>

  <div class="pane glass" id="insp">
    <div class="ttl"><b>NODE INSPECTOR</b><span id="i-kind">\u2014</span></div>
    <div class="bd">
      <div id="i-empty" data-i18n="insp.empty">\uB300\uC0C1\uC744 \uC9C0\uC815\uD558\uC2ED\uC2DC\uC624<br><span style="opacity:.6">\uB178\uB4DC\uB97C \uD074\uB9AD</span></div>
      <div id="i-real" style="display:none">
        <div id="i-name"></div>
        <div id="i-path"></div>
        <!-- What you can do with the note comes straight after which note it
             is. At the foot of the panel the buttons were below every link the
             note has, which on a well-linked note is off the bottom of the
             pane \u2014 the actions went missing exactly on the notes that matter. -->
        <div id="i-acts">
        <div class="mini host vio" id="i-open" style="display:none" data-i18n="insp.open">\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30 [O]</div>
        <div class="mini am" id="i-go" data-i18n="insp.go">\u25CE \uC774\uB3D9\uD558\uAE30</div>
        <div class="mini" id="i-mm" data-i18n="insp.mm">\u25C8 \uB9C8\uC778\uB4DC\uB9F5 \uC5F4\uAE30 [M]</div>
        <div class="mini" id="i-ripple" data-i18n="insp.ripple">\u25C9 \uC5EC\uAE30\uC11C \uD30C\uBB38 \uC77C\uC73C\uD0A4\uAE30 [SPACE]</div>
        <div class="mini" id="i-route" data-i18n="insp.route">\u25C7 \uC5EC\uAE30\uC11C \uACBD\uB85C \uCC3E\uAE30</div>
        <div class="mini" id="i-core" data-i18n="insp.core">\u2605 \uC774 \uB178\uD2B8\uB97C \uC911\uC2EC \uD56D\uC131\uC73C\uB85C</div>
        </div>
        <div class="cbox">
          <div><u id="c-pl">0</u><s data-i18n="cnt.links">\uC5F0\uACB0 \uD589\uC131</s></div>
          <div><u id="c-mo">0</u><s data-i18n="cnt.moons">\uC9C1\uC18D \uC704\uC131</s></div>
          <div><u id="c-mo2">0</u><s data-i18n="cnt.far">\uC5F0\uACB0 \uC704\uC131</s></div>
        </div>
        <!-- the note's own front-matter properties; see propsOf -->
        <div id="i-props"></div>
        <div id="i-tags"></div>
        <div id="i-x"></div>
        <div id="i-links"></div>
        <!-- the orbit this body is actually on \u2014 see orbitReadout() -->
        <div class="cbox orb" id="i-orb">
          <div><u id="o-a">\u2014</u><s data-i18n="orb.a">\uC7A5\uBC18\uACBD</s></div>
          <div><u id="o-e">\u2014</u><s data-i18n="orb.e">\uC774\uC2EC\uB960</s></div>
          <div><u id="o-p">\u2014</u><s data-i18n="orb.p">\uACF5\uC804 \uC8FC\uAE30</s></div>
          <div><u id="o-i">\u2014</u><s data-i18n="orb.i">\uADA4\uB3C4 \uACBD\uC0AC</s></div>
        </div>
      </div>
    </div>
  </div>

  <div class="pane glass" id="gen">
    <div class="ttl"><b data-i18n="gen.ttl">GENESIS \xB7 \uD56D\uC131\uACC4 \uC0DD\uC131</b><span id="gen-date">\u2014</span><span class="fx" id="gen-x" data-i18n-title="gen.close.t">[ \u2715 ]</span></div>
    <div class="bd">
      <div id="genstage"><u id="gen-ph">VOID</u><s id="gen-desc" data-i18n="gen.p0">\uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4</s></div>
      <div id="genrow">
        <u id="gen-play" data-i18n-title="gen.play.t">\u25B6</u>
        <u id="gen-rst" data-i18n-title="gen.rst.t">\u21BA</u>
        <input type="range" id="gen-r" min="0" max="1000" step="1" value="0">
        <u id="gen-spd" data-i18n-title="gen.spd.t">1\xD7</u>
        <s id="gen-cnt">0</s>
      </div>
      <div id="genmarks"></div>
    </div>
  </div>

</div>


<div id="tgt"></div>

<!-- The photo card: a 9:16 frame over the cosmos, the stats chosen beside
     it. The canvas itself is moved into the frame's middle while this is up,
     so what is on screen is the picture that is saved. See PHOTO CARD. -->
<div id="card">
  <div id="card-frame">
    <canvas id="card-bands"></canvas>
    <div id="card-cd"></div>
    <div id="card-recbar"><i id="card-bar"></i><span id="card-t"></span></div>
  </div>
  <div class="glass" id="card-pnl">
    <div class="ttl"><b data-i18n="card.ttl">\uD3EC\uD1A0\uCE74\uB4DC</b>
      <span class="tr"><i id="card-n">0 / 6</i><i class="fx" id="card-x" data-i18n-title="dock.close">&#x2715;</i></span>
    </div>
    <div class="bd">
      <div id="card-hint" data-i18n="card.hint"></div>
      <div id="card-opts"></div>
      <div id="card-acts">
        <div class="mini" id="card-png" data-i18n="card.png">\u2913 \uC774\uBBF8\uC9C0</div>
        <div class="mini am" id="card-mp4" data-i18n="card.mp4">\u25CF 15\uCD08 \uB179\uD654</div>
      </div>
    </div>
  </div>
</div>

<div class="glass" id="srch">
  <input id="sin" data-i18n-ph="search.ph" placeholder="\uB178\uD2B8 \uAC80\uC0C9 \u2026" autocomplete="off" spellcheck="false">
  <div id="sres"></div>
</div>

<div id="mind">
  <div class="glass" id="mindbox">
    <div class="ttl">
      <b style="flex:0 0 auto">MIND MAP</b>
      <div id="mmnav">
        <div id="mmback" data-i18n="mm.back">\u2190 \uB4A4\uB85C</div>
        <div id="mmcrumbs"></div>
      </div>
      <s id="mm-close" data-i18n="mm.close">\uB2EB\uAE30 [ ESC ]</s>
    </div>
    <div id="mindbody">
      <div id="mmside">
        <div class="mmsec">
          <div id="mm-kind">\u2014</div>
          <div id="mm-name"></div>
          <div id="mm-path"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.conn">\uC5F0\uACB0</h4>
          <div class="cbox" style="margin-bottom:0">
            <div><u id="m-pl">0</u><s data-i18n="cnt.links">\uC5F0\uACB0 \uD589\uC131</s></div>
            <div><u id="m-mo">0</u><s data-i18n="cnt.moons">\uC9C1\uC18D \uC704\uC131</s></div>
            <div><u id="m-mo2">0</u><s data-i18n="cnt.far">\uC5F0\uACB0 \uC704\uC131</s></div>
          </div>
        </div>
        <div class="mmsec" id="mm-tagsec">
          <h4 data-i18n="mm.sec.tags">\uD0DC\uADF8</h4>
          <div id="mm-tags" style="display:flex;flex-wrap:wrap;gap:4px"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.excerpt">\uBC1C\uCDCC</h4>
          <div id="mm-x"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.links">\uB9C1\uD06C</h4>
          <div id="mm-links"></div>
        </div>
        <div class="mmsec act">
          <div class="mini host vio" id="mm-open" style="display:none" data-i18n="mm.open">\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30</div>
          <div class="mini am" id="mm-go" data-i18n="mm.go">\u25CE \uC774 \uB178\uB4DC\uB85C \uC774\uB3D9</div>
          <div class="mini" id="mm-center" data-i18n="mm.center">\u25C8 \uC774 \uB178\uB4DC\uB97C \uC911\uC2EC\uC73C\uB85C</div>
        </div>
      </div>
    </div>
    <div id="mmfoot">
      <div id="mmview">
        <u id="mm-hop" data-i18n="mm.hop" data-i18n-title="mm.hop.t">\u25CC 2\uD649</u>
        <i id="mmkeys" data-i18n="mm.keys"></i>
      </div>
      <div id="mmlegend">
        <b><u style="background:#5cd8ff"></u><i data-i18n="leg.wiki" style="font-style:normal">\uC704\uD0A4\uB9C1\uD06C</i></b>
        <b><u style="background:repeating-linear-gradient(90deg,#ff9d3c 0 4px,transparent 4px 7px)"></u><i data-i18n="leg.src" style="font-style:normal">\uCD9C\uCC98</i></b>
        <b id="mmleg2" style="display:none"><u style="background:rgba(150,210,255,.4)"></u><i data-i18n="mm.hop2" style="font-style:normal">2\uD649</i></b>
      </div>
      <div id="mmhint" data-i18n="mm.hint">\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9<br>\uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804 \xB7 \uD720 = \uD655\uB300</div>
    </div>
  </div>
</div>

<div id="hint">
  <u>EMPTY SPACE</u>
  <b data-i18n="hint.body">\uC544\uC9C1 \uBCFC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD3F4\uB354\uB97C \uC774 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694.</b>
  <em id="hint-btn" data-i18n="btn.load">\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30</em>
</div>

<div id="intro">
  <div class="glass" id="introcard">
    <!-- The title stays English with every other pane's: it is what this card
         is identified by, and see the I18N block on why chrome does not move. -->
    <div class="ttl"><b>FIRST FLIGHT</b><span class="fx" id="introx">[ \u2715 ]</span></div>
    <div class="bd">
      <p id="introlede" data-i18n="intro.lede">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131\uC785\uB2C8\uB2E4. \uC544\uB798 \uB137\uC774\uBA74 \uCDA9\uBD84\uD788 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="introrow"><u data-i18n="intro.k1">\uB04C\uAE30 \xB7 \uD720</u><b data-i18n="intro.d1">\uB458\uB7EC\uBCF4\uAE30 \u2014 \uADA4\uB3C4 \uD68C\uC804\uACFC \uD655\uB300</b></div>
      <!-- Click before M: the mind map is something you do to a note, so the
           card first has to say how a note is picked. G is on the card because
           it is the one thing here nothing else does, and a reader who never
           presses it has not seen the orrery. / is one [ ? ] away. -->
      <div class="introrow"><u data-i18n="intro.k5">\uD074\uB9AD</u><b data-i18n="intro.d5">\uB178\uD2B8 \uC77D\uAE30 \u2014 \uC18D\uC131\xB7\uB9C1\uD06C\xB7\uBC1C\uCDCC\uAC00 \uC624\uB978\uCABD\uC5D0 \uB739\uB2C8\uB2E4</b></div>
      <div class="introrow"><u data-i18n="intro.k3">M \xB7 \uB354\uBE14\uD074\uB9AD</u><b data-i18n="intro.d3">\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB9C8\uC778\uB4DC\uB9F5\uC73C\uB85C \uD3BC\uCE58\uAE30</b></div>
      <div class="introrow"><u>G</u><b data-i18n="intro.d6">\uBCFC\uD2B8\uAC00 \uC0DD\uACA8\uB09C \uC21C\uC11C\uB300\uB85C \uB2E4\uC2DC \uC7AC\uC0DD\uD558\uAE30</b></div>
      <div class="introrow" id="introopen" style="display:none"><u>O</u><b data-i18n="intro.d4">\uACE0\uB978 \uB178\uD2B8\uB97C \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30</b></div>
      <p id="introfoot" data-i18n="intro.foot">\uB098\uBA38\uC9C0\uB294 \uC67C\uCABD \uC544\uB798 SHORTCUTS \uBAA9\uB85D\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. [ ? ] \uB97C \uB204\uB974\uBA74 \uC774 \uC548\uB0B4\uAC00 \uB2E4\uC2DC \uC5F4\uB9BD\uB2C8\uB2E4.</p>
      <div id="introbtns">
        <div class="btn" id="introgen" data-i18n="intro.gen">\u25CC \uC81C\uB124\uC2DC\uC2A4 \uBCF4\uAE30</div>
        <div class="btn alt" id="introgo" data-i18n="intro.go">\u25B6 \uB458\uB7EC\uBCF4\uAE30</div>
      </div>
    </div>
  </div>
</div>

<div id="guide">
  <div class="glass" id="guidecard">
    <!-- Titles stay English with the rest of the HUD chrome; see the I18N
         block on why the panes do not move and the prose does. -->
    <div class="ttl"><b>GUIDE</b><span class="fx" id="guidex">[ \u2715 ]</span></div>
    <div class="bd">
      <p id="guidelede" data-i18n="guide.lede">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131, \uC778\uC6A9\uB41C \uCD9C\uCC98\uB294 \uC704\uC131\uC785\uB2C8\uB2E4. \uC544\uB798\uB294 \uD654\uBA74\uC774 \uD560 \uC218 \uC788\uB294 \uC77C \uC804\uBD80\uC785\uB2C8\uB2E4.</p>
      <div id="guidebody"></div>
      <p id="guidefoot"></p>
    </div>
  </div>
</div>

<div id="toast"></div>

<input type="file" id="fpick" webkitdirectory directory multiple
       accept=".md,.markdown,.txt" style="display:none">
<input type="file" id="fpick2" webkitdirectory directory multiple
       accept=".md,.markdown,.txt" style="display:none">

<div id="drop"><u>VAULT DROP<b data-i18n="drop.body">\uD3F4\uB354\uB098 \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uB193\uC73C\uBA74 \uADF8 \uBCFC\uD2B8\uB85C \uC6B0\uC8FC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4</b></u></div>

<div id="load">
  <div id="loadmsg">READING VAULT</div>
  <div id="loadbar"><i></i></div>
  <div id="loadsub"></div>
</div>

<div id="boot">
  <h1>VAULT ORRERY</h1>
  <h2 data-i18n="boot.tag">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131 \u2014 \uBCFC\uD2B8\uAC00 \uC790\uB77C\uC628 \uACFC\uC815\uC744 \uB2E4\uC2DC \uBD05\uB2C8\uB2E4</h2>
  <div id="blog"></div>
  <div class="langsel" id="blangsel">
    <u data-l="ko">\uD55C\uAD6D\uC5B4</u><u data-l="en">English</u><u data-l="ja">\u65E5\u672C\u8A9E</u><u data-l="zh">\u4E2D\u6587</u>
  </div>
  <div id="bpick" data-i18n="boot.pick">\uBCFC\uD2B8 \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uBA74 \uADF8 \uADDC\uBAA8\uC5D0 \uB9DE\uB294 \uD589\uC131\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4.</div>
  <div id="bbtns">
    <div class="btn" id="b-folder" data-i18n="boot.upload">\u25A3 \uD30C\uC77C \uC5C5\uB85C\uB4DC \uD558\uAE30</div>
    <div class="btn alt" id="b-go" data-i18n="boot.start">\u25B6 \uC2DC\uC791\uD558\uAE30</div>
  </div>
  <div id="bnote" data-i18n="boot.note">
    \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC2DC\uC791\uD558\uBA74 \uBE48 \uC6B0\uC8FC\uC5D0\uC11C \uCD9C\uBC1C\uD569\uB2C8\uB2E4 \u2014 \uC5B8\uC81C\uB4E0 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uC73C\uBA74 \uB429\uB2C8\uB2E4.
  </div>
</div>

<!-- Loaded from disk, never from a CDN: Obsidian's community plugin policy
     forbids fetching remote code at runtime. See THIRD-PARTY-NOTICES.md for
     what belongs in vendor/. -->`;function r1(r,e,t){let i=t||null,a=()=>r.clientWidth||1,l=()=>r.clientHeight||1;function d(n){let o=r.getBoundingClientRect();return(n.clientX-o.left)/(o.width||1)*2-1}function p(n){let o=r.getBoundingClientRect();return-((n.clientY-o.top)/(o.height||1))*2+1}let v=[];function g(n,o,s){window.addEventListener(n,o,s),v.push(()=>window.removeEventListener(n,o,s))}function _(n,o,s){document.addEventListener(n,o,s),v.push(()=>document.removeEventListener(n,o,s))}function b(n,o,s){window.removeEventListener(n,o,s)}let w=e&&typeof e.get=="function"?e:(()=>{let n=new Map;return{get:o=>n.has(o)?n.get(o):null,set:(o,s)=>{n.set(o,String(s))}}})(),f=n=>r.querySelector("#"+n),C=Math.PI*2,R=(n,o,s)=>n<o?o:n>s?s:n,I=(n,o,s)=>n+(o-n)*s,E={on:!!(typeof i!="undefined"&&i&&i.mini||/[?&]mini=1\b/.test(location.search)),step:1e3/20},x={last:0,touch:performance.now(),idleMs:2e4,idleStep:1e3/30,on:!1};function Y(){x.touch=performance.now()}E.on&&r.classList.add("mini");let W={open:new Set,pin:new Set},Q=["idp","leg","ctl","keys"],F=null,oe=null,ue=null,fe=0,j={on:!1,frame:null,hole:null,shot:!1,rec:null,cd:0,sel:[],vals:null,bands:null,out:null},Me=n=>String(n).replace(/[&<>]/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[o]),we=["ko","en","ja","zh"],ie={"btn.load":["\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30","\u25A3 OPEN VAULT","\u25A3 \u30DC\u30EB\u30C8\u3092\u958B\u304F","\u25A3 \u6253\u5F00\u4ED3\u5E93"],"btn.clear":["\u2715 \uBCFC\uD2B8 \uBE44\uC6B0\uAE30","\u2715 CLEAR VAULT","\u2715 \u30DC\u30EB\u30C8\u3092\u7A7A\u306B","\u2715 \u6E05\u7A7A\u4ED3\u5E93"],"btn.gen":["\u25CC \uD56D\uC131\uACC4 \uC0DD\uC131","\u25CC GENESIS","\u25CC \u661F\u7CFB\u751F\u6210","\u25CC \u661F\u7CFB\u751F\u6210"],"btn.gen.t":["\uBB34\uC5D0\uC11C \uD56D\uC131\uACC4\uAE4C\uC9C0 \u2014 \uC9C0\uC2DD\uCCB4\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uB294 \uACFC\uC815 [G]","From void to star system \u2014 the knowledge base being made [G]","\u7121\u304B\u3089\u661F\u7CFB\u307E\u3067 \u2014 \u77E5\u8B58\u4F53\u7CFB\u304C\u5F62\u3065\u304F\u3089\u308C\u308B\u904E\u7A0B [G]","\u4ECE\u865A\u65E0\u5230\u661F\u7CFB \u2014 \u77E5\u8BC6\u4F53\u7CFB\u7684\u5F62\u6210\u8FC7\u7A0B [G]"],"btn.post":["\u2913 \uD3EC\uC2A4\uD130","\u2913 POSTER","\u2913 \u30DD\u30B9\u30BF\u30FC","\u2913 \u6D77\u62A5"],"btn.post.t":["HUD \uC5C6\uC774 \uACE0\uD574\uC0C1\uB3C4 PNG \uC800\uC7A5 [P]","Save a high-resolution PNG with no HUD [P]","HUD\u306A\u3057\u3067\u9AD8\u89E3\u50CF\u5EA6PNG\u3092\u4FDD\u5B58 [P]","\u4FDD\u5B58\u65E0HUD\u7684\u9AD8\u5206\u8FA8\u7387PNG [P]"],"btn.snd":["\u266A \uC0AC\uC6B4\uB4DC","\u266A SOUND","\u266A \u30B5\u30A6\u30F3\u30C9","\u266A \u58F0\u97F3"],"btn.snd.t":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC \uCF1C\uAE30 / \uB044\uAE30 [U]","Ambient sound on / off [U]","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 \u30AA\u30F3 / \u30AA\u30D5 [U]","\u73AF\u5883\u97F3\u6548 \u5F00 / \u5173 [U]"],"btn.rst":["\u21BA \uC124\uC815 \uCD08\uAE30\uD654","\u21BA RESET","\u21BA \u8A2D\u5B9A\u30EA\u30BB\u30C3\u30C8","\u21BA \u91CD\u7F6E\u8BBE\u7F6E"],"boot.l1":["\uB80C\uB354 \uD30C\uC774\uD504\uB77C\uC778 \uCD08\uAE30\uD654","render pipeline","\u30EC\u30F3\u30C0\u30FC\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u521D\u671F\u5316","\u6E32\u67D3\u7BA1\u7EBF\u521D\u59CB\u5316"],"boot.l2":["\uC2EC\uC6B0\uC8FC \uBC30\uACBD \uC0DD\uC131","deep-space backdrop","\u6DF1\u5B87\u5B99\u80CC\u666F\u306E\u751F\u6210","\u6DF1\u7A7A\u80CC\u666F\u751F\u6210"],"boot.l3":["\uD56D\uC131\uACC4 \uADA4\uB3C4 \uC5D4\uC9C4 \uB300\uAE30","orbital engine","\u661F\u7CFB\u8ECC\u9053\u30A8\u30F3\u30B8\u30F3\u5F85\u6A5F","\u661F\u7CFB\u8F68\u9053\u5F15\u64CE\u5F85\u673A"],"boot.l4":["\uC870\uBA85 \xB7 \uADF8\uB808\uC774\uB4DC","light and grade","\u7167\u660E \xB7 \u30B0\u30EC\u30FC\u30C9","\u5149\u7167 \xB7 \u8C03\u8272"],"boot.l5":["\uBCFC\uD2B8 \uC778\uB371\uC2A4","vault index","\u30DC\u30EB\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9","\u4ED3\u5E93\u7D22\u5F15"],"boot.wait":["\uB300\uAE30 \uC911","WAITING","\u5F85\u6A5F\u4E2D","\u7B49\u5F85\u4E2D"],"boot.pick":["\uBCFC\uD2B8 \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uBA74 \uADF8 \uADDC\uBAA8\uC5D0 \uB9DE\uB294 \uD589\uC131\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4.","Point this at a vault folder and a star system is built to its scale.","\u30DC\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u898F\u6A21\u306B\u5408\u3063\u305F\u60D1\u661F\u7CFB\u304C\u4F5C\u3089\u308C\u307E\u3059\u3002","\u6307\u5B9A\u4ED3\u5E93\u6587\u4EF6\u5939\u540E\uFF0C\u4F1A\u751F\u6210\u4E0E\u5176\u89C4\u6A21\u76F8\u79F0\u7684\u884C\u661F\u7CFB\u3002"],"boot.upload":["\u25A3 \uB0B4 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30","\u25A3 OPEN MY VAULT FOLDER","\u25A3 \u81EA\u5206\u306E\u30DC\u30EB\u30C8\u3092\u958B\u304F","\u25A3 \u6253\u5F00\u6211\u7684\u4ED3\u5E93\u6587\u4EF6\u5939"],"boot.start":["\u25B6 \uC2DC\uC791\uD558\uAE30","\u25B6 START","\u25B6 \u30B9\u30BF\u30FC\u30C8","\u25B6 \u5F00\u59CB"],"boot.note":["\uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC2DC\uC791\uD558\uBA74 \uBE48 \uC6B0\uC8FC\uC5D0\uC11C \uCD9C\uBC1C\uD569\uB2C8\uB2E4 \u2014 \uC5B8\uC81C\uB4E0 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uC73C\uBA74 \uB429\uB2C8\uB2E4.<br>\uC870\uC791\uC740 \uC804\uBD80 \uB9C8\uC6B0\uC2A4\uC640 \uD0A4\uBCF4\uB4DC\uB85C \uAC00\uB2A5\uD569\uB2C8\uB2E4.<br>\uD30C\uC77C\uC740 \uBE0C\uB77C\uC6B0\uC800 \uC548\uC5D0\uC11C\uB9CC \uCC98\uB9AC\uB418\uBA70 \uC5B4\uB514\uC5D0\uB3C4 \uC804\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Start without a folder and you begin in empty space \u2014 drop one on the window whenever you like.<br>Everything is reachable with the mouse and keyboard.<br>Files are processed inside the browser and are never sent anywhere.","\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u305B\u305A\u306B\u59CB\u3081\u308B\u3068\u3001\u7A7A\u306E\u5B87\u5B99\u304B\u3089\u51FA\u767A\u3057\u307E\u3059 \u2014 \u3044\u3064\u3067\u3082\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u30C9\u30ED\u30C3\u30D7\u3067\u304D\u307E\u3059\u3002<br>\u64CD\u4F5C\u306F\u3059\u3079\u3066\u30DE\u30A6\u30B9\u3068\u30AD\u30FC\u30DC\u30FC\u30C9\u3067\u53EF\u80FD\u3067\u3059\u3002<br>\u30D5\u30A1\u30A4\u30EB\u306F\u30D6\u30E9\u30A6\u30B6\u5185\u3067\u306E\u307F\u51E6\u7406\u3055\u308C\u3001\u3069\u3053\u306B\u3082\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\u3002","\u4E0D\u6307\u5B9A\u6587\u4EF6\u5939\u76F4\u63A5\u5F00\u59CB\uFF0C\u5C06\u4ECE\u7A7A\u767D\u5B87\u5B99\u51FA\u53D1 \u2014 \u968F\u65F6\u53EF\u4EE5\u628A\u6587\u4EF6\u5939\u62D6\u5230\u7A97\u53E3\u4E0A\u3002<br>\u6240\u6709\u64CD\u4F5C\u90FD\u80FD\u7528\u9F20\u6807\u548C\u952E\u76D8\u5B8C\u6210\u3002<br>\u6587\u4EF6\u4EC5\u5728\u6D4F\u89C8\u5668\u5185\u5904\u7406\uFF0C\u4E0D\u4F1A\u53D1\u9001\u5230\u4EFB\u4F55\u5730\u65B9\u3002"],"boot.staged":["\u2713 {name} \xB7 \uB178\uD2B8 {n}\uAC1C \uC900\uBE44\uB428","\u2713 {name} \xB7 {n} notes ready","\u2713 {name} \xB7 \u30CE\u30FC\u30C8 {n} \u4EF6 \u6E96\u5099\u5B8C\u4E86","\u2713 {name} \xB7 \u5DF2\u51C6\u5907 {n} \u7BC7\u7B14\u8BB0"],"boot.nofold":["\uC120\uD0DD\uB41C \uD3F4\uB354","the selected folder","\u9078\u629E\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0","\u6240\u9009\u6587\u4EF6\u5939"],"boot.nomd":["\uADF8 \uD3F4\uB354\uC5D0\uC11C \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","No markdown files in that folder.","\u305D\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002","\u5728\u8BE5\u6587\u4EF6\u5939\u4E2D\u672A\u627E\u5230 Markdown \u6587\u4EF6\u3002"],"hud.sub":["\uD3F4\uB354\uB294 \uD56D\uC131 \xB7 \uB178\uD2B8\uB294 \uD589\uC131","FOLDERS ARE STARS \xB7 NOTES ORBIT","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F \xB7 \u30CE\u30FC\u30C8\u306F\u60D1\u661F","\u6587\u4EF6\u5939\u662F\u6052\u661F \xB7 \u7B14\u8BB0\u662F\u884C\u661F"],"hud.inst.t":["\uCE74\uBA54\uB77C \uACC4\uAE30 \u2014 \uAC70\uB9AC, \uCD95\uCC99, \uD504\uB808\uC784","Camera readings \u2014 range, scale, frame rate","\u30AB\u30E1\u30E9\u8A08\u5668 \u2014 \u8DDD\u96E2\u30FB\u7E2E\u5C3A\u30FB\u30D5\u30EC\u30FC\u30E0","\u76F8\u673A\u8BFB\u6570 \u2014 \u8DDD\u79BB\u3001\u6BD4\u4F8B\u3001\u5E27\u7387"],"boot.tag":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131 \u2014 \uBCFC\uD2B8\uAC00 \uC790\uB77C\uC628 \uACFC\uC815\uC744 \uB2E4\uC2DC \uBD05\uB2C8\uB2E4","Folders are stars, notes orbit them \u2014 and the vault replays how it grew","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F \u2014 \u30DC\u30EB\u30C8\u304C\u80B2\u3063\u305F\u9806\u306B\u518D\u751F\u3057\u307E\u3059","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u73AF\u7ED5\u5176\u8FD0\u884C \u2014 \u5E76\u91CD\u653E\u4ED3\u5E93\u7684\u6210\u957F\u8FC7\u7A0B"],"insp.empty":['\uD589\uC131\uC744 \uD074\uB9AD\uD558\uBA74 \uB178\uD2B8\uB97C \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4<br><span style="opacity:.6">\uB354\uBE14\uD074\uB9AD \u2014 \uB9C8\uC778\uB4DC\uB9F5 \xB7 / \u2014 \uAC80\uC0C9</span>','Click a planet to read its note<br><span style="opacity:.6">Double-click \u2014 mind map \xB7 / \u2014 search</span>','\u60D1\u661F\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30CE\u30FC\u30C8\u3092\u8AAD\u3081\u307E\u3059<br><span style="opacity:.6">\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF \u2014 \u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7 \xB7 / \u2014 \u691C\u7D22</span>','\u70B9\u51FB\u884C\u661F\u5373\u53EF\u9605\u8BFB\u7B14\u8BB0<br><span style="opacity:.6">\u53CC\u51FB \u2014 \u601D\u7EF4\u5BFC\u56FE \xB7 / \u2014 \u641C\u7D22</span>'],"cnt.links":["\uC5F0\uACB0 \uD589\uC131","LINKED","\u63A5\u7D9A\u60D1\u661F","\u8FDE\u63A5\u884C\u661F"],"cnt.moons":["\uC9C1\uC18D \uC704\uC131","MOONS","\u76F4\u5C5E\u885B\u661F","\u76F4\u5C5E\u536B\u661F"],"cnt.far":["\uC5F0\uACB0 \uC704\uC131","FAR MOONS","\u63A5\u7D9A\u885B\u661F","\u8FDE\u63A5\u536B\u661F"],"insp.go":["\u25CE \uC774\uB3D9\uD558\uAE30","\u25CE TRAVEL","\u25CE \u79FB\u52D5\u3059\u308B","\u25CE \u524D\u5F80"],"insp.mm":["\u25C8 \uB9C8\uC778\uB4DC\uB9F5 [M]","\u25C8 MIND MAP [M]","\u25C8 \u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7 [M]","\u25C8 \u601D\u7EF4\u5BFC\u56FE [M]"],"insp.core":["\u2605 \uC911\uC2EC \uD56D\uC131\uC73C\uB85C","\u2605 MAKE IT THE HUB","\u2605 \u4E2D\u5FC3\u6052\u661F\u306B\u3059\u308B","\u2605 \u8BBE\u4E3A\u4E2D\u5FC3\u6052\u661F"],"insp.core.on":["\u2606 \uC911\uC2EC \uD574\uC81C (\uC790\uB3D9)","\u2606 RELEASE HUB (AUTO)","\u2606 \u4E2D\u5FC3\u6052\u661F\u3092\u89E3\u9664 (\u81EA\u52D5)","\u2606 \u89E3\u9664\u4E2D\u5FC3\u6052\u661F (\u81EA\u52A8)"],"core.set":["{n} \xB7 \uC774\uC81C \uC774 \uD56D\uC131\uACC4\uC758 \uC911\uC2EC\uC785\uB2C8\uB2E4","{n} is the centre now","{n} \xB7 \u3053\u306E\u661F\u7CFB\u306E\u4E2D\u5FC3\u306B\u306A\u308A\u307E\u3057\u305F","{n} \xB7 \u73B0\u5728\u662F\u8FD9\u4E2A\u661F\u7CFB\u7684\u4E2D\u5FC3"],"core.auto":["\uC911\uC2EC \uD56D\uC131\uC744 \uC790\uB3D9\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4","The centre is chosen automatically again","\u4E2D\u5FC3\u6052\u661F\u3092\u81EA\u52D5\u9078\u629E\u306B\u623B\u3057\u307E\u3057\u305F","\u5DF2\u6062\u590D\u81EA\u52A8\u9009\u62E9\u4E2D\u5FC3\u6052\u661F"],"insp.ripple":["\u25C9 \uD30C\uBB38 [SPACE]","\u25C9 RIPPLE [SPACE]","\u25C9 \u6CE2\u7D0B [SPACE]","\u25C9 \u6D9F\u6F2A [SPACE]"],"insp.route":["\u25C7 \uACBD\uB85C \uCC3E\uAE30","\u25C7 ROUTE FROM HERE","\u25C7 \u3053\u3053\u304B\u3089\u7D4C\u8DEF","\u25C7 \u67E5\u627E\u8DEF\u5F84"],"insp.route.p":["\u25C7 \uB2E4\uB978 \uB05D \uACE0\uB974\uAE30","\u25C7 PICK THE OTHER END","\u25C7 \u3082\u3046\u4E00\u65B9\u306E\u7AEF\u3092\u9078\u629E","\u25C7 \u8BF7\u9009\u62E9\u53E6\u4E00\u7AEF"],"insp.route.c":["\u25C7 \uACBD\uB85C \uC9C0\uC6B0\uAE30","\u25C7 CLEAR THE ROUTE","\u25C7 \u7D4C\u8DEF\u3092\u6D88\u3059","\u25C7 \u6E05\u9664\u8DEF\u5F84"],"route.pick":["\uB2E4\uB978 \uCABD \uB05D\uC774 \uB420 \uB178\uD2B8\uB97C \uACE0\uB974\uC2ED\uC2DC\uC624","Pick the note at the other end","\u3082\u3046\u4E00\u65B9\u306E\u7AEF\u306E\u30CE\u30FC\u30C8\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044","\u8BF7\u9009\u62E9\u53E6\u4E00\u7AEF\u7684\u7B14\u8BB0"],"route.hops":["{n}\uD649","{n} hops","{n} \u30DB\u30C3\u30D7","{n} \u8DF3"],"route.none":["\uB450 \uB178\uD2B8\uB294 \uC774\uC5B4\uC838 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4","These two are not connected","\u3053\u306E2\u3064\u306F\u3064\u306A\u304C\u3063\u3066\u3044\u307E\u305B\u3093","\u8FD9\u4E24\u7BC7\u7B14\u8BB0\u6CA1\u6709\u8FDE\u63A5"],"route.clear":["\uACBD\uB85C\uB97C \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4","Route cleared","\u7D4C\u8DEF\u3092\u6D88\u3057\u307E\u3057\u305F","\u5DF2\u6E05\u9664\u8DEF\u5F84"],"insp.nobody":["(\uBCF8\uBB38 \uC5C6\uC74C)","(no body text)","\uFF08\u672C\u6587\u306A\u3057\uFF09","\uFF08\u65E0\u6B63\u6587\uFF09"],"insp.broken":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C","BROKEN","\u30EA\u30F3\u30AF\u5207\u308C","\u65AD\u5F00\u7684\u94FE\u63A5"],"hud.broken":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C","BROKEN","\u30EA\u30F3\u30AF\u5207\u308C","\u65AD\u5F00\u7684\u94FE\u63A5"],"hud.off":["HUD \uC228\uAE40 \xB7 H \uB85C \uB2E4\uC2DC \uD45C\uC2DC","HUD hidden \xB7 H brings it back","HUD \u975E\u8868\u793A \xB7 H \u3067\u623B\u308B","HUD \u5DF2\u9690\u85CF \xB7 \u6309 H \u6062\u590D"],"broken.on":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uAC00 \uC788\uB294 \uB178\uD2B8\uB9CC","Only notes with broken links","\u30EA\u30F3\u30AF\u5207\u308C\u306E\u3042\u308B\u30CE\u30FC\u30C8\u306E\u307F","\u4EC5\u663E\u793A\u6709\u65AD\u5F00\u94FE\u63A5\u7684\u7B14\u8BB0"],"broken.off":["\uD544\uD130 \uD574\uC81C","Filter cleared","\u30D5\u30A3\u30EB\u30BF\u30FC\u89E3\u9664","\u5DF2\u6E05\u9664\u7B5B\u9009"],"broken.none":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","No broken links in this vault","\u30EA\u30F3\u30AF\u5207\u308C\u306F\u3042\u308A\u307E\u305B\u3093","\u6B64\u4ED3\u5E93\u6CA1\u6709\u65AD\u5F00\u7684\u94FE\u63A5"],"orb.a":["\uC7A5\uBC18\uACBD","SEMI-MAJOR","\u8ECC\u9053\u9577\u534A\u5F84","\u534A\u957F\u8F74"],"orb.e":["\uC774\uC2EC\uB960","ECCENTRICITY","\u96E2\u5FC3\u7387","\u504F\u5FC3\u7387"],"orb.p":["\uACF5\uC804 \uC8FC\uAE30","PERIOD","\u516C\u8EE2\u5468\u671F","\u516C\u8F6C\u5468\u671F"],"orb.i":["\uADA4\uB3C4 \uACBD\uC0AC","INCLINATION","\u8ECC\u9053\u50BE\u659C","\u8F68\u9053\u503E\u89D2"],"insp.touched":["\uC218\uC815 {t}","touched {t}","\u66F4\u65B0 {t}","\u4FEE\u6539 {t}"],"ago.today":["\uC624\uB298","today","\u4ECA\u65E5","\u4ECA\u5929"],"ago.d":["{n}\uC77C \uC804","{n}d ago","{n}\u65E5\u524D","{n}\u5929\u524D"],"ago.w":["{n}\uC8FC \uC804","{n}w ago","{n}\u9031\u524D","{n}\u5468\u524D"],"ago.mo":["{n}\uAC1C\uC6D4 \uC804","{n}mo ago","{n}\u304B\u6708\u524D","{n}\u4E2A\u6708\u524D"],"ago.y":["{n}\uB144 \uC804","{n}y ago","{n}\u5E74\u524D","{n}\u5E74\u524D"],"insp.open":["\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30 [O]","\u2197 OPEN IN OBSIDIAN [O]","\u2197 Obsidian\u3067\u958B\u304F [O]","\u2197 \u5728 Obsidian \u4E2D\u6253\u5F00 [O]"],"mm.open":["\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30","\u2197 OPEN IN OBSIDIAN","\u2197 Obsidian\u3067\u958B\u304F","\u2197 \u5728 Obsidian \u4E2D\u6253\u5F00"],"open.none":["\uBA3C\uC800 \uB178\uD2B8\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624","Select a note first","\u5148\u306B\u30CE\u30FC\u30C8\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","\u8BF7\u5148\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"],"open.fail":["\uADF8 \uB178\uD2B8\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4","Could not open that note","\u305D\u306E\u30CE\u30FC\u30C8\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F","\u65E0\u6CD5\u6253\u5F00\u8BE5\u7B14\u8BB0"],"sync.done":["\uBCFC\uD2B8 \uAC31\uC2E0 \xB7 \uB178\uD2B8 {n}\uAC1C","Vault updated \xB7 {n} notes","\u30DC\u30EB\u30C8\u66F4\u65B0 \xB7 \u30CE\u30FC\u30C8 {n} \u4EF6","\u4ED3\u5E93\u5DF2\u66F4\u65B0 \xB7 {n} \u7BC7\u7B14\u8BB0"],"ev.nova":["\u2726 {n} \u2014 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uB2E4","\u2726 {n} \u2014 gone","\u2726 {n} \u2014 \u6D88\u3048\u307E\u3057\u305F","\u2726 {n} \u2014 \u5DF2\u6D88\u5931"],"ev.comet":["\u2604 {n} \uC5D0 \uD61C\uC131\uC774 \uB2FF\uC558\uC2B5\uB2C8\uB2E4","\u2604 comet down on {n}","\u2604 \u5F57\u661F\u304C {n} \u306B\u5230\u9054","\u2604 \u5F57\u661F\u62B5\u8FBE {n}"],"cls.giant":["\uAC00\uC2A4 \uAC70\uC131","GAS GIANT","\u30AC\u30B9\u60D1\u661F","\u6C14\u6001\u5DE8\u884C\u661F"],"cls.terr":["\uC9C0\uAD6C\uD615 \uD589\uC131","TERRESTRIAL","\u5730\u7403\u578B\u60D1\u661F","\u7C7B\u5730\u884C\u661F"],"cls.rock":["\uC554\uC11D \uCC9C\uCCB4","ROCK","\u5CA9\u77F3\u5929\u4F53","\u5CA9\u8D28\u5929\u4F53"],"cls.ringed":["\uACE0\uB9AC","RINGED","\u74B0\u3042\u308A","\u6709\u73AF"],"cls.star":["{s}\uD615 \uBCC4 \xB7 {t} K","{s}-type star \xB7 {t} K","{s}\u578B\u661F \xB7 {t} K","{s}\u578B\u6052\u661F \xB7 {t} K"],"guide.sky":["\uD61C\uC131\uC740 \uBC29\uAE08 \uC190\uB304 \uB178\uD2B8\uC5D0 \uB0B4\uB824\uC549\uACE0, \uCD08\uC2E0\uC131\uC740 \uBCF4\uB294 \uB3D9\uC548 \uC0AD\uC81C\uB41C \uB178\uD2B8\uC785\uB2C8\uB2E4.","A comet lands on the note you just touched; a supernova is a note deleted while you were watching.","\u5F57\u661F\u306F\u4ECA\u89E6\u308C\u305F\u30CE\u30FC\u30C8\u306B\u964D\u308A\u7ACB\u3061\u3001\u8D85\u65B0\u661F\u306F\u898B\u3066\u3044\u308B\u9593\u306B\u524A\u9664\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3067\u3059\u3002","\u5F57\u661F\u964D\u843D\u5728\u4F60\u521A\u89E6\u78B0\u7684\u7B14\u8BB0\u4E0A\uFF0C\u8D85\u65B0\u661F\u662F\u4F60\u89C2\u770B\u65F6\u88AB\u5220\u9664\u7684\u7B14\u8BB0\u3002"],"go.travel":["","\u25CE GO TO {n}","\u25CE {n} \u3078\u79FB\u52D5","\u25CE \u524D\u5F80 {n}"],"gen.close.t":["\uC0DD\uC131 \uC885\uB8CC [G]","Leave Genesis [G]","\u751F\u6210\u3092\u7D42\u4E86 [G]","\u7ED3\u675F\u751F\u6210 [G]"],"gen.ttl":["GENESIS \xB7 \uD56D\uC131\uACC4 \uC0DD\uC131","GENESIS \xB7 STAR SYSTEM","GENESIS \xB7 \u661F\u7CFB\u751F\u6210","GENESIS \xB7 \u661F\u7CFB\u751F\u6210"],"gen.play.t":["\uC7AC\uC0DD / \uC815\uC9C0","Play / pause","\u518D\u751F / \u505C\u6B62","\u64AD\u653E / \u6682\u505C"],"gen.rst.t":["\uCC98\uC74C(\uBB34)\uC73C\uB85C","Back to the void","\u6700\u521D\uFF08\u7121\uFF09\u3078","\u56DE\u5230\u8D77\u70B9\uFF08\u865A\u65E0\uFF09"],"gen.spd.t":["\uC7AC\uC0DD \uC18D\uB3C4","Playback speed","\u518D\u751F\u901F\u5EA6","\u64AD\u653E\u901F\u5EA6"],"gen.p0":["\uBB34 \u2014 \uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4","Void \u2014 nothing yet","\u7121 \u2014 \u307E\u3060\u4F55\u3082\u3042\u308A\u307E\u305B\u3093","\u865A\u65E0 \u2014 \u5C1A\u4E14\u7A7A\u65E0\u4E00\u7269"],"gen.p1":["\uC810\uD654 \u2014 \uC911\uC2EC \uAC1C\uB150\uC774 \uBD88\uC744 \uCF2D\uB2C8\uB2E4","Ignition \u2014 the central concept lights up","\u70B9\u706B \u2014 \u4E2D\u5FC3\u6982\u5FF5\u304C\u706F\u308A\u307E\u3059","\u70B9\u706B \u2014 \u4E2D\u5FC3\u6982\u5FF5\u4EAE\u8D77"],"gen.p2":["\uC751\uCD95 \u2014 \uD3F4\uB354\uAC00 \uD56D\uC131\uC73C\uB85C \uBB49\uCE69\uB2C8\uB2E4","Condensation \u2014 folders gather into stars","\u51DD\u7E2E \u2014 \u30D5\u30A9\u30EB\u30C0\u304C\u6052\u661F\u306B\u96C6\u307E\u308A\u307E\u3059","\u51DD\u805A \u2014 \u6587\u4EF6\u5939\u805A\u6210\u6052\u661F"],"gen.p3":["\uAC15\uCC29 \u2014 \uB178\uD2B8\uAC00 \uADA4\uB3C4\uB97C \uC7A1\uC2B5\uB2C8\uB2E4","Accretion \u2014 notes settle into orbit","\u964D\u7740 \u2014 \u30CE\u30FC\u30C8\u304C\u8ECC\u9053\u306B\u4E57\u308A\u307E\u3059","\u5438\u79EF \u2014 \u7B14\u8BB0\u8FDB\u5165\u8F68\u9053"],"gen.p4":["\uD3EC\uD68D \u2014 \uC6D0\uBB38\uC774 \uC704\uC131\uC774 \uB429\uB2C8\uB2E4","Capture \u2014 source material becomes moons","\u6355\u7372 \u2014 \u539F\u6587\u304C\u885B\u661F\u306B\u306A\u308A\u307E\u3059","\u6355\u83B7 \u2014 \u539F\u59CB\u6750\u6599\u5316\u4F5C\u536B\u661F"],"gen.p5":["\uC5F0\uACB0 \u2014 \uB9C1\uD06C\uAC00 \uC810\uD654\uD558\uBA70 \uC9C0\uC2DD\uCCB4\uACC4\uAC00 \uB429\uB2C8\uB2E4","Network \u2014 links ignite into a knowledge base","\u63A5\u7D9A \u2014 \u30EA\u30F3\u30AF\u304C\u70B9\u706B\u3057\u77E5\u8B58\u4F53\u7CFB\u306B\u306A\u308A\u307E\u3059","\u8FDE\u63A5 \u2014 \u94FE\u63A5\u70B9\u4EAE\uFF0C\u6210\u4E3A\u77E5\u8BC6\u4F53\u7CFB"],"gen.p6":["\uD604\uC7AC \u2014 \uC9C0\uAE08\uC758 \uD56D\uC131\uACC4","Present \u2014 the system as it stands","\u73FE\u5728 \u2014 \u4ECA\u306E\u661F\u7CFB","\u5F53\u4E0B \u2014 \u6B64\u523B\u7684\u661F\u7CFB"],"gen.play":["\uBB34\uC5D0\uC11C \uD56D\uC131\uACC4\uB85C \u2014 \uD615\uC131 \uC7AC\uC0DD","From void to star system \u2014 replaying the formation","\u7121\u304B\u3089\u661F\u7CFB\u3078 \u2014 \u5F62\u6210\u3092\u518D\u751F","\u4ECE\u865A\u65E0\u5230\u661F\u7CFB \u2014 \u91CD\u653E\u5F62\u6210\u8FC7\u7A0B"],"gen.done":["\uD56D\uC131\uACC4 \uC644\uC131","STAR SYSTEM COMPLETE","\u661F\u7CFB\u5B8C\u6210","\u661F\u7CFB\u5F62\u6210\u5B8C\u6BD5"],"gen.undated":["\uBB34\uC5F0\uB3C4","UNDATED","\u5E74\u4E0D\u660E","\u65E0\u65E5\u671F"],"gen.sys":["\uACC4 {n}","{n} SYS","\u7CFB {n}","\u7CFB {n}"],"mm.back":["\u2190 \uB4A4\uB85C","\u2190 BACK","\u2190 \u623B\u308B","\u2190 \u8FD4\u56DE"],"mm.close":["\uB2EB\uAE30 [ ESC ]","CLOSE [ ESC ]","\u9589\u3058\u308B [ ESC ]","\u5173\u95ED [ ESC ]"],"mm.hop":["\u25CC 2\uD649","\u25CC 2 HOPS","\u25CC 2\u30DB\u30C3\u30D7","\u25CC 2\u8DF3"],"mm.keys":["\u2190 \u2192 \uC774\uC6C3 \xB7 ENTER \uC911\uC2EC\uC73C\uB85C \xB7 \u232B \uB4A4\uB85C \xB7 2 \uB450 \uD649 \xB7 F \uD654\uBA74 \uB9DE\uCDA4 \xB7 G \uC774\uB3D9 \xB7 ESC \uB2EB\uAE30","\u2190 \u2192 STEP \xB7 ENTER CENTRE \xB7 \u232B BACK \xB7 2 HOPS \xB7 F FRAME \xB7 G GO TO \xB7 ESC CLOSE","\u2190 \u2192 \u96A3\u3078 \xB7 ENTER \u4E2D\u5FC3\u306B \xB7 \u232B \u623B\u308B \xB7 2 \u30DB\u30C3\u30D7 \xB7 F \u5168\u4F53 \xB7 G \u79FB\u52D5 \xB7 ESC \u9589\u3058\u308B","\u2190 \u2192 \u90BB\u5C45 \xB7 ENTER \u5C45\u4E2D \xB7 \u232B \u8FD4\u56DE \xB7 2 \u4E24\u8DF3 \xB7 F \u9002\u914D \xB7 G \u524D\u5F80 \xB7 ESC \u5173\u95ED"],"mm.hop2":["2\uD649","2 HOPS","2\u30DB\u30C3\u30D7","2\u8DF3"],"mm.hop.t":["\uC774\uC6C3\uC758 \uC774\uC6C3\uAE4C\uC9C0 \uD55C \uACB9 \uB354 [2]","One more ring \u2014 neighbours of neighbours [2]","\u96A3\u306E\u96A3\u307E\u3067\u3082\u3046\u4E00\u5C64 [2]","\u518D\u52A0\u4E00\u5C42 \u2014 \u90BB\u5C45\u7684\u90BB\u5C45 [2]"],"leg.wiki":["\uC704\uD0A4\uB9C1\uD06C","WIKILINK","\u30A6\u30A3\u30AD\u30EA\u30F3\u30AF","\u7EF4\u57FA\u94FE\u63A5"],"leg.src":["\uCD9C\uCC98","SOURCE","\u51FA\u5178","\u6765\u6E90"],"mm.hint":["\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9<br>\uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804 \xB7 \uD720 = \uD655\uB300","CLICK = SELECT \xB7 DOUBLE-CLICK = RECENTRE<br>DRAG = ORBIT THE VIEW \xB7 WHEEL = ZOOM","\u30AF\u30EA\u30C3\u30AF = \u9078\u629E \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF = \u4E2D\u5FC3\u79FB\u52D5<br>\u30C9\u30E9\u30C3\u30B0 = \u8996\u70B9\u56DE\u8EE2 \xB7 \u30DB\u30A4\u30FC\u30EB = \u62E1\u5927","\u5355\u51FB = \u9009\u62E9 \xB7 \u53CC\u51FB = \u79FB\u52A8\u4E2D\u5FC3<br>\u62D6\u52A8 = \u65CB\u8F6C\u89C6\u89D2 \xB7 \u6EDA\u8F6E = \u7F29\u653E"],"mm.trunc":["\uC5F0\uACB0 {t}\uAC1C \uC911 \uC0C1\uC704 {n}\uAC1C","TOP {n} OF {t} LINKS","\u63A5\u7D9A {t} \u4EF6\u4E2D \u4E0A\u4F4D {n} \u4EF6","{t} \u6761\u8FDE\u63A5\u4E2D\u7684\u524D {n} \u6761"],"mm.trunc2":["2\uD649 {t}\uAC1C \uC911 \uC0C1\uC704 {n}\uAC1C","TOP {n} OF {t} SECOND-HOP","2\u30DB\u30C3\u30D7 {t} \u4EF6\u4E2D \u4E0A\u4F4D {n} \u4EF6","{t} \u4E2A\u4E8C\u8DF3\u4E2D\u7684\u524D {n} \u4E2A"],"mm.hintfull":["\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9 \xB7 \uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804<br><b>\u2190 \u2192</b> \uC120\uD0DD \xB7 <b>ENTER</b> \uC911\uC2EC \xB7 <b>F</b> \uB9DE\uCDA4 \xB7 <b>2</b> 2\uD649","CLICK = SELECT \xB7 DOUBLE-CLICK = RECENTRE \xB7 DRAG = ORBIT<br><b>\u2190 \u2192</b> SELECT \xB7 <b>ENTER</b> CENTRE \xB7 <b>F</b> FIT \xB7 <b>2</b> 2 HOPS","\u30AF\u30EA\u30C3\u30AF = \u9078\u629E \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF = \u4E2D\u5FC3\u79FB\u52D5 \xB7 \u30C9\u30E9\u30C3\u30B0 = \u8996\u70B9\u56DE\u8EE2<br><b>\u2190 \u2192</b> \u9078\u629E \xB7 <b>ENTER</b> \u4E2D\u5FC3 \xB7 <b>F</b> \u30D5\u30A3\u30C3\u30C8 \xB7 <b>2</b> 2\u30DB\u30C3\u30D7","\u5355\u51FB = \u9009\u62E9 \xB7 \u53CC\u51FB = \u79FB\u52A8\u4E2D\u5FC3 \xB7 \u62D6\u52A8 = \u65CB\u8F6C\u89C6\u89D2<br><b>\u2190 \u2192</b> \u9009\u62E9 \xB7 <b>ENTER</b> \u5C45\u4E2D \xB7 <b>F</b> \u9002\u5E94 \xB7 <b>2</b> \u4E8C\u8DF3"],"mm.hintopen":["<b>CTRL+ENTER</b> \uB178\uD2B8 \uC5F4\uAE30","<b>CTRL+ENTER</b> OPEN NOTE","<b>CTRL+ENTER</b> \u30CE\u30FC\u30C8\u3092\u958B\u304F","<b>CTRL+ENTER</b> \u6253\u5F00\u7B14\u8BB0"],"mm.sec.conn":["\uC5F0\uACB0","CONNECTIONS","\u63A5\u7D9A","\u8FDE\u63A5"],"mm.sec.tags":["\uD0DC\uADF8","TAGS","\u30BF\u30B0","\u6807\u7B7E"],"mm.sec.excerpt":["\uBC1C\uCDCC","EXCERPT","\u629C\u7C8B","\u6458\u5F55"],"mm.sec.links":["\uB9C1\uD06C","LINKS","\u30EA\u30F3\u30AF","\u94FE\u63A5"],"mm.go":["\u25CE \uC774 \uB178\uB4DC\uB85C \uC774\uB3D9","\u25CE GO TO THIS NODE","\u25CE \u3053\u306E\u30CE\u30FC\u30C9\u3078\u79FB\u52D5","\u25CE \u524D\u5F80\u6B64\u8282\u70B9"],"mm.center":["\u25C8 \uC774 \uB178\uB4DC\uB97C \uC911\uC2EC\uC73C\uB85C","\u25C8 CENTRE ON THIS NODE","\u25C8 \u3053\u306E\u30CE\u30FC\u30C9\u3092\u4E2D\u5FC3\u306B","\u25C8 \u4EE5\u6B64\u8282\u70B9\u4E3A\u4E2D\u5FC3"],"mm.isroot":["\uC911\uC2EC","CENTRE","\u4E2D\u5FC3","\u4E2D\u5FC3"],"mm.nobody":["\uBCF8\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","No body text.","\u672C\u6587\u304C\u3042\u308A\u307E\u305B\u3093\u3002","\u6CA1\u6709\u6B63\u6587\u3002"],"hint.body":["\uC544\uC9C1 \uBCFC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD3F4\uB354\uB97C \uC774 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694.","No vault yet. Drop a folder on this window, or use the button below.","\u307E\u3060\u30DC\u30EB\u30C8\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30D5\u30A9\u30EB\u30C0\u3092\u3053\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u30C9\u30ED\u30C3\u30D7\u3059\u308B\u304B\u3001\u4E0B\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u8FD8\u6CA1\u6709\u4ED3\u5E93\u3002\u628A\u6587\u4EF6\u5939\u62D6\u5230\u8FD9\u4E2A\u7A97\u53E3\uFF0C\u6216\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002"],"drop.body":["\uD3F4\uB354\uB098 \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uB193\uC73C\uBA74 \uADF8 \uBCFC\uD2B8\uB85C \uC6B0\uC8FC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4","Drop a folder or markdown files and a cosmos is built from that vault","\u30D5\u30A9\u30EB\u30C0\u3084\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u7F6E\u304F\u3068\u3001\u305D\u306E\u30DC\u30EB\u30C8\u304B\u3089\u5B87\u5B99\u3092\u4F5C\u308A\u307E\u3059","\u653E\u4E0B\u6587\u4EF6\u5939\u6216 Markdown \u6587\u4EF6\uFF0C\u5C31\u7528\u90A3\u4E2A\u4ED3\u5E93\u9020\u4E00\u4E2A\u5B87\u5B99"],"search.ph":["\uB178\uD2B8 \xB7 \uC124\uC815 \xB7 \uAE30\uB2A5 \uAC80\uC0C9 \u2026","Search notes, settings, actions \u2026","\u30CE\u30FC\u30C8\u30FB\u8A2D\u5B9A\u30FB\u6A5F\u80FD\u3092\u691C\u7D22 \u2026","\u641C\u7D22\u7B14\u8BB0 \xB7 \u8BBE\u7F6E \xB7 \u529F\u80FD \u2026"],"insp.more":["+ {n}\uAC1C \uB354 \uBCF4\uAE30","+ {n} more","+ \u4ED6 {n} \u4EF6","+ \u8FD8\u6709 {n} \u9879"],"find.knob":["\uC124\uC815","SETTING","\u8A2D\u5B9A","\u8BBE\u7F6E"],"guide.quality":["\uCEE8\uD2B8\uB864 \uB9E8 \uC704\uC758 CINEMA \xB7 BALANCED \xB7 FAST. \uBE5B \uD6A8\uACFC \uC5EC\uB35F \uAC1C\uB97C \uD55C \uBC88\uC5D0 \uB9DE\uCDA5\uB2C8\uB2E4. \uD070 \uBCFC\uD2B8\uAC00 \uB290\uB9AC\uBA74 FAST\uBD80\uD130 \uB204\uB974\uC2ED\uC2DC\uC624.","CINEMA \xB7 BALANCED \xB7 FAST at the head of the controls. Sets the eight light effects at once; if a big vault is slow, FAST is the first thing to press.","\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u6700\u4E0A\u90E8\u306E CINEMA \xB7 BALANCED \xB7 FAST\u3002\u5149\u306E\u52B9\u679C8\u3064\u3092\u4E00\u5EA6\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u5927\u304D\u306A\u30DC\u30EB\u30C8\u304C\u91CD\u3044\u3068\u304D\u306F\u307E\u305A FAST \u3092\u3002","\u63A7\u5236\u9762\u677F\u9876\u90E8\u7684 CINEMA \xB7 BALANCED \xB7 FAST\u3002\u4E00\u6B21\u8BBE\u7F6E\u516B\u9879\u5149\u6548\uFF1B\u5927\u4ED3\u5E93\u5361\u987F\u65F6\u5148\u6309 FAST\u3002"],"q.t":["\uD654\uC9C8 \u2014 \uBE5B \uD6A8\uACFC \uC5EC\uB35F \uAC1C\uB97C \uD55C \uBC88\uC5D0 \uB9DE\uCDA5\uB2C8\uB2E4. \uC2AC\uB77C\uC774\uB354\uB97C \uC9C1\uC811 \uC6C0\uC9C1\uC774\uBA74 \uC120\uD0DD\uC774 \uD480\uB9BD\uB2C8\uB2E4.","Quality \u2014 sets the eight light effects at once. Moving one of them by hand leaves the preset.","\u753B\u8CEA \u2014 \u5149\u306E\u52B9\u679C8\u3064\u3092\u4E00\u5EA6\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u500B\u5225\u306B\u52D5\u304B\u3059\u3068\u30D7\u30EA\u30BB\u30C3\u30C8\u304B\u3089\u5916\u308C\u307E\u3059\u3002","\u753B\u8D28 \u2014 \u4E00\u6B21\u8BBE\u7F6E\u516B\u9879\u5149\u6548\u3002\u624B\u52A8\u8C03\u6574\u4EFB\u610F\u4E00\u9879\u5373\u8131\u79BB\u9884\u8BBE\u3002"],"q.cinematic":["\uD654\uC9C8: \uC2DC\uB124\uB9C8\uD2F1","QUALITY \xB7 CINEMATIC","\u753B\u8CEA: \u30B7\u30CD\u30DE\u30C6\u30A3\u30C3\u30AF","\u753B\u8D28\uFF1A\u7535\u5F71"],"q.balanced":["\uD654\uC9C8: \uADE0\uD615","QUALITY \xB7 BALANCED","\u753B\u8CEA: \u30D0\u30E9\u30F3\u30B9","\u753B\u8D28\uFF1A\u5747\u8861"],"q.fast":["\uD654\uC9C8: \uBE60\uB974\uAC8C","QUALITY \xB7 FAST","\u753B\u8CEA: \u9AD8\u901F","\u753B\u8D28\uFF1A\u6D41\u7545"],"q.auto":["\uD070 \uBCFC\uD2B8\uB77C \uBE5B \uD6A8\uACFC\uB97C \uC904\uC600\uC2B5\uB2C8\uB2E4 \u2014 \uCEE8\uD2B8\uB864\uC758 CINEMA\uB85C \uB418\uB3CC\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4","A big vault, so the light effects are turned down \u2014 CINEMA in the controls brings them back","\u5927\u304D\u306A\u30DC\u30EB\u30C8\u306A\u306E\u3067\u5149\u306E\u52B9\u679C\u3092\u4E0B\u3052\u307E\u3057\u305F \u2014 \u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306E CINEMA \u3067\u623B\u305B\u307E\u3059","\u4ED3\u5E93\u8F83\u5927\uFF0C\u5DF2\u964D\u4F4E\u5149\u6548 \u2014 \u53EF\u5728\u63A7\u5236\u9762\u677F\u70B9 CINEMA \u6062\u590D"],"find.act":["\uAE30\uB2A5","ACTION","\u6A5F\u80FD","\u529F\u80FD"],"load.notes":["{n}\uAC1C \uB178\uD2B8","{n} notes","\u30CE\u30FC\u30C8 {n} \u4EF6","{n} \u7BC7\u7B14\u8BB0"],"load.graph":["\uB9C1\uD06C \xB7 \uD0DC\uADF8 \uADF8\uB798\uD504 \uAD6C\uC131","Building the link and tag graph","\u30EA\u30F3\u30AF \xB7 \u30BF\u30B0\u306E\u30B0\u30E9\u30D5\u3092\u69CB\u6210","\u6784\u5EFA\u94FE\u63A5\u4E0E\u6807\u7B7E\u56FE\u8C31"],"load.orbit":["\uADA4\uB3C4 \uACC4\uC0B0","Computing orbits","\u8ECC\u9053\u3092\u8A08\u7B97","\u8BA1\u7B97\u8F68\u9053"],"load.nomd":["\uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4","No markdown files found","\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093","\u672A\u627E\u5230 Markdown \u6587\u4EF6"],"load.failed":["\uBCFC\uD2B8 \uD574\uC11D \uC2E4\uD328","Could not parse the vault","\u30DC\u30EB\u30C8\u306E\u89E3\u6790\u306B\u5931\u6557","\u4ED3\u5E93\u89E3\u6790\u5931\u8D25"],"load.empty":["\uC77D\uC744 \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","No notes to read","\u8AAD\u3081\u308B\u30CE\u30FC\u30C8\u304C\u3042\u308A\u307E\u305B\u3093","\u6CA1\u6709\u53EF\u8BFB\u7684\u7B14\u8BB0"],"load.render":["\uB80C\uB354 \uC2E4\uD328 \u2014 \uBE48 \uC6B0\uC8FC\uB85C \uBCF5\uADC0","Render failed \u2014 back to empty space","\u30EC\u30F3\u30C0\u30FC\u5931\u6557 \u2014 \u7A7A\u306E\u5B87\u5B99\u306B\u623B\u308A\u307E\u3059","\u6E32\u67D3\u5931\u8D25 \u2014 \u8FD4\u56DE\u7A7A\u767D\u5B87\u5B99"],"gl.lost":["\uADF8\uB798\uD53D \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC783\uC5C8\uC2B5\uB2C8\uB2E4 \u2014 \uBCF5\uAD6C\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911","Lost the graphics context \u2014 waiting for the browser to give it back","\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u5931\u3044\u307E\u3057\u305F \u2014 \u5FA9\u5E30\u3092\u5F85\u3063\u3066\u3044\u307E\u3059","\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931 \u2014 \u6B63\u5728\u7B49\u5F85\u6062\u590D"],"gl.restored":["\uADF8\uB798\uD53D \uCEE8\uD14D\uC2A4\uD2B8 \uBCF5\uAD6C\uB428","Graphics context restored","\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u5FA9\u5E30\u3057\u307E\u3057\u305F","\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u6062\u590D"],"vault.empty":["\uBE48 \uC6B0\uC8FC","EMPTY SPACE","\u7A7A\u306E\u5B87\u5B99","\u7A7A\u767D\u5B87\u5B99"],"cat.rawYear":["{y} \uC6D0\uBB38","{y} SOURCES","{y} \u539F\u6587","{y} \u539F\u59CB\u6750\u6599"],"cat.rawUndated":["\uBB34\uC5F0\uB3C4 \uC6D0\uBB38","UNDATED SOURCES","\u5E74\u4E0D\u660E\u306E\u539F\u6587","\u65E0\u65E5\u671F\u539F\u59CB\u6750\u6599"],"cat.hub":["\uD5C8\uBE0C","HUB","\u30CF\u30D6","\u67A2\u7EBD"],"need.vault":["\uBA3C\uC800 \uBCFC\uD2B8\uB97C \uBD88\uB7EC\uC624\uC138\uC694","Load a vault first","\u307E\u305A\u30DC\u30EB\u30C8\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044","\u8BF7\u5148\u8F7D\u5165\u4ED3\u5E93"],"need.node":["\uBA3C\uC800 \uB178\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694","Select a node first","\u307E\u305A\u30CE\u30FC\u30C9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","\u8BF7\u5148\u9009\u62E9\u8282\u70B9"],ripple:["\uD30C\uBB38 \xB7 {n}","RIPPLE \xB7 {n}","\u6CE2\u7D0B \xB7 {n}","\u6D9F\u6F2A \xB7 {n}"],"poster.fail":["\uD3EC\uC2A4\uD130 \uC800\uC7A5 \uC2E4\uD328","Poster export failed","\u30DD\u30B9\u30BF\u30FC\u306E\u4FDD\u5B58\u306B\u5931\u6557","\u6D77\u62A5\u4FDD\u5B58\u5931\u8D25"],"poster.ok":["\uD3EC\uC2A4\uD130 \uC800\uC7A5 \xB7 {w}\xD7{h}","POSTER SAVED \xB7 {w}\xD7{h}","\u30DD\u30B9\u30BF\u30FC\u4FDD\u5B58 \xB7 {w}\xD7{h}","\u6D77\u62A5\u5DF2\u4FDD\u5B58 \xB7 {w}\xD7{h}"],"dock.search":["\uAC80\uC0C9 \xB7 \uB178\uD2B8\uC640 \uC870\uC808\uAE30 [ / ]","SEARCH \xB7 notes and controls [ / ]","\u691C\u7D22 \xB7 \u30CE\u30FC\u30C8\u3068\u3064\u307E\u307F [ / ]","\u641C\u7D22 \xB7 \u7B14\u8BB0\u4E0E\u63A7\u4EF6 [ / ]"],"dock.idp":["\uBCFC\uD2B8 \xB7 \uB178\uB4DC \xB7 \uB9C1\uD06C \xB7 \uB04A\uC5B4\uC9C4 \uB9C1\uD06C","VAULT \xB7 nodes, links, broken links","\u30DC\u30EB\u30C8 \xB7 \u30CE\u30FC\u30C9\u30FB\u30EA\u30F3\u30AF\u30FB\u5207\u308C\u305F\u30EA\u30F3\u30AF","\u4ED3\u5E93 \xB7 \u8282\u70B9\u3001\u94FE\u63A5\u3001\u65AD\u94FE"],"dock.leg":["\uD56D\uC131\uACC4 \xB7 \uD3F4\uB354\uB9C8\uB2E4 \uCF1C\uACE0 \uB044\uAE30","STAR SYSTEMS \xB7 show or hide each folder","\u6052\u661F\u7CFB \xB7 \u30D5\u30A9\u30EB\u30C0\u3054\u3068\u306B\u8868\u793A\u3092\u5207\u66FF","\u661F\u7CFB \xB7 \u6309\u6587\u4EF6\u5939\u663E\u793A\u6216\u9690\u85CF"],"dock.ctl":["\uC870\uC808\uAE30 \xB7 \uD488\uC9C8 \xB7 \uBE5B \xB7 \uADA4\uB3C4","CONTROLS \xB7 quality, light, orbits","\u3064\u307E\u307F \xB7 \u753B\u8CEA\u30FB\u5149\u30FB\u8ECC\u9053","\u63A7\u4EF6 \xB7 \u753B\u8D28\u3001\u5149\u6548\u3001\u8F68\u9053"],"dock.keys":["\uB2E8\uCD95\uD0A4 \xB7 \uADF8\uB9AC\uACE0 \uC804\uCCB4 \uC548\uB0B4","SHORTCUTS \xB7 and the full guide","\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8 \xB7 \u3068\u5168\u4F53\u30AC\u30A4\u30C9","\u5FEB\u6377\u952E \xB7 \u4EE5\u53CA\u5B8C\u6574\u6307\u5357"],"dock.gen":["\uC81C\uB124\uC2DC\uC2A4 \xB7 \uBCFC\uD2B8\uAC00 \uC0DD\uACA8\uB09C \uC21C\uC11C\uB300\uB85C [ G ]","GENESIS \xB7 replay how the vault grew [ G ]","\u30B8\u30A7\u30CD\u30B7\u30B9 \xB7 \u30DC\u30EB\u30C8\u304C\u3067\u304D\u305F\u9806\u306B\u518D\u751F [ G ]","\u521B\u4E16 \xB7 \u6309\u4ED3\u5E93\u5F62\u6210\u7684\u987A\u5E8F\u56DE\u653E [ G ]"],"dock.grip":["\uB04C\uC5B4\uC11C \uC62E\uAE30\uAE30 \xB7 \uB354\uBE14\uD074\uB9AD\uD558\uBA74 \uC81C\uC790\uB9AC\uB85C","DRAG TO MOVE \xB7 double-click to put it back","\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5 \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3067\u5143\u306E\u4F4D\u7F6E\u3078","\u62D6\u52A8\u4EE5\u79FB\u52A8 \xB7 \u53CC\u51FB\u653E\u56DE\u539F\u5904"],"dock.reset":["\uBA54\uB274\uB97C \uC81C\uC790\uB9AC\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4","Rail put back at the left edge","\u30E1\u30CB\u30E5\u30FC\u3092\u5143\u306E\u4F4D\u7F6E\u306B\u623B\u3057\u307E\u3057\u305F","\u83DC\u5355\u5DF2\u653E\u56DE\u539F\u5904"],"dock.pin":["\uACE0\uC815 \xB7 \uB2E4\uB978 \uC11C\uB78D\uC744 \uC5F4\uC5B4\uB3C4 \uB2EB\uD788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4","PIN \xB7 stays open beside the next drawer","\u56FA\u5B9A \xB7 \u4ED6\u306E\u5F15\u304D\u51FA\u3057\u3092\u958B\u3044\u3066\u3082\u9589\u3058\u307E\u305B\u3093","\u56FA\u5B9A \xB7 \u6253\u5F00\u5176\u4ED6\u62BD\u5C49\u65F6\u4E5F\u4E0D\u4F1A\u5173\u95ED"],"dock.close":["\uB2EB\uAE30 [ Esc ]","CLOSE [ Esc ]","\u9589\u3058\u308B [ Esc ]","\u5173\u95ED [ Esc ]"],"dock.card":["\uD3EC\uD1A0\uCE74\uB4DC \xB7 9:16 \uC774\uBBF8\uC9C0\uC640 15\uCD08 \uC601\uC0C1 [ C ]","PHOTO CARD \xB7 a 9:16 image or a 15-second clip [ C ]","\u30D5\u30A9\u30C8\u30AB\u30FC\u30C9 \xB7 9:16 \u306E\u753B\u50CF\u306815\u79D2\u306E\u52D5\u753B [ C ]","\u7167\u7247\u5361 \xB7 9:16 \u56FE\u7247\u4E0E 15 \u79D2\u89C6\u9891 [ C ]"],"card.ttl":["\uD3EC\uD1A0\uCE74\uB4DC","PHOTO CARD","\u30D5\u30A9\u30C8\u30AB\u30FC\u30C9","\u7167\u7247\u5361"],"card.hint":["\uD504\uB808\uC784 \uC548\uC5D0\uC11C \uB3CC\uB9AC\uACE0 \uD655\uB300\uD558\uC138\uC694. \uBCF4\uC774\uB294 \uADF8\uB300\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4. \uB179\uD654\uB294 \uB204\uB978 \uB4A4 15\uCD08 \uB3D9\uC548\uC758 \uC870\uC791\uC744 \uB2F4\uC2B5\uB2C8\uB2E4.","Turn and zoom inside the frame \u2014 it is saved exactly as you see it. A recording keeps whatever you do for the fifteen seconds after you press it.","\u30D5\u30EC\u30FC\u30E0\u306E\u4E2D\u3067\u56DE\u3057\u3066\u62E1\u5927\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u898B\u305F\u307E\u307E\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u9332\u753B\u306F\u62BC\u3057\u3066\u304B\u308915\u79D2\u9593\u306E\u64CD\u4F5C\u3092\u305D\u306E\u307E\u307E\u6B8B\u3057\u307E\u3059\u3002","\u5728\u6846\u5185\u65CB\u8F6C\u3001\u7F29\u653E\u2014\u2014\u6240\u89C1\u5373\u6240\u5B58\u3002\u5F55\u5236\u4F1A\u8BB0\u4E0B\u6309\u4E0B\u540E 15 \u79D2\u5185\u7684\u6240\u6709\u64CD\u4F5C\u3002"],"card.g.basic":["\uAE30\uBCF8 \uADDC\uBAA8","SCALE","\u57FA\u672C\u306E\u898F\u6A21","\u57FA\u672C\u89C4\u6A21"],"card.g.best":["\uCD5C\uACE0 \uAE30\uB85D","RECORDS","\u8A18\u9332","\u4E4B\u6700"],"card.g.act":["\uD65C\uB3D9 \uAE30\uB85D","ACTIVITY","\u6D3B\u52D5","\u6D3B\u52A8"],"card.g.fun":["\uC7AC\uBBF8 \uC218\uCE58","JUST FOR FUN","\u304A\u307E\u3051","\u8DA3\u5473"],"card.png":["\u2913 \uC774\uBBF8\uC9C0","\u2913 IMAGE","\u2913 \u753B\u50CF","\u2913 \u56FE\u7247"],"card.mp4":["\u25CF 15\uCD08 \uB179\uD654","\u25CF RECORD 15s","\u25CF 15\u79D2\u9332\u753B","\u25CF \u5F55\u5236 15 \u79D2"],"card.stop":["Esc \xB7 \uC9C0\uAE08 \uBA48\uCD94\uACE0 \uC800\uC7A5","Esc \xB7 stop and save now","Esc \xB7 \u4ECA\u3059\u3050\u6B62\u3081\u3066\u4FDD\u5B58","Esc \xB7 \u7ACB\u5373\u505C\u6B62\u5E76\u4FDD\u5B58"],"card.full":["\uC218\uCE58\uB294 6\uAC1C\uAE4C\uC9C0 \uB123\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4","Six stats at most","\u6570\u5024\u306F6\u3064\u307E\u3067\u3067\u3059","\u6700\u591A\u653E\u5165\u516D\u9879\u6570\u636E"],"card.saved":["\uCE74\uB4DC \uC800\uC7A5 \xB7 {f}","CARD SAVED \xB7 {f}","\u30AB\u30FC\u30C9\u4FDD\u5B58 \xB7 {f}","\u7167\u7247\u5361\u5DF2\u4FDD\u5B58 \xB7 {f}"],"card.webm":["\uCE74\uB4DC \uC800\uC7A5 \xB7 {f} \u2014 \uC774 \uD658\uACBD\uC740 MP4 \uB179\uD654\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC544 WebM\uC73C\uB85C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4","CARD SAVED \xB7 {f} \u2014 this setup cannot record MP4, so it is WebM","\u30AB\u30FC\u30C9\u4FDD\u5B58 \xB7 {f} \u2014 \u3053\u306E\u74B0\u5883\u306F MP4 \u9332\u753B\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u305F\u3081 WebM \u3067\u4FDD\u5B58\u3057\u307E\u3057\u305F","\u7167\u7247\u5361\u5DF2\u4FDD\u5B58 \xB7 {f} \u2014 \u6B64\u73AF\u5883\u4E0D\u652F\u6301\u5F55\u5236 MP4\uFF0C\u5DF2\u5B58\u4E3A WebM"],"card.fail":["\uCE74\uB4DC \uC800\uC7A5 \uC2E4\uD328","Card export failed","\u30AB\u30FC\u30C9\u306E\u4FDD\u5B58\u306B\u5931\u6557","\u7167\u7247\u5361\u4FDD\u5B58\u5931\u8D25"],"card.norec":["\uC774 \uD658\uACBD\uC5D0\uC11C\uB294 \uB179\uD654\uB97C \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4","Recording is not available here","\u3053\u306E\u74B0\u5883\u3067\u306F\u9332\u753B\u3067\u304D\u307E\u305B\u3093","\u6B64\u73AF\u5883\u65E0\u6CD5\u5F55\u5236"],"card.mark":["MADE WITH VAULT ORRERY \xB7 OBSIDIAN","MADE WITH VAULT ORRERY \xB7 OBSIDIAN","MADE WITH VAULT ORRERY \xB7 OBSIDIAN","MADE WITH VAULT ORRERY \xB7 OBSIDIAN"],"cs.age":["\uBCFC\uD2B8 \uB098\uC774","VAULT AGE","\u30DC\u30EB\u30C8\u306E\u5E74\u9F62","\u4ED3\u5E93\u5E74\u9F84"],"cs.notes":["\uD589\uC131 \xB7 \uB178\uD2B8","PLANETS \xB7 NOTES","\u60D1\u661F \xB7 \u30CE\u30FC\u30C8","\u884C\u661F \xB7 \u7B14\u8BB0"],"cs.links":["\uB9C1\uD06C","LINKS","\u30EA\u30F3\u30AF","\u94FE\u63A5"],"cs.systems":["\uD56D\uC131\uACC4 \xB7 \uD3F4\uB354","STAR SYSTEMS","\u6052\u661F\u7CFB \xB7 \u30D5\u30A9\u30EB\u30C0","\u661F\u7CFB \xB7 \u6587\u4EF6\u5939"],"cs.bigsys":["\uAC00\uC7A5 \uD070 \uD56D\uC131\uACC4","BIGGEST SYSTEM","\u6700\u5927\u306E\u6052\u661F\u7CFB","\u6700\u5927\u7684\u661F\u7CFB"],"cs.cited":["\uAC00\uC7A5 \uB9CE\uC774 \uC778\uC6A9\uB41C \uB178\uD2B8","MOST CITED","\u6700\u3082\u5F15\u7528\u3055\u308C\u305F\u30CE\u30FC\u30C8","\u88AB\u5F15\u7528\u6700\u591A"],"cs.longest":["\uAC00\uC7A5 \uAE34 \uB178\uD2B8","LONGEST NOTE","\u6700\u3082\u9577\u3044\u30CE\u30FC\u30C8","\u6700\u957F\u7684\u7B14\u8BB0"],"cs.year":["\uC62C\uD574 \uC4F4 \uB178\uD2B8","NOTES THIS YEAR","\u4ECA\u5E74\u306E\u30CE\u30FC\u30C8","\u4ECA\u5E74\u7684\u7B14\u8BB0"],"cs.words":["\uCD1D \uB2E8\uC5B4","WORDS","\u7DCF\u5358\u8A9E\u6570","\u603B\u8BCD\u6570"],"cs.month":["\uAC00\uC7A5 \uB9CE\uC774 \uC4F4 \uB2EC","BUSIEST MONTH","\u6700\u3082\u66F8\u3044\u305F\u6708","\u5199\u5F97\u6700\u591A\u7684\u6708\u4EFD"],"cs.streak":["\uCD5C\uC7A5 \uC5F0\uC18D \uC791\uC131","LONGEST STREAK","\u6700\u9577\u9023\u7D9A","\u6700\u957F\u8FDE\u7EED"],"cs.ly":["\uB9C1\uD06C\uB97C \uD55C \uC904\uB85C \uC774\uC73C\uBA74","LINKS END TO END","\u30EA\u30F3\u30AF\u3092\u4E00\u5217\u306B\u3064\u306A\u3050\u3068","\u94FE\u63A5\u9996\u5C3E\u76F8\u8FDE"],"cs.rogue":["\uB5A0\uB3CC\uC774 \uD589\uC131 \xB7 \uB9C1\uD06C \uC5C6\uC74C","ROGUE PLANETS","\u306F\u3050\u308C\u60D1\u661F \xB7 \u30EA\u30F3\u30AF\u306A\u3057","\u6D41\u6D6A\u884C\u661F \xB7 \u65E0\u94FE\u63A5"],"cs.const":["\uBCFC\uD2B8 \uBCC4\uC790\uB9AC","CONSTELLATION","\u30DC\u30EB\u30C8\u306E\u661F\u5EA7","\u4ED3\u5E93\u661F\u5EA7"],"cu.days":["{n}\uC77C","{n} DAYS","{n}\u65E5","{n} \u5929"],"cu.notes":["\uB178\uD2B8 {n}","{n} NOTES","{n} \u30CE\u30FC\u30C8","{n} \u7BC7"],"cu.words":["{n}\uB2E8\uC5B4","{n} WORDS","{n} \u8A9E","{n} \u8BCD"],"cu.ly":["{n} \uAD11\uB144","{n} LY","{n} \u5149\u5E74","{n} \u5149\u5E74"],"cu.cites":["\uC778\uC6A9 {n}","CITED {n}","\u5F15\u7528 {n}","\u88AB\u5F15 {n}"],"guide.card":["9:16 \uD3EC\uD1A0\uCE74\uB4DC. \uD504\uB808\uC784 \uC548 \uC6B0\uC8FC\uC640 \uACE0\uB978 \uC218\uCE58\uB97C \uC774\uBBF8\uC9C0 \uD55C \uC7A5\uC774\uB098 15\uCD08 \uC601\uC0C1\uC73C\uB85C \uC800\uC7A5\uD569\uB2C8\uB2E4.","A 9:16 photo card: the cosmos inside the frame and the stats you pick, as one image or a fifteen-second clip.","9:16 \u306E\u30D5\u30A9\u30C8\u30AB\u30FC\u30C9\u3002\u30D5\u30EC\u30FC\u30E0\u5185\u306E\u5B87\u5B99\u3068\u9078\u3093\u3060\u6570\u5024\u3092\u3001\u753B\u50CF\u4E00\u679A\u304B15\u79D2\u306E\u52D5\u753B\u3067\u4FDD\u5B58\u3057\u307E\u3059\u3002","9:16 \u7167\u7247\u5361\uFF1A\u6846\u5185\u7684\u661F\u56FE\u4E0E\u6240\u9009\u6570\u636E\uFF0C\u4FDD\u5B58\u4E3A\u4E00\u5F20\u56FE\u7247\u6216 15 \u79D2\u89C6\u9891\u3002"],"audio.no":["\uC624\uB514\uC624\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4","Audio is unavailable","\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093","\u97F3\u9891\u4E0D\u53EF\u7528"],"audio.on":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC ON","AMBIENT SOUND ON","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 ON","\u73AF\u5883\u97F3\u6548 \u5F00"],"audio.off":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC OFF","AMBIENT SOUND OFF","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 OFF","\u73AF\u5883\u97F3\u6548 \u5173"],"pin.hint":["\uC870\uC808\uAE30 \uC704\uC5D0 \uCEE4\uC11C\uB97C \uC62C\uB9AC\uBA74 \u25C7 \uAC00 \uB098\uD0C0\uB0A9\uB2C8\uB2E4 \u2014 \uB204\uB974\uBA74 \uC704 \uAE30\uBCF8 \uBC14\uC640 \uC774 \uC11C\uB78D \uC0AC\uC774\uB97C \uC624\uAC11\uB2C8\uB2E4.","Hover a control and a \u25C7 appears \u2014 click it to move that control between the bar above and this drawer.","\u3064\u307E\u307F\u306B\u30AB\u30FC\u30BD\u30EB\u3092\u5408\u308F\u305B\u308B\u3068 \u25C7 \u304C\u73FE\u308C\u307E\u3059 \u2014 \u62BC\u3059\u3068\u4E0A\u306E\u30D0\u30FC\u3068\u3053\u306E\u5F15\u304D\u51FA\u3057\u306E\u9593\u3092\u79FB\u52D5\u3057\u307E\u3059\u3002","\u5C06\u5149\u6807\u79FB\u5230\u63A7\u5236\u9879\u4E0A\u4F1A\u51FA\u73B0 \u25C7 \u2014 \u70B9\u51FB\u53EF\u5728\u4E0A\u65B9\u57FA\u672C\u680F\u4E0E\u6B64\u62BD\u5C49\u4E4B\u95F4\u79FB\u52A8\u3002"],"pin.on":["{n} \xB7 \uAE30\uBCF8 \uBC14\uC5D0 \uACE0\uC815","{n} \xB7 pinned to the bar","{n} \xB7 \u30D0\u30FC\u306B\u56FA\u5B9A","{n} \xB7 \u5DF2\u56FA\u5B9A\u5230\u57FA\u672C\u680F"],"pin.off":["{n} \xB7 \uC11C\uB78D\uC73C\uB85C \uB0B4\uB9BC","{n} \xB7 moved to the drawer","{n} \xB7 \u5F15\u304D\u51FA\u3057\u3078","{n} \xB7 \u5DF2\u79FB\u5165\u62BD\u5C49"],"grp.cosmos":["\uC6B4\uB3D9","MOTION","\u904B\u52D5","\u8FD0\u52A8"],"deck.reset":["\uC81C\uC5B4\uD310 \uC704\uCE58\uB97C \uC790\uB3D9\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4","Deck placement handed back to the layout","\u30D1\u30CD\u30EB\u4F4D\u7F6E\u3092\u81EA\u52D5\u306B\u623B\u3057\u307E\u3057\u305F","\u5DF2\u6062\u590D\u9762\u677F\u7684\u81EA\u52A8\u5E03\u5C40"],"ctl.find":["\uCEE8\uD2B8\uB864 \uCC3E\uAE30","FIND A CONTROL","\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u691C\u7D22","\u67E5\u627E\u63A7\u4EF6"],"ctl.none":["\uD574\uB2F9\uD558\uB294 \uCEE8\uD2B8\uB864\uC774 \uC5C6\uC2B5\uB2C8\uB2E4","Nothing by that name","\u8A72\u5F53\u3059\u308B\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u3042\u308A\u307E\u305B\u3093","\u6CA1\u6709\u627E\u5230\u76F8\u5E94\u7684\u63A7\u4EF6"],"grid.on":["\uAE30\uC900 \uD3C9\uBA74 \uCF1C\uC9D0","REFERENCE PLANE ON","\u57FA\u6E96\u5E73\u9762 \u30AA\u30F3","\u57FA\u51C6\u5E73\u9762 \u5F00"],"grid.off":["\uAE30\uC900 \uD3C9\uBA74 \uAEBC\uC9D0","REFERENCE PLANE OFF","\u57FA\u6E96\u5E73\u9762 \u30AA\u30D5","\u57FA\u51C6\u5E73\u9762 \u5173"],"grp.bodies":["\uCC9C\uCCB4","BODIES","\u5929\u4F53","\u5929\u4F53"],"grp.light":["\uBE5B","LIGHT","\u5149","\u5149"],"snd.on":["\u266A \uC18C\uB9AC \uCF1C\uAE30","\u266A TURN SOUND ON","\u266A \u30B5\u30A6\u30F3\u30C9\u3092\u30AA\u30F3","\u266A \u6253\u5F00\u58F0\u97F3"],"snd.off":["\u266A \uC18C\uB9AC \uB044\uAE30","\u266A TURN SOUND OFF","\u266A \u30B5\u30A6\u30F3\u30C9\u3092\u30AA\u30D5","\u266A \u5173\u95ED\u58F0\u97F3"],"snd.mood":["\uBB34\uB4DC \xB7 \uB204\uB974\uBA74 \uBCFC\uD2B8\uAC00 \uD55C \uC18C\uC808 \uC5F0\uC8FC\uD569\uB2C8\uB2E4","MOOD \xB7 tap one and the vault plays a phrase in it","\u30E0\u30FC\u30C9 \xB7 \u62BC\u3059\u3068\u30DC\u30EB\u30C8\u304C\u4E00\u7BC0\u3092\u594F\u3067\u307E\u3059","\u60C5\u7EEA \xB7 \u70B9\u4E00\u4E0B\uFF0C\u4ED3\u5E93\u5C31\u7528\u5B83\u594F\u4E00\u5C0F\u6BB5"],"snd.m0":["\uACE0\uC694","CALM","\u9759\u3051\u3055","\u5B81\u9759"],"snd.m1":["\uBC24","NIGHT","\u591C","\u591C"],"snd.m2":["\uAFC8","DREAM","\u5922","\u68A6"],"snd.m3":["\uD45C\uB958","DRIFT","\u6F02\u6D41","\u6F02\u6D41"],"snd.m4":["\uAD11\uD65C","VAST","\u5E83\u304C\u308A","\u8FBD\u9614"],"snd.box":["\u266B \uC624\uB974\uACE8","\u266B MUSIC BOX","\u266B \u30AA\u30EB\u30B4\u30FC\u30EB","\u266B \u516B\u97F3\u76D2"],"snd.box.t":["\uD589\uC131\uC774 \uC790\uAE30 \uD56D\uC131\uACFC \uB098 \uC0AC\uC774\uB97C \uC9C0\uB0A0 \uB54C\uB9C8\uB2E4 \uADF8 \uB178\uD2B8\uC758 \uC74C\uC774 \uC6B8\uB9BD\uB2C8\uB2E4. \uADA4\uB3C4\uAC00 \uBE68\uB77C\uC9C0\uBA74 \uB178\uB798\uB3C4 \uBE68\uB77C\uC9D1\uB2C8\uB2E4.","Each planet sounds its note as it passes between its star and you. Speed the orbits up and the tune speeds up.","\u60D1\u661F\u304C\u81EA\u5206\u306E\u6052\u661F\u3068\u3042\u306A\u305F\u306E\u9593\u3092\u901A\u308B\u305F\u3073\u306B\u3001\u305D\u306E\u30CE\u30FC\u30C8\u306E\u97F3\u304C\u9CF4\u308A\u307E\u3059\u3002\u8ECC\u9053\u304C\u901F\u3044\u307B\u3069\u66F2\u3082\u901F\u304F\u306A\u308A\u307E\u3059\u3002","\u6BCF\u9897\u884C\u661F\u4ECE\u5B83\u7684\u6052\u661F\u548C\u4F60\u4E4B\u95F4\u7ECF\u8FC7\u65F6\uFF0C\u90FD\u4F1A\u594F\u51FA\u5B83\u90A3\u6761\u7B14\u8BB0\u7684\u97F3\u3002\u8F68\u9053\u8D8A\u5FEB\uFF0C\u66F2\u5B50\u8D8A\u5FEB\u3002"],"snd.box.on":["\uC624\uB974\uACE8 \uCF1C\uC9D0 \xB7 \uD589\uC131\uC774 \uC9C0\uB0A0 \uB54C \uC6B8\uB9BD\uB2C8\uB2E4","MUSIC BOX ON \xB7 planets sound as they pass","\u30AA\u30EB\u30B4\u30FC\u30EB \u30AA\u30F3 \xB7 \u60D1\u661F\u304C\u901A\u308B\u3068\u9CF4\u308A\u307E\u3059","\u516B\u97F3\u76D2 \u5F00 \xB7 \u884C\u661F\u7ECF\u8FC7\u65F6\u53D1\u58F0"],"snd.box.off":["\uC624\uB974\uACE8 \uAEBC\uC9D0","MUSIC BOX OFF","\u30AA\u30EB\u30B4\u30FC\u30EB \u30AA\u30D5","\u516B\u97F3\u76D2 \u5173"],"grp.sound":["\uC18C\uB9AC","SOUND","\u30B5\u30A6\u30F3\u30C9","\u58F0\u97F3"],"vendor.missing":["three.js\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774 \uC571\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC6D0\uACA9\uC5D0\uC11C \uBC1B\uC544\uC624\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4 \u2014 <b>vendor/three.min.js</b> \uC5D0 \uC9C1\uC811 \uB123\uC5B4 \uC8FC\uC138\uC694. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 THIRD-PARTY-NOTICES.md \uB97C \uBCF4\uC138\uC694.","three.js was not found. This app never fetches libraries remotely \u2014 place it at <b>vendor/three.min.js</b>. See THIRD-PARTY-NOTICES.md.","three.js \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30A2\u30D7\u30EA\u306F\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u9060\u9694\u304B\u3089\u53D6\u5F97\u3057\u307E\u305B\u3093 \u2014 <b>vendor/three.min.js</b> \u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u7D30\u306F THIRD-PARTY-NOTICES.md \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002","\u672A\u627E\u5230 three.js\u3002\u672C\u5E94\u7528\u4E0D\u4F1A\u8FDC\u7A0B\u83B7\u53D6\u5E93\u6587\u4EF6 \u2014 \u8BF7\u5C06\u5176\u653E\u5728 <b>vendor/three.min.js</b>\u3002\u8BE6\u60C5\u8BF7\u89C1 THIRD-PARTY-NOTICES.md\u3002"],"cap.label":["\uCD5C\uB300 \uB178\uB4DC","MAX NODES","\u6700\u5927\u30CE\u30FC\u30C9\u6570","\u6700\u5927\u8282\u70B9\u6570"],"cap.off":["\uC81C\uD55C \uC5C6\uC74C","NO LIMIT","\u5236\u9650\u306A\u3057","\u65E0\u9650\u5236"],"cap.hit":["\uB178\uD2B8 {total}\uAC1C \uC911 {n}\uAC1C\uB9CC \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4 \xB7 \uCD5C\uB300 \uB178\uB4DC \uC124\uC815\uC5D0\uC11C \uC870\uC815\uD558\uC138\uC694","Loaded {n} of {total} notes \xB7 raise the MAX NODES limit to see more","{total} \u4EF6\u4E2D {n} \u4EF6\u306E\u307F\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F \xB7 \u6700\u5927\u30CE\u30FC\u30C9\u6570\u306E\u8A2D\u5B9A\u3067\u5909\u66F4\u3067\u304D\u307E\u3059","\u4EC5\u8F7D\u5165 {total} \u7BC7\u4E2D\u7684 {n} \u7BC7 \xB7 \u53EF\u5728\u6700\u5927\u8282\u70B9\u6570\u8BBE\u7F6E\u4E2D\u8C03\u6574"],"excl.some":["\uC81C\uC678 \uC124\uC815\uC73C\uB85C {n}\uAC1C \uC81C\uC678\uB428","{n} excluded by your filters","\u9664\u5916\u8A2D\u5B9A\u306B\u3088\u308A {n} \u4EF6\u3092\u9664\u5916","\u6839\u636E\u6392\u9664\u8BBE\u7F6E\u5DF2\u6392\u9664 {n} \u9879"],"excl.all":["\uC81C\uC678 \uC124\uC815\uC774 \uBAA8\uB4E0 \uB178\uD2B8\uB97C \uAC78\uB7EC\uB0C8\uC2B5\uB2C8\uB2E4","Your exclusion filters removed every note","\u9664\u5916\u8A2D\u5B9A\u306B\u3088\u308A\u3059\u3079\u3066\u306E\u30CE\u30FC\u30C8\u304C\u9664\u304B\u308C\u307E\u3057\u305F","\u6392\u9664\u8BBE\u7F6E\u8FC7\u6EE4\u6389\u4E86\u5168\u90E8\u7B14\u8BB0"],"intro.lede":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131\uC785\uB2C8\uB2E4. \uC774\uAC83\uB9CC \uC54C\uBA74 \uCDA9\uBD84\uD788 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","Folders are stars, notes are planets. This much is enough to fly.","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F\u3067\u3059\u3002\u3053\u308C\u3060\u3051\u3067\u5341\u5206\u306B\u98DB\u3079\u307E\u3059\u3002","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u662F\u884C\u661F\u3002\u638C\u63E1\u8FD9\u4E9B\u5373\u53EF\u8D77\u98DE\u3002"],"intro.k5":["\uD074\uB9AD","CLICK","\u30AF\u30EA\u30C3\u30AF","\u5355\u51FB"],"intro.d5":["\uB178\uD2B8 \uC77D\uAE30 \u2014 \uC18D\uC131\xB7\uB9C1\uD06C\xB7\uBC1C\uCDCC\uAC00 \uC624\uB978\uCABD\uC5D0 \uB739\uB2C8\uB2E4","Read a note \u2014 its properties, links and excerpt appear on the right","\u30CE\u30FC\u30C8\u3092\u8AAD\u3080 \u2014 \u30D7\u30ED\u30D1\u30C6\u30A3\u30FB\u30EA\u30F3\u30AF\u30FB\u629C\u7C8B\u304C\u53F3\u306B\u51FA\u307E\u3059","\u9605\u8BFB\u7B14\u8BB0 \u2014 \u5C5E\u6027\u3001\u94FE\u63A5\u548C\u6458\u5F55\u663E\u793A\u5728\u53F3\u4FA7"],"intro.k3":["M \xB7 \uB354\uBE14\uD074\uB9AD","M \xB7 DBL-CLICK","M \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF","M \xB7 \u53CC\u51FB"],"intro.d6":["\uBCFC\uD2B8\uAC00 \uC0DD\uACA8\uB09C \uC21C\uC11C\uB300\uB85C \uB2E4\uC2DC \uC7AC\uC0DD\uD558\uAE30","Replay the vault forming, in the order you wrote it","\u30DC\u30EB\u30C8\u304C\u3067\u304D\u305F\u9806\u306B\u518D\u751F\u3059\u308B","\u6309\u5199\u4F5C\u987A\u5E8F\u91CD\u653E\u4ED3\u5E93\u7684\u5F62\u6210"],"intro.gen":["\u25CC \uC81C\uB124\uC2DC\uC2A4 \uBCF4\uAE30","\u25CC WATCH GENESIS","\u25CC \u30B8\u30A7\u30CD\u30B7\u30B9\u3092\u898B\u308B","\u25CC \u89C2\u770B\u521B\u4E16"],"intro.k1":["\uB04C\uAE30 \xB7 \uD720","DRAG \xB7 WHEEL","\u30C9\u30E9\u30C3\u30B0 \xB7 \u30DB\u30A4\u30FC\u30EB","\u62D6\u52A8 \xB7 \u6EDA\u8F6E"],"intro.d1":["\uB458\uB7EC\uBCF4\uAE30 \u2014 \uADA4\uB3C4 \uD68C\uC804\uACFC \uD655\uB300","Look around \u2014 orbit and zoom","\u898B\u56DE\u3059 \u2014 \u8ECC\u9053\u56DE\u8EE2\u3068\u30BA\u30FC\u30E0","\u73AF\u89C6 \u2014 \u8F68\u9053\u65CB\u8F6C\u4E0E\u7F29\u653E"],"intro.d2":["\uB178\uD2B8 \uC774\uB984\uC73C\uB85C \uCC3E\uC544\uAC00\uAE30","Find a note by name","\u30CE\u30FC\u30C8\u540D\u3067\u63A2\u3057\u3066\u79FB\u52D5","\u6309\u7B14\u8BB0\u540D\u79F0\u67E5\u627E"],"intro.d3":["\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB9C8\uC778\uB4DC\uB9F5\uC73C\uB85C \uD3BC\uCE58\uAE30","Open one note's neighbourhood as a mind map","\u30CE\u30FC\u30C8\u4E00\u3064\u306E\u96A3\u4EBA\u3092\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7\u3067\u958B\u304F","\u628A\u4E00\u7BC7\u7B14\u8BB0\u7684\u90BB\u5C45\u5C55\u5F00\u4E3A\u601D\u7EF4\u5BFC\u56FE"],"intro.d4":["\uACE0\uB978 \uB178\uD2B8\uB97C \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30","Open the selected note in Obsidian","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u3092Obsidian\u3067\u958B\u304F","\u5728 Obsidian \u4E2D\u6253\u5F00\u6240\u9009\u7B14\u8BB0"],"intro.foot":["\uB098\uBA38\uC9C0\uB294 \uC67C\uCABD \uB808\uC77C\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. ? \uB97C \uB204\uB974\uBA74 \uB2E8\uCD95\uD0A4 \uBAA9\uB85D\uC774, \uADF8 \uC81C\uBAA9\uC904\uC758 [ ? ] \uB97C \uB204\uB974\uBA74 \uD558\uB098\uD558\uB098 \uC124\uBA85\uC774 \uBD99\uC740 \uC804\uCCB4 \uC548\uB0B4\uAC00 \uC5F4\uB9BD\uB2C8\uB2E4.","The rest are on the rail at the left. Its ? opens the shortcut list, and the [ ? ] in that list's title bar opens the full guide, with a line on each of them.","\u6B8B\u308A\u306F\u5DE6\u306E\u30EC\u30FC\u30EB\u306B\u3042\u308A\u307E\u3059\u3002? \u3067\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u4E00\u89A7\u304C\u3001\u305D\u306E\u898B\u51FA\u3057\u306E [ ? ] \u3067\u4E00\u3064\u305A\u3064\u8AAC\u660E\u306E\u3064\u3044\u305F\u5168\u4F53\u30AC\u30A4\u30C9\u304C\u958B\u304D\u307E\u3059\u3002","\u5176\u4F59\u5185\u5BB9\u5728\u5DE6\u4FA7\u7684\u7AD6\u680F\u91CC\u3002\u70B9 ? \u6253\u5F00\u5FEB\u6377\u952E\u5217\u8868\uFF0C\u518D\u70B9\u5B83\u6807\u9898\u680F\u7684 [ ? ] \u4F1A\u6253\u5F00\u9010\u6761\u8BF4\u660E\u7684\u5B8C\u6574\u6307\u5357\u3002"],"intro.go":["\u25B6 \uB458\uB7EC\uBCF4\uAE30","\u25B6 START LOOKING","\u25B6 \u898B\u3066\u307E\u308F\u308B","\u25B6 \u5F00\u59CB\u6D4F\u89C8"],"intro.reopen":["\uCCAB \uBE44\uD589 \uC548\uB0B4 \uB2E4\uC2DC \uBCF4\uAE30","Show the first-flight guide again","\u306F\u3058\u3081\u3066\u306E\u98DB\u884C\u306E\u6848\u5185\u3092\u518D\u8868\u793A","\u91CD\u65B0\u663E\u793A\u9996\u6B21\u98DE\u884C\u6307\u5F15"],"guide.open":["\uC804\uCCB4 \uC548\uB0B4 \uC5F4\uAE30","Open the guide","\u30AC\u30A4\u30C9\u3092\u958B\u304F","\u6253\u5F00\u6307\u5357"],"guide.lede":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131, \uC778\uC6A9\uB41C \uCD9C\uCC98\uB294 \uC704\uC131\uC785\uB2C8\uB2E4. \uC544\uB798\uAC00 \uC774 \uD654\uBA74\uC774 \uD560 \uC218 \uC788\uB294 \uC77C \uC804\uBD80\uC785\uB2C8\uB2E4.","Folders are stars, notes are planets, cited sources are moons. Below is everything this screen can do.","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F\u3001\u5F15\u7528\u3055\u308C\u305F\u51FA\u5178\u306F\u885B\u661F\u3067\u3059\u3002\u4EE5\u4E0B\u304C\u3053\u306E\u753B\u9762\u306B\u3067\u304D\u308B\u3053\u3068\u306E\u3059\u3079\u3066\u3067\u3059\u3002","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u662F\u884C\u661F\uFF0C\u88AB\u5F15\u7528\u7684\u6765\u6E90\u662F\u536B\u661F\u3002\u4EE5\u4E0B\u662F\u8FD9\u4E2A\u753B\u9762\u80FD\u505A\u7684\u5168\u90E8\u4E8B\u60C5\u3002"],"guide.s.move":["\uC6C0\uC9C1\uC774\uAE30","MOVING","\u79FB\u52D5","\u79FB\u52A8"],"guide.s.find":["\uCC3E\uAE30","FINDING","\u63A2\u3059","\u67E5\u627E"],"guide.s.read":["\uADF8\uB9BC \uC77D\uAE30","READING THE PICTURE","\u56F3\u3092\u8AAD\u3080","\u8BFB\u56FE"],"guide.s.mode":["\uBAA8\uB4DC","MODES","\u30E2\u30FC\u30C9","\u6A21\u5F0F"],"guide.s.rest":["\uB098\uBA38\uC9C0","THE REST","\u305D\u306E\u4ED6","\u5176\u4ED6"],"guide.look":["\uBCFC\uD2B8 \uD55C\uAC00\uC6B4\uB370\uB97C \uCD95\uC73C\uB85C \uC2DC\uC810\uC774 \uB3CC\uACE0, \uD720\uC740 \uADF8 \uCD95\uC744 \uD5A5\uD574 \uB2E4\uAC00\uAC11\uB2C8\uB2E4.","The view turns about the middle of the vault, and the wheel moves in toward it.","\u8996\u70B9\u306F\u30DC\u30EB\u30C8\u306E\u4E2D\u5FC3\u3092\u8EF8\u306B\u56DE\u308A\u3001\u30DB\u30A4\u30FC\u30EB\u306F\u305D\u306E\u8EF8\u3078\u5BC4\u3063\u3066\u3044\u304D\u307E\u3059\u3002","\u89C6\u89D2\u7ED5\u4ED3\u5E93\u4E2D\u5FC3\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u671D\u90A3\u4E2A\u4E2D\u5FC3\u63A8\u8FD1\u3002"],"guide.pan":["\uADF8 \uCD95 \uC790\uCCB4\uB97C \uC62E\uAE41\uB2C8\uB2E4. \uD56D\uC131 \uD558\uB098\uB97C \uD654\uBA74 \uD55C\uAC00\uC6B4\uB370\uC5D0 \uB450\uACE0 \uC2F6\uC744 \uB54C.","Moves that centre. For putting one star in the middle of the frame.","\u305D\u306E\u4E2D\u5FC3\u305D\u306E\u3082\u306E\u3092\u52D5\u304B\u3057\u307E\u3059\u3002\u6052\u661F\u3072\u3068\u3064\u3092\u753B\u9762\u4E2D\u592E\u306B\u7F6E\u304D\u305F\u3044\u3068\u304D\u306B\u3002","\u79FB\u52A8\u90A3\u4E2A\u4E2D\u5FC3\u3002\u60F3\u628A\u67D0\u9897\u6052\u661F\u6446\u5728\u753B\u9762\u6B63\u4E2D\u65F6\u7528\u5B83\u3002"],"guide.drag":["\uCC9C\uCCB4 \uD558\uB098\uB97C \uB04C\uC5B4\uB0C5\uB2C8\uB2E4. \uB193\uC73C\uBA74 \uC81C\uC790\uB9AC\uB85C \uB3CC\uC544\uAC00\uACE0, \uB3CC\uC544\uAC00\uB294 \uD798\uC740 NODE GRAVITY\uAC00 \uC815\uD569\uB2C8\uB2E4.","Pulls one body out of place. It springs back when you let go, and NODE GRAVITY decides how hard.","\u5929\u4F53\u3092\u4E00\u3064\u5F15\u304D\u51FA\u3057\u307E\u3059\u3002\u96E2\u3059\u3068\u5143\u306B\u623B\u308A\u3001\u305D\u306E\u5F37\u3055\u306F NODE GRAVITY \u304C\u6C7A\u3081\u307E\u3059\u3002","\u628A\u67D0\u4E2A\u5929\u4F53\u62C9\u51FA\u539F\u4F4D\u3002\u677E\u624B\u540E\u4F1A\u5F39\u56DE\uFF0C\u56DE\u5F39\u7684\u529B\u5EA6\u7531 NODE GRAVITY \u51B3\u5B9A\u3002"],"guide.reset":["\uC2DC\uC810\uC744 \uCC98\uC74C \uC790\uB9AC\uB85C \uB418\uB3CC\uB9BD\uB2C8\uB2E4. \uC120\uD0DD\uACFC \uBAA8\uB4DC\uB294 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Puts the camera back where it started. Leaves the selection and the modes alone.","\u8996\u70B9\u3092\u6700\u521D\u306E\u4F4D\u7F6E\u306B\u623B\u3057\u307E\u3059\u3002\u9078\u629E\u3068\u30E2\u30FC\u30C9\u306B\u306F\u89E6\u308C\u307E\u305B\u3093\u3002","\u628A\u89C6\u89D2\u6062\u590D\u5230\u521D\u59CB\u4F4D\u7F6E\u3002\u4E0D\u6539\u52A8\u9009\u62E9\u4E0E\u6A21\u5F0F\u3002"],"guide.search":["\uB178\uD2B8\uC640 \uC870\uC808\uAE30\uC640 \uB3D9\uC791\uC774 \uD55C \uC0C1\uC790\uC5D0 \uB4E4\uC5B4\uC635\uB2C8\uB2E4. \uB178\uD2B8\uB294 \uC774\uB984\xB7\uACBD\uB85C\xB7\uD0DC\uADF8\xB7\uC18D\uC131 \uC5B4\uB290 \uCABD\uC73C\uB85C\uB3C4 \uAC78\uB9BD\uB2C8\uB2E4.","Notes, controls and actions in one box. A note matches on its name, its path, its tags or its properties.","\u30CE\u30FC\u30C8\u3082\u3064\u307E\u307F\u3082\u52D5\u4F5C\u3082\u4E00\u3064\u306E\u7BB1\u306B\u5165\u308A\u307E\u3059\u3002\u30CE\u30FC\u30C8\u306F\u540D\u524D\u30FB\u30D1\u30B9\u30FB\u30BF\u30B0\u30FB\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u3069\u308C\u3067\u3082\u5F15\u3063\u304B\u304B\u308A\u307E\u3059\u3002","\u7B14\u8BB0\u3001\u63A7\u4EF6\u4E0E\u52A8\u4F5C\u90FD\u5728\u540C\u4E00\u4E2A\u6846\u91CC\u3002\u7B14\u8BB0\u53EF\u6309\u540D\u79F0\u3001\u8DEF\u5F84\u3001\u6807\u7B7E\u6216\u5C5E\u6027\u547D\u4E2D\u3002"],"guide.note":["\uACE0\uB978 \uB178\uD2B8\uB97C \uC624\uB7EC\uB9AC \uC606\uC5D0 \uC5FD\uB2C8\uB2E4. \uC6B0\uC8FC\uB294 \uADF8 \uC790\uB9AC\uC5D0 \uADF8\uB300\uB85C \uB0A8\uC2B5\uB2C8\uB2E4.","Opens the selected note beside the orrery. The cosmos stays exactly where it was.","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u3092\u30AA\u30FC\u30E9\u30EA\u30FC\u306E\u96A3\u306B\u958B\u304D\u307E\u3059\u3002\u5B87\u5B99\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002","\u5728\u661F\u4EEA\u65C1\u8FB9\u6253\u5F00\u6240\u9009\u7B14\u8BB0\uFF0C\u661F\u56FE\u4ECD\u7559\u5728\u539F\u5904\u3002"],"guide.broken":["\uC67C\uCABD \uC704 BROKEN \uC22B\uC790\uB97C \uB204\uB974\uBA74 \uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uB97C \uAC00\uC9C4 \uB178\uD2B8\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4. \uBB34\uC5C7\uC744 \uD5A5\uD588\uB294\uC9C0\uB294 \uC778\uC2A4\uD399\uD130\uAC00 \uC774\uB984\uC73C\uB85C \uC54C\uB824\uC90D\uB2C8\uB2E4.","Click the BROKEN count, upper left, to keep only the notes carrying dead links. The inspector names what each one was reaching for.","\u5DE6\u4E0A\u306E BROKEN \u306E\u6570\u3092\u62BC\u3059\u3068\u3001\u5207\u308C\u305F\u30EA\u30F3\u30AF\u3092\u6301\u3064\u30CE\u30FC\u30C8\u3060\u3051\u304C\u6B8B\u308A\u307E\u3059\u3002\u4F55\u3092\u6307\u3057\u3066\u3044\u305F\u304B\u306F\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u304C\u540D\u524D\u3067\u793A\u3057\u307E\u3059\u3002","\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684 BROKEN \u6570\u5B57\uFF0C\u53EA\u4FDD\u7559\u5E26\u6709\u5931\u6548\u94FE\u63A5\u7684\u7B14\u8BB0\u3002\u6307\u5411\u7684\u76EE\u6807\u7531\u68C0\u67E5\u5668\u6309\u540D\u79F0\u5217\u51FA\u3002"],"guide.route":["\uC778\uC2A4\uD399\uD130\uC758 \uBC84\uD2BC\uC785\uB2C8\uB2E4. \uD55C\uCABD\uC5D0\uC11C \uB204\uB974\uACE0 \uB2E4\uB978 \uCABD\uC744 \uACE0\uB974\uBA74 \uB450 \uB178\uD2B8 \uC0AC\uC774 \uCD5C\uB2E8 \uACBD\uB85C\uAC00 \uCF1C\uC9C0\uACE0, \uB098\uBA38\uC9C0 \uBCFC\uD2B8\uB294 \uD754\uC801\uC73C\uB85C \uB0B4\uB824\uAC11\uB2C8\uB2E4.","The inspector button. Press it on one note, pick the other, and the shortest way between them lights up with the rest of the vault held down to a trace.","\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u306E\u30DC\u30BF\u30F3\u3067\u3059\u3002\u7247\u65B9\u3067\u62BC\u3057\u3066\u3082\u3046\u7247\u65B9\u3092\u9078\u3076\u3068\u3001\u4E8C\u3064\u306E\u30CE\u30FC\u30C8\u306E\u6700\u77ED\u7D4C\u8DEF\u304C\u706F\u308A\u3001\u6B8B\u308A\u306F\u75D5\u8DE1\u307E\u3067\u843D\u3061\u307E\u3059\u3002","\u68C0\u67E5\u5668\u4E0A\u7684\u6309\u94AE\u3002\u5728\u4E00\u7AEF\u6309\u4E0B\uFF0C\u518D\u9009\u53E6\u4E00\u7AEF\uFF0C\u4E24\u7BC7\u7B14\u8BB0\u4E4B\u95F4\u7684\u6700\u77ED\u8DEF\u5F84\u4F1A\u4EAE\u8D77\uFF0C\u5176\u4F59\u90E8\u5206\u5219\u538B\u6697\u6210\u75D5\u8FF9\u3002"],"guide.layer":["ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF \uB97C \uB3D5\uB2C8\uB2E4. BRIDGE\uB294 \uC790\uAE30 \uD3F4\uB354\uB97C \uBC97\uC5B4\uB098\uB294 \uB9C1\uD06C\uB9CC \uB0A8\uAE30\uB294 \uCE35\uC774\uACE0, \uB0A8\uB294 \uAC83\uC774 \uACE7 \uC2DC\uC2A4\uD15C \uC0AC\uC774\uC758 \uC655\uB798\uC785\uB2C8\uB2E4.","Cycles ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF. BRIDGE keeps only the links that leave their own folder, and what is left is the traffic between systems.","ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF \u3092\u9806\u306B\u5207\u308A\u66FF\u3048\u307E\u3059\u3002BRIDGE \u306F\u81EA\u5206\u306E\u30D5\u30A9\u30EB\u30C0\u3092\u51FA\u308B\u30EA\u30F3\u30AF\u3060\u3051\u3092\u6B8B\u3059\u5C64\u3067\u3001\u6B8B\u308B\u3082\u306E\u304C\u30B7\u30B9\u30C6\u30E0\u9593\u306E\u5F80\u6765\u3067\u3059\u3002","\u4F9D\u6B21\u5207\u6362 ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF\u3002BRIDGE \u53EA\u4FDD\u7559\u8DE8\u51FA\u81EA\u8EAB\u6587\u4EF6\u5939\u7684\u94FE\u63A5\uFF0C\u5269\u4E0B\u7684\u6B63\u662F\u5404\u661F\u7CFB\u4E4B\u95F4\u7684\u5F80\u6765\u3002"],"guide.grid":["\uCC9C\uCCB4\uB4E4\uC774 \uB193\uC778 \uBC14\uB85C \uADF8 \uD3C9\uBA74\uC5D0 \uAE30\uC900\uBA74\uC744 \uAE5D\uB2C8\uB2E4. \uBB34\uC5C7\uC774 \uC704\uC5D0 \uC788\uACE0 \uBB34\uC5C7\uC774 \uC544\uB798\uC778\uC9C0 \uC77D\uC73C\uB824\uBA74 \uBC14\uB2E5\uC774 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.","Lays a reference plane on the plane the bodies are arranged in. Reading what is above and what is below takes a floor.","\u5929\u4F53\u304C\u4E26\u3093\u3067\u3044\u308B\u305D\u306E\u5E73\u9762\u306B\u57FA\u6E96\u9762\u3092\u6577\u304D\u307E\u3059\u3002\u4F55\u304C\u4E0A\u3067\u4F55\u304C\u4E0B\u304B\u3092\u8AAD\u3080\u306B\u306F\u5E8A\u304C\u8981\u308A\u307E\u3059\u3002","\u5728\u5929\u4F53\u6240\u5728\u7684\u90A3\u4E2A\u5E73\u9762\u4E0A\u94FA\u4E00\u5C42\u57FA\u51C6\u9762\u3002\u8981\u8BFB\u51FA\u9AD8\u4F4E\uFF0C\u5148\u5F97\u6709\u4E2A\u5730\u9762\u3002"],"guide.ripple":["\uACE0\uB978 \uB178\uD2B8\uC5D0\uC11C \uB9C1\uD06C\uB97C \uB530\uB77C \uD30C\uBB38\uC774 \uBC88\uC9D1\uB2C8\uB2E4. \uBA87 \uD649 \uB9CC\uC5D0 \uC5B4\uB514\uAE4C\uC9C0 \uB2FF\uB294\uC9C0\uAC00 \uBCF4\uC785\uB2C8\uB2E4.","A wave runs out from the selected note along its links, so you can see how far it reaches and in how many hops.","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u304B\u3089\u30EA\u30F3\u30AF\u3092\u4F1D\u3063\u3066\u6CE2\u7D0B\u304C\u5E83\u304C\u308A\u307E\u3059\u3002\u4F55\u30DB\u30C3\u30D7\u3067\u3069\u3053\u307E\u3067\u5C4A\u304F\u304B\u304C\u898B\u3048\u307E\u3059\u3002","\u6D9F\u6F2A\u4ECE\u6240\u9009\u7B14\u8BB0\u6CBF\u7740\u94FE\u63A5\u6269\u6563\uFF0C\u80FD\u770B\u51FA\u5B83\u7ECF\u8FC7\u51E0\u8DF3\u3001\u80FD\u4F20\u5230\u591A\u8FDC\u3002"],"guide.mind":["\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB450 \uD649\uAE4C\uC9C0 \uC81C\uC790\uB9AC\uC5D0 \uD3BC\uCE69\uB2C8\uB2E4. \uC6B0\uC8FC\uAC00 \uADF8 \uB178\uD2B8\uB97C \uC911\uC2EC\uC73C\uB85C \uB2E4\uC2DC \uBC30\uC5F4\uB429\uB2C8\uB2E4.","One note and its neighbourhood, two hops out, laid out in place \u2014 the cosmos rearranges itself around it.","\u30CE\u30FC\u30C8\u4E00\u3064\u306E\u96A3\u4EBA\u3092\u4E8C\u30DB\u30C3\u30D7\u307E\u3067\u305D\u306E\u5834\u306B\u5E83\u3052\u307E\u3059\u3002\u5B87\u5B99\u304C\u305D\u306E\u30CE\u30FC\u30C8\u3092\u4E2D\u5FC3\u306B\u4E26\u3073\u76F4\u3057\u307E\u3059\u3002","\u628A\u4E00\u7BC7\u7B14\u8BB0\u7684\u90BB\u5C45\u5C55\u5F00\u4E24\u8DF3\uFF0C\u5C31\u5730\u94FA\u5F00\u2014\u2014\u661F\u56FE\u4F1A\u56F4\u7ED5\u5B83\u91CD\u65B0\u6392\u5217\u3002"],"guide.gen":["\uBCFC\uD2B8\uB97C \uBB34(\u7121)\uAE4C\uC9C0 \uB418\uAC10\uC558\uB2E4\uAC00 \uC624\uB298\uAE4C\uC9C0 \uB2E4\uC2DC \uB9CC\uB4ED\uB2C8\uB2E4. \uC644\uC131\uB41C \uADF8\uB798\uD504\uC758 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC544\uB2C8\uB77C \uB178\uD2B8\uAC00 \uC2E4\uC81C\uB85C \uC4F0\uC778 \uC21C\uC11C\uC774\uACE0, \uB208\uAE08\uC744 \uC9C1\uC811 \uB04C \uC218 \uC788\uC2B5\uB2C8\uB2E4.","Rewinds the vault to nothing and builds it forward to today. Not an animation of the finished graph \u2014 the order the notes were actually written, with a scrubber on it.","\u30DC\u30EB\u30C8\u3092\u7121\u307E\u3067\u5DFB\u304D\u623B\u3057\u3001\u4ECA\u65E5\u307E\u3067\u4F5C\u308A\u76F4\u3057\u307E\u3059\u3002\u5B8C\u6210\u3057\u305F\u30B0\u30E9\u30D5\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u306A\u304F\u3001\u30CE\u30FC\u30C8\u304C\u5B9F\u969B\u306B\u66F8\u304B\u308C\u305F\u9806\u5E8F\u3067\u3001\u76EE\u76DB\u308A\u3092\u81EA\u5206\u3067\u52D5\u304B\u305B\u307E\u3059\u3002","\u628A\u4ED3\u5E93\u5012\u56DE\u865A\u65E0\uFF0C\u518D\u4E00\u8DEF\u5EFA\u5230\u4ECA\u5929\u3002\u8FD9\u4E0D\u662F\u6210\u54C1\u56FE\u7684\u52A8\u753B\uFF0C\u800C\u662F\u7B14\u8BB0\u771F\u6B63\u88AB\u5199\u4E0B\u7684\u987A\u5E8F\uFF0C\u5E76\u4E14\u53EF\u4EE5\u624B\u52A8\u62D6\u52A8\u8FDB\u5EA6\u3002"],"guide.poster":["HUD \uC5C6\uB294 \uACE0\uD574\uC0C1\uB3C4 PNG \uD55C \uC7A5. \uD654\uBA74\uC758 \uBCF5\uC81C\uAC00 \uC544\uB2C8\uB77C \uD654\uBA74\uBCF4\uB2E4 \uD06C\uAC8C \uADF8\uB824\uC9D1\uB2C8\uB2E4.","One high-resolution PNG of the cosmos with no HUD on it \u2014 drawn larger than the screen, not copied from it.","HUD \u306E\u306A\u3044\u9AD8\u89E3\u50CF\u5EA6 PNG \u3092\u4E00\u679A\u3002\u753B\u9762\u306E\u8907\u88FD\u3067\u306F\u306A\u304F\u3001\u753B\u9762\u3088\u308A\u5927\u304D\u304F\u63CF\u304B\u308C\u307E\u3059\u3002","\u4E00\u5F20\u4E0D\u542B HUD \u7684\u9AD8\u5206\u8FA8\u7387 PNG\u2014\u2014\u6BD4\u5C4F\u5E55\u66F4\u5927\uFF0C\u800C\u4E0D\u662F\u5C4F\u5E55\u7684\u590D\u5236\u3002"],"guide.sound":["\uB178\uD2B8\uB9C8\uB2E4 \uC790\uAE30 \uC74C\uB192\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uBB3C\uC5B4\uBCF4\uAE30 \uC804\uC5D0\uB294 \uC6B8\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Every note has a pitch of its own. Silent until you ask for it.","\u30CE\u30FC\u30C8\u306B\u306F\u305D\u308C\u305E\u308C\u306E\u97F3\u9AD8\u304C\u3042\u308A\u307E\u3059\u3002\u6C42\u3081\u308B\u307E\u3067\u306F\u9CF4\u308A\u307E\u305B\u3093\u3002","\u6BCF\u7BC7\u7B14\u8BB0\u90FD\u6709\u81EA\u5DF1\u7684\u97F3\u9AD8\u3002\u4F60\u4E0D\u5F00\u53E3\uFF0C\u5B83\u5C31\u4E0D\u54CD\u3002"],"guide.hud":["\uD328\uB110\uC744 \uC804\uBD80 \uAC10\uCDA5\uB2C8\uB2E4. \uC6B0\uC8FC\uB294 \uB4A4\uC5D0\uC11C \uADF8\uB300\uB85C \uB3D5\uB2C8\uB2E4.","Hides every panel. The cosmos keeps turning behind it.","\u30D1\u30CD\u30EB\u3092\u3059\u3079\u3066\u96A0\u3057\u307E\u3059\u3002\u5B87\u5B99\u306F\u305D\u306E\u307E\u307E\u56DE\u308A\u7D9A\u3051\u307E\u3059\u3002","\u9690\u85CF\u5168\u90E8\u9762\u677F\u3002\u661F\u56FE\u7167\u65E7\u8FD0\u8F6C\u3002"],"guide.help":["\uC774 \uC548\uB0B4\uC785\uB2C8\uB2E4. \uC67C\uCABD \uB808\uC77C ? \uB97C \uB20C\uB7EC \uC5EC\uB294 SHORTCUTS \uC81C\uBAA9\uC904\uC758 [ ? ] \uB3C4 \uAC19\uC740 \uAC83\uC744 \uC5FD\uB2C8\uB2E4.","This card. So does the [ ? ] in the title bar of SHORTCUTS, which the ? on the left rail opens.","\u3053\u306E\u6848\u5185\u3067\u3059\u3002\u5DE6\u306E\u30EC\u30FC\u30EB\u306E ? \u3067\u958B\u304F SHORTCUTS \u306E\u898B\u51FA\u3057\u306B\u3042\u308B [ ? ] \u3082\u540C\u3058\u3082\u306E\u3092\u958B\u304D\u307E\u3059\u3002","\u5C31\u662F\u8FD9\u5F20\u5361\u7247\u3002\u5DE6\u4FA7\u7AD6\u680F ? \u6253\u5F00\u7684 SHORTCUTS \u6807\u9898\u680F\u91CC\u7684 [ ? ] \u6253\u5F00\u7684\u4E5F\u662F\u5B83\u3002"],"guide.foot":["\uC870\uC808\uAE30\uB294 \uC67C\uCABD \uB808\uC77C\uC758 \u2699 \uC11C\uB78D \uC548\uC5D0 \uC788\uACE0, \uAC80\uC0C9 \uC0C1\uC790\uC5D0\uC11C \uC774\uB984\uC73C\uB85C \uBC14\uB85C \uBD80\uB97C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \xB7 ","Every control lives in the \u2699 drawer on the left rail, and the search box will call one up by name. \xB7 ","\u3064\u307E\u307F\u306F\u5DE6\u306E\u30EC\u30FC\u30EB\u306E \u2699 \u306E\u5F15\u304D\u51FA\u3057\u306E\u4E2D\u306B\u3042\u308A\u3001\u691C\u7D22\u30DC\u30C3\u30AF\u30B9\u304B\u3089\u540D\u524D\u3067\u547C\u3073\u51FA\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \xB7 ","\u6240\u6709\u63A7\u4EF6\u90FD\u5728\u5DE6\u4FA7\u7AD6\u680F \u2699 \u7684\u62BD\u5C49\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u641C\u7D22\u6846\u4E2D\u6309\u540D\u79F0\u76F4\u63A5\u8C03\u51FA\u3002 \xB7 "],"kd.spd":["\uADA4\uB3C4 \uC2DC\uACC4\uC758 \uC18D\uB3C4. 0\uC774\uBA74 \uD558\uB298 \uC804\uCCB4\uAC00 \uBA48\uCDA5\uB2C8\uB2E4 \u2014 \uD61C\uC131\uB3C4, \uBCC4\uC758 \uD45C\uBA74\uB3C4.","The orbital clock. At zero the whole sky stops, the comet and the star's own face with it.","\u8ECC\u9053\u6642\u8A08\u306E\u901F\u3055\u30020 \u3067\u7A7A\u5168\u4F53\u304C\u6B62\u307E\u308A\u307E\u3059 \u2014 \u5F57\u661F\u3082\u661F\u306E\u8868\u9762\u3082\u3002","\u8F68\u9053\u65F6\u949F\u7684\u5FEB\u6162\u3002\u5F52\u96F6\u65F6\u6574\u7247\u5929\u7A7A\u9759\u6B62\u2014\u2014\u5F57\u661F\u4E0E\u6052\u661F\u8868\u9762\u4E5F\u4E00\u6837\u3002"],"kd.bri":["\uBAA8\uB4E0 \uCC9C\uCCB4\uC758 \uD6C4\uAD11\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4. \uC885\uB958\uBCC4 \uBC30\uBD84\uC740 BODIES \uCABD\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.","Raises every body's halo at once. The balance between the kinds is under BODIES.","\u3059\u3079\u3066\u306E\u5929\u4F53\u306E\u5149\u8F2A\u3092\u4E00\u5EA6\u306B\u4E0A\u3052\u307E\u3059\u3002\u7A2E\u985E\u3054\u3068\u306E\u914D\u5206\u306F BODIES \u306B\u3042\u308A\u307E\u3059\u3002","\u4E00\u6B21\u62AC\u5347\u6240\u6709\u5929\u4F53\u7684\u5149\u6655\u3002\u5404\u7C7B\u4E4B\u95F4\u7684\u914D\u6BD4\u5728 BODIES \u91CC\u3002"],"kd.lnk":["\uB9C1\uD06C\uAC00 \uB0B4\uB294 \uBE5B\uC758 \uC591. \uAD75\uAE30\uB294 LINE WIDTH\uAC00 \uB530\uB85C \uB9E1\uC2B5\uB2C8\uB2E4.","How much light a link gives off. How thick it is drawn is LINE WIDTH's job.","\u30EA\u30F3\u30AF\u304C\u653E\u3064\u5149\u306E\u91CF\u3002\u592A\u3055\u306F LINE WIDTH \u304C\u5225\u306B\u53D7\u3051\u6301\u3061\u307E\u3059\u3002","\u94FE\u63A5\u53D1\u51FA\u7684\u5149\u91CF\u3002\u7C97\u7EC6\u7531 LINE WIDTH \u5355\u72EC\u8D1F\u8D23\u3002"],"kd.gap":["\uD56D\uC131\uACC4 \uC0AC\uC774\uC758 \uAC04\uACA9. \uBCFC\uD2B8\uAC00 \uB113\uC5B4\uC9C8 \uBFD0, \uBB34\uC5C7\uC774 \uC5B4\uB514\uC5D0 \uC788\uB294\uC9C0\uB294 \uADF8\uB300\uB85C\uC785\uB2C8\uB2E4.","The room between systems. The vault opens out; what sits where does not change.","\u6052\u661F\u7CFB\u306E\u3042\u3044\u3060\u306E\u9593\u9694\u3002\u30DC\u30EB\u30C8\u304C\u5E83\u304C\u308B\u3060\u3051\u3067\u3001\u4F55\u304C\u3069\u3053\u306B\u3042\u308B\u304B\u306F\u5909\u308F\u308A\u307E\u305B\u3093\u3002","\u5404\u661F\u7CFB\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002\u4ED3\u5E93\u53EA\u662F\u53D8\u5BBD\uFF0C\u4EC0\u4E48\u5728\u54EA\u91CC\u5E76\u4E0D\u6539\u53D8\u3002"],"kd.maxNodes":["\uADF8\uB9B4 \uB178\uD2B8 \uC218\uC758 \uCC9C\uC7A5. \uAEBC\uC9C4 \uCC44\uB85C \uB098\uAC11\uB2C8\uB2E4 \u2014 \uBCFC\uD2B8 \uC808\uBC18\uC744 \uC870\uC6A9\uD788 \uBC84\uB9AC\uB290\uB2C8 \uCCAB 1\uBD84\uC774 \uB290\uB9B0 \uD3B8\uC774 \uB0AB\uC2B5\uB2C8\uB2E4.","A ceiling on how many notes are drawn. Ships off: a slow first minute beats silently dropping half a vault.","\u63CF\u304F\u30CE\u30FC\u30C8\u6570\u306E\u4E0A\u9650\u3002\u65E2\u5B9A\u306F\u30AA\u30D5 \u2014 \u30DC\u30EB\u30C8\u306E\u534A\u5206\u3092\u9ED9\u3063\u3066\u6368\u3066\u308B\u3088\u308A\u3001\u6700\u521D\u306E\u4E00\u5206\u304C\u9045\u3044\u307B\u3046\u304C\u307E\u3057\u3067\u3059\u3002","\u7ED8\u5236\u7B14\u8BB0\u6570\u91CF\u7684\u4E0A\u9650\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5B81\u53EF\u7B2C\u4E00\u5206\u949F\u6162\uFF0C\u4E5F\u4E0D\u8981\u6084\u6084\u4E22\u6389\u534A\u4E2A\u4ED3\u5E93\u3002"],"kd.arc":["\uB9C1\uD06C\uAC00 \uADA4\uB3C4\uBA74 \uC704\uB85C \uC5BC\uB9C8\uB098 \uC19F\uB294\uC9C0. 0\uC774\uBA74 \uD3C9\uBA74 \uC548\uC5D0 \uB215\uC2B5\uB2C8\uB2E4.","How high a link stands out of the plane the bodies orbit in. At zero it lies flat inside it.","\u30EA\u30F3\u30AF\u304C\u8ECC\u9053\u9762\u304B\u3089\u3069\u308C\u3060\u3051\u7ACB\u3061\u4E0A\u304C\u308B\u304B\u30020 \u3067\u305D\u306E\u9762\u306B\u5BDD\u307E\u3059\u3002","\u94FE\u63A5\u4ECE\u8F68\u9053\u5E73\u9762\u4E0A\u62F1\u8D77\u591A\u9AD8\u3002\u5F52\u96F6\u65F6\u5C31\u5E73\u8EBA\u5728\u9762\u5185\u3002"],"kd.ten":["\uB9C1\uD06C\uC5D0 \uACE1\uB960\uC774 \uC5BC\uB9C8\uB098 \uC788\uB294\uC9C0. 1\uC774\uBA74 \uD33D\uD33D\uD558\uACE0 0\uC774\uBA74 \uB298\uC5B4\uC9D1\uB2C8\uB2E4.","How much curve a link has at all. Taut at one, slack at zero.","\u30EA\u30F3\u30AF\u306B\u3069\u308C\u3060\u3051\u66F2\u7387\u304C\u3042\u308B\u304B\u30021 \u3067\u5F35\u308A\u30010 \u3067\u305F\u308B\u307F\u307E\u3059\u3002","\u94FE\u63A5\u7A76\u7ADF\u6709\u591A\u5C11\u5F27\u5EA6\u3002\u4E3A\u4E00\u5219\u7EF7\u7D27\uFF0C\u4E3A\u96F6\u5219\u677E\u5782\u3002"],"kd.bnd":["\uB9C1\uD06C\uC758 \uC591 \uB05D\uC744 \uAC01\uC790\uC758 \uD56D\uC131 \uCABD\uC73C\uB85C \uB2F9\uAE41\uB2C8\uB2E4. \uAC19\uC740 \uAE38\uC744 \uAC00\uB294 \uB9C1\uD06C\uB4E4\uC774 \uD55C \uAC00\uB2E5\uC73C\uB85C \uB54B\uC785\uB2C8\uB2E4.","Draws each end of a link toward its own star, so links going the same way braid into one strand.","\u30EA\u30F3\u30AF\u306E\u4E21\u7AEF\u3092\u305D\u308C\u305E\u308C\u306E\u6052\u661F\u3078\u5BC4\u305B\u307E\u3059\u3002\u540C\u3058\u9053\u3092\u884C\u304F\u30EA\u30F3\u30AF\u304C\u4E00\u672C\u306B\u7DE8\u307E\u308C\u307E\u3059\u3002","\u628A\u94FE\u63A5\u4E24\u7AEF\u5404\u81EA\u62C9\u5411\u81EA\u5DF1\u7684\u6052\u661F\uFF0C\u540C\u8DEF\u7684\u94FE\u63A5\u4FBF\u7F16\u6210\u4E00\u80A1\u3002"],"kd.lwd":["\uB9C1\uD06C\uC640 \uADA4\uB3C4 \uC790\uAD6D\uACFC \uD61C\uC131 \uAF2C\uB9AC\uC758 \uAD75\uAE30. \uD53D\uC140\uC774 \uB2E8\uC704\uC785\uB2C8\uB2E4.","How thick the links, the wakes and the comet's tails are drawn, counted in pixels.","\u30EA\u30F3\u30AF\u3068\u8ECC\u9053\u306E\u8DE1\u3068\u5F57\u661F\u306E\u5C3E\u306E\u592A\u3055\u3002\u5358\u4F4D\u306F\u30D4\u30AF\u30BB\u30EB\u3067\u3059\u3002","\u94FE\u63A5\u3001\u8F68\u8FF9\u4E0E\u5F57\u5C3E\u7684\u7C97\u7EC6\uFF0C\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\u3002"],"kd.spr":["\uD55C \uD56D\uC131\uACC4 \uC548\uC5D0\uC11C \uADA4\uB3C4\uAC00 \uC5BC\uB9C8\uB098 \uBC8C\uC5B4\uC9C0\uB294\uC9C0. \uACC4 \uC0AC\uC774\uC758 \uAC04\uACA9\uC740 ORBIT GAP\uC785\uB2C8\uB2E4.","How far apart the orbits inside one system sit. The room between systems is ORBIT GAP.","\u4E00\u3064\u306E\u6052\u661F\u7CFB\u306E\u4E2D\u3067\u8ECC\u9053\u304C\u3069\u308C\u3060\u3051\u958B\u304F\u304B\u3002\u7CFB\u306E\u3042\u3044\u3060\u306F ORBIT GAP \u3067\u3059\u3002","\u540C\u4E00\u661F\u7CFB\u5185\u5404\u6761\u8F68\u9053\u4E4B\u95F4\u7684\u758F\u5BC6\u3002\u661F\u7CFB\u4E4B\u95F4\u7684\u95F4\u8DDD\u662F ORBIT GAP\u3002"],"kd.sph":["\uB0A9\uC791\uD55C \uC6D0\uBC18\uC744 \uAD6C\uB85C \uC5FD\uB2C8\uB2E4. 1\uC774\uBA74 \uC6D0\uBC18, 0\uC774\uBA74 \uAECD\uC9C8.","Opens the flat disc into a sphere. A disc at one, a shell at zero.","\u5E73\u3089\u306A\u5186\u76E4\u3092\u7403\u3078\u958B\u304D\u307E\u3059\u30021 \u3067\u5186\u76E4\u30010 \u3067\u6BBB\u3002","\u628A\u6241\u5E73\u7684\u5706\u76D8\u5C55\u5F00\u6210\u7403\u3002\u4E3A\u4E00\u662F\u76D8\uFF0C\u4E3A\u96F6\u662F\u58F3\u3002"],"kd.str":["\uBC24\uD558\uB298\uC774 \uC5BC\uB9C8\uB098 \uC5B4\uB450\uC6B4\uAC00. \uC62C\uB9AC\uBA74 \uBC1D\uC740 \uBCC4\uBD80\uD130 \uD558\uB098\uC529 \uB298\uACE0, \uC740\uD558\uC218\uC640 \uC131\uC6B4\uC774 \uCC28\uB840\uB85C \uB5A0\uC624\uB985\uB2C8\uB2E4. OFF\uBA74 \uBCFC\uD2B8\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4.","How dark the sky is. Turn it up and the bright stars come first, then fainter ones between them, then the Milky Way and the gas. OFF is the vault alone.","\u591C\u7A7A\u306E\u6697\u3055\u3002\u4E0A\u3052\u308B\u3068\u660E\u308B\u3044\u661F\u304B\u3089\u4E00\u3064\u305A\u3064\u5897\u3048\u3001\u5929\u306E\u5DDD\u3068\u661F\u96F2\u304C\u9806\u306B\u6D6E\u304B\u3073\u307E\u3059\u3002OFF \u306A\u3089\u30DC\u30EB\u30C8\u3060\u3051\u304C\u6B8B\u308A\u307E\u3059\u3002","\u591C\u7A7A\u6709\u591A\u6697\u3002\u8C03\u9AD8\u540E\u4EAE\u661F\u5148\u51FA\u73B0\uFF0C\u6697\u661F\u5728\u5176\u95F4\u6E10\u6E10\u586B\u6EE1\uFF0C\u968F\u540E\u662F\u94F6\u6CB3\u548C\u661F\u4E91\u3002OFF \u65F6\u53EA\u5269\u4ED3\u5E93\u3002"],"kd.zod":["\uD56D\uC131\uACC4 \uD3C9\uBA74\uC5D0 \uAE54\uB9B0 \uBA3C\uC9C0\uAC00 \uC911\uC2EC \uBCC4\uBE5B\uC744 \uBC1B\uC544 \uB0B4\uB294 \uBE5B. \uBCFC\uD2B8\uAC00 \uC5B4\uB290 \uBA74\uC5D0 \uB193\uC600\uB294\uC9C0\uB97C \uB9D0\uD569\uB2C8\uB2E4.","The dust lying in the system's own plane, lit by the star in the middle of it \u2014 it says which plane the vault is laid out on.","\u6052\u661F\u7CFB\u306E\u9762\u306B\u6A2A\u305F\u308F\u308B\u5875\u304C\u3001\u4E2D\u5FC3\u306E\u661F\u306E\u5149\u3092\u53D7\u3051\u3066\u8FD4\u3059\u5149\u3002\u30DC\u30EB\u30C8\u304C\u3069\u306E\u9762\u306B\u7F6E\u304B\u308C\u3066\u3044\u308B\u304B\u3092\u793A\u3057\u307E\u3059\u3002","\u94FA\u5728\u661F\u7CFB\u5E73\u9762\u4E0A\u7684\u5C18\u57C3\uFF0C\u53D7\u4E2D\u5FC3\u661F\u5149\u7167\u4EAE\u2014\u2014\u5B83\u8BF4\u660E\u4ED3\u5E93\u94FA\u5728\u54EA\u4E00\u4E2A\u5E73\u9762\u4E0A\u3002"],"kd.szSun":["\uD5C8\uBE0C \uD56D\uC131\uC758 \uBC18\uC9C0\uB984. \uCF54\uB85C\uB098\uB3C4 \uC7A0\uAE08 \uC6D0\uBFD4\uB3C4 \uC774 \uAC12\uC744 \uB530\uB77C\uAC11\uB2C8\uB2E4.","The hub star's radius. The corona and the lock cone both follow it.","\u30CF\u30D6\u6052\u661F\u306E\u534A\u5F84\u3002\u30B3\u30ED\u30CA\u3082\u30ED\u30C3\u30AF\u5186\u9310\u3082\u3053\u308C\u306B\u5F93\u3044\u307E\u3059\u3002","\u67A2\u7EBD\u6052\u661F\u7684\u534A\u5F84\u3002\u65E5\u5195\u4E0E\u9501\u5B9A\u9525\u90FD\u968F\u5B83\u800C\u53D8\u3002"],"kd.szSys":["\uD3F4\uB354 \uD56D\uC131\uC774 \uC5BC\uB9C8\uB098 \uD06C\uAC8C \uADF8\uB824\uC9C0\uB294\uC9C0.","How large the folder stars are drawn.","\u30D5\u30A9\u30EB\u30C0\u6052\u661F\u3092\u3069\u308C\u3060\u3051\u5927\u304D\u304F\u63CF\u304F\u304B\u3002","\u6587\u4EF6\u5939\u6052\u661F\u753B\u5F97\u591A\u5927\u3002"],"kd.szPl":["\uB178\uD2B8\uC758 \uD06C\uAE30. \uD06C\uAE30 \uC790\uCCB4\uB294 \uC778\uC6A9\uB41C \uD69F\uC218\uB97C \uB73B\uD558\uBBC0\uB85C, \uC774 \uB178\uBE0C\uB294 \uB73B\uC774 \uC544\uB2C8\uB77C \uBC30\uC728\uC744 \uC6C0\uC9C1\uC785\uB2C8\uB2E4.","How large the notes are. Size itself means how often a note is cited, so this moves the scale and not the meaning.","\u30CE\u30FC\u30C8\u306E\u5927\u304D\u3055\u3002\u5927\u304D\u3055\u81EA\u4F53\u306F\u5F15\u7528\u3055\u308C\u305F\u56DE\u6570\u3092\u610F\u5473\u3059\u308B\u306E\u3067\u3001\u3053\u308C\u306F\u610F\u5473\u3067\u306F\u306A\u304F\u500D\u7387\u3092\u52D5\u304B\u3057\u307E\u3059\u3002","\u7B14\u8BB0\u7684\u5927\u5C0F\u3002\u5927\u5C0F\u672C\u8EAB\u8868\u793A\u88AB\u5F15\u7528\u7684\u6B21\u6570\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u65CB\u94AE\u6539\u53D8\u7684\u662F\u6BD4\u4F8B\u800C\u975E\u542B\u4E49\u3002"],"kd.szMn":["\uC778\uC6A9\uB41C \uCD9C\uCC98\uAC00 \uC5BC\uB9C8\uB098 \uD06C\uAC8C \uADF8\uB824\uC9C0\uB294\uC9C0.","How large the cited sources are drawn.","\u5F15\u7528\u3055\u308C\u305F\u51FA\u5178\u3092\u3069\u308C\u3060\u3051\u5927\u304D\u304F\u63CF\u304F\u304B\u3002","\u88AB\u5F15\u7528\u7684\u6765\u6E90\u753B\u5F97\u591A\u5927\u3002"],"kd.briSun":["\uD5C8\uBE0C\uC758 \uBC1D\uAE30 \u2014 \uADF8\uB9AC\uACE0 \uD5C8\uBE0C\uAC00 \uBE44\uCD94\uB294 \uBAA8\uB4E0 \uAC83\uC758 \uBC1D\uAE30. \uC774 \uBCC4\uC774 \uBCFC\uD2B8\uC758 \uAD11\uC6D0\uC774\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.","The hub's brightness, and therefore everything it lights: this star is the vault's light source.","\u30CF\u30D6\u306E\u660E\u308B\u3055 \u2014 \u305D\u3057\u3066\u30CF\u30D6\u304C\u7167\u3089\u3059\u3059\u3079\u3066\u306E\u660E\u308B\u3055\u3002\u3053\u306E\u661F\u304C\u30DC\u30EB\u30C8\u306E\u5149\u6E90\u3060\u304B\u3089\u3067\u3059\u3002","\u67A2\u7EBD\u7684\u4EAE\u5EA6\u2014\u2014\u4EE5\u53CA\u5B83\u6240\u7167\u4EAE\u7684\u4E00\u5207\u7684\u4EAE\u5EA6\uFF0C\u56E0\u4E3A\u8FD9\u9897\u661F\u5C31\u662F\u4ED3\u5E93\u7684\u5149\u6E90\u3002"],"kd.briSys":["\uD3F4\uB354 \uD56D\uC131\uC758 \uD6C4\uAD11.","The folder stars' halo.","\u30D5\u30A9\u30EB\u30C0\u6052\u661F\u306E\u5149\u8F2A\u3002","\u6587\u4EF6\u5939\u6052\u661F\u7684\u5149\u6655\u3002"],"kd.briPl":["\uB178\uD2B8\uC758 \uD6C4\uAD11.","The notes' halo.","\u30CE\u30FC\u30C8\u306E\u5149\u8F2A\u3002","\u7B14\u8BB0\u7684\u5149\u6655\u3002"],"kd.briMn":["\uC704\uC131\uC758 \uD6C4\uAD11.","The moons' halo.","\u885B\u661F\u306E\u5149\u8F2A\u3002","\u536B\u661F\u7684\u5149\u6655\u3002"],"kd.blm":["\uBC1D\uC740 \uAC83 \uC8FC\uC704\uB85C \uBC88\uC9C0\uB294 \uBE5B. \uBC88\uC9D0\uC774 \uC5C6\uB294 \uBC1D\uC740 \uC810\uC740 \uBC1D\uAC8C \uC77D\uD788\uC9C0 \uC54A\uACE0 \uADF8\uC800 \uD770 \uD53D\uC140\uC774 \uB429\uB2C8\uB2E4.","The spill around bright things. A bright point without spill does not read as bright \u2014 it reads as a pale pixel.","\u660E\u308B\u3044\u3082\u306E\u306E\u5468\u308A\u306B\u6EF2\u3080\u5149\u3002\u6EF2\u307F\u306E\u306A\u3044\u8F1D\u70B9\u306F\u660E\u308B\u304F\u306F\u8AAD\u3081\u305A\u3001\u305F\u3060\u306E\u767D\u3044\u753B\u7D20\u306B\u306A\u308A\u307E\u3059\u3002","\u660E\u4EAE\u4E4B\u7269\u5468\u56F4\u7684\u6EA2\u5149\u3002\u6CA1\u6709\u6EA2\u5149\u7684\u4EAE\u70B9\u8BFB\u4E0D\u51FA\u4EAE\u5EA6\uFF0C\u53EA\u662F\u4E00\u4E2A\u767D\u50CF\u7D20\u3002"],"kd.ray":["\uBCC4\uC5D0\uC11C \uBED7\uC5B4 \uB098\uC624\uB294 \uBE5B\uC904\uAE30. \uAC00\uAE4C\uC774 \uB2E4\uAC00\uAC00\uBA74 \uC2A4\uC2A4\uB85C \uBB3C\uB7EC\uB098\uACE0 \uC6D0\uBC18\uC774 \uB300\uC2E0 \uB9D0\uD569\uB2C8\uB2E4.","Shafts thrown out from the star. They stand back as you approach and let the disc speak for itself.","\u661F\u304B\u3089\u4F38\u3073\u308B\u5149\u6761\u3002\u8FD1\u3065\u304F\u3068\u81EA\u3089\u9000\u304D\u3001\u5186\u76E4\u81EA\u8EAB\u306B\u8A9E\u3089\u305B\u307E\u3059\u3002","\u4ECE\u6052\u661F\u5C04\u51FA\u7684\u5149\u67F1\u3002\u9760\u8FD1\u65F6\u5B83\u81EA\u884C\u9000\u573A\uFF0C\u8BA9\u661F\u76D8\u81EA\u5DF1\u8BF4\u8BDD\u3002"],"kd.glare":["\uBCC4\uC774 \uC810\uC774 \uB418\uC5C8\uC744 \uB54C \uB300\uC2E0 \uB098\uD0C0\uB098\uB294 \uC0B0\uB780 \uBB34\uB9AC. \uC808\uBC18\uC744 \uB118\uAE30\uBA74 \uACF5\uAE30\uAC00 \uC5BC\uC74C\uC774 \uB418\uACE0 \uBB34\uB9AC\uC5D0 \uAD6C\uC870\uAC00 \uC0DD\uAE41\uB2C8\uB2E4.","The scattering halo that takes over once the disc stops being a disc. Past halfway the air becomes ice and the halo gains structure.","\u661F\u304C\u70B9\u306B\u306A\u3063\u305F\u3068\u304D\u4EE3\u308F\u308A\u306B\u73FE\u308C\u308B\u6563\u4E71\u306E\u6688\u3002\u534A\u3070\u3092\u8D8A\u3048\u308B\u3068\u7A7A\u6C17\u306F\u6C37\u306B\u306A\u308A\u3001\u6688\u306B\u69CB\u9020\u304C\u751F\u307E\u308C\u307E\u3059\u3002","\u5F53\u661F\u76D8\u4E0D\u518D\u662F\u76D8\u65F6\u63A5\u7BA1\u753B\u9762\u7684\u6563\u5C04\u6655\u3002\u8FC7\u534A\u4E4B\u540E\u7A7A\u6C14\u5316\u4E3A\u51B0\uFF0C\u6655\u4FBF\u6709\u4E86\u7ED3\u6784\u3002"],"kd.flr":["\uB80C\uC988\uAC00 \uBE5B\uC5D0 \uD558\uB294 \uC77C: \uD654\uBA74 \uC911\uC2EC\uC744 \uC9C0\uB098\uB294 \uACE0\uC2A4\uD2B8, \uD5E4\uC77C\uB85C, \uAC00\uB85C \uC2A4\uD2B8\uB9AD, \uBC88\uC9D0\uC758 \uC0C9\uBD84\uC0B0, \uC55E \uC720\uB9AC\uC758 \uC5BC\uB8E9.","What the glass does with a source: ghosts through the centre of the frame, the halo, the horizontal streak, colour separating on the spill, and the smudges on the front element.","\u30EC\u30F3\u30BA\u304C\u5149\u306B\u3059\u308B\u3053\u3068\uFF1A\u753B\u9762\u4E2D\u5FC3\u3092\u901A\u308B\u30B4\u30FC\u30B9\u30C8\u3001\u30CF\u30ED\u30FC\u3001\u6A2A\u65B9\u5411\u306E\u30B9\u30C8\u30EA\u30FC\u30AF\u3001\u306B\u3058\u307F\u306E\u8272\u5206\u6563\u3001\u524D\u7389\u306E\u6C5A\u308C\u3002","\u955C\u5934\u5BF9\u5149\u505A\u7684\u4E8B\uFF1A\u7A7F\u8FC7\u753B\u9762\u4E2D\u5FC3\u7684\u9B3C\u5F71\u3001\u5149\u6655\u3001\u6A2A\u5411\u62C9\u4E1D\u3001\u6EA2\u5149\u7684\u8272\u6563\u3001\u524D\u955C\u7247\u7684\u6C61\u8FF9\u3002"],"kd.vei":["\uD654\uBA74 \uC804\uCCB4\uC5D0 \uC587\uAC8C \uAE54\uB9AC\uB294 \uB300\uAE30.","A thin air laid over the whole frame.","\u753B\u9762\u5168\u4F53\u306B\u8584\u304F\u6577\u304B\u308C\u308B\u5927\u6C17\u3002","\u94FA\u5728\u6574\u5E45\u753B\u9762\u4E0A\u7684\u4E00\u5C42\u8584\u8584\u5927\u6C14\u3002"],"kd.cur":["\uBC1D\uC740 \uCABD\uC744 \uB20C\uB7EC \uC8FC\uB294 \uC5B4\uAE68. \uC13C\uC11C\uC5D0\uB294 \uC788\uACE0 8\uBE44\uD2B8\uC5D0\uB294 \uC5C6\uB294 \uAC83\uC785\uB2C8\uB2E4.","The shoulder that holds the highlights back \u2014 the thing a sensor has and eight bits do not.","\u660E\u90E8\u3092\u6291\u3048\u308B\u80A9\u306E\u7279\u6027\u3002\u30BB\u30F3\u30B5\u30FC\u306B\u306F\u3042\u308A\u30018\u30D3\u30C3\u30C8\u306B\u306F\u306A\u3044\u3082\u306E\u3067\u3059\u3002","\u538B\u4F4F\u9AD8\u5149\u7684\u90A3\u9053\u80A9\u90E8\u2014\u2014\u4F20\u611F\u5668\u6709\u800C\u516B\u4F4D\u6CA1\u6709\u7684\u4E1C\u897F\u3002"],"kd.sVol":["\uC804\uCCB4 \uC74C\uB7C9.","The level of everything.","\u5168\u4F53\u306E\u97F3\u91CF\u3002","\u5168\u90E8\u58F0\u97F3\u7684\u97F3\u91CF\u3002"],"kd.sScale":["\uB178\uD2B8\uAC00 \uACE0\uB97C \uC218 \uC788\uB294 \uC5F4 \uAC1C\uC758 \uC74C. \uADF8\uC911 \uC5B4\uB290 \uC74C\uC774 \uB418\uB294\uC9C0\uB294 \uB178\uD2B8 \uC790\uC2E0\uC774 \uC815\uD569\uB2C8\uB2E4.","The ten notes a note may land on. Which one it lands on is the note's own business.","\u30CE\u30FC\u30C8\u304C\u9078\u3079\u308B\u5341\u306E\u97F3\u3002\u305D\u306E\u3069\u308C\u306B\u306A\u308B\u304B\u306F\u30CE\u30FC\u30C8\u81EA\u8EAB\u304C\u6C7A\u3081\u307E\u3059\u3002","\u4E00\u7BC7\u7B14\u8BB0\u53EF\u4EE5\u843D\u5728\u7684\u5341\u4E2A\u97F3\u3002\u843D\u5728\u54EA\u4E00\u4E2A\u7531\u7B14\u8BB0\u81EA\u5DF1\u51B3\u5B9A\u3002"],"kd.sDrone":["\uC544\uBB34 \uC77C\uB3C4 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uC744 \uB54C \uAE54\uB824 \uC788\uB294 \uC800\uC74C. \uAEBC\uC9C4 \uCC44\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4.","The low hum under everything when nothing is happening. It starts off.","\u4F55\u3082\u8D77\u304D\u3066\u3044\u306A\u3044\u3068\u304D\u306B\u4E0B\u306B\u6D41\u308C\u308B\u4F4E\u3044\u97F3\u3002\u65E2\u5B9A\u3067\u306F\u30AA\u30D5\u3067\u3059\u3002","\u4EC0\u4E48\u90FD\u6CA1\u53D1\u751F\u65F6\u57AB\u5728\u5E95\u4E0B\u7684\u4F4E\u9E23\u3002\u9ED8\u8BA4\u5173\u95ED\u3002"],"kd.sRip":["\uD30C\uBB38\uC774 \uB178\uD2B8\uC5D0 \uB2FF\uB294 \uC21C\uAC04 \uADF8 \uB178\uD2B8\uAC00 \uB0B4\uB294 \uC18C\uB9AC\uC758 \uD06C\uAE30.","How loud a note sounds at the moment the wave reaches it.","\u6CE2\u7D0B\u304C\u30CE\u30FC\u30C8\u306B\u5C4A\u3044\u305F\u77AC\u9593\u3001\u305D\u306E\u30CE\u30FC\u30C8\u304C\u9CF4\u308B\u5927\u304D\u3055\u3002","\u6D9F\u6F2A\u62B5\u8FBE\u4E00\u7BC7\u7B14\u8BB0\u65F6\uFF0C\u5B83\u54CD\u8D77\u7684\u97F3\u91CF\u3002"]},le=null;try{let n=w.get("orrery2.lang");we.indexOf(n)>=0&&(le=n)}catch(n){}if(!le){let n=(navigator.language||"").toLowerCase();le=/^ko/.test(n)?"ko":/^ja/.test(n)?"ja":/^zh/.test(n)?"zh":"en"}function k(n,o){let s=ie[n],c=s?s[we.indexOf(le)]||s[0]:n;return o&&(c=c.replace(/\{(\w+)\}/g,(u,m)=>m in o?o[m]:u)),c}function re(){document.documentElement.lang=le,r.querySelectorAll("[data-i18n]").forEach(n=>{n.innerHTML=k(n.dataset.i18n)}),r.querySelectorAll("[data-i18n-title]").forEach(n=>{n.title=k(n.dataset.i18nTitle)}),r.querySelectorAll("[data-i18n-ph]").forEach(n=>{n.placeholder=k(n.dataset.i18nPh)}),r.querySelectorAll(".langsel u").forEach(n=>n.classList.toggle("on",n.dataset.l===le)),Cl()}function Le(n){if(!(we.indexOf(n)<0||n===le)){le=n;try{w.set("orrery2.lang",n)}catch(o){}re(),HM()}}r.querySelectorAll(".langsel u").forEach(n=>{n.onclick=()=>Le(n.dataset.l)}),re();function Ve(n){let o=String(n).trim().slice(-1).charCodeAt(0);if(!(o>=44032&&o<=55203))return"\uB85C";let s=(o-44032)%28;return s===0||s===8?"\uB85C":"\uC73C\uB85C"}function Oe(n){return le==="ko"?"\u25CE "+n+Ve(n)+" \uC774\uB3D9":k("go.travel",{n})}let qe=!1;function Ye(n){if(qe=!!n,!qe)return;let o=f("boot");o.classList.add("gone"),o.style.display="none",["b-load","hint","b-clear"].forEach(s=>{f(s).style.display="none"})}let st={open:null,hover:null};function gt(n){st.open=n&&typeof n.open=="function"?n.open:null,st.hover=n&&typeof n.hover=="function"?n.hover:null,Qt()}function ee(){return!!st.open}function Qt(){let n=ee();["i-open","mm-open","k-open","introopen"].forEach(o=>{let s=f(o);s&&(s.style.display=n?"":"none")})}function St(n){let o=J&&J[n];return o?o.fp||o.p:""}function mt(n,o){if(!ee())return!1;if(n<0||n>=G)return P(k("open.none")),!1;let s=!!(o&&(o.ctrlKey||o.metaKey));try{st.open(St(n),{newLeaf:s,newWindow:s&&!!(o&&o.shiftKey)})}catch(c){return console.error("vault-orrery: host could not open note",c),P(k("open.fail")),!1}return!0}let $e=null;function kt(){$e={exact:new Map,lower:new Map};for(let n=0;n<G;n++){let o=J[n];[o.fp,o.p].forEach(s=>{if(!s)return;$e.exact.has(s)||$e.exact.set(s,n);let c=s.toLowerCase();$e.lower.has(c)||$e.lower.set(c,n)})}}function Dt(n){if(!n||!G)return-1;$e||kt();let o=String(n).replace(/\\/g,"/").replace(/^\.?\//,"");if($e.exact.has(o))return $e.exact.get(o);let s=o.toLowerCase();if($e.lower.has(s))return $e.lower.get(s);let c=o.indexOf("/");if(c>0){let u=o.slice(c+1).toLowerCase();if($e.lower.has(u))return $e.lower.get(u)}return-1}function Yt(n,o){let s=Dt(n);return s<0?!1:(o&&o.select===!0?Gn(s):pt?$.has.has(s)?Gn(s):Hr(s):cd(s,!0),!0)}let Mn="",Ot=-1;function ki(n){let o=Ot;Mn=n?String(n).replace(/\\/g,"/"):"",Ot=Mn?Dt(Mn):-1,E.on&&Ot>=0&&Ot<G&&Ot!==o&&(de.follow=-1,de.tgtD.set(he[Ot*3],he[Ot*3+1],he[Ot*3+2]))}if(typeof S=="undefined")throw r.querySelector("#boot").innerHTML='<h1>VAULT ORRERY</h1><h2>MISSING DEPENDENCY</h2><div id="bpick" class="ok" style="max-width:560px;line-height:1.9">'+k("vendor.missing")+"</div>",new Error("three.js not found at vendor/three.min.js");let Un={meta:{vault:"",files:0,edges:0,wiki:0,raw:0,broken:0,years:[]},cats:[],nodes:[],edges:[]},jt=Un,K=f("blog");function U(n,o){let s=k(n),c="\u2026".repeat(Math.max(2,30-Array.from(s).length));return"<b>\u203A</b> "+s+" "+c+" <em>"+o+"</em>"}let Fe=[U("boot.l1","OK"),U("boot.l2","OK"),U("boot.l3","OK"),U("boot.l4","READY"),U("boot.l5",k("boot.wait"))],Re=0,tt=setInterval(()=>{if(Re>=Fe.length){clearInterval(tt);return}K.innerHTML+=Fe[Re++]+"<br>"},190),it=3,Ft=1e4,Et=2.5,te=1.5,Be=.95,Ge=1700,nt=320,Se=1,ft=2.4,Pt=[{n:"PENTATONIC",s:[0,2,4,7,9,12,14,16,19,21]},{n:"MINOR",s:[0,2,3,5,7,8,10,12,14,15]},{n:"LYDIAN",s:[0,2,4,6,7,9,11,12,14,16]},{n:"WHOLE TONE",s:[0,2,4,6,8,10,12,14,16,18]},{n:"OPEN FIFTHS",s:[0,7,12,19,24,26,31,36,38,43]}],ut=n=>n.toFixed(2)+"\xD7",on=(n,o)=>n<.02?"OFF":o,At=[{k:"spd",g:"cosmos",label:"ORBIT SPEED",min:0,max:400,sc:100,def:.1,pin:1,fmt:ut},{k:"bri",g:"cosmos",label:"NODE GLOW",min:10,max:260,sc:100,def:1.11,pin:1,fmt:ut},{k:"lnk",g:"cosmos",label:"LINK GLOW",min:0,max:it*100,sc:100,def:.3,pin:1,fmt:n=>on(n,ut(n))},{k:"gap",g:"cosmos",label:"ORBIT GAP",min:50,max:1200,sc:100,def:5,pin:1,fmt:ut},{k:"maxNodes",g:"cosmos",label:"MAX NODES",min:500,max:Ft+500,step:500,sc:1,def:0,pin:1,i18n:"cap.label",get:()=>H.maxNodes>0?H.maxNodes:Ft+500,set:n=>{H.maxNodes=n>Ft?0:n},fmt:()=>H.maxNodes>0?String(H.maxNodes):k("cap.off")},{k:"arc",g:"cosmos",label:"ARC HEIGHT",min:0,max:Et*100,sc:100,def:.6,fmt:n=>n<.02?"FLAT":ut(n)},{k:"ten",g:"cosmos",label:"LINK TENSION",min:0,max:100,sc:100,def:.7,fmt:n=>n.toFixed(2)},{k:"bnd",g:"cosmos",label:"LINK ROUTING",min:0,max:100,sc:100,def:.75,fmt:n=>on(n,n.toFixed(2))},{k:"lwd",g:"cosmos",label:"LINE WIDTH",min:60,max:400,sc:100,def:.6,fmt:n=>n.toFixed(1)+" px"},{k:"spr",g:"cosmos",label:"ORBIT SPREAD",min:30,max:800,sc:100,def:3.2,fmt:ut},{k:"sph",g:"cosmos",label:"ORBIT SHELL",min:0,max:100,sc:100,def:1,fmt:n=>n<.005?"DISC":n>.995?"SPHERE":n.toFixed(2)},{k:"szSun",g:"bodies",label:"SUN SIZE",min:30,max:300,sc:100,def:1.72,fmt:ut,apply:fa},{k:"szSys",g:"bodies",label:"SYSTEM SIZE",min:30,max:400,sc:100,def:.98,fmt:ut,apply:fa},{k:"szPl",g:"bodies",label:"PLANET SIZE",min:30,max:300,sc:100,def:.96,fmt:ut,apply:fa},{k:"szMn",g:"bodies",label:"MOON SIZE",min:30,max:300,sc:100,def:.57,fmt:ut,apply:fa},{k:"briSun",g:"bodies",label:"SUN GLOW",min:15,max:300,sc:100,def:.15,fmt:ut},{k:"briSys",g:"bodies",label:"SYSTEM GLOW",min:0,max:300,sc:100,def:.3,fmt:n=>on(n,ut(n))},{k:"briPl",g:"bodies",label:"PLANET GLOW",min:0,max:800,sc:100,def:.4,fmt:n=>on(n,ut(n))},{k:"briMn",g:"bodies",label:"MOON GLOW",min:0,max:800,sc:100,def:5.08,fmt:n=>on(n,ut(n))},{k:"str",g:"cosmos",label:"STARFIELD",min:0,max:200,sc:100,def:.6,pin:1,fmt:n=>on(n,ut(n)),apply:Xu},{k:"zod",g:"cosmos",label:"ZODIACAL LIGHT",min:0,max:300,sc:100,def:2,fmt:n=>on(n,ut(n))},{k:"blm",g:"light",label:"BLOOM",min:0,max:te*100,sc:100,def:.55,fmt:n=>on(n,ut(n))},{k:"ray",g:"light",label:"SUN RAYS",min:0,max:150,sc:100,def:.53,fmt:n=>on(n,ut(n))},{k:"glare",g:"light",label:"SUN HALO",min:0,max:300,sc:100,def:.5,fmt:n=>on(n,ut(n))},{k:"flr",g:"light",label:"LENS FLARE",min:0,max:200,sc:100,def:.55,fmt:n=>on(n,ut(n))},{k:"vei",g:"light",label:"SKY VEIL",min:0,max:120,sc:100,def:0,fmt:n=>on(n,ut(n)),apply:Zh},{k:"cur",g:"light",label:"FILM CURVE",min:0,max:100,sc:100,def:.38,fmt:n=>on(n,ut(n))},{k:"sVol",g:"sound",label:"MASTER",min:0,max:150,sc:100,def:.55,fmt:n=>on(n,Math.round(n*100)+"%"),apply:_u},{k:"sScale",g:"sound",label:"SCALE",min:0,max:Pt.length-1,sc:1,def:0,fmt:n=>Pt[R(n|0,0,Pt.length-1)].n},{k:"sDrone",g:"sound",label:"AMBIENT",min:0,max:200,sc:100,def:.35,fmt:n=>on(n,ut(n)),apply:_u},{k:"sRip",g:"sound",label:"RIPPLE",min:0,max:150,sc:100,def:.5,fmt:n=>on(n,ut(n))}],li=["blm","ray","flr","glare","cur","zod","str","vei"],ci={cinematic:null,balanced:{blm:.3,ray:.25,flr:.2,glare:.25,zod:1},fast:{blm:0,ray:0,flr:0,glare:0,cur:0,zod:0,str:0,vei:0}};function Zs(n,o){let s=ci[n];return s&&s[o]!==void 0?s[o]:Yn[o].def}function Js(){for(let n in ci)if(li.every(o=>Math.abs(H[o]-Zs(n,o))<.006))return n;return""}function Qs(n,o){let s=new Set;li.forEach(c=>{H[c]=Zs(n,c)}),li.forEach(c=>{let u=Yn[c].apply;if(!(!u||s.has(u))){s.add(u);try{u()}catch(m){console.error("vault-orrery: quality "+c,m)}}}),ar(),an(),o||P(k("q."+n))}let Yn={};At.forEach(n=>{Yn[n.k]=n});let yo=[["cosmos","grp.cosmos"],["bodies","grp.bodies"],["light","grp.light"],["sound","grp.sound"]],ia=At.filter(n=>n.pin).map(n=>n.k),Rr={mmHop:!1,snd:!1,coreNote:"",grid:!1,tab:"cosmos",deckAt:null,litV1:1,adv:!1,legFold:!1,keysFold:!1,pin:ia,dock:[],card:null};At.forEach(n=>{Rr[n.k]=n.def});let za={spl:.26,len:.3,grn:.14,aex:.5,sTune:0,sRoom:7.5,sEcho:.36,sEchoT:.62,grv:1.5,trl:1,tlt:0,det:1,frs:14};Object.assign(Rr,za);let jn={};try{jn=JSON.parse(w.get("orrery2.set")||"{}")||{}}catch(n){}let H=Object.assign({},Rr,{pin:ia.slice()},jn,za);At.forEach(n=>{if(n.get)return;let o=+H[n.k];H[n.k]=Number.isFinite(o)?R(o,n.min/n.sc,n.max/n.sc):n.def}),H.maxNodes=Number.isFinite(+H.maxNodes)?R(+H.maxNodes,0,Ft):Rr.maxNodes,!jn.litV1&&!(+jn.blm||+jn.cur||+jn.spl||+jn.len||+jn.grn)&&["blm","cur"].forEach(n=>{H[n]=Yn[n].def}),H.litV1=1,!jn.skyV2&&"str"in jn&&+jn.str==0&&(H.str=Yn.str.def),H.skyV2=1,[["lnk",.42],["str",1.2],["lnk",.2],["gap",2.81],["str",.4],["zod",1],["sDrone",0],["briSys",.59],["vei",.2],["bnd",.62]].forEach(([n,o])=>{n in jn&&Math.abs(+jn[n]-o)<.005&&(H[n]=Yn[n].def)}),typeof H.coreNote!="string"&&(H.coreNote=""),H.sBox=!!H.sBox,(!H.railAt||!Number.isFinite(+H.railAt.fx)||!Number.isFinite(+H.railAt.fy))&&(H.railAt=null),H.deckAt&&!(Number.isFinite(+H.deckAt.x)&&Number.isFinite(+H.deckAt.y)&&+H.deckAt.w>0)&&(H.deckAt=null),H.pin=Array.isArray(H.pin)?At.filter(n=>H.pin.indexOf(n.k)>=0).map(n=>n.k):ia.slice(),H.dock=Array.isArray(H.dock)?H.dock.filter(n=>Q.indexOf(n)>=0):[],H.dock.forEach(n=>{W.pin.add(n),W.open.add(n)}),E.on&&(li.forEach(n=>{H[n]=Zs("balanced",n)}),H.qAuto=1,H.snd=!1);function an(){if(!E.on)try{w.set("orrery2.set",JSON.stringify(H))}catch(n){}}let Ga=0;function P(n,o){let s=f("toast");s.textContent=n,s.classList.add("on"),Ga=performance.now()+(o||1300)}let ge=Math.PI*(3-Math.sqrt(5));function ce(n){let o=0;for(let s=0;s<n.length;s++)n.charCodeAt(s)===47&&o++;return o}let J,Ae,G,Ne,ct,_t,dt,yt,rt,He,Kn,zn,he,We,Si,Ze,$s,et,Nt,Sn,Uc,Ei,fn,zc,Ai,Va,Cr,ra,cp=0,el=!1,Fn,Gc,tl,ei,Zn,cn,Dr,Dh,wo,Yi=[],Ti,nl,Vc=!1,Ph,dp,bo,Li,di,ji,oa,Pr,aa,Mt,_o,sa,la,ca,Hc,Wc,qc,Xc,Oi,Yc,dn,Ki,il,Mo,So,da,jc,ha,Eo,Ao,hi,Kc,Jn,yn,hp,up,rl,fp,Zc,pp=0,Fh,Nh,To,Ha,mp,Jc,a1=0,gp=0,ol,Wa,Ih,al,kh,sl,Qc,Zi,ll,gr,$c,Ji,ti,cl,qa,ua,Nn,ui=[],ed=[],Xa=null,dl=null,Fr,Wt=null,vp={pos:new S.Vector3(0,0,0)},hl={r0:1010,dr:430,a0:1.2,da:.108},Ya={gap:1,rg:1,step:34,cats:[]},Ri=1,Lo=0,Bi=1;function s1(n){let o=60;for(let s=0;s<Ya.cats.length;s++){let c=Ya.cats[s],u=c.a+c.b*n;u>o&&(o=u)}return Math.max((o*2.3+40)*.92,150)}function l1(n){let o=H.gap;if(Ri===o&&Lo===0)return;let s=Math.min(.05,n);Lo+=(o-Ri)*42*s-Lo*8.6*s,Ri+=Lo*s,Math.abs(o-Ri)<5e-4&&Math.abs(Lo)<.003&&(Ri=o,Lo=0),Bi=s1(Ri)/(Ya.rg||1),yp()}let c1=26e-5,d1=6e3,xp=4e4,Oh=xp;function yp(){let n=Math.max(600,(Ei||1600)*Bi);wt.fog.density=c1*Math.min(1,d1/n);let o=Math.max(xp,n*3+2e4);Math.abs(o-Oh)>Oh*.02&&(Oh=o,Ie.far=o,Ie.updateProjectionMatrix())}function fa(){if(Ne&&Ne.forEach(n=>{if(n.R===void 0)return;let o=n.tier===0?H.szSys:1;if(n.sR=n.R*o,n.gz0!==void 0&&Li){let s=Li.geometry.attributes.aSize;s&&n.si!==void 0&&(s.array[n.si]=n.gz0*o,s.needsUpdate=!0)}}),!(!G||!Si||!We)){for(let n=0;n<G;n++){let o=et[n]?et[n].kind:"wiki";We[n]=Si[n]*(o==="core"?H.szSun:o==="moon"?H.szMn:H.szPl)}for(let n=0;n<G;n++){let o=et[n];if(o&&o.kind==="wiki"&&o.inner0){let s=o.inner0*H.szSys;o.r0=o.r00+(s-o.inner0),o.inner=s}}for(let n=0;n<G;n++){let o=et[n];o&&o.kind==="moon"&&o.pr&&(o.r=o.r0=o.pr*H.szPl*(3.4+o.mk*1.15))}if(So&&Mo)for(let n=0;n<G;n++){let o=et[n].kind;So[n]=We[n]*(o==="core"?16:o==="wiki"?9:7.5),Mo[n]=So[n]}pt&&y_()}}let ul=9;function h1(n,o){if(!(n>.8))return 2;let s=1+Math.ceil(1.5*Math.sqrt(n));return s<2?2:s>o?o:s}let vr=320,xr=4,Gt=new Float32Array(32*3),td=300,pa=9,u1=.16,wp=[new S.Color(5495039),new S.Color(16751932)],fl=[{name:"ALL",mask:[1,1]},{name:"WIKI",mask:[1,0]},{name:"SOURCE",mask:[0,1]},{name:"BRIDGE",mask:[1,1],cross:1},{name:"OFF",mask:[0,0]}],pl=0,Ee={on:!1,play:!1,u:0,rate:1,lo:0,hi:0,dated:0,playSec:42,grow:.022,flash:.05,stage:-1,marksFor:null},Ro=[{u0:0,code:"VOID",k:"gen.p0"},{u0:.045,code:"IGNITION",k:"gen.p1"},{u0:.13,code:"CONDENSATION",k:"gen.p2"},{u0:.3,code:"ACCRETION",k:"gen.p3"},{u0:.6,code:"CAPTURE",k:"gen.p4"},{u0:.855,code:"NETWORK",k:"gen.p5"},{u0:.985,code:"PRESENT",k:"gen.p6"}],Bh=.1,bp=.93;function Qi(n,o,s){return new S.Color().setHSL(n/360,o,s)}let _p=152,f1=300;function p1(n){let o=[];if(n<=0)return o;let s=(u,m)=>m?s(m,u%m):u,c=Math.max(1,Math.round(n*.382));for(;c>1&&s(c,n)!==1;)c--;for(let u=0;u<n;u++){let m=u*c%n,h=n===1?.29:m/(n-1);o.push(Qi(_p+(f1-_p)*h,.88-m%3*.09,.62+(m%2?.07:-.05)))}return o}function Uh(n){let o=(T,A,D,B)=>{let X=(T-A)*(T<A?1/D:1/B);return Math.exp(-.5*X*X)},s=0,c=0,u=0;for(let T=360;T<=830;T+=5){let A=T*1e-9,D=374183e-21/(Math.pow(A,5)*(Math.exp(.014388/(A*n))-1));s+=D*(1.056*o(T,599.8,37.9,31)+.362*o(T,442,16,26.7)-.065*o(T,501.1,20.4,26.2)),c+=D*(.821*o(T,568.8,46.9,40.5)+.286*o(T,530.9,16.3,31.1)),u+=D*(1.217*o(T,437,11.8,36)+.681*o(T,459,26,13.8))}let m=Math.max(0,3.2406*s-1.5372*c-.4986*u),h=Math.max(0,-.9689*s+1.8758*c+.0415*u),y=Math.max(0,.0557*s-.204*c+1.057*u),M=Math.max(m,h,y)||1,L=T=>(T/=M)<=.0031308?12.92*T:1.055*Math.pow(T,1/2.4)-.055;return[L(m),L(h),L(y)]}function ma(n){let[o,s,c]=Uh(n),u=m=>m<=.04045?m/12.92:Math.pow((m+.055)/1.055,2.4);return[u(o),u(s),u(c)]}let nd=[15200,8200,6600,5772,4400,3550].map(Uh);function m1(){if(G){if(dn&&dn.instanceColor){for(let n=0;n<G;n++)dn.setColorAt(n,Mp.setRGB(Ze[n*3],Ze[n*3+1],Ze[n*3+2]));dn.instanceColor.needsUpdate=!0}if(ha&&da){for(let n=0;n<G*3;n++)da[n]=Ze[n];ha.geometry.attributes.aColor.needsUpdate=!0}Nn&&Nn.instanceColor&&(ui.forEach((n,o)=>Nn.setColorAt(o,Mp.setRGB(I(Ze[n*3],1,.3),I(Ze[n*3+1],1,.3),I(Ze[n*3+2],1,.3)))),Nn.instanceColor.needsUpdate=!0)}}function g1(n){let o=Math.floor((Date.now()-n)/864e5);return o<=0?k("ago.today"):o<7?k("ago.d",{n:o}):o<31?k("ago.w",{n:Math.floor(o/7)}):o<365?k("ago.mo",{n:Math.floor(o/30)}):k("ago.y",{n:Math.floor(o/365)})}let v1=3e4;function zh(){let n=Date.now();if(cp=n,!G||!ra)return;let o=H.frs||0;if(o<.5){ra.fill(0);return}let s=o*864e5;for(let c=0;c<G;c++){let u=Cr[c];if(!u){ra[c]=0;continue}let m=n-u;ra[c]=m<=0?1:m>=s?0:1-m/s}}function X2(){return el}let Mp=new S.Color;function Sp(n,o){let s=R(n,0,1)*(nd.length-1),c=Math.min(nd.length-2,Math.floor(s)),u=s-c,m=nd[c],h=nd[c+1];return(o||new S.Color).setRGB(I(m[0],h[0],u),I(m[1],h[1],u),I(m[2],h[2],u))}function x1(){let n=Math.random();return n<.62?n/.62*.52:.52+Math.pow((n-.62)/.38,1.6)*.48}let Ep={2022:Qi(18,.85,.52),2023:Qi(30,.88,.55),2024:Qi(41,.92,.57),2025:Qi(50,.9,.6),2026:Qi(58,.85,.64),0:Qi(258,.45,.58)},Gh=Qi(45,1,.72),ja=new Set,id=-1;function y1(n){if(!ja.size||H.grv<.02)return;let o=Math.min(n,1/40);ja.forEach(s=>{if(s===id)return;let c=(6+Dh[s]*3)*H.grv,u=.7*Math.sqrt(c),m=!0;for(let h=0;h<3;h++){let y=s*3+h;Dr[y]+=(-c*cn[y]-u*Dr[y])*o,cn[y]+=Dr[y]*o,(Math.abs(cn[y])>.06||Math.abs(Dr[y])>.06)&&(m=!1)}m&&(cn[s*3]=cn[s*3+1]=cn[s*3+2]=0,Dr[s*3]=Dr[s*3+1]=Dr[s*3+2]=0,ja.delete(s))})}let w1=/(^|\/)(index|readme|home|moc|인덱스|목차)\.md$/i;function Vh(n){let o=n.length;if(!o)return-1;if(H.coreNote){let m=n.findIndex(h=>h.p===H.coreNote);if(m>=0)return m}let s=m=>(m.inb|0)*40+(m.w|0)-ce(m.p)*500,c=-1;for(let m=0;m<o;m++)w1.test(n[m].p)&&(c<0||s(n[m])>s(n[c]))&&(c=m);if(c>=0)return c;let u=0;for(let m=1;m<o;m++)(n[m].inb|0)>(n[u].inb|0)&&(u=m);return u}function Ap(n){jt=n,J=n.nodes,Ae=n.edges,G=J.length,zc=new Array(G);for(let N=0;N<G;N++){let q=J[N];zc[N]=(q.n+" "+q.p+" "+(q.t||[]).join(" ")+" "+(q.pr||[]).map(ae=>ae[0]+" "+ae[1]).join(" ")).toLowerCase()}Ne=n.cats.filter(N=>N.dom!=="root"),ct={},Ne.forEach((N,q)=>{ct[N.key]=q});let o=p1(Ne.reduce((N,q)=>N+(q.dom==="wiki"?1:0),0)),s=0;Ne.forEach(N=>{if(N.dom==="wiki")N.color=o[s],N.tier=0,s++;else{let q=parseInt(N.key.split(":")[1],10)||0;N.color=Ep[q]||Ep[0],N.tier=1,N.year=q}N.on=!0}),_t=Ne.filter(N=>N.tier===0),dt=Ne.filter(N=>N.tier===1).sort((N,q)=>(N.year||9999)-(q.year||9999)),yt=new Array(G).fill(-1),rt=Array.from({length:G},()=>[]),Ae.forEach(([N,q,ae])=>{ae===1&&yt[N]<0&&(yt[N]=q,rt[q].push(N))}),fn=Array.from({length:G},()=>new Set),Ae.forEach(([N,q])=>{N!==q&&(fn[N].add(q),fn[q].add(N))}),He=Vh(J);let c={};for(let N=0;N<G;N++)N===He||J[N].k==="raw"||(c[J[N].c]=(c[J[N].c]||0)+1);let u=34;_t.forEach(N=>{N.R=5.5+Math.sqrt(N.n)*1.7,N.planets=c[N.key]||0,N.orbRings=Math.max(1,Math.ceil(N.planets/6)),N.reach=N.R*3.2+N.orbRings*u*H.gap+16,N.reachA=N.R*3.2+16,N.reachB=N.orbRings*u});let h=(_t.length?Math.max.apply(null,_t.map(N=>N.reach)):60)*2.3+40,y=Math.max(h*.92,150);Ya={gap:H.gap,rg:y,step:u,cats:_t.map(N=>({a:N.R*3.2+16,b:N.orbRings*u}))},Ri=H.gap,Lo=0,Bi=1;let M=0,L=0,T=y;for(;M<_t.length;){let N=y*(L+1),q=Math.max(1,Math.floor(C*N/h)),ae=Math.min(q,_t.length-M);for(let Z=0;Z<ae;Z++){let xe=_t[M+Z],se=Z/ae*C+L*.7+.3,be=Math.sin(se*2+L*1.3)*Math.min(30,N*.022);xe.pos=new S.Vector3(Math.cos(se)*N,be,Math.sin(se)*N),xe.ringNo=L,xe.ringR=N}M+=ae,T=N,L++}Yi=[];for(let N=0;N<L;N++)Yi.push(y*(N+1));let A=[];for(let N=0;N<G;N++)J[N].k==="raw"&&yt[N]<0&&A.push(N);let D=A.filter(N=>J[N].y).sort((N,q)=>(J[N].d||"").localeCompare(J[q].d||"")),B=A.filter(N=>!J[N].y),X=T+y*.85;hl={r0:X,dr:X*.4,a0:1.2,da:C*3.5/Math.max(24,D.length)},Ei=X+y*.9,Kn={},zn=D,function(){let q=Math.max(1,D.length),ae=Math.max(3,y*.03);D.forEach((Z,xe)=>{let se=xe/q;Kn[Z]={kind:"spiral",anchor:vp,r:hl.r0-se*hl.dr+(xe*17%11-5)*ae,ph:hl.a0+xe*hl.da,sp:55e-6,inc:.04+(xe*13%9-4)*.009,y:(xe*29%17-8)*ae*.55}}),B.forEach((Z,xe)=>{let se=(xe+.5)/Math.max(1,B.length);Kn[Z]={kind:"shell",anchor:vp,r:Ei+(xe*23%13-6)*ae*2,ph:xe*ge,sp:24e-6,inc:Math.acos(1-2*se)*.58,y:0}}),dt.forEach(Z=>{let xe=(Z.year?D:B).filter(De=>J[De].c===Z.key),se=xe.length?Kn[xe[Math.floor(xe.length/2)]]:null,be=se?se.r:Ei,Te=se?se.ph:0;Z.pos=new S.Vector3(Math.cos(Te)*be,(se?se.y:0)+34,Math.sin(Te)*be),Z.R=3.4+Math.sqrt(Z.n)*.5})}();let O=y||400;Ne.forEach(N=>{let q=N.pos||new S.Vector3;N.oR=Math.hypot(q.x,q.z),N.oA0=Math.atan2(q.z,q.x),N.oY=q.y,N.oSp=N.tier===1?N.year?55e-6:24e-6:48e-6*Math.pow(O/Math.max(1,N.oR),1.5)}),he=new Float32Array(G*3),We=new Float32Array(G),Ti=new Float64Array(G),nl=new Float32Array(G),Vc=!1,Ze=new Float32Array(G*3),et=new Array(G),Nt=new Array(G),Sn=new Float32Array(G).fill(1);let V={};for(let N=0;N<G;N++){let q=J[N],ae=Ne[ct[q.c]]||_t[0]||Ne[0]||{color:Gh,R:6,on:!0,reach:60,orbRings:1};Nt[N]=ae;let Z=ae.color,xe,se;if(N===He)xe=34+Math.min(16,Math.log(1+q.inb)*4.5),se={kind:"core",anchor:null,r:0,y:0,sp:0,ph:0,inc:0},Gh.toArray(Ze,N*3);else if(q.k!=="raw"){let be=(V[ae.key]=(V[ae.key]||0)+1)-1,Te=Math.floor(be/6),De=be%6,_e=(ae.R||6)*3.2,Ce=((ae.reach||_e+40)-_e)/Math.max(1,ae.orbRings||1);xe=2.6+Math.log(1+q.inb)*1.55+Math.log(1+q.w/120)*.7;let Xe=_e+.5*Ce,Qe=_e+(Te+.5)*Ce,me=Ja(ae.key+"#ecc"+Te),ve=_e+(Te+.5)*Ce+De%2*Ce*.16;se={kind:"wiki",anchor:ae,r:ve,ph:De/6*C+Te*.62,sp:22e-5*Math.pow(Xe/Qe,1.5),ecc:Math.min(.03+(me&1023)/1024*.13,.38*Ce/Math.max(1,ve)),aop:(me>>>10&1023)/1024*C,inc:Math.max(.012,.11-Te*.016),y:(De%3-1)*4,inner:_e,step0:Ce,gapA:Ce-u*H.gap,inner0:_e,r00:_e+(Te+.5)*Ce+De%2*Ce*.16},Z.toArray(Ze,N*3)}else if(yt[N]>=0){let be=yt[N],Te=rt[be],De=Te.indexOf(N);xe=1.05+Math.log(1+q.w/90)*.42;let _e=2.6+Math.log(1+J[be].inb)*1.55+Math.log(1+J[be].w/120)*.7,Ce=Ja(q.p+"#ecc"),Xe=_e*3.4+De%4*_e*1.15;se={kind:"moon",anchorNode:be,ecc:Math.min(.02+(Ce&1023)/1024*.12,.38*_e*1.15/Math.max(1,Xe)),aop:(Ce>>>10&1023)/1024*C,pr:_e,mk:De%4,r:_e*3.4+De%4*_e*1.15,ph:De/Math.max(3,Te.length)*C,sp:.0016*Math.pow(3.4/(3.4+De%4*1.15),1.5),inc:-(((Ja(J[be].p+"#r")&255)/255-.5)*.62)+((Ce>>>20&63)/64-.5)*.055,y:0},Z.clone().lerp(new S.Color(16773328),.18).toArray(Ze,N*3)}else xe=1.5+Math.log(1+q.w/90)*.5,se=Kn[N],Z.toArray(Ze,N*3);We[N]=xe,se.r0=se.r,Ti[N]=se.ph||0,et[N]=se}{let N=new Map;for(let ae=0;ae<G;ae++){let Z=et[ae];if(!Z||Z.kind==="core")continue;let xe=Z.kind==="moon"?"m"+Z.anchorNode:Z.kind==="wiki"?"w"+(Z.anchor&&Z.anchor.key):"a",se=N.get(xe)||0;N.set(xe,se+1),Z.sK=se}let q=new Map;N.forEach((ae,Z)=>q.set(Z,ae));for(let ae=0;ae<G;ae++){let Z=et[ae];if(!Z||Z.kind==="core")continue;let xe=Z.kind==="moon"?"m"+Z.anchorNode:Z.kind==="wiki"?"w"+(Z.anchor&&Z.anchor.key):"a";Z.sN=q.get(xe)||1,Y_(Z,Z.sK)}}Si=We.slice(),cn=new Float32Array(G*3),Dr=new Float32Array(G*3),Dh=new Float32Array(G);for(let N=0;N<G;N++){let q=et[N];Dh[N]=q.kind==="core"?26:q.kind==="moon"?2.4+We[q.anchorNode]*1.9:q.kind==="wiki"?2+(Nt[N].R||6)*.9:1}Ai=new Float64Array(G),Va=new Uint8Array(G);let ne=N=>{let q=/(\d{4})-(\d{2})-(\d{2})/.exec(N||"");return q?Date.UTC(+q[1],+q[2]-1,+q[3]):0};for(let N=0;N<G;N++)Ai[N]=ne(J[N].d);for(let N=0;N<G;N++){if(Ai[N])continue;let q=0,ae=Z=>{let xe=Ai[Z];xe&&(!q||xe<q)&&(q=xe)};(rt[N]||[]).forEach(ae),!q&&fn[N]&&fn[N].forEach(ae),Ai[N]=q}Ee.lo=1/0,Ee.hi=-1/0;for(let N=0;N<G;N++)Ai[N]&&(Ai[N]<Ee.lo&&(Ee.lo=Ai[N]),Ai[N]>Ee.hi&&(Ee.hi=Ai[N]));isFinite(Ee.lo)||(Ee.lo=0,Ee.hi=0),Ee.dated=0;for(let N=0;N<G;N++)Ai[N]&&Ee.dated++;Cr=new Float64Array(G),ra=new Float32Array(G),el=!1;for(let N=0;N<G;N++)Cr[N]=+J[N].mt||0,Cr[N]&&(el=!0);zh(),$s=Ze.slice(),Ee.u=0,Ee.play=!1,Ee.stage=-1,Ee.marksFor=null,Fn=new Float32Array(G),ei=new Float32Array(G).fill(1),Zn=new Float32Array(G);{let N=Math.max(1,Ee.hi-Ee.lo),q=new Float64Array(G);for(let se=0;se<G;se++)q[se]=Ai[se]||Ee.lo+(G>1?se/(G-1):0)*N;tl=[];for(let se=0;se<G;se++)se!==He&&tl.push(se);tl.sort((se,be)=>q[se]-q[be]||se-be);let ae=tl.length,Z=bp-Bh;tl.forEach((se,be)=>{let Te=ae>1?be/(ae-1):0,De=(q[se]-Ee.lo)/N;Fn[se]=Bh+Z*(Te*.66+De*.34)}),He>=0&&He<G&&(Fn[He]=.052),Ne.forEach(se=>{se.genT=1});for(let se=0;se<G;se++){if(se===He)continue;let be=Nt[se];be&&Fn[se]<be.genT&&(be.genT=Fn[se])}Ne.forEach(se=>{se.genT=se.genT>=1?Bh:Math.max(.078,se.genT-.014)});for(let se=0;se<G;se++){if(se===He)continue;et[se].kind==="wiki"&&Nt[se]&&(Fn[se]=Math.max(Fn[se],Nt[se].genT+.006))}for(let se=0;se<G;se++){let be=et[se];be.kind==="moon"&&(Fn[se]=Math.max(Fn[se],Fn[be.anchorNode]+.009))}for(let se=0;se<G;se++)Fn[se]=Math.min(Fn[se],bp);let xe=Ae.length;Gc=new Float32Array(Math.max(1,xe));for(let se=0;se<xe;se++){let be=Ae[se][0],Te=Ae[se][1],De=Math.max(Fn[be]||0,Fn[Te]||0);Gc[se]=Math.min(.995,De+(.965-De)*.34+se%11*.0016)}}ja.clear(),id=-1}function Tp(n){let o=fn[n]?fn[n].size:0,s=rt[n]?rt[n].length:0,c=0;return fn[n]&&fn[n].forEach(u=>{c+=rt[u].length}),{links:o,moons:s,far:c}}let En=f("gl"),Tt=new S.WebGLRenderer({canvas:En,antialias:!0,alpha:!1,powerPreference:"high-performance"});Tt.setPixelRatio(Math.min(devicePixelRatio,2)),Tt.setClearColor(132106,1),Tt.outputEncoding=S.sRGBEncoding,Tt.info.autoReset=!1;let pe={ok:!1,rt:null,a:null,a2:null,a3:null,b:null,c:null,bright:null,blur:null,comp:null,ray:null,quad:null,cam:null,scene:null,w:0,h:0},b1=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,_1=`
uniform sampler2D tSrc; uniform float uThresh; uniform float uKnee;
varying vec2 vUv;
void main(){
  vec3 c = min(texture2D(tSrc, vUv).rgb, vec3(3.0));
  float l = max(c.r, max(c.g, c.b));
  float k = smoothstep(uThresh, uThresh + uKnee, l);
  /* ---- only the part that is over, not the whole pixel ----
     The mask alone was the bug that kept this switched off by default, and
     it took turning it on over a real vault to see it. "c * k" passes the
     *entire* pixel once it crosses, so a mid-grey region that gets over the
     line contributes all of itself \u2014 and the sky is full of exactly that:
     the galaxy's band, a nebula complex, the dust disk, four thousand
     starfield points. None of them is bright, all of them are over, and
     three chained blurs spread their sum across the whole frame. What came
     out was empty space lifted to grey \u2014 the one thing this picture cannot
     have, and worse the further the effect was turned up.

     What a lens actually spills is the light in excess of what the sensor
     could hold, so subtract the threshold rather than gate on it. A pixel
     just over the line now contributes almost nothing and a star's core
     still contributes most of itself, which is the difference between
     veiling glare and a grey wash. The knee stays on top of it, doing the
     job it was always for: no visible edge where the two regimes meet. */
  float over = max(l - uThresh, 0.0);
  gl_FragColor = vec4(c * (k * over / max(l, 1e-4)), 1.0);
}`,M1=`
uniform sampler2D tSrc; uniform vec2 uDir;
varying vec2 vUv;
void main(){
  vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
  s += texture2D(tSrc, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
  s += texture2D(tSrc, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
  s += texture2D(tSrc, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
  s += texture2D(tSrc, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
  gl_FragColor = vec4(s, 1.0);
}`,S1=`
uniform sampler2D tSrc; uniform vec2 uSun; uniform float uDecay, uWeight;
varying vec2 vUv;
void main(){
  vec2 uv = vUv;
  /* not named "step": that is a built-in, and a variable shadowing one is
     legal GLSL that some drivers still refuse to compile */
  vec2 dlt = (uv - uSun) * 0.0355;
  float ill = 1.0;
  vec3 s = vec3(0.0);
  for (int i = 0; i < 24; i++) {
    uv -= dlt;
    s += texture2D(tSrc, clamp(uv, 0.0, 1.0)).rgb * ill;
    ill *= uDecay;
  }
  /* the far side of the frame is not lit by a source at the near side */
  float fall = clamp(1.0 - length(vUv - uSun) * 0.62, 0.0, 1.0);
  gl_FragColor = vec4(s * uWeight * fall * fall, 1.0);
}`,E1=`
uniform sampler2D tSrc; uniform vec2 uRes;
varying vec2 vUv;
float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
void main(){
  vec2 px = 1.0 / uRes;
  vec3 rgbM = texture2D(tSrc, vUv).rgb;
  float lM  = luma(rgbM);
  float lNW = luma(texture2D(tSrc, vUv + vec2(-1.0, -1.0) * px).rgb);
  float lNE = luma(texture2D(tSrc, vUv + vec2( 1.0, -1.0) * px).rgb);
  float lSW = luma(texture2D(tSrc, vUv + vec2(-1.0,  1.0) * px).rgb);
  float lSE = luma(texture2D(tSrc, vUv + vec2( 1.0,  1.0) * px).rgb);
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(0.0312, lMax * 0.125)) { gl_FragColor = vec4(rgbM, 1.0); return; }
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
  float dirReduce = max((lNW + lNE + lSW + lSE) * 0.03125, 0.0078125);
  float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
  dir = clamp(dir * rcp, -8.0, 8.0) * px;
  vec3 rgbA = 0.5 * (texture2D(tSrc, vUv + dir * (1.0 / 3.0 - 0.5)).rgb
                   + texture2D(tSrc, vUv + dir * (2.0 / 3.0 - 0.5)).rgb);
  vec3 rgbB = rgbA * 0.5 + 0.25 * (texture2D(tSrc, vUv + dir * -0.5).rgb
                                 + texture2D(tSrc, vUv + dir *  0.5).rgb);
  float lB = luma(rgbB);
  gl_FragColor = vec4((lB < lMin || lB > lMax) ? rgbA : rgbB, 1.0);
}`,A1=`
uniform sampler2D tSrc; uniform vec2 uRes;
varying vec2 vUv;
vec3 chroma(vec2 uv, vec2 dir, float amt) {
  return vec3(texture2D(tSrc, uv + dir * amt).r,
              texture2D(tSrc, uv).g,
              texture2D(tSrc, uv - dir * amt).b);
}
void main(){
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  vec2 uv = 1.0 - vUv;
  vec2 toC = (0.5 - uv);
  vec2 dir = normalize(toC * asp + 1e-5);
  vec3 acc = vec3(0.0);
  vec2 g = uv;
  const float spacing = 0.30;
  /* Every ghost lies on the line through the middle of the frame, so a
     source *at* the middle has all four of them stacked on top of itself \u2014
     and what they sample is the widest bloom stage, which a bright disc has
     saturated into the shape of the blur's own square kernel. The sun framed
     dead centre, which is how the vault opens, wore a rounded white square.
     A real lens's ghosts of an on-axis source are lost in the source anyway,
     so they fade out over the middle of the frame and are untouched past
     it. */
  float centre = smoothstep(0.04, 0.30, length(toC * asp));
  vec3 tints[4];
  tints[0] = vec3(0.55, 0.85, 1.00);
  tints[1] = vec3(0.70, 1.00, 0.75);
  tints[2] = vec3(1.00, 0.75, 0.55);
  tints[3] = vec3(0.80, 0.65, 1.00);
  for (int i = 0; i < 4; i++) {
    g = uv + toC * spacing * float(i);
    float w = pow(max(0.0, 1.0 - length((0.5 - g) * asp) / 0.75), 5.0);
    acc += chroma(g, dir, 0.004 + 0.003 * float(i)) * w * centre * tints[i] * (0.9 - 0.15 * float(i));
  }
  /* the halo: the source seen at a fixed angle off the axis, brightest
     where the ring crosses the frame's own middle distance */
  vec2 hv = dir * 0.36 / asp;
  vec2 hp = uv + hv;
  float hw = pow(max(0.0, 1.0 - abs(length((0.5 - hp) * asp) - 0.36) / 0.09), 3.0);
  acc += chroma(hp, dir, 0.010) * hw * vec3(0.75, 0.85, 1.0) * 0.9;
  gl_FragColor = vec4(acc, 1.0);
}`,T1=`
uniform sampler2D tSrc; uniform vec2 uDir; uniform vec3 uTint;
varying vec2 vUv;
void main(){
  vec3 s = vec3(0.0);
  float wsum = 0.0;
  for (int i = -8; i <= 8; i++) {
    float w = 1.0 - abs(float(i)) / 9.0;
    s += texture2D(tSrc, vUv + uDir * float(i)).rgb * w;
    wsum += w;
  }
  gl_FragColor = vec4(s / wsum * uTint, 1.0);
}`,L1=`
uniform sampler2D tScene; uniform sampler2D tRay;
uniform sampler2D tB1; uniform sampler2D tB2; uniform sampler2D tB3;
uniform sampler2D tFlare; uniform sampler2D tAnam; uniform sampler2D tNoise;
uniform float uAmt, uRay, uFlare;
uniform float uCurve, uSplit, uLens, uGrain, uTime, uExpo;
uniform vec2 uRes;
varying vec2 vUv;
void main(){
  vec2 d = vUv - 0.5;
  /* ---- the lens, and why half of it is up here ----
     A real lens cannot bring three wavelengths to the same ring of glass, so
     the corners of every photograph have colour separating in them and the
     centre does not. The separation is cubic in radius rather than linear:
     it is nothing at all across the middle half of the frame and then
     arrives quickly, which is what keeps it reading as glass rather than as
     a broken decoder.

     It samples the *scene*, before the bloom is added, because that is where
     a lens sits \u2014 light goes through the glass and then into the sensor, and
     the glow is something the sensor does. Doing it at the end would put the
     fringe on the bloom's own edges, which are already soft and have no
     edges to fringe. The other half of the lens \u2014 the vignette \u2014 is at the
     bottom for the same reason in reverse: falloff is the aperture cutting
     light, so it takes everything with it. */
  vec3 c;
  if (uLens > 0.001) {
    vec2 off = d * dot(d, d) * uLens * 0.0035;
    c = vec3(texture2D(tScene, vUv + off).r,
             texture2D(tScene, vUv).g,
             texture2D(tScene, vUv - off).b);
  } else c = texture2D(tScene, vUv).rgb;
  /* ---- three widths, added ----
     The chain used to keep only its last and widest stage, and a chain of
     gaussians is a gaussian: a soft round mound with nothing outside it.
     That is not what a lens does. Veiling glare is a power law \u2014 the same
     one the star's own glare sprite is drawn from, because it is the same
     physics \u2014 and a power law has a bright centre *and* a tail that carries
     a long way, which is exactly what a single gaussian of any width cannot
     have at once. Widen it and the core goes soft; tighten it and the light
     stops at the object.

     A sum of gaussians of increasing width is the standard way to build one,
     and the chain was already computing them: it just threw the first two
     away. Keeping all three costs two render targets and nothing in passes.
     The weights sum to one, so the total light added is what it always was
     and only its distribution has moved \u2014 a hot centre, a soft middle, and a
     spill that reaches across the frame. */
  /* The widest stage separates by colour toward the corners: the spill
     that travelled furthest through the glass is the spill the glass has
     dispersed most, red outside and blue inside, which is what the rim of
     a real glare looks like. The tight stages stay put. */
  vec2 rd = d * 0.018 * uFlare;
  vec3 b3 = vec3(texture2D(tB3, vUv + rd).r, texture2D(tB3, vUv).g, texture2D(tB3, vUv - rd).b);
  vec3 spill = texture2D(tB1, vUv).rgb * 0.34
             + texture2D(tB2, vUv).rgb * 0.30
             + b3 * 0.36;
  /* the front element is not clean. Two octaves of the sky's own noise,
     multiplied, so the smudges are sparse and sharp-edged, and they catch
     the spill and nothing else: a dark frame stays dark. */
  float dirt = texture2D(tNoise, vUv * vec2(2.6, 1.5) + 0.13).r
             * texture2D(tNoise, vUv * vec2(0.9, 0.6) + 0.71).g;
  dirt = smoothstep(0.30, 0.62, dirt);
  c += spill * uAmt * (1.0 + dirt * uFlare * 2.6);
  c += texture2D(tRay,   vUv).rgb * uRay;
  c += (texture2D(tFlare, vUv).rgb + texture2D(tAnam, vUv).rgb) * uFlare;
  /* ---- the exposure ----
     Everything that reached the sensor, scaled by how long the shutter was
     open. Before the curve, because the curve is the sensor's shoulder and
     the shoulder is what a longer exposure runs into; after the glow and
     the shafts, because they are light too and a camera cannot open up on
     the scene without opening up on the glare. One for a frame with a
     source in it \u2014 see exposureStep. */
  c *= uExpo;
  /* ---- the curve ----
     Everything above is additive, and additive light in an eight-bit buffer
     ends at 1.0 whether it arrived there gently or at four times over. That
     hard stop is the single thing that made this read as rendered: a star
     core, a dense knot of links and the sun's own disc all clip to the same
     flat white, and a flat white patch is paint, not light. A sensor has a
     shoulder instead \u2014 the brighter it gets the less each further photon
     moves it, so highlights keep their shape all the way up.

     Below the knee nothing happens at all. That is the point of doing it
     this way rather than with one of the filmic curves that lift the blacks
     as well: the dark here is not a lack of exposure, it is empty space, and
     a curve that greys it out is describing a room with the lights off.
     The shoulder is exponential, which is the one shape that meets the
     straight part with the same slope \u2014 so there is no visible seam at the
     knee for something drifting across it to pop through.

     It cannot reach 1.0, only approach it, so the clip is gone rather than
     moved: no amount of light coming in produces a flat patch going out. */
  if (uCurve > 0.001) {
    /* ---- the film ----
       The shoulder used to be an exponential above a knee, which kept the
       dark untouched and folded the top. It is the ACES fitted curve now
       (Narkowicz 2015), the response the film industry standardised on
       because it is the closest short formula to how a print reacts:
       a toe that keeps black black, a straight middle, and a shoulder that
       takes four times over-exposure to a highlight with shape. It is
       applied to the half-float signal, which is what it was made for, and
       the knob is still how far toward it the picture goes. */
    const float A = 2.51, B = 0.03, C = 2.43, D = 0.59, E = 0.14;
    vec3 x = c * 0.92;
    vec3 film = clamp((x * (A * x + B)) / (x * (C * x + D) + E), 0.0, 1.0);
    c = mix(c, film, uCurve);
    vec3 k = vec3(0.72);
    vec3 over = max(c - k, 0.0);
    /* min(c, k) and not k. Below the knee "over" is zero, so the shoulder
       term is zero and the whole expression is whatever the straight part
       says \u2014 which has to be the pixel itself, and was the knee. Every value
       under 0.72 came out *at* 0.72 and was then mixed back toward itself by
       uCurve, so empty space at rgb(3,5,12) left this at rgb(72,73,77): the
       curve that was written to leave the blacks alone was lifting them, and
       the further it was turned up the greyer the sky got.

       It never showed because the knob shipped at zero. Turning the grade on
       by default is what found it, which is the argument for shipping the
       look you mean people to see rather than the one that cannot be wrong.

       Both halves have slope one where they meet \u2014 d/dc of min(c,k) is 1
       below and 0 above, and the shoulder's is 0 below and 1 at the knee \u2014
       so the join is still seamless, which is the property the exponential
       was chosen for. */
    vec3 rolled = min(c, k) + (1.0 - k) * (1.0 - exp(-over / (1.0 - k)));
    c = mix(c, rolled, uCurve);
  }
  /* ---- the ceiling ----
     The scene buffer is half float now, so light arrives here above 1.0,
     and the curve at less than full strength leaves some of that through.
     A second shoulder, high and always on: nothing under 0.86 is touched,
     and nothing coming in produces a flat patch going out \u2014 a core at four
     lands under a core at two, which is the point of having the bits. The
     same exponential as the curve, so the join has slope one. */
  {
    vec3 k2 = vec3(0.86);
    vec3 ov = max(c - k2, 0.0);
    c = min(c, k2) + (1.0 - k2) * (1.0 - exp(-ov / (1.0 - k2)));
  }
  /* ---- the split ----
     Shadows cold, highlights warm. Every emulsion ever made does this and
     every colourist since has kept doing it, because the eye reads warm-near
     and cool-far without being told \u2014 it is the same inference it makes
     about a fire in a blue dusk, and it separates two things at the same
     distance on the screen into two distances in the head.

     A multiply rather than a mix toward a colour, so it cannot add light to
     something that has none. Empty space has luminance zero, gets a tint of
     one times zero, and stays exactly as black as it was. */
  if (uSplit > 0.001) {
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    vec3 tint = mix(vec3(0.90, 0.97, 1.10), vec3(1.09, 1.01, 0.90),
                    smoothstep(0.05, 0.62, lum));
    c *= mix(vec3(1.0), tint, uSplit);
  }
  /* ---- the lens, part two: the falloff ----
     Quadratic and quartic together rather than either alone. The quadratic
     term is the gentle darkening across the whole frame that nobody notices
     and everybody feels; the quartic only arrives in the corners, which is
     where a real aperture actually runs out of glass. One term on its own is
     either a barely-there wash or a black ring. */
  if (uLens > 0.001) {
    float r2 = dot(d, d);
    c *= 1.0 - uLens * (r2 * 0.34 + r2 * r2 * 0.55);
  }
  /* ---- the grain ----
     A floor of noise, and it is here to stop banding rather than to be seen.
     A dark gradient across eight bits is a staircase of flat steps, and the
     steps are exactly what the eye is best at finding; a little noise makes
     the boundary between two levels a dithered edge instead of a line, and
     the picture reads as having more levels than it has.

     Strongest in the shadows and gone by the highlights \u2014 which is both
     where the banding is and, as it happens, where film's own grain shows.
     Signed and centred on zero, so it dithers rather than fogs: the average
     of the noise is nothing added, which keeps empty space empty.

     Scaled by the pixel grid rather than by the uv, so the grain is the same
     size on a small window and a large one instead of being stretched into
     blotches, and moved by the clock so it is film rather than a dirty
     sensor \u2014 a static pattern reads as something wrong with the screen. */
  if (uGrain > 0.001) {
    float n = fract(sin(dot(vUv * uRes + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c += (n - 0.5) * uGrain * 0.048 * (1.0 - smoothstep(0.0, 0.60, lum));
  }
  gl_FragColor = vec4(c, 1.0);
}`,R1=`
uniform sampler2D tSrc; uniform vec2 uCell;
varying vec2 vUv;
void main(){
  vec2 o = floor(vUv / uCell) * uCell;
  float s = 0.0, m = 0.0;
  for (int y = 0; y < 8; y++)
    for (int x = 0; x < 8; x++) {
      vec2 uv = o + uCell * (vec2(float(x), float(y)) + 0.5) / 8.0;
      vec3 c = texture2D(tSrc, uv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      s += l; m = max(m, l);
    }
  gl_FragColor = vec4(m, s / 64.0, 0.0, 1.0);
}`,Ci={gain:1,target:1,buf:new Uint8Array(16*16*4),at:0,lastT:0};function C1(n){let o=H.aex;if(o<=.02||!pe.probe){Ci.gain=Ci.target=1;return}let s=Math.min(.1,(n-(Ci.lastT||n))*.001);if(Ci.lastT=n,!(Ci.at++&3)){pe.probe.uniforms.tSrc.value=pe.rt.texture,Nr(pe.probe,pe.pr),Tt.readRenderTargetPixels(pe.pr,0,0,16,16,Ci.buf);let c=0;for(let m=0;m<256;m++)Ci.buf[m*4]>c&&(c=Ci.buf[m*4]);let u=c/255;Ci.target=R(.62/Math.max(u,.01),1,1+2.4*o)}Ci.gain=I(Ci.gain,Ci.target,1-Math.exp(-s/.9))}function D1(){if(pe.scene)return;let n=o=>new S.ShaderMaterial({vertexShader:b1,fragmentShader:o,depthTest:!1,depthWrite:!1,uniforms:{}});pe.bright=n(_1),pe.bright.uniforms={tSrc:{value:null},uThresh:{value:.48},uKnee:{value:.4}},pe.blur=n(M1),pe.blur.uniforms={tSrc:{value:null},uDir:{value:new S.Vector2}},pe.ray=n(S1),pe.ray.uniforms={tSrc:{value:null},uSun:{value:new S.Vector2(.5,.5)},uDecay:{value:.945},uWeight:{value:.052}},pe.comp=n(L1),pe.comp.uniforms={tScene:{value:null},tRay:{value:null},tB1:{value:null},tB2:{value:null},tB3:{value:null},tFlare:{value:null},tAnam:{value:null},tNoise:{value:null},uAmt:{value:.6},uRay:{value:0},uFlare:{value:0},uCurve:{value:0},uSplit:{value:0},uLens:{value:0},uGrain:{value:0},uTime:{value:0},uExpo:{value:1},uRes:{value:new S.Vector2(1,1)}},pe.flare=n(A1),pe.flare.uniforms={tSrc:{value:null},uRes:{value:new S.Vector2(1,1)}},pe.anam=n(T1),pe.anam.uniforms={tSrc:{value:null},uDir:{value:new S.Vector2},uTint:{value:new S.Vector3(.45,.68,1).multiplyScalar(.5)}},pe.fxaa=n(E1),pe.fxaa.uniforms={tSrc:{value:null},uRes:{value:new S.Vector2(1,1)}},pe.probe=n(R1),pe.probe.uniforms={tSrc:{value:null},uCell:{value:new S.Vector2(1/16,1/16)}},pe.pr=new S.WebGLRenderTarget(16,16,{minFilter:S.NearestFilter,magFilter:S.NearestFilter,format:S.RGBAFormat,depthBuffer:!1,stencilBuffer:!1}),pe.quad=new S.Mesh(new S.PlaneGeometry(2,2),pe.bright),pe.quad.frustumCulled=!1,pe.scene=new S.Scene,pe.scene.add(pe.quad),pe.cam=new S.Camera}function Lp(n,o){if(D1(),pe.w===n&&pe.h===o&&pe.rt)return;[pe.rt,pe.a,pe.a2,pe.a3,pe.b,pe.c,pe.f,pe.g,pe.out].forEach(m=>{m&&m.dispose()}),pe.hdr=!!(Tt.capabilities&&Tt.capabilities.isWebGL2);let s={minFilter:S.LinearFilter,magFilter:S.LinearFilter,format:S.RGBAFormat,depthBuffer:!0,stencilBuffer:!1,type:pe.hdr?S.HalfFloatType:S.UnsignedByteType};pe.rt=new S.WebGLRenderTarget(n,o,s),pe.rt.texture.encoding=S.sRGBEncoding;let c=Math.max(1,n>>1),u=Math.max(1,o>>1);pe.a=new S.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},s)),pe.a2=new S.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},s)),pe.a3=new S.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},s)),pe.b=new S.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},s)),pe.c=new S.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},s)),pe.f=new S.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},s)),pe.g=new S.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},s)),pe.out=new S.WebGLRenderTarget(n,o,{minFilter:S.LinearFilter,magFilter:S.LinearFilter,format:S.RGBAFormat,depthBuffer:!1,stencilBuffer:!1}),pe.w=n,pe.h=o,pe.ok=!0,[pe.a,pe.a2,pe.a3,pe.b,pe.c,pe.f,pe.g].forEach(m=>{Tt.setRenderTarget(m),Tt.clear()}),Tt.setRenderTarget(null)}function Nr(n,o){pe.quad.material=n,Tt.setRenderTarget(o),Tt.clear(),Tt.render(pe.scene,pe.cam)}let Hh=new S.Vector3;function P1(){return!G||!Mt||!Mt.visible||(Hh.copy(Mt.position).project(Ie),Hh.z>1)?null:Hh}function Wh(){Tt.info.reset();let n=H.blm,o=H.ray>.02?P1():null,s=0;if(o){let y=R(1.9-Math.max(Math.abs(o.x),Math.abs(o.y)),0,1),M=R(Ie.position.distanceTo(Mt.position)/((We[He]||17)*34)-.12,0,1);s=H.ray*y*M*M}let c=Math.max(H.cur,H.spl,H.len,H.grn,H.aex);if(n<=.02&&s<=.02&&c<=.02||!pe.ok)return Tt.setRenderTarget(null),Tt.render(wt,Ie),!1;Tt.setRenderTarget(pe.rt),Tt.clear(),Tt.render(wt,Ie),C1(performance.now());let u=n>.02||s>.02;if(u){pe.bright.uniforms.tSrc.value=pe.rt.texture,Nr(pe.bright,pe.a);let y=pe.a.width,M=pe.a.height,L=[1,3,7],T=[pe.a,pe.a2,pe.a3],A=pe.a;for(let D=0;D<L.length;D++){let B=L[D];pe.blur.uniforms.tSrc.value=A.texture,pe.blur.uniforms.uDir.value.set(B/y,0),Nr(pe.blur,pe.b),pe.blur.uniforms.tSrc.value=pe.b.texture,pe.blur.uniforms.uDir.value.set(0,B/M),Nr(pe.blur,T[D]),A=T[D]}}let m=u&&H.flr>.02?H.flr:0;if(m>0){let y=pe.a.width,M=pe.a.height;pe.flare.uniforms.tSrc.value=pe.a3.texture,pe.flare.uniforms.uRes.value.set(y,M),Nr(pe.flare,pe.f),pe.anam.uniforms.tSrc.value=pe.a.texture,pe.anam.uniforms.uDir.value.set(2.2/y,0),Nr(pe.anam,pe.b),pe.anam.uniforms.tSrc.value=pe.b.texture,pe.anam.uniforms.uDir.value.set(7/y,0),Nr(pe.anam,pe.g)}s>.02&&(pe.ray.uniforms.tSrc.value=pe.a3.texture,pe.ray.uniforms.uSun.value.set(o.x*.5+.5,o.y*.5+.5),Nr(pe.ray,pe.c));let h=pe.comp.uniforms;return h.tScene.value=pe.rt.texture,h.tB1.value=pe.a.texture,h.tB2.value=pe.a2.texture,h.tB3.value=pe.a3.texture,h.tRay.value=pe.c.texture,h.uAmt.value=u?n:0,h.uRay.value=s>.02?s:0,h.tFlare.value=pe.f.texture,h.tAnam.value=pe.g.texture,h.tNoise.value=Kh(),h.uFlare.value=m,h.uCurve.value=H.cur,h.uSplit.value=H.spl,h.uLens.value=H.len,h.uGrain.value=H.grn,h.uExpo.value=Ci.gain,h.uTime.value=performance.now()*.001%100,h.uRes.value.set(pe.w||1,pe.h||1),Nr(pe.comp,pe.out),pe.fxaa.uniforms.tSrc.value=pe.out.texture,pe.fxaa.uniforms.uRes.value.set(pe.w||1,pe.h||1),pe.quad.material=pe.fxaa,Tt.setRenderTarget(null),Tt.render(pe.scene,pe.cam),!0}let wt=new S.Scene;wt.fog=new S.FogExp2(132106,26e-5);let Ie=new S.PerspectiveCamera(52,1,.6,4e4),F1=`
attribute float aSide;
attribute vec3 aColor;
varying vec3 vCol;
varying float vS;
varying float vZ;
void main(){
  vCol = aColor; vS = aSide;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vZ = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,Rp=2.2,N1=`
uniform float uOpacity, uFogD;
varying vec3 vCol;
varying float vS;
varying float vZ;
void main(){
  /* distance across the ribbon in units of the half-width that was asked
     for, so s = 1.0 is the edge of the line the knob describes and the strip
     itself runs out at s = RIB_PAD */
  float s = abs(vS) * ${Rp.toFixed(3)};
  /* flat-topped, and through half at s = 1: a sixth power is square enough
     to read as a line with an edge rather than as a smear with a middle */
  float core  = 1.0 / (1.0 + pow(s, 6.0));
  float glare = exp(-s * s * 0.55);
  float a = (core * ${.4181.toFixed(4)} + glare * ${.2832.toFixed(4)}) * uOpacity;
  /* the pad is there for the glare to fall off inside, not to be shaded to
     the last thousandth: past this the fragment costs more than it shows */
  if (a < 0.0015) discard;
  float f = clamp(1.0 - exp(-uFogD * uFogD * vZ * vZ), 0.0, 1.0);
  gl_FragColor = vec4(vCol * a * (1.0 - f), 1.0);
}`,ml=[];function qh(n){let o=new S.ShaderMaterial({uniforms:{uOpacity:{value:n},uFogD:{value:0}},vertexShader:F1,fragmentShader:N1,transparent:!0,depthWrite:!1,blending:S.AdditiveBlending,side:S.DoubleSide});return ml.push(o),o}function I1(){let n=wt.fog?wt.fog.density:0;for(let o=0;o<ml.length;o++)ml[o].uniforms.uFogD.value=n}function Xh(n,o){let s=n*o*2,c=new Float32Array(s*3),u=new Float32Array(s*3),m=new Float32Array(s);for(let T=0;T<s;T++)m[T]=T&1?1:-1;let h=s>65535?Uint32Array:Uint16Array,y=new h(n*(o-1)*6),M=0;for(let T=0;T<n;T++){let A=T*o*2;for(let D=0;D<o-1;D++){let B=A+D*2;y[M++]=B,y[M++]=B+1,y[M++]=B+2,y[M++]=B+1,y[M++]=B+3,y[M++]=B+2}}let L=new S.BufferGeometry;return L.setAttribute("position",new S.BufferAttribute(c,3)),L.setAttribute("aColor",new S.BufferAttribute(u,3)),L.setAttribute("aSide",new S.BufferAttribute(m,1)),L.setIndex(new S.BufferAttribute(y,1)),{geo:L,pos:c,col:u,verts:s,perStrip:o*2,idxPerStrip:(o-1)*6}}function rd(n,o,s,c,u,m,h,y,M,L,T,A,D,B,X,O){let V=y*A-M*T,ne=M*L-h*A,N=h*T-y*L,q=Math.sqrt(V*V+ne*ne+N*N),ae=D*Rp;if(q>1e-9){let xe=ae/q;V*=xe,ne*=xe,N*=xe}else V=ae,ne=0,N=0;let Z=s*3;n[Z]=c-V,n[Z+1]=u-ne,n[Z+2]=m-N,o[Z]=B,o[Z+1]=X,o[Z+2]=O,n[Z+3]=c+V,n[Z+4]=u+ne,n[Z+5]=m+N,o[Z+3]=B,o[Z+4]=X,o[Z+5]=O}let k1=()=>H.lwd/Rr.lwd,O1=new S.AmbientLight(4219007,.13);wt.add(O1);let od=new S.PointLight(16767392,.55,0,1.6);od.position.set(0,0,0),wt.add(od);let Yh=new S.DirectionalLight(7851263,.12);Yh.position.set(1,.6,.4),wt.add(Yh);let Cp=new S.DirectionalLight(2375775,.06);Cp.position.set(-.6,-.8,-.3),wt.add(Cp);let B1=1.55;function Dp(n,o){n.vertexShader=(o?`attribute vec4 aStar; attribute vec4 aStarCol; attribute vec4 aOcc; attribute float aOccS; attribute vec4 aRingS;
`:`uniform vec4 uStar; uniform vec4 uStarCol; uniform vec4 uOcc; uniform float uOccS; uniform vec4 uRingS;
`)+`varying vec4 vStar; varying vec4 vStarCol; varying vec4 vOcc; varying float vOccS;
varying vec4 vRingS; varying vec3 vCen;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+(o?`  vStar = vec4((viewMatrix * modelMatrix * vec4(aStar.xyz, 1.0)).xyz, aStar.w);
  vStarCol = aStarCol;
  vOcc = vec4((viewMatrix * modelMatrix * vec4(aOcc.xyz, 1.0)).xyz, aOcc.w);
  vOccS = aOccS;
  vRingS = vec4(normalize(mat3(viewMatrix) * mat3(modelMatrix) * aRingS.xyz), aRingS.w);
  vCen = (modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;`:`  vStar = vec4((viewMatrix * vec4(uStar.xyz, 1.0)).xyz, uStar.w);
  vStarCol = uStarCol;
  vOcc = vec4((viewMatrix * vec4(uOcc.xyz, 1.0)).xyz, uOcc.w);
  vOccS = uOccS;
  vRingS = vec4(normalize(mat3(viewMatrix) * uRingS.xyz), uRingS.w);
  vCen = (modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;`)),n.fragmentShader=`varying vec4 vStar; varying vec4 vStarCol; varying vec4 vOcc; varying float vOccS;
varying vec4 vRingS; varying vec3 vCen;
vec3 sDir; float sInt; vec3 sTint;
float rBand(float x, float a, float b){
  return smoothstep(a - 0.010, a + 0.010, x) * (1.0 - smoothstep(b - 0.010, b + 0.010, x));
}
float ringTrans(float x){
  if (x < 0.99 || x > 1.84) return 1.0;
  float o = 0.10 * rBand(x, 1.000, 1.232)
          + 0.78 * rBand(x, 1.232, 1.574)
          + 0.08 * rBand(x, 1.574, 1.634)
          + 0.39 * rBand(x, 1.634, 1.830);
  return 1.0 - clamp(o, 0.0, 0.86);
}
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
  {
    vec3 lv = vStar.xyz - geometry.position;
    float ld2 = dot(lv, lv);
    sDir = lv * inversesqrt(max(ld2, 1e-6));
    float s2 = max(vStar.w * vStar.w, 1e-3);
    sInt = `+B1.toFixed(2)+` / (1.0 + ld2 / s2);
    sTint = vec3(1.0);
    if (vRingS.w > 0.0) {
      float dn = dot(sDir, vRingS.xyz);
      if (abs(dn) > 1e-4) {
        vec3 rel = geometry.position - vCen;
        float tt = -dot(rel, vRingS.xyz) / dn;
        if (tt > 0.0) sInt *= ringTrans(length(rel + sDir * tt) / vRingS.w);
      }
    }
    if (vOcc.w > 0.0) {
      vec3 oc = vOcc.xyz - geometry.position;
      float ot = dot(oc, sDir);
      if (ot > 0.0) {
        float od = length(oc - sDir * ot);
        float oD = max(length(vStar.xyz - vOcc.xyz), 1e-3);
        float ru = max(vOcc.w - ot * (vOccS - vOcc.w) / oD, 0.0);
        float rp = max(vOcc.w + ot * (vOccS + vOcc.w) / oD, ru + 1e-4);
        float ec = smoothstep(ru, rp, od);
        sInt *= mix(0.055, 1.0, ec);
        sTint = mix(vec3(1.0, 0.33, 0.11), vec3(1.0), ec);
      }
    }
    IncidentLight sl;
    sl.direction = sDir;
    sl.color = vStarCol.rgb * sTint * sInt;
    if (mRock > 0.5) {
      float mu0 = max(dot(geometry.normal, sDir), 0.0);
      float muv = max(dot(geometry.normal, geometry.viewDir), 0.0);
      sl.color *= clamp(2.0 / max(mu0 + muv, 0.30), 0.0, 2.4);
    }
    sl.visible = true;
    RE_Direct(sl, geometry, material, reflectedLight);
  }`),n.fragmentShader=n.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 nn = normalize(normal);
    vec3 vv = normalize(vViewPosition);
    float fr = pow(1.0 - max(dot(nn, vv), 0.0), 3.0);
    float mul = dot(nn, sDir);
    float day = smoothstep(-0.30, 0.45, mul);
    const vec3 BR = vec3(0.176, 0.410, 1.000);
    float mass = max(1.0, min(1.0 / max(mul + 0.14, 0.05), 10.0));
    vec3 tr = exp(-BR * (mass - 1.0) * 0.42);
    float cth = clamp(dot(-sDir, vv), -1.0, 1.0);
    float phR = 0.75 * (1.0 + cth * cth);
    float den = 1.5776 - 1.52 * cth;
    float phM = min(0.06 * 0.4224 / max(den * sqrt(max(den, 1e-4)), 0.01), 2.2);
    vec3 air = BR * phR * 0.62 + vec3(0.86, 0.90, 1.0) * phM;
    air = (air * tr + diffuseColor.rgb * 0.22) * sTint;
    outgoingLight += air * fr * day * sInt * vStarCol.a * 1.5;
  }
#include <output_fragment>`)}let jh,gl,U1=new S.Color(16767392);function ad(n,o,s,c){if(pt&&$.has.has(n)){c[0]=$.anchor.x,c[1]=$.anchor.y,c[2]=$.anchor.z,c[3]=Dl[0]*H.szPl;return}let u=jh[n];u?(c[0]=u.pos.x,c[1]=u.pos.y,c[2]=u.pos.z,c[3]=gl[n]*o):He>=0?(c[0]=he[He*3],c[1]=he[He*3+1],c[2]=he[He*3+2],c[3]=gl[n]*s):(c[0]=c[1]=c[2]=0,c[3]=gl[n]*s)}let z1=`
attribute float aSize; attribute vec3 aColor; attribute float aAlpha;
attribute float aPhase;
varying vec3 vC; varying float vA; varying float vF;
uniform float uScale; uniform float uTime; uniform float uTwinkle;
uniform float uFlare; uniform float uBright; uniform float uMinPx;
void main(){
  float tw = 1.0 + uTwinkle * 0.42 * sin(uTime * 1.35 + aPhase * 63.0);
  vC = aColor;
  vA = aAlpha * tw * uBright;
  vF = uFlare;
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  float sz = aSize * (1.0 + uTwinkle * 0.10 * sin(uTime * 0.95 + aPhase * 41.0));
  /* ---- the floor ----
     A sprite scales with range, and past a few thousand units every planet
     in the vault had scaled to under a pixel and gone. The opening frame was
     ten folder stars and nothing else \u2014 a vault of four hundred notes
     reading as a vault of ten. A star in a photograph is never smaller than
     the seeing lets it be, whatever its distance, and the same floor here
     keeps every note a point of light from as far as the camera goes. Zero
     for the sky, which is meant to fall away. */
  float px = sz * (uScale / max(1.0, -mv.z));
  gl_PointSize = max(px, uMinPx);
  gl_Position = projectionMatrix * mv;
}`,G1=`
varying vec3 vC; varying float vA; varying float vF;

float sinc2(float u){
  if (u < 1e-3) return 1.0;
  float s = sin(u);
  return (s * s) / (u * u);
}
/* The same pattern with its own decay divided back out: one at the centre,
   zero at every null, one at every secondary peak. Which is the fringes on
   their own, and the fringes on their own are what a spike needs \u2014 see the
   note in main(). */
float fringe(float u){ return sinc2(u) * max(1.0, u * u); }
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  float a = 0.0;
  if (r <= 1.0) a = pow(1.0 - r, 2.4) + pow(1.0 - r, 9.0) * 0.85;
  vec3 sp = vec3(0.0);
  if (vF > 0.001) {
    float ax = abs(d.x) * 2.0, ay = abs(d.y) * 2.0;
    /* A spike is not a wedge.

       It is the Fraunhofer pattern of a straight edge \u2014 one vane of the
       spider holding the secondary in place \u2014 and that pattern is sinc
       squared: a bright centre, then a run of secondary maxima falling off
       as the inverse square of their order. Which is why a real spike is
       *beaded* rather than ruled, and it is what every long exposure of a
       bright star shows that a linear taper cannot.

       Drawn as fringes on an envelope rather than as the raw law, and that
       split is the honest description of what a photograph is. Sinc
       squared falls off so fast that by a fifth of the way along the arm
       it is at a tenth \u2014 put it on screen literally and the spike is a
       stub. It does not look like a stub in any photograph because the arm
       is grossly overexposed for most of its length: the law is far above
       the sensor ceiling out to where it finally is not, so the 1/u\xB2 decay
       reads as a slow taper and what you actually see is the interference.
       So the taper carries the decay and fringe() carries the pattern,
       which is sinc squared with its own envelope divided back out.

       And the fringes are chromatic. Their spacing goes as the wavelength,
       so at any distance along an arm the red maxima sit further out than
       the blue, and the arm breaks into colour toward its tip. Three
       scales, one per channel, at 680 : 550 : 440 nm \u2014 the same three the
       atmospheres are scattered at, for the same reason: that is where the
       eye keeps its three answers. */
    float uh = ax * 15.0, uv = ay * 15.0;
    vec3 fh = vec3(fringe(uh * 0.809), fringe(uh), fringe(uh * 1.250));
    vec3 fv = vec3(fringe(uv * 0.809), fringe(uv), fringe(uv * 1.250));
    float eh = max(0.0, 1.0 - ax * 1.15) * max(0.0, 1.0 - ay * 11.0);
    float ev = max(0.0, 1.0 - ay * 1.15) * max(0.0, 1.0 - ax * 11.0);
    sp = ((0.52 + 0.48 * fh) * eh + (0.52 + 0.48 * fv) * ev) * vF * 0.44;
  }
  /* The spike carries its own colour now, so the fragment can no longer be
     one colour and one alpha. Summed per channel and then split back into
     the pair additive blending multiplies together again, which leaves the
     result identical for anything that has no spike on it. */
  vec3 sum = vC * ((1.0 + a * 1.1) * a + sp);
  float t = max(sum.r, max(sum.g, sum.b));
  if (t < 0.0025) discard;
  gl_FragColor = vec4(sum / t, t * vA);
}`,yr=[],Ka=[];function $i(n,o,s,c){let u=new S.ShaderMaterial({uniforms:{uScale:{value:n},uTime:{value:0},uTwinkle:{value:o||0},uFlare:{value:s||0},uBright:{value:1},uMinPx:{value:0}},vertexShader:z1,fragmentShader:G1,transparent:!0,depthWrite:!1,blending:S.AdditiveBlending});return u.userData.twinkle=o||0,yr.push(u),c&&Ka.push(u),u}function vl(n){if(!n)return;wt.remove(n),n.geometry&&n.geometry.dispose();let o=n.material;if(o){let s=yr.indexOf(o);s>=0&&yr.splice(s,1),s=Ka.indexOf(o),s>=0&&Ka.splice(s,1),o.dispose()}}function xl(n,o){let s=new Float32Array(o);for(let c=0;c<o;c++)s[c]=Math.random();n.setAttribute("aPhase",new S.BufferAttribute(s,1))}function ga(n,o,s){let c=new Float32Array(n*3),u=new Float32Array(n),m=new Float32Array(n*3),h=new Float32Array(n);for(let L=0;L<n;L++)o(L,c,u,m,h);let y=new S.BufferGeometry;y.setAttribute("position",new S.BufferAttribute(c,3)),y.setAttribute("aSize",new S.BufferAttribute(u,1)),y.setAttribute("aColor",new S.BufferAttribute(m,3)),y.setAttribute("aAlpha",new S.BufferAttribute(h,1)),xl(y,n);let M=new S.Points(y,s);return M.frustumCulled=!1,wt.add(M),M}let yl=14e3,er=null,Ir=null,kr=null,va=null,V1=null,ni=null,xa=null,Or=null,In=null,Qn=null,An=null,tr=null,H1=`
attribute vec3 aColor; attribute float aMag;
varying vec3 vC; varying float vA; varying float vHalo; varying float vCore;
uniform float uBright; uniform float uLimit; uniform float uPR; uniform float uGlare;
uniform vec3 uSunDir;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float b = 1.0 - aMag;                       // 1 = the brightest in the sky
  float shown = 1.0 - smoothstep(uLimit - 0.10, uLimit, aMag);
  float near = 1.0 - dot(normalize(mv.xyz), uSunDir);
  float glare = mix(1.0, smoothstep(0.0015, 0.035, near), uGlare);
  /* the composite's toe holds a dim additive point well under where it
     lands in linear light, so the field is exposed for it here: a faint
     star has to arrive bright to survive it as faint */
  vA = uBright * shown * glare * (0.20 + 0.80 * pow(b, 1.8)) * 6.5;
  vC = aColor;
  /* Brightness is carried by intensity, and size only a little. A faint
     star and a bright one are the same point of light on a photograph; the
     bright one is brighter, and only the very brightest spread \u2014 into a
     soft glow round the point, the scatter in the optics, which is what a
     bright star looks like when nothing is drawn on top of it. */
  float core = 0.95 + 1.25 * pow(b, 3.0) + 1.6 * pow(b, 12.0);
  vHalo = smoothstep(0.80, 0.99, b);
  float px = core * (1.0 + 3.5 * vHalo);
  vCore = core / px;                          // the point's share of the sprite
  gl_PointSize = max(1.0, px * uPR);
  gl_Position = projectionMatrix * mv;
}`,W1=`
varying vec3 vC; varying float vA; varying float vHalo; varying float vCore;
void main(){
  vec2 d = (gl_PointCoord - 0.5) * 2.0;
  float r2 = dot(d, d);
  if (r2 > 1.0) discard;
  /* the point, at the size the vertex stage asked for, and a wide faint
     scatter round it on the few that have one \u2014 falling to zero at the
     sprite's edge so there is no disc to find */
  float q = r2 / max(vCore * vCore, 1e-4);
  float i = exp(-q * 4.2);
  i += vHalo * 0.10 * exp(-r2 * 4.5) * (1.0 - r2);
  i *= vA;
  if (i < 0.003) discard;
  gl_FragColor = vec4(vC * i, i);
}`,sd=new S.ShaderMaterial({uniforms:{uBright:{value:0},uLimit:{value:0},uPR:{value:1},uGlare:{value:.9},uSunDir:{value:new S.Vector3(0,0,-1)}},vertexShader:H1,fragmentShader:W1,transparent:!0,depthWrite:!1,blending:S.AdditiveBlending}),q1=new S.Color(1,1,1);function X1(){let o=new Float32Array(33e3),s=new Float32Array(11e3*3),c=new Float32Array(11e3),u=new S.Vector3(1,0,0);u.addScaledVector(pi,-u.dot(pi)).normalize();let m=new S.Vector3().crossVectors(pi,u),h=new S.Vector3,y=new S.Vector3,M=(V,ne,N)=>N.copy(u).multiplyScalar(Math.cos(V)*Math.cos(ne)).addScaledVector(m,Math.sin(V)*Math.cos(ne)).addScaledVector(pi,Math.sin(ne)),L=()=>(Math.random()+Math.random()+Math.random()-1.5)*1.41,T=[];for(let V=0;V<6;V++)T.push({c:M(Math.random()*C,L()*.1,new S.Vector3),w:.006+Math.random()*.016,n:24+(Math.random()*30|0)});let A=0,D=T[0].n,B=new S.Color;for(let V=0;V<11e3;V++){let ne=Math.log(1+Math.random()*999)/Math.log(1e3),N=x1();if(A<T.length){let q=T[A];y.set(L(),L(),L()).multiplyScalar(q.w),h.copy(q.c).add(y).normalize(),ne*=.78,N=.62+Math.random()*.38,--D===0&&++A<T.length&&(D=T[A].n)}else if(Math.random()<.42)M(Math.random()*C,L()*.17,h);else{let q=Math.random()*C,ae=Math.acos(2*Math.random()-1);h.set(Math.sin(ae)*Math.cos(q),Math.cos(ae),Math.sin(ae)*Math.sin(q))}h.multiplyScalar(yl*.8),o[V*3]=h.x,o[V*3+1]=h.y,o[V*3+2]=h.z,c[V]=ne,Sp(N,B),B.lerp(q1,.42).toArray(s,V*3)}let X=new S.BufferGeometry;X.setAttribute("position",new S.BufferAttribute(o,3)),X.setAttribute("aColor",new S.BufferAttribute(s,3)),X.setAttribute("aMag",new S.BufferAttribute(c,1));let O=new S.Points(X,sd);O.frustumCulled=!1,O.renderOrder=-10,O.onBeforeRender=V=>{sd.uniforms.uPR.value=V.getPixelRatio()},wt.add(O),va=O}V1=null;let fi={stars:0,limit:0,band:0,dome:0,gas:0,dust:0,motes:0},nr=(n,o,s)=>{let c=R((n-o)/(s-o),0,1);return c*c*(3-2*c)};function Y1(n){return{stars:n<=0?0:.55+.45*Math.min(n,1.6)*nr(n,0,.12),limit:n<=0?0:.58+.42*nr(n,0,1.4),band:.85*nr(n,.25,1.3)+.25*nr(n,1.3,2),dome:.45*nr(n,.35,1.5)+.2*nr(n,1.5,2),gas:.045*nr(n,.6,1.5)+.04*nr(n,1.5,2),dust:.35*nr(n,.5,1.5)+.15*nr(n,1.5,2),motes:.5*nr(n,.1,1)}}let ya=.42,Za=1.1,pi=new S.Vector3(-Math.cos(ya)*Math.sin(Za),Math.cos(ya)*Math.cos(Za),Math.sin(ya)),j1=2.1,Pp=[[.1,-.02,.15,2.1],[.47,.04,.11,1.3],[-.52,-.03,.12,.85],[1.4,.02,.21,1.05],[-1.31,-.05,.16,.7]];X1(),xa=ga(9e3,(n,o,s,c,u)=>{let m=Math.random()*C,h=m-j1;h>Math.PI&&(h-=C),h<-Math.PI&&(h+=C);let y=Math.abs(h),M=.3*(.44+.9*Math.exp(-(y*y)/(2*1.05*1.05))),L=(Math.random()+Math.random()+Math.random()-1.5)*M,T=yl*(.72+Math.random()*.26),A=Math.cos(m)*Math.cos(L)*T,D=Math.sin(L)*T,B=Math.sin(m)*Math.cos(L)*T,X=D*Math.cos(ya)-B*Math.sin(ya),O=D*Math.sin(ya)+B*Math.cos(ya),V=A*Math.cos(Za)-X*Math.sin(Za),ne=A*Math.sin(Za)+X*Math.cos(Za);o[n*3]=V,o[n*3+1]=ne,o[n*3+2]=O,s[n]=(2+Math.random()*8)*2.4;let N=1+2.2*Math.exp(-(y*y)/(2*.85*.85)),q=1;for(let se=0;se<Pp.length;se++){let be=Pp[se],Te=h-be[0],De=L-be[1];q+=be[3]*Math.exp(-(Te*Te)/(2*be[2]*be[2])-De*De/(2*.11*.11))}q*=.88+.24*Math.sin(m*23.7+2.3)*Math.cos(m*13.3-.9);let ae=Math.sin(m*1.7+.6)*.048+Math.sin(m*3.9)*.018,Z=Math.exp(-Math.pow(Math.max(0,Math.abs(h-.7)-.7)/.42,2)),xe=Math.exp(-Math.pow((L-ae)/(.062*(.7+1.3*M/.3)),2))*(.62+.3*Math.sin(m*2.6+1.1))*Z;u[n]=(.022+Math.random()*.052)*N*q*Math.max(.12,1-xe),Sp(.3+Math.random()*.45+.22*Math.exp(-(y*y)/(2*.9*.9))).toArray(c,n*3)},$i(700,0,0,!0));function Fp(n){vl(Or);let o=Math.max(900,n*1.25);Or=ga(14e3,(s,c,u,m,h)=>{let y=Math.pow(Math.random(),.62),M=o*.05+y*o,L=Math.random(),T=(L<.33?0:L<.66?2:L<.83?1:3)*(C/4),A=o*.2,D=Math.random()*2-1,B=T+Math.log(Math.max(M,A)/A)/.2126+D*(.25+.8/(1+M*(11/o))),X=D>.14&&D<.58,O=D<-.1&&Math.random()<.22;c[s*3]=Math.cos(B)*M+(Math.random()-.5)*o*.026,c[s*3+1]=(Math.random()-.5)*(o*.015+M*.045),c[s*3+2]=Math.sin(B)*M+(Math.random()-.5)*o*.026,u[s]=(O?1.4+Math.random()*2.4:.8+Math.random()*2.4)*2.2,h[s]=(.02+Math.random()*.07)*(X?.22:1)*(O?1.5:1),O?Qi(212+Math.random()*22,.46,.6).toArray(m,s*3):Qi(26+Math.random()*18,.22+Math.random()*.18,.46+Math.random()*.18).toArray(m,s*3)},$i(700,0,0,!0)),Or.name="dust"}function Kh(){if(kr)return kr;let n=256,o=(T,A)=>{let D=new Float32Array(A*A),B=T>>>0;for(let X=0;X<A*A;X++)B=Math.imul(B,1664525)+1013904223>>>0,D[X]=B/4294967296;return D},s=T=>T*T*(3-2*T),c=(T,A)=>{let D=o(T,A),B=new Float32Array(n*n),X=n/A;for(let O=0;O<n;O++)for(let V=0;V<n;V++){let ne=V/X,N=O/X,q=Math.floor(ne),ae=Math.floor(N),Z=s(ne-q),xe=s(N-ae),se=q%A,be=(q+1)%A,Te=ae%A,De=(ae+1)%A,_e=D[Te*A+se],Ce=D[Te*A+be],Xe=D[De*A+se],Qe=D[De*A+be];B[O*n+V]=(_e*(1-Z)+Ce*Z)*(1-xe)+(Xe*(1-Z)+Qe*Z)*xe}return B},u=(T,A)=>{let D=new Float32Array(n*n),B=.5,X=0;for(let O=0;O<A;O++,B*=.5){let V=c(T+O*7919,4<<O);for(let ne=0;ne<n*n;ne++)D[ne]+=V[ne]*B;X+=B}for(let O=0;O<n*n;O++)D[O]/=X;return D},m=[u(11,5),u(23,5),c(37,8),u(41,3)],h=document.createElement("canvas");h.width=h.height=n;let y=h.getContext("2d"),M=y.createImageData(n,n),L=M.data;for(let T=0;T<n*n;T++)for(let A=0;A<4;A++)L[T*4+A]=Math.max(0,Math.min(255,Math.round(m[A][T]*255)));return y.putImageData(M,0,0),kr=new S.CanvasTexture(h),kr.wrapS=kr.wrapT=S.RepeatWrapping,kr.minFilter=S.LinearFilter,kr.magFilter=S.LinearFilter,kr.generateMipmaps=!1,kr}let Np=`
uniform sampler2D uNoise;
float n3(vec3 p) {
  float z = floor(p.z), f = fract(p.z);
  f = f * f * (3.0 - 2.0 * f);
  vec2 o1 = texture2D(uNoise, vec2(z * 0.0137, z * 0.0291)).bb * 7.31;
  vec2 o2 = texture2D(uNoise, vec2((z + 1.0) * 0.0137, (z + 1.0) * 0.0291)).bb * 7.31;
  float a = texture2D(uNoise, p.xy * 0.25 + o1).r;
  float b = texture2D(uNoise, p.xy * 0.25 + o2).r;
  return mix(a, b, f);
}
float n3b(vec3 p) {
  float z = floor(p.z), f = fract(p.z);
  f = f * f * (3.0 - 2.0 * f);
  vec2 o1 = texture2D(uNoise, vec2(z * 0.0171, z * 0.0113)).bb * 5.17;
  vec2 o2 = texture2D(uNoise, vec2((z + 1.0) * 0.0171, (z + 1.0) * 0.0113)).bb * 5.17;
  float a = texture2D(uNoise, p.xy * 0.25 + o1).g;
  float b = texture2D(uNoise, p.xy * 0.25 + o2).g;
  return mix(a, b, f);
}`,K1=`
attribute vec3 iCenter; attribute vec3 iE1; attribute vec3 iAxes; attribute vec4 iSeed;
varying vec3 vPos; varying vec3 vC; varying vec3 vA1; varying vec3 vA2; varying vec3 vA3;
varying vec3 vS; varying vec4 vSeed;
void main(){
  mat3 mv3 = mat3(modelViewMatrix);
  float sc = length(mv3[0]);
  vec3 c = (modelViewMatrix * vec4(iCenter, 1.0)).xyz;
  vec3 e1 = normalize(mv3 * iE1);
  vec3 e3 = normalize(mv3 * vec3(0.0, 1.0, 0.0));
  vec3 e2 = normalize(cross(e3, e1));
  vS = iAxes * sc;
  float R = max(vS.x, max(vS.y, vS.z)) * 1.06;
  /* A cloud the eye is inside is faded to nothing in the fragment, and its
     quad would cover the whole frame \u2014 sixteen full-screen marches for
     sixteen invisible clouds is what made the boot screen take seconds a
     frame. Collapse the quad here instead, at the same threshold the fade
     reaches zero. */
  vec3 b = vec3(dot(c, e1) / vS.x, dot(c, e2) / vS.y, dot(c, e3) / vS.z);
  if (length(b) < 0.92) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  /* a billboard big enough to hold the ellipsoid from any angle */
  vec3 p = c + vec3(position.xy * R, 0.0);
  vPos = p; vC = c; vA1 = e1; vA2 = e2; vA3 = e3; vSeed = iSeed;
  gl_Position = projectionMatrix * vec4(p, 1.0);
}`,Z1=`
precision highp float;
uniform float uBright; uniform float uTime;
uniform vec3 uSunV; uniform vec3 uSunCol; uniform float uSunR;
varying vec3 vPos; varying vec3 vC; varying vec3 vA1; varying vec3 vA2; varying vec3 vA3;
varying vec3 vS; varying vec4 vSeed;
${Np}
void main(){
  vec3 d = normalize(vPos);
  /* the ellipsoid, as a unit sphere in its own frame: q = M (p - C) */
  vec3 a = vec3(dot(d, vA1) / vS.x, dot(d, vA2) / vS.y, dot(d, vA3) / vS.z);
  vec3 b = vec3(dot(vC, vA1) / vS.x, dot(vC, vA2) / vS.y, dot(vC, vA3) / vS.z);
  float A = dot(a, a), B = dot(a, b), Cc = dot(b, b) - 1.0;
  float disc = B * B - A * Cc;
  if (disc <= 0.0) discard;
  float sq = sqrt(disc);
  float t0 = max((B - sq) / A, 0.0), t1 = (B + sq) / A;
  if (t1 <= t0) discard;
  const int STEPS = 8;
  float dl = (t1 - t0) / float(STEPS);
  float jit = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  float t = t0 + dl * jit;
  float sMax = max(vS.x, max(vS.y, vS.z));
  float drift = uTime * 0.004;
  /* The gas the eye is in is not seen: it is spread across the whole sky
     and thin in every direction, and drawing it is drawing a tint over the
     frame. A cloud fades as the camera comes within half a radius of its
     surface and is gone by the time the camera is inside, so what is seen
     is always the gas beyond \u2014 which is what a nebula looks like from a
     planet inside one. */
  float inside = smoothstep(0.9, 1.9, length(b));
  /* the warp field once per ray, at the middle: it is the slow term and
     does not need re-reading eight times */
  vec3 qm = a * (t0 + t1) * 0.5 - b;
  float wm = n3b(qm * vec3(1.9, 2.4, 2.4) + vec3(vSeed.w * 4.0, vSeed.x, vSeed.w * 1.3) + drift) - 0.5;
  float ph = vSeed.x, emis = vSeed.y, lit = vSeed.z, seed = vSeed.w;
  vec3 L = vec3(0.0);
  float T = 1.0;
  for (int i = 0; i < STEPS; i++) {
    vec3 q = a * t - b;
    float r2 = dot(q, q);
    if (r2 < 1.0) {
      /* the envelope, and the gas inside it: a base field warped by a
         second one, and a ridged term on top so the density runs in strands
         rather than lumps \u2014 the same three filaments per cloud the sprites
         carried, made out of the field instead of placed by hand */
      float env = 1.0 - r2;
      env *= env;
      vec3 sp = q * vec3(4.2, 5.4, 5.4) + vec3(seed * 9.0, ph, seed * 3.0);
      float n = n3(sp + wm * 1.3);
      float ridge = 1.0 - abs(n * 2.0 - 1.0);
      ridge *= ridge * ridge;
      float dens = env * max(0.0, 0.42 * n + 0.80 * ridge - 0.40) * 2.0;
      if (dens > 0.0) {
        float r = sqrt(r2);
        /* the ionisation front: teal inside it, red outside, the crossing
           a few tenths of the cloud; a reflection cloud is blue all through */
        float iz = smoothstep(0.12, 0.46, r);
        vec3 emCol = mix(vec3(0.20, 0.62, 0.58), vec3(0.66, 0.11, 0.15), iz);
        vec3 col = mix(vec3(0.28, 0.47, 0.64), emCol, emis);
        /* the gas near the star is lit by it \u2014 reflection, which is the
           star's own colour, falling off with the square of the distance
           and never quite reaching zero */
        float sd = distance(d * t, uSunV);
        float lit = uSunR * uSunR / (uSunR * uSunR + sd * sd);
        col += uSunCol * lit * 1.8;
        float step_ = dens * dl / sMax;
        L += T * col * step_ * 2.4;
        T *= exp(-step_ * 0.85);
      }
    }
    t += dl;
  }
  float gain = uBright * lit * inside * 1.0;
  vec3 rgb = L * gain;
  /* absorption held short of black, and scaled with the knob so turning
     the sky down takes the lanes with the light */
  float alpha = (1.0 - T) * 0.16 * inside * clamp(uBright * 1.4, 0.0, 1.0);
  gl_FragColor = vec4(rgb, alpha);
}`;function J1(){return new S.ShaderMaterial({uniforms:{uNoise:{value:Kh()},uBright:{value:1},uTime:{value:0},uSunV:{value:new S.Vector3(0,0,-1e9)},uSunCol:{value:new S.Color(1,.85,.6)},uSunR:{value:900}},vertexShader:K1,fragmentShader:Z1,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:S.CustomBlending,blendSrc:S.OneFactor,blendDst:S.OneMinusSrcAlphaFactor,blendSrcAlpha:S.OneFactor,blendDstAlpha:S.OneMinusSrcAlphaFactor})}let Q1=`
varying vec3 vDir;
void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,$1=`
precision highp float;
uniform float uBright; uniform vec3 uN; uniform vec3 uX; uniform vec3 uY;
uniform vec4 uGal[6]; uniform vec4 uGalU[6];
varying vec3 vDir;
${Np}
void main(){
  vec3 d = normalize(vDir);
  float b = dot(d, uN);                       // sine of galactic latitude
  float x = dot(d, uX), y = dot(d, uY);
  float lon = atan(y, x);
  /* the band: a gaussian in latitude, narrower toward the anticentre, and
     lumpy along its length */
  float wid = 0.13 + 0.07 * (0.5 + 0.5 * x);
  float band = exp(-b * b / (2.0 * wid * wid)) + 0.25 * exp(-b * b / (2.0 * 0.32 * 0.32));
  float lump = n3(vec3(lon * 2.2, b * 9.0, 1.7));
  float lump2 = n3b(vec3(lon * 5.0, b * 18.0, 4.1));
  band *= 0.45 + 0.55 * lump + 0.25 * lump2;
  /* the bulge toward the centre */
  float bulge = pow(max(x, 0.0), 6.0) * exp(-b * b / (2.0 * 0.20 * 0.20)) * 0.55;
  /* the rift: one side only, wandering, and it takes the light away */
  float rw = 0.038 + 0.030 * n3(vec3(lon * 3.0, 2.3, 8.8));
  float rift = exp(-pow((b - 0.015 * (lump2 - 0.5) * 2.0) / rw, 2.0)) * smoothstep(-0.2, 0.6, y);
  float light = (band + bulge) * (1.0 - 0.55 * rift);
  vec3 col = vec3(0.58, 0.54, 0.50) * light * 0.34;
  /* a few galaxies: an elliptical gaussian on each one's tangent plane, a
     warm core in a cool disc */
  for (int i = 0; i < 6; i++) {
    vec3 g = uGal[i].xyz; float s = uGal[i].w;
    float dd = dot(d, g);
    if (dd > 0.9) {
      vec3 off = d - g * dd;
      vec3 u = uGalU[i].xyz; vec3 v = cross(g, u);
      float px = dot(off, u) / s, py = dot(off, v) / (s * uGalU[i].w);
      float r2 = px * px + py * py;
      float disc = exp(-r2 * 2.6);
      float core = exp(-r2 * 26.0);
      col += vec3(0.50, 0.58, 0.82) * disc * 0.22 + vec3(1.0, 0.86, 0.66) * core * 0.55;
    }
  }
  gl_FragColor = vec4(col * uBright * 1.4, 1.0);
}`;function eb(){vl(er);let n=[],o=[];for(let m=0;m<6;m++){let h=new S.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();h.addScaledVector(pi,-h.dot(pi)*.6).normalize();let y=new S.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);y.addScaledVector(h,-y.dot(h)).normalize(),n.push(new S.Vector4(h.x,h.y,h.z,.01+Math.random()*.016)),o.push(new S.Vector4(y.x,y.y,y.z,.28+Math.random()*.55))}let s=new S.Vector3(0,1,0);Math.abs(pi.y)>.9&&s.set(1,0,0),s.addScaledVector(pi,-s.dot(pi)).normalize();let c=new S.Vector3().crossVectors(pi,s).normalize(),u=new S.ShaderMaterial({uniforms:{uNoise:{value:Kh()},uBright:{value:1},uN:{value:pi.clone()},uX:{value:s},uY:{value:c},uGal:{value:n},uGalU:{value:o}},vertexShader:Q1,fragmentShader:$1,side:S.BackSide,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:S.AdditiveBlending});er=new S.Mesh(new S.SphereGeometry(yl*1.08,48,24),u),er.frustumCulled=!1,er.renderOrder=-20,wt.add(er)}let tb=`
attribute float aSize; attribute float aPhase;
uniform vec3 uCam; uniform float uTime; uniform float uBox;
varying float vA;
void main(){
  vec3 drift = vec3(sin(aPhase * 6.28 + uTime * 0.11), cos(aPhase * 4.1 + uTime * 0.07), sin(aPhase * 2.7 - uTime * 0.09)) * 4.0;
  vec3 p = mod(position + drift - uCam + uBox * 0.5, uBox) - uBox * 0.5 + uCam;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  float z = -mv.z;
  float px = aSize * 220.0 / max(1.0, z);
  gl_PointSize = clamp(px, 0.7, 3.2);
  /* fade at the near plane and at the far wall of the box, so nothing pops */
  vA = smoothstep(1.5, 18.0, z) * smoothstep(uBox * 0.55, uBox * 0.22, length(p - uCam)) * clamp(px / 1.6, 0.35, 1.0);
  gl_Position = projectionMatrix * mv;
}`,nb=`
uniform float uBright;
varying float vA;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  if (r > 1.0) discard;
  float a = (1.0 - r * r) * vA * uBright;
  gl_FragColor = vec4(vec3(0.72, 0.80, 0.92) * a, a);
}`;function ib(){vl(Ir);let n=720,o=340,s=new Float32Array(n*3),c=new Float32Array(n),u=new Float32Array(n);for(let y=0;y<n;y++)s[y*3]=(Math.random()-.5)*o,s[y*3+1]=(Math.random()-.5)*o,s[y*3+2]=(Math.random()-.5)*o,c[y]=.6+Math.random()*1.6,u[y]=Math.random();let m=new S.BufferGeometry;m.setAttribute("position",new S.BufferAttribute(s,3)),m.setAttribute("aSize",new S.BufferAttribute(c,1)),m.setAttribute("aPhase",new S.BufferAttribute(u,1));let h=new S.ShaderMaterial({uniforms:{uCam:{value:new S.Vector3},uTime:{value:0},uBox:{value:o},uBright:{value:.5}},vertexShader:tb,fragmentShader:nb,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:S.AdditiveBlending});Ir=new S.Points(m,h),Ir.frustumCulled=!1,Ir.renderOrder=6,wt.add(Ir)}function Ip(n){vl(ni);let o=Math.max(900,n*1.15),s=16,c=90,u=[];for(let A=0;A<s;A++){let D=Math.random()*C,B=o*.2+Math.pow(Math.random(),.75)*o,X=Math.random()*C;u.push({x:Math.cos(D)*B,y:(Math.random()-.5)*o*.34,z:Math.sin(D)*B,w:o*(.08+Math.random()*.16),h:o*(.08+Math.random()*.1),e1x:Math.cos(X),e1z:Math.sin(X),e2x:-Math.sin(X),e2z:Math.cos(X),el:1.35+Math.random()*1.15,ph:Math.random()*C,emission:Math.random()<.72,lit:.55+Math.random()*.75})}let m=new S.InstancedBufferGeometry,h=new S.PlaneGeometry(2,2);m.setAttribute("position",h.getAttribute("position")),m.setAttribute("uv",h.getAttribute("uv")),m.setIndex(h.getIndex());let y=new Float32Array(s*3),M=new Float32Array(s*3),L=new Float32Array(s*3),T=new Float32Array(s*4);u.forEach((A,D)=>{y[D*3]=A.x,y[D*3+1]=A.y,y[D*3+2]=A.z,M[D*3]=A.e1x,M[D*3+1]=0,M[D*3+2]=A.e1z,L[D*3]=A.w*A.el*.85,L[D*3+1]=A.w*.95,L[D*3+2]=A.h*1.15,T[D*4]=A.ph,T[D*4+1]=A.emission?1:0,T[D*4+2]=A.lit,T[D*4+3]=Math.random()}),m.setAttribute("iCenter",new S.InstancedBufferAttribute(y,3)),m.setAttribute("iE1",new S.InstancedBufferAttribute(M,3)),m.setAttribute("iAxes",new S.InstancedBufferAttribute(L,3)),m.setAttribute("iSeed",new S.InstancedBufferAttribute(T,4)),m.instanceCount=s,ni=new S.Mesh(m,J1()),ni.frustumCulled=!1,ni.renderOrder=-2,wt.add(ni)}let kp=186,rb=352,ob=`
varying vec3 vC; varying float vA; varying float vF;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r2 = dot(d, d) * 4.0;
  if (r2 > 1.0) discard;
  float a = exp(-r2 * 3.0) * (1.0 - r2) * vA;
  a += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 512.0;
  if (a <= 0.0) discard;
  gl_FragColor = vec4(vC, a);
}`;function ab(){let n=$i(700,0,0,!1);return n.fragmentShader=ob,n.needsUpdate=!0,n}function sb(){vl(tr);let n=9,o=170,s=[],c=.3+Math.random()*.45;for(let m=0;m<n;m++){let h;if(m<n-2){let D=.1+Math.random()*.45,B=new S.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);B.addScaledVector(pi,-B.dot(pi)).normalize(),h=pi.clone().multiplyScalar(Math.cos(D)).addScaledVector(B,Math.sin(D)).normalize()}else h=new S.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();let y=new S.Vector3(0,1,0);Math.abs(h.y)>.9&&y.set(1,0,0);let M=new S.Vector3().crossVectors(h,y).normalize(),L=new S.Vector3().crossVectors(h,M).normalize(),T=[],A=Math.random()<.55?Math.random()<.35?2:1:0;for(let D=0;D<A;D++)T.push({at:.18+Math.random()*.64,w:.045+Math.random()*.075,d:.45+Math.random()*.42});s.push({e1:M,e2:L,e3:new S.Vector3().crossVectors(M,L),a0:Math.random()*C,span:1.1+Math.random()*1.9,hue:kp+(rb-kp)*R(c+(Math.random()-.5)*.3,0,1),dh:(Math.random()-.5)*26,skew:.55+Math.random()*1.3,wf:[1.6+Math.random()*2.2,4.1+Math.random()*3.5],wp:[Math.random()*C,Math.random()*C],lanes:T,lit:.55+Math.random()*.9,thick:.055+Math.random()*.1})}let u=new S.Vector3;tr=ga(n*o,(m,h,y,M,L)=>{let T=s[m/o|0],A=m%o/o,D=T.a0+(A-.5)*T.span,B=(Math.random()+Math.random()+Math.random()-1.5)*.8,X=yl*(.86+Math.random()*.1);u.copy(T.e1).multiplyScalar(Math.cos(D)).addScaledVector(T.e2,Math.sin(D)).addScaledVector(T.e3,B*T.thick).normalize().multiplyScalar(X),h[m*3]=u.x,h[m*3+1]=u.y,h[m*3+2]=u.z;let O=Math.sin(Math.pow(A,T.skew)*Math.PI),V=Math.exp(-B*B*.9),ne=1;for(let ae=0;ae<T.lanes.length;ae++){let Z=T.lanes[ae],xe=(A-Z.at)/Z.w;ne*=1-Z.d*Math.exp(-xe*xe)}y[m]=(1500+Math.random()*900)*(.55+V*.75)*(yl/14e3);let N=.62+.24*Math.sin(A*T.wf[0]*Math.PI+T.wp[0])+.14*Math.sin(A*T.wf[1]*Math.PI+T.wp[1]);L[m]=.17*(.9+Math.random()*.2)*N*T.lit*O*ne*(.25+V);let q=1+(1-ne)*.55;Qi((T.hue+T.dh*(A-.5)+360)%360,(.15+Math.random()*.13)*q,.38+Math.random()*.14).toArray(M,m*3)},ab()),tr.name="veil",tr.renderOrder=-1,Zh()}function Zh(){tr&&tr.material.uniforms&&(tr.material.uniforms.uBright.value=H.vei)}Fp(1600),Ip(1600),sb(),eb(),ib();function Ja(n){let o=2166136261;for(let s=0;s<n.length;s++)o^=n.charCodeAt(s),o=Math.imul(o,16777619)>>>0;return o>>>0}let lb=n=>n*n*(3-2*n),Jh=n=>n&&n.lkey?k(n.lkey,n.larg):n?n.label:"\u2014",cb=`
/* A hash with no transcendental in it. The crater field below evaluates this
   up to thirty times per fragment, and a sin() there is the difference
   between a moon that costs nothing and a moon that costs the frame. */
float wH(vec3 p){
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
/* One hash, three uses. Three separate ones read better and cost three times
   as much inside a loop that is already the most expensive thing here; the
   components are correlated and nothing in the picture can tell. */
vec3 wH3(vec3 p){ float h = wH(p); return fract(vec3(h, h * 13.71, h * 57.29)); }
float wNoise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(wH(i),              wH(i + vec3(1,0,0)), f.x),
                 mix(wH(i + vec3(0,1,0)), wH(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(wH(i + vec3(0,0,1)), wH(i + vec3(1,0,1)), f.x),
                 mix(wH(i + vec3(0,1,1)), wH(i + vec3(1,1,1)), f.x), f.y), f.z);
}
/* Three octaves and two, rather than one function with a count. Every one of
   these is eight hashes, and every one of them is paid on every fragment of
   every body in the vault \u2014 the first draft asked for four octaves four
   times over on one branch and took a laptop's integrated GPU from fifty
   frames a second to one. Fractal detail is worth exactly as many octaves as
   are visible and not one more. */
float wFbm3(vec3 p){
  float s = 0.0, a = 0.5;
  for (int k = 0; k < 3; k++){ s += a * wNoise(p); p *= 2.07; a *= 0.5; }
  return s * 1.143;
}
float wFbm2(vec3 p){
  float s = wNoise(p) * 0.5 + wNoise(p * 2.07) * 0.25;
  return s * 1.333;
}
float mGlow;       // what this world emits on its own \u2014 see the aurora
float mH;          // the surface's own height, for the relief below
float mWater;      // how much of this fragment is open sea \u2014 see the glint
float mRock;       // 1 on an airless surface \u2014 see the opposition surge
uniform float uDetail;   // SURFACE DETAIL: how far below a pixel to bother
vec3  mTint;       // the folder colour, kept for the light to find
`,Op={value:1};function Bp(n,o){n.uniforms.uDetail=Op;let s=o?"attribute vec4 aSurf;":"uniform vec4 aSurf;";n.vertexShader=s+`
varying vec4 vSurf;
varying vec3 vObj;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vSurf = aSurf;
  vObj = normalize(position);`),n.fragmentShader=`varying vec4 vSurf;
varying vec3 vObj;
`+cb+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  {
    vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
    float dhx = dFdx(mH), dhy = dFdy(mH);
    if (abs(dhx) + abs(dhy) > 1e-7) {
      vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
      float det = dot(dpx, r1);
      vec3 grad = sign(det) * (dhx * r1 + dhy * r2);
      normal = normalize(abs(det) * normal - grad * 0.55);
    }
  }`),n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`
  {
    vec3 nd = normalize(vObj);
    float sd = vSurf.x;
    vec3 alb;
    mGlow = 0.0; mWater = 0.0; mRock = 0.0;
    /* ---- how much of this world one pixel covers ----
       Taken before anything branches, because a derivative asked for inside
       divergent control flow is undefined \u2014 the rasteriser answers it by
       differencing neighbouring fragments, and neighbours that took the
       other branch have no answer to give.

       On a body filling the screen this is a few thousandths; on one four
       pixels across it is a half. It is the honest measure of how much of
       what is computed below could possibly be seen, and the two expensive
       things here \u2014 the crater field and the third octave of every fractal \u2014
       are skipped once it says they would land inside a pixel. SURFACE
       DETAIL scales the threshold, for a machine that would rather have the
       frame than the grain. */
    float pxo = length(fwidth(nd)) / max(uDetail, 0.05);
    bool fine = pxo < 0.035;
    if (vSurf.w < 0.5) {
      /* ---------------------------------------------------- a giant -------
         Zonal bands, which are not stripes painted on a ball: a giant's
         atmosphere is organised by its own rotation. Coriolis turns
         convection into east-west jets, and what the eye reads is the
         alternation between them \u2014 zones, where gas is rising and the
         ammonia deck sits high and bright, and belts, where it is sinking
         and you are seeing deeper, warmer and darker. Jupiter carries about
         eight of each per hemisphere and Saturn's are the same structure
         under a haze that softens them.

         The jets meander rather than ruling straight lines, so the latitude
         the band pattern is read at is displaced by a turbulence field
         first. That one displacement is also what puts the curls and
         festoons on the boundary between a belt and the zone beside it \u2014
         which is exactly where the shear between two opposed jets is, and
         exactly where every photograph shows them. */
      float turb = wFbm3(nd * 2.6 + sd * 31.0);
      /* Gas has no relief: a cloud deck is not a landscape, and there is
         nothing on a giant for a shadow to fall across. Flat, so the
         derivative below is zero and the normal is left alone. */
      mH = 0.0;
      float lat2 = nd.y + (turb - 0.5) * 0.17;
      /* the bands are not evenly spaced in latitude: they are widest at the
         equator and crowd together toward the poles, because the jets are
         set by the depth of the convecting shell against the local spin and
         both of those change with latitude. The cubic term is that crowding
         and nothing more principled than the right shape for it. */
      float bz = (lat2 + 0.42 * lat2 * lat2 * lat2) * (7.0 + vSurf.y * 5.0);
      float band = sin(bz * 3.0 + vSurf.y * 6.28) * 0.46
                 + sin(bz * 5.1 + 1.7) * 0.33
                 + sin(bz * 9.7 + 3.9) * 0.21;
      float belt = smoothstep(-0.24, 0.24, band);
      alb = mix(vec3(0.44, 0.29, 0.20), vec3(0.90, 0.83, 0.67), belt);
      /* the poles are colder, hazier and bluer \u2014 a hood, not a cap: there is
         no surface up there for ice to sit on */
      alb = mix(alb, vec3(0.38, 0.42, 0.50), smoothstep(0.70, 0.99, abs(nd.y)));
      /* fine shear drawn out along the jets rather than across them */
      if (fine) alb *= 0.88 + 0.24 * wNoise(nd * vec3(9.0, 34.0, 9.0) + sd * 13.0);
      /* One long-lived oval on the bodies whose seed asks for one. A vortex
         caught between two opposed jets is stable for the same reason it is
         there at all: the shear that would tear it apart is what spins it.
         Jupiter's has been turning since somebody first drew it. */
      if (vSurf.y > 0.52) {
        float lonf = atan(nd.z, nd.x) - sd * 6.2831853;
        lonf = atan(sin(lonf), cos(lonf));
        float sq = length(vec2(lonf * 0.40, (nd.y + 0.30 - vSurf.y * 0.34) * 1.9));
        alb = mix(alb, vec3(0.70, 0.33, 0.21), (1.0 - smoothstep(0.05, 0.14, sq)) * 0.85);
      }
      /* Aurorae, and only here. A giant has a magnetic field big enough to
         put a permanent oval of them round each pole, and they are the one
         thing on a world that is visible on the night side because it is not
         reflected light at all \u2014 it is the atmosphere itself emitting where
         the field lines come down. Which is the job the machined shell's lit
         strips were doing, done by something that is actually there. */
      /* On the magnetic axis, which is not the spin axis. Jupiter's is
         about ten degrees off and displaced from the centre besides, so its
         auroral ovals are visibly off-centre \u2014 one of them reaches further
         from the pole than the other. Saturn is the odd one out at under a
         degree, and being the exception is what makes it worth saying that
         the rule is a tilt. Seeded, so a body's ovals are where they are
         every time the vault is opened. */
      float mt = 0.10 + vSurf.y * 0.16;
      float ma = sd * 6.2831853;
      vec3 mag = vec3(sin(mt) * cos(ma), cos(mt), sin(mt) * sin(ma));
      float md = abs(dot(nd, mag));
      float pole = smoothstep(0.86, 0.94, md) * (1.0 - smoothstep(0.94, 0.985, md));
      mGlow = pole * (0.40 + 0.90 * turb);
    } else if (vSurf.w < 1.5) {
      /* ---------------------------------------------------- a world -------
         Land, sea and ice. The split is one threshold on a fractal height
         field, which is the standard way of saying "this surface has been
         eroded" \u2014 and it is why the coastlines come out crenulated at every
         scale rather than smooth at one of them. A coast is a fractal, and
         that is not a figure of speech about it. */
      float hgt = wFbm3(nd * 1.7 + sd * 47.0);
      vec3 sea = mix(vec3(0.018, 0.050, 0.125), vec3(0.045, 0.135, 0.255),
                     smoothstep(0.28, 0.47, hgt));
      float det = wNoise(nd * 6.0 + sd * 3.0);
      vec3 land = mix(vec3(0.19, 0.25, 0.13), vec3(0.42, 0.35, 0.22), det);
      land = mix(land, vec3(0.54, 0.49, 0.36), smoothstep(0.60, 0.76, hgt));
      float shore = smoothstep(0.465, 0.515, hgt);
      alb = mix(sea, land, shore);
      /* Ice where it is cold, which is the poles *and* the high ground, and
         the line between them wanders \u2014 because what it follows is a
         temperature contour over terrain and not a parallel. */
      /* Land has relief and water does not, which is the whole of why a
         coastline reads: the sea is a level surface by definition and the
         ground behind it is not. Squared above the shoreline so the
         mountains are where the land is highest rather than everywhere. */
      float above = max(hgt - 0.49, 0.0);
      mH = above * above * 2.6 + det * 0.05;
      float cold = abs(nd.y) + (hgt - 0.5) * 0.34 + (det - 0.5) * 0.20;
      float ice = smoothstep(0.66, 0.83, cold);
      alb = mix(alb, vec3(0.82, 0.86, 0.90), ice);
      /* and weather over the lot of it. A world with air has cloud on
         somewhere near two thirds of it at any moment, and cloud is most of
         what makes its albedo the 0.31 it is. */
      float cld = smoothstep(0.48, 0.67, wFbm2(nd * 2.9 + sd * 71.0)) * 0.78;
      alb = mix(alb, vec3(0.90, 0.92, 0.95), cld);
      /* Where there is open sea to catch the star: not under cloud, not
         under ice, and not on land. A specular highlight off water is the
         one thing on a world that is genuinely mirror-like, and it is the
         reason every photograph of an ocean from orbit has a blazing patch
         in it exactly opposite the sun. */
      mWater = (1.0 - shore) * (1.0 - ice) * (1.0 - cld);
    } else {
      /* ----------------------------------------------------- a rock -------
         Craters, and the sizes of them come out of a power law. The
         size-frequency distribution of impact craters is the most-measured
         thing about any airless surface \u2014 many small, few large, a straight
         line on a log-log plot \u2014 so the radius drawn for each cell of the
         field is a power of a uniform rather than a uniform. What that
         produces is a handful of basins with fine pitting between them,
         which is what an airless surface looks like; an even field of
         equal circles is what it never looks like.

         Nearest in units of its *own* radius rather than in distance, so a
         large crater further off still wins over a small one nearby. That is
         what "the big one is on top of the small ones" means, and getting it
         the other way round gives a surface where nothing ever overlaps. */
      vec3 cp = nd * (2.4 + vSurf.z * 0.34);
      vec3 ci = floor(cp), cf = fract(cp);
      vec3 half8 = step(vec3(0.5), cf);
      /* Two above the largest crater radius means every distance test comes
         out as no crater, which is the right answer once a crater is smaller
         than the pixel that would have to show it. The maria below are not
         skipped: those are the size of the body and are the last thing to
         go. What is dropped is never the shape of the world, only detail
         finer than the picture can hold \u2014 a rule the generated worlds this
         replaced could not keep, which is why they were taken out. */
      float q = 2.0;
      if (fine) {
        for (int x = 0; x < 2; x++)
        for (int y = 0; y < 2; y++)
        for (int z = 0; z < 2; z++) {
          vec3 g = vec3(float(x), float(y), float(z)) - 1.0 + half8;
          vec3 o = wH3(ci + g + sd * 27.0);
          float u = o.x * o.y;
          float R = 0.13 + 0.37 * u * u;
          q = min(q, length(g + o - cf) / R);
        }
      }
      /* the bowl is shadowed and the rim is fresh material thrown up out of
         it, so one is darker than the ground and the other brighter */
      float bowl = 1.0 - smoothstep(0.0, 0.92, q);
      float rim  = smoothstep(0.78, 0.97, q) * (1.0 - smoothstep(0.97, 1.14, q));
      /* ---- and the shape of it ----
         A crater drawn as a change of colour is a stain. What the eye
         actually recognises is the shading on a bowl and the shadow under a
         rim, so the profile below is a height and the normal is bent by it:
         a floor well under the plain, a wall climbing to a rim raised above
         it, and the ejecta blanket falling away outside. That is the
         measured profile of a simple crater, and it is why a terminator
         crossing a cratered surface is the most legible thing in astronomy.
         The fine term is regolith \u2014 the metre of broken rock every airless
         surface is buried under, because nothing has ever swept it away. */
      float grain = fine ? wNoise(nd * 11.0 + sd * 5.0) : 0.5;
      mH = fine ? (1.0 - bowl) * 0.72 + rim * 0.55 + grain * 0.06 : 0.0;
      alb = vec3(0.128) * (0.80 + 0.40 * grain);
      alb *= 1.0 - bowl * 0.42;
      /* a fresh rim is excavated rock that has not been darkened by four
         billion years of space weathering yet, and it is genuinely brighter
         than the plain \u2014 Copernicus and its rays against the mare */
      alb += vec3(0.085) * rim;
      /* and the maria: low ground flooded long ago and darker than the
         highlands around it, which is the other half of every bare surface
         anyone has ever looked at */
      alb *= 1.0 - smoothstep(0.54, 0.63, wFbm3(nd * 1.6 + sd * 61.0)) * 0.45;
      mRock = 1.0;
    }
    /* The folder colour is what the legend promises, and a world still has
       to say which system it belongs to. It rides as a tint over the world's
       own albedo rather than as the paint \u2014 a third of the way, which is
       enough to tell two systems apart at a glance and not enough to turn a
       giant's belts into a monochrome. The rest of the folder's identity is
       carried where it always was: in the halo, and in the lit gradient
       below. */
    /* ---- and the folder's colour is not applied here ----
       Which looks like an omission and is the opposite of one. A body's
       folder colour already arrives as the colour of the *light*: the star
       that lights it is its own folder's star and carries that folder's hue
       \u2014 see starLit, and the note there about a planet's day side matching
       the thing lighting it. Tinting the albedo as well would count one fact
       twice, and multiplying an albedo by a saturated cyan does not tint it
       anyway: it deletes the red channel, which takes a giant's cream and
       brown to grey-green and a rock's grey to navy.

       So the division is the one every photograph makes. What a surface owns
       is its albedo. What a system owns is its light. */
    mTint = diffuseColor.rgb;
    diffuseColor.rgb = alb;
  }`),n.fragmentShader=n.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 nn2 = normalize(normal);
    float dp = dot(nn2, sDir);
    float day = smoothstep(-0.45, 0.85, dp);
    float lit = day * day * sInt * vStarCol.a;
    outgoingLight += mix(mTint, vStarCol.rgb, 0.34) * sTint * lit * 0.17;
    float edge = pow(1.0 - max(dot(nn2, normalize(vViewPosition)), 0.0), 4.0);
    outgoingLight += mix(mTint, vec3(1.0), 0.45) * edge * smoothstep(-0.15, 0.6, dp)
                     * sInt * vStarCol.a * 0.85;
    if (mWater > 0.01) {
      vec3 hv = normalize(sDir + normalize(vViewPosition));
      float sp = pow(max(dot(nn2, hv), 0.0), 120.0);
      outgoingLight += vStarCol.rgb * sTint * sp * mWater * sInt * vStarCol.a * 1.35;
    }
    if (mRock > 0.5) {
      float ph = dot(sDir, normalize(vViewPosition));
      outgoingLight *= 1.0 + 0.95 * exp(-(1.0 - ph) * 55.0);
    }
  }
  outgoingLight += mix(vec3(0.42, 0.52, 1.0), vec3(1.0, 0.42, 0.62), 0.22)
                   * mGlow * 0.85;
#include <output_fragment>`)}let Up=[.068,.006,0],Qa=null,$a=null,mi=null,ld=null;function db(){mi=new Float32Array(Math.max(1,G)*4),ld=new Uint8Array(Math.max(1,G));for(let n=0;n<G;n++){let o=Ja((J[n]?J[n].p:"")+"#r"),s=et&&et[n]&&et[n].kind==="moon"?1:0;ld[n]=s;let c=s?.2:1;mi[n*4]=((o&255)/255-.5)*.62*c,mi[n*4+1]=((o>>>8&255)/255-.5)*.42*c,mi[n*4+2]=(o>>>16&1023)/1024*6.2831853,mi[n*4+3]=48e-6*Math.pow(Math.max(.5,We[n]||3)/4,.38)}}let zp=new S.Euler;function Gp(n,o){if(!mi||n<0||n>=G)return o.set(0,0,0,1),o;let s=ld&&ld[n]?mi[n*4+2]+(Ti?Ti[n]:0):mi[n*4+2]+en*mi[n*4+3];return zp.set(mi[n*4],s,mi[n*4+1]),o.setFromEuler(zp)}function Vp(n,o,s){let c=J[n]||{},u=Ja((c.p||"")+"#m");o[s]=(u&4095)/4096,o[s+1]=(u>>>12&1023)/1024;let m=Math.log(1+(c.inb|0))*1.55+Math.log(1+(c.w||0)/120)*.7;o[s+2]=5+Math.min(9,Math.round(m*1.4))+(u>>>22&3);let h=et&&et[n]?et[n].kind:"wiki";o[s+3]=h==="moon"||h==="spiral"||h==="shell"?2:m>=3.6?0:1}let es=`
#ifdef USE_INSTANCING
attribute float aSeed;
attribute vec3 aCore;
attribute vec3 aEdge;
attribute float aAlpha;
#endif
uniform vec3 uCore; uniform vec3 uEdge;
varying vec3 vN; varying vec3 vE; varying vec3 vQ;
/* the raw object position, which the chromosphere and the prominences read:
   they compile against this same vertex shader and want the sphere's own
   coordinate rather than the seeded one the photosphere samples at */
varying vec3 vP;
varying vec3 vCore; varying vec3 vEdge;
varying float vSeed; varying float vA;
void main(){
  vP = position;
  vec3 p = normalize(position);
#ifdef USE_INSTANCING
  vSeed = aSeed; vCore = aCore; vEdge = aEdge; vA = aAlpha;
#else
  vSeed = 0.0; vCore = uCore; vEdge = uEdge; vA = 1.0;
#endif
  /* about the spin axis, so what changes between two stars is which side of
     itself each is showing and not where its equator is */
  float ca = cos(vSeed * 6.2831853), sa = sin(vSeed * 6.2831853);
  vQ = vec3(p.x * ca - p.z * sa, p.y, p.x * sa + p.z * ca);
#ifdef USE_INSTANCING
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  /* the instance carries the rotation, so the outward direction has to go
     through it before the normal matrix \u2014 and the scale is uniform on every
     one of these, which is what lets the same mat3 serve for both */
  vN = normalize(normalMatrix * mat3(instanceMatrix) * p);
#else
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  /* the geometry is a sphere about its own origin, so the outward direction
     is the position \u2014 no dependence on whatever normals the subdivision left */
  vN = normalize(normalMatrix * p);
#endif
  vE = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,Qh=`
float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float noise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i),                 hash(i + vec3(1,0,0)), f.x),
                 mix(hash(i + vec3(0,1,0)),    hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)),    hash(i + vec3(1,0,1)), f.x),
                 mix(hash(i + vec3(0,1,1)),    hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ s += a * noise(p); p *= 2.03; a *= 0.5; }
  return s;
}
/* the star turns, and the things that belong to the star turn with it: the
   spots, the streamers, the loops. Granulation does not \u2014 it boils in place.

   And it does not turn as one piece. A star is a gas, so there is nothing to
   make one latitude keep step with another, and the Sun's equator goes round
   in 24.5 days while its poles take 34. The law is measured and fitted:

     Omega(phi) = A + B sin\xB2phi + C sin\u2074phi

   with A = 14.713, B = -2.396, C = -1.787 degrees a day (Snodgrass and
   Ulrich, 1990). Divided through by A that is the factor below, one at the
   equator and 0.716 at the pole.

   This is not a detail. Differential rotation is *why* a star has spots at
   all: it drags the frozen-in magnetic field round faster at the equator
   than at the poles, winding a poloidal field into a toroidal one turn by
   turn until the tubes are strong enough to become buoyant and break the
   surface, which is what a sunspot is. Drawing spots on a rigidly rotating
   ball is drawing the effect without the cause \u2014 and it also looks wrong,
   because the one thing a long timelapse of the Sun shows is the high
   latitudes falling behind. */
float omega(float y){
  float s2 = y * y;
  return 1.0 - 0.1629 * s2 - 0.1215 * s2 * s2;
}
vec3 spin(vec3 q, float a){
  float c = cos(a), s = sin(a);
  return vec3(q.x * c - q.z * s, q.y, q.x * s + q.z * c);
}
vec3 spinDiff(vec3 q, float a){ return spin(q, a * omega(q.y)); }`,$h=`
uniform float uTime;
/* ---- how brightly this star burns, which is not the same as how opaque ----
   SYSTEM GLOW used to arrive as the disc's alpha, and a star turned down that
   way does not get dimmer: it gets see-through, and the nebula behind it
   comes up through the photosphere. What alpha is for here is the legend \u2014
   a system switched off has to be able to take its star with it \u2014 and what
   brightness is for is brightness. */
uniform float uBright;
/* fed by the vertex shader from a uniform on the hub and from an instanced
   attribute on every folder star \u2014 see SUN_V */
varying vec3 vCore; varying vec3 vEdge;
varying float vSeed; varying float vA;
varying vec3 vN; varying vec3 vE; varying vec3 vQ;
float sT;
${Qh}
void main(){
  /* 137 is only a number with no factors in common with anything below:
     what it has to do is put two stars at different points of their own
     cycles rather than at the same one. */
  sT = uTime + vSeed * 137.0;
  vec3 uCore = vCore, uEdge = vEdge;
  /* mu, the cosine between the surface and the line of sight: 1 in the middle
     of the disc, 0 at the limb */
  float mu = clamp(dot(normalize(vN), normalize(vE)), 0.0, 1.0);
  /* The linear law, I(mu) = 1 - u(1 - mu), which is what limb darkening is
     actually measured and tabulated as; u is near 0.6 for our own sun in
     visible light and is pushed to 0.80 here because this disc is a few
     hundred pixels across rather than half a degree of sky.

     A power law was tried first \u2014 pow(mu, 0.55) \u2014 and it is the wrong shape.
     mu is not the radius: it is sqrt(1 - r\xB2), so it stays above 0.85 across
     the whole inner half of the disc and then falls off a cliff. Any function
     of mu that is gentle near 1 therefore puts the entire visible gradient
     into the last few per cent of the radius, and the disc reads flat with a
     thin dark ring \u2014 which is exactly what it did. Linear in mu spends the
     gradient across the face, where it can be seen. */
  float ld = 1.0 - 0.80 * (1.0 - mu);

  /* Granulation, drawn as the *lanes* and not as the cells.

     Convection on a star is a honeycomb: rising gas fills almost the whole
     surface and it is bright, and the thin network of cooler gas sinking back
     down between the cells is dark. So the face is mostly light with a dark
     web on it \u2014 and taking the noise field directly gives the opposite
     impression, broad bright blobs next to broad dark blobs of the same size,
     which reads as a bruised moon. That is what the first attempt looked like.

     A level set of a noise field \u2014 the places where it passes through its own
     middle \u2014 is a set of thin closed curves, and a field of them is exactly
     that honeycomb, for one noise call. Granulation also turns over in place
     rather than being carried round, so the sample point drifts through the
     field instead of the sphere spinning under it.

     The width of the level set and how dark it goes are the two numbers that
     decide whether this is granulation or brain coral: a wide, high-contrast
     lane is a vein, and the first pass at these had both. Thin and shallow. */
  /* already unit, already turned to this star's own longitude */
  vec3 q = vQ;
  /* Domain warp, which is the difference between a honeycomb and granulation.
     A level set of an unwarped noise field gives cells that are all the same
     size and all the same roundness, and a regular tiling on a star is as
     much of a tell as the wireframes were. Displacing the sample point by a
     slower copy of the same field stretches the cells along the flow, so they
     come out uneven, elongated near the lanes they are draining into, and
     never twice alike.

     The amplitude is small and the warp field is nearly as fine as the thing
     it is warping, and both numbers had to come down to get there. A warp
     that is broad and strong does not distort cells, it *transports* them:
     the level set stops closing into a honeycomb and turns into long
     meandering veins across the whole face \u2014 marble, which is the same
     failure as the brain coral by another route. Warping by a shade under a
     cell's own width is the most that still reads as a cell. */
  vec3 w = vec3(noise(q * 9.0 + vec3(0.0, sT * 0.031, 0.0)),
                noise(q * 9.0 + vec3(19.3, 0.0, sT * 0.026)),
                noise(q * 9.0 + vec3(0.0, 7.7, sT * 0.023))) - 0.5;
  vec3 qg = q + w * 0.075;
  /* Frequency is the difference between granulation and a net. Seventeen
     cells across the sphere is about ten across the disc, and ten cells the
     width of a fingernail apiece are not granules \u2014 they are a pattern, and
     the eye reads a pattern as decoration on a ball rather than as the ball's
     own material. The real ratio is nearer a thousand granules across the
     disc; the two scales here go as fine as the noise can be sampled per
     fragment without sparkling, which lands the primary web at a size the eye
     reads as texture and not as motif. */
  float g1 = noise(qg * 34.0 + vec3(0.0, sT * 0.055, 0.0));
  float g2 = noise(qg * 74.0 - vec3(sT * 0.080, 0.0, sT * 0.050));
  /* Supergranulation: the same honeycomb three times the size and a fifth of
     the contrast. The photosphere has both, on scales an order apart, and one
     scale alone is what makes a procedural surface read as a texture \u2014 the
     eye finds the repeat because there is only one thing to find. */
  float g0 = noise(qg * 6.2 + vec3(sT * 0.013, 0.0, 0.0));
  float lane  = 1.0 - smoothstep(0.0, 0.11, abs(g1 - 0.5));
  /* The finest scale is dropped along the limb rather than drawn there. At a
     grazing angle a whole cell falls inside one fragment, and sampling a
     high-frequency field per pixel across that is not detail, it is a band of
     sparkle that crawls as the camera moves \u2014 the classic shimmer, and the
     more so under bloom. Fading it out with mu costs nothing that can be
     seen: the limb is where the darkening owns the picture anyway. */
  float fine  = (1.0 - smoothstep(0.0, 0.15, abs(g2 - 0.5)))
              * smoothstep(0.0, 0.28, mu);
  float super = 1.0 - smoothstep(0.0, 0.27, abs(g0 - 0.5));
  /* a slow unevenness across the whole face, so the web is not a uniform
     texture laid over a uniform ball */
  float broad = noise(q * 3.4 + vec3(sT * 0.020, 0.0, sT * 0.030));
  float cell = 1.03 - 0.19 * lane - 0.06 * fine - 0.045 * super
                    + 0.10 * (broad - 0.5);

  /* ---- sunspots ----
     The one feature of the sun a person can name without being an astronomer,
     and the disc had none. They are not scattered at random: they belong to
     two bands either side of the equator \u2014 the poles never have them and the
     equator itself rarely does \u2014 and each is a dark umbra inside a lighter,
     visibly *fibrous* penumbra. The penumbra is what makes a spot read as a
     hole in a boiling surface rather than as a smudge on a ball, so it gets
     its own high-frequency break-up. A slow rotation carries them, which is
     also the only cue on screen that the star is turning at all. */
  vec3 qr = spinDiff(q, sT * 0.021);
  float lat  = abs(qr.y);
  /* ---- the butterfly ----
     The two bands are not fixed. A cycle opens with spots appearing around
     thirty degrees either side of the equator and closes with the last of
     them at eight, and there are most of them halfway through \u2014 plot
     latitude against time for a century and the result is a row of wings,
     which is what the diagram has been called since Maunder drew it in
     1904. Both halves of that are here: the band walks down toward the
     equator over the cycle, and the number of spots rises and falls with
     it, to almost nothing at minimum.

     The clock is compressed, and it has to be said plainly. This star
     already turns in about half an hour rather than in twenty-seven days,
     so every period on it is a compression; the cycle is compressed harder
     still, to some fourteen rotations rather than a hundred and forty
     eight, because a butterfly that took three days of real time to open
     would be a constant nobody could ever catch moving. */
  float cyc  = fract(sT * 0.00024);
  float c0   = mix(0.52, 0.14, cyc);
  float amp  = 0.06 + 0.94 * pow(sin(cyc * 3.14159265), 1.4);
  float bl   = (lat - c0) / 0.155;
  float band = exp(-bl * bl) * amp;
  float grp  = fbm(qr * 2.7 + vec3(0.0, sT * 0.004, 0.0));
  float pen  = smoothstep(0.545, 0.640, grp) * band;
  float umb  = smoothstep(0.605, 0.665, grp) * band;
  pen *= 0.72 + 0.42 * noise(qr * 44.0);

  /* ---- faculae ----
     Bright patches that show only near the limb \u2014 they lie in the magnetic
     network, in the lanes, and they are visible there and not in the middle
     of the disc because at a shallow angle you are seeing down the side of a
     hot wall. Which means the same term that darkens the edge has something
     brightening it, and that quarrel across the limb is a good part of why a
     photograph of the sun does not look like an airbrushed ball. */
  float fac = lane * (1.0 - smoothstep(0.05, 0.62, mu)) * (1.0 - clamp(pen, 0.0, 1.0));

  /* The colour follows the *angle*, not the brightness. Mixing by the lit
     value instead made every dark lane in the middle of the disc go amber, as
     though the cool gas were somewhere other than where it is: the limb is
     cooler because you are seeing a shallower layer there, and a lane is
     dimmer because the gas in it is sinking. Two different facts, and only one
     of them is about temperature. */
  vec3 tint = mix(uEdge, uCore, pow(mu, 0.85));
  /* a spot is cooler gas, so it goes the way the limb goes and then further:
     down the same amber into rust. Tinting rather than only darkening is what
     stops it looking like a grey sticker. */
  tint = mix(tint, tint * vec3(0.94, 0.60, 0.34), clamp(pen, 0.0, 1.0));

  /* The middle of the disc is meant to clip and the rest of it is not. A star
     should saturate somewhere \u2014 that is what makes it read as a source rather
     than as a lit ball \u2014 but at 1.16, with the old flat falloff, it saturated
     everywhere and every term above was computed and thrown away by the
     clamp.

     1.14 rather than 1.22, now that there is something to lose. The extra
     stop bought nothing but a wider white hole in the middle, and it took the
     granulation, the faculae and the near edge of every spot with it \u2014 the
     terms are all multiplicative, so anything past the clamp is not "bright",
     it is simply not drawn. The disc still saturates; it just does it over
     the inner quarter instead of the inner half. */
  float v = ld * cell * 1.14;
  /* An umbra is about a fifth of the photosphere's brightness, and the floor
     here says so rather than letting the two terms drive it to black: a spot
     that reaches zero is a hole punched in the star, and the thing that makes
     one look real is that you can still see it is made of the same gas. */
  v *= clamp(1.0 - 0.55 * pen - 0.30 * umb, 0.15, 1.0);
  v += fac * 0.30;
  /* a system switched off in the legend has to be able to take its star
     with it, and an opaque disc cannot be dimmed */
  if (vA < 0.003) discard;
  gl_FragColor = vec4(pow(clamp(tint * v * uBright, 0.0, 1.0), vec3(0.4545)), vA);
}`,Hp=`
uniform vec3 uCol; uniform float uAmt; uniform float uTime;
varying vec3 vN; varying vec3 vE; varying vec3 vP;
${Qh}
void main(){
  vec3 q = normalize(vP);
  float f = 1.0 - abs(dot(normalize(vN), normalize(vE)));
  /* Spicules. The chromosphere is not a layer, it is a forest \u2014 hundreds of
     thousands of jets standing off the limb, each a few hundred kilometres
     across and each lasting minutes. Drawn as an even ring it comes out as a
     pencil line round the disc, which is the one shape it never has. Breaking
     the alpha with a fast, fine field turns that line into a fringe, and the
     motion is quick because a spicule's whole life is quick. */
  float sp = 0.70 + 0.54 * noise(q * 42.0 + vec3(0.0, uTime * 0.34, 0.0));
  float a = pow(f, 3.4) * uAmt * sp;
  if (a < 0.002) discard;
  gl_FragColor = vec4(pow(uCol * (0.55 + f * 0.75), vec3(0.4545)), a);
}`,hb=`
uniform vec3 uCol; uniform float uAmt; uniform float uTime;
varying vec3 vN; varying vec3 vE; varying vec3 vP;
${Qh}
void main(){
  float f = 1.0 - abs(dot(normalize(vN), normalize(vE)));
  float ring = smoothstep(0.66, 0.99, f);
  if (ring < 0.003) discard;
  /* the same shear the spots ride, because a prominence is held out along
     the same field the shear is winding up \u2014 the two would drift apart
     within one rotation if only one of them knew about it */
  vec3 qr = spinDiff(normalize(vP), uTime * 0.021);
  float m = fbm(qr * 3.3 + vec3(0.0, uTime * 0.010, 0.0));
  float loop = smoothstep(0.600, 0.760, m);
  /* fibrous along its length, the way a loop is a bundle of threads */
  loop *= 0.50 + 0.80 * noise(qr * 26.0 + vec3(uTime * 0.09, 0.0, 0.0));
  float a = ring * loop * uAmt;
  if (a < 0.003) discard;
  gl_FragColor = vec4(pow(uCol * (0.90 + ring * 0.90), vec3(0.4545)), a);
}`;(function(){let s=document.createElement("canvas");s.width=s.height=256;let c=s.getContext("2d"),u=.255,m=_e=>.0532*Math.pow(_e,-2.5)+1.425*Math.pow(_e,-7)+2.565*Math.pow(_e,-17),h=.32,y=Math.pow(m(1),h),M=Math.pow(m(1/u),h),L=[[9,.7,.42],[13,2.3,.3],[17,4.1,.2],[23,1.2,.13]],T=c.createImageData(256,256),A=T.data;for(let _e=0;_e<256;_e++){let Ce=(_e+.5)/256*2-1;for(let Xe=0;Xe<256;Xe++){let Qe=(Xe+.5)/256*2-1,me=Math.sqrt(Qe*Qe+Ce*Ce),ve=(_e*256+Xe)*4;if(me>=1){A[ve+3]=0;continue}let ke=Math.max(1,me/u),Pe=(Math.pow(m(ke),h)-M)/(y-M);if(!(Pe>0)){A[ve+3]=0;continue}let Ue=Math.atan2(Ce,Qe),ot=0;for(let Vt=0;Vt<L.length;Vt++){let Ht=Math.cos(Ue*L[Vt][0]+L[Vt][1]);ot+=L[Vt][2]*(Ht>0?Ht*Ht*Ht*Ht*Ht*Ht:0)}let Je=Math.min(1,Math.max(0,(ke-1.04)/.85));Pe*=1+Je*(ot*1.9-.42);let Rt=Math.min(1,Math.max(0,(me-.84)/.16));Pe*=1-Rt*Rt*(3-2*Rt);let lt=Math.round(Math.min(1,Math.max(0,Pe))*242);if(!lt){A[ve+3]=0;continue}let Kt=Math.min(1,(ke-1)/1.6);A[ve]=255,A[ve+1]=Math.round(246+Kt*6),A[ve+2]=Math.round(228+Kt*26),A[ve+3]=lt}}c.putImageData(T,0,0);let D=new S.CanvasTexture(s);D.minFilter=S.LinearFilter,In=new S.Sprite(new S.SpriteMaterial({map:D,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:S.AdditiveBlending,opacity:.85})),In.scale.setScalar(260),In.renderOrder=2,In.visible=!1,wt.add(In);let B=512,X=document.createElement("canvas");X.width=X.height=B;let O=X.getContext("2d"),V=O.createImageData(B,B),ne=V.data,N=B/2,q=10/(14*14*14)+5/(14*14)+.0025,ae=10/(.9*.9*.9)+5/(.9*.9)+.0025-q;for(let _e=0;_e<B;_e++)for(let Ce=0;Ce<B;Ce++){let Xe=(Ce-N)/N,Qe=(_e-N)/N,me=Math.sqrt(Xe*Xe+Qe*Qe),ve=0;if(me<1){let Pe=Math.max(.315,me*14);ve=((Je=>10/(Je*Je*Je)+5/(Je*Je)+.0025)(Pe)-q)/ae,ve=ve>0?Math.pow(ve,.42):0,ve+=.03*Math.exp(-Math.pow((me-.46)*7,2));let ot=Math.min(1,Math.max(0,(me-.8)/.2));ve*=1-ot*ot*(3-2*ot)}let ke=(_e*B+Ce)*4;ne[ke]=255,ne[ke+1]=240-Math.min(88,me*92),ne[ke+2]=214-Math.min(150,me*168),ne[ke+3]=Math.max(0,Math.min(255,ve*255))|0}O.putImageData(V,0,0);let Z=new S.CanvasTexture(X);Z.minFilter=S.LinearFilter,An=new S.Sprite(new S.SpriteMaterial({map:Z,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:S.AdditiveBlending,opacity:0})),An.scale.setScalar(600),An.renderOrder=4,An.visible=!1,wt.add(An);let xe=256,se=document.createElement("canvas");se.width=se.height=xe*2;let be=se.getContext("2d");be.translate(xe,xe);let Te=46;for(let _e=0;_e<Te;_e++){let Ce=_e/Te*C,Xe=(Math.sin(_e*2.31)+Math.sin(_e*.73)+Math.sin(_e*5.7)*.4)/2.4,Qe=xe*(.34+.62*Math.pow(Math.abs(Xe),.85)),me=.01+.02*Math.abs(Math.sin(_e*1.7)),ve=be.createLinearGradient(0,0,Math.cos(Ce)*Qe,Math.sin(Ce)*Qe);ve.addColorStop(0,"rgba(255,240,205,0.42)"),ve.addColorStop(.22,"rgba(255,206,138,0.16)"),ve.addColorStop(.6,"rgba(255,164,86,0.045)"),ve.addColorStop(1,"rgba(255,140,60,0)"),be.fillStyle=ve,be.beginPath(),be.moveTo(0,0),be.lineTo(Math.cos(Ce-me)*Qe,Math.sin(Ce-me)*Qe),be.lineTo(Math.cos(Ce)*Qe*1.04,Math.sin(Ce)*Qe*1.04),be.lineTo(Math.cos(Ce+me)*Qe,Math.sin(Ce+me)*Qe),be.closePath(),be.fill()}let De=new S.CanvasTexture(se);De.minFilter=S.LinearFilter,Qn=new S.Sprite(new S.SpriteMaterial({map:De,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:S.AdditiveBlending,opacity:.6})),Qn.scale.setScalar(420),Qn.renderOrder=2,Qn.visible=!1,wt.add(Qn)})();let ts=null;function ub(){if(ts)return ts;let n=256,o=document.createElement("canvas");o.width=o.height=n;let s=o.getContext("2d"),c=s.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return[[0,0],[.543,0],[.547,.16],[.6,.2],[.67,.24],[.676,.72],[.72,.95],[.775,.86],[.82,.97],[.856,.88],[.862,.1],[.886,.08],[.894,.66],[.94,.61],[.973,.56],[.9765,.06],[.98,.58],[.997,.44],[1,0]].forEach(([m,h])=>c.addColorStop(m,`rgba(255,255,255,${h})`)),s.fillStyle=c,s.fillRect(0,0,n,n),ts=new S.CanvasTexture(o),ts.minFilter=S.LinearFilter,ts}function eu(n,o){let s=new S.MeshBasicMaterial(Object.assign({color:16777215,transparent:!0,opacity:1},n));return s.onBeforeCompile=c=>{c.vertexShader=`attribute float aAlpha;
varying float vStarA;
`+(o?`varying float vFres;
`:"")+c.vertexShader.replace("void main() {",`void main() {
	vStarA = aAlpha;`),o&&(c.vertexShader=c.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
	vec3 sNrm = normal;
#ifdef USE_INSTANCING
	sNrm = mat3( instanceMatrix ) * sNrm;
#endif
	vFres = 1.0 - abs( dot( normalize( normalMatrix * sNrm ),
	                       normalize( -mvPosition.xyz ) ) );`)),c.fragmentShader=`varying float vStarA;
`+(o?`varying float vFres;
`:"")+c.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`vec4 diffuseColor = vec4( diffuse, opacity * vStarA );
	if ( diffuseColor.a < 0.002 ) discard;`+(o?`
	float sHot = pow( 1.0 - vFres, 0.55 );
	diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0 ), sHot );
	diffuseColor.rgb *= 1.0 + sHot * sHot * 1.9;`:""))},s.customProgramCacheKey=()=>o?"starHot":"starAlpha",s}let pn=null;function fb(){if(pn)return pn;let n=768,o=n/2,s=.4,c=s*(46/22),u=document.createElement("canvas");u.width=u.height=n;let m=u.getContext("2d"),h=m.createImageData(n,n),y=h.data,M=new Float32Array(n*n*3),L=1e-6,T=(N,q)=>Math.exp(-(N*N)/(2*q*q)),A=N=>N<0?0:N>1?1:N,D=(N,q)=>Math.max(.34,.78+.46*(.54*Math.sin(N*1+q)+.29*Math.sin(N*2.3+q*1.7+1.1)+.17*Math.sin(N*4.1-q*.9+2.7))),B=(N,q)=>.7+.3*D(N,q),X=(N,q)=>.84+.22*Math.sin(N*17+q*41)+.13*Math.sin(N*31-q*23+2),O=[0,0,0],V=(N,q)=>{if(N=A(N),O[0]=1,O[1]=.4+.6*A((N-.02)/.38),O[2]=.14+.86*A((N-.1)/.48),q){let ae=A((N-.66)/.34);O[0]-=.74*ae,O[1]-=.24*ae}return O};for(let N=0;N<n;N++){let q=(N-o)/o;for(let ae=0;ae<n;ae++){let Z=(ae-o)/o,xe=Math.sqrt(Z*Z+q*q);if(xe>=1)continue;let se=(N*n+ae)*3,be=0,Te=0,De=0,_e=(Pe,Ue)=>{be+=Pe*Ue[0],Te+=Pe*Ue[1],De+=Pe*Ue[2]},Ce=Math.atan2(q,Z),Xe=xe>1e-4?-q/xe:0,Qe=D(Ce,0),me=X(Ce,xe),ve=xe-s;{let Pe=.0155*(.8+.38*D(Ce,2.2)),Ue=T(ve,Pe)*(ve<0?.34:1);ve>0&&(Ue+=.17*Math.exp(-ve/.14)),Ue*=.46*Qe*me,Ue>.002&&_e(Ue,V((ve+.016)/.052,!1))}{let Pe=T(ve,.019)*Math.pow(A(Xe),5)*.6*Qe;Pe>.002&&_e(Pe,V((ve+.02)/.062,!1));let Ue=T(ve,.025)*Math.pow(A(-Xe),6)*.28*Qe;Ue>.002&&_e(Ue,V((ve+.024)/.07,!1))}{let Pe=Math.min(Math.abs(Ce),Math.abs(Math.abs(Ce)-Math.PI)),Ue=Math.abs(Ce)<Math.PI*.5,ot=D(Ue?.6:3.4,1.3),Je=T(Pe,.145)*T(ve,.028)*.84*ot;if(Je>.002&&_e(Je,V((ve+.02)/.075,!1)),ve>0){let Rt=.4*T(Pe,.082)*Math.exp(-ve/.115)*ot;Rt>.002&&_e(Rt,V(.72+.28*A(ve/.2),!0))}}{let Pe=.024+.032*Math.abs(q),Ue=T(Z,Pe)*Math.max(0,1-Math.abs(q)/.94);Ue=Ue*Ue*.92*B(q*3,4.1),Ue>.002&&_e(Ue,[1,.93,.77])}{let Pe=T(q,.012)*Math.max(0,1-Math.abs(Z)/.99)*.3*B(Z*2.6,5.7);Pe>.002&&_e(Pe,[.93,.97,1])}{let Pe=xe-c,Ue=T(Pe,.024)*(Pe<0?.4:1)*.2*D(Ce,3.9)*me;Ue>.002&&_e(Ue,V((Pe+.022)/.068,!1))}{let Pe=Math.hypot(Z,q+c+.55)-.55,Ue=T(Pe,.016)*Math.pow(A(Xe),2.4)*T(Z,.22)*.66*D(1.9,6.3);Ue>.002&&_e(Ue,V(A(.5-Pe/.042),!0))}if(be+Te+De<1e-4)continue;M[se]=be,M[se+1]=Te,M[se+2]=De;let ke=Math.max(be,Math.max(Te,De));ke>L&&(L=ke)}}for(let N=0;N<n;N++){let q=(N-o)/o;for(let ae=0;ae<n;ae++){let Z=(ae-o)/o,xe=Math.sqrt(Z*Z+q*q),se=(N*n+ae)*3,be=(N*n+ae)*4,Te=M[se],De=M[se+1],_e=M[se+2],Ce=Math.max(Te,Math.max(De,_e));if(Ce<1e-4)continue;let Xe=Ce/L,Qe=A((xe-.86)/.14);if(Xe*=1-Qe*Qe*(3-2*Qe),Xe<.0016)continue;let me=1/Ce;y[be]=Math.min(255,Te*me*255)|0,y[be+1]=Math.min(255,De*me*255)|0,y[be+2]=Math.min(255,_e*me*255)|0,y[be+3]=Math.max(0,Math.min(255,Xe*255))|0}}m.putImageData(h,0,0);let ne=new S.CanvasTexture(u);return ne.minFilter=S.LinearFilter,pn=new S.Sprite(new S.SpriteMaterial({map:ne,transparent:!0,depthWrite:!1,depthTest:!1,blending:S.AdditiveBlending,opacity:0})),pn.scale.setScalar(600),pn.renderOrder=5,pn.visible=!1,wt.add(pn),pn}function Wp(){if(Wt=new S.Group,wt.add(Wt),Ph=new S.Group,Wt.add(Ph),dp=[],Ne.length){let h=Ne.length,y=new S.IcosahedronGeometry(1,4),M=new S.IcosahedronGeometry(1.42,2),L=new S.RingGeometry(2.2,2.235,128),T=new S.RingGeometry(2.86,2.882,128),A=new Float32Array(h),D=new Float32Array(h*3),B=new Float32Array(h*3);Hc=new Float32Array(h).fill(1),Wc=new Float32Array(h).fill(1),qc=new Float32Array(h).fill(1),Xc=new Float32Array(h).fill(1),y.setAttribute("aAlpha",new S.InstancedBufferAttribute(Hc,1)),y.setAttribute("aSeed",new S.InstancedBufferAttribute(A,1)),y.setAttribute("aCore",new S.InstancedBufferAttribute(D,3)),y.setAttribute("aEdge",new S.InstancedBufferAttribute(B,3)),M.setAttribute("aAlpha",new S.InstancedBufferAttribute(Wc,1)),L.setAttribute("aAlpha",new S.InstancedBufferAttribute(qc,1)),T.setAttribute("aAlpha",new S.InstancedBufferAttribute(Xc,1)),$a=new S.ShaderMaterial({vertexShader:es,fragmentShader:$h,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new S.Color(1,1,1)},uEdge:{value:new S.Color(1,1,1)}},transparent:!0,depthWrite:!0}),_o=new S.InstancedMesh(y,$a,h),sa=new S.InstancedMesh(M,eu({side:S.BackSide,blending:S.AdditiveBlending,depthWrite:!1}),h),la=new S.InstancedMesh(L,eu({side:S.DoubleSide,blending:S.AdditiveBlending,depthWrite:!1}),h),ca=new S.InstancedMesh(T,eu({side:S.DoubleSide,blending:S.AdditiveBlending,depthWrite:!1}),h),[_o,sa,la,ca].forEach(O=>{O.instanceMatrix.setUsage(S.DynamicDrawUsage),O.frustumCulled=!1,Ph.add(O)});let X=1;Ne.forEach(O=>{(O.n|0)>X&&(X=O.n|0)}),Ne.forEach((O,V)=>{O.si=V,O.sR=O.R||(O.tier===0?8:5),O.sx=0,O.sy=0,O.rz=Math.random()*C,O.rx=Math.PI/2-(O.tier?.1:.36);let ne=Math.log(1+(O.n|0))/Math.log(1+X),N=3400+ne*ne*3600;O.temp=N,A[V]=(Ja(O.key||String(V))&4095)/4096;let q=ma(N),ae=ma(N*.762);D[V*3]=q[0],D[V*3+1]=q[1],D[V*3+2]=q[2],B[V*3]=ae[0],B[V*3+1]=ae[1],B[V*3+2]=ae[2];let Z=Uh(N);O.starCol=new S.Color(Z[0],Z[1],Z[2]),sa.setColorAt(V,O.color),la.setColorAt(V,O.color),ca.setColorAt(V,O.color),O.op0={core:1,shell:.055,ring:.115,ring2:.055,glow:O.tier===0?1.05:.58},O.vis=1,dp.push(O)}),[_o,sa,la,ca].forEach(O=>{O.instanceColor&&(O.instanceColor.needsUpdate=!0)})}bo=null,ji=new S.Mesh(new S.IcosahedronGeometry((Ei||1200)+120,3),new S.MeshBasicMaterial({color:4216427,wireframe:!0,transparent:!0,opacity:.016,blending:S.AdditiveBlending,depthWrite:!1,side:S.DoubleSide})),ji.scale.y=.68,ji.visible=G>0,Wt.add(ji),Pr=function(){if(!G||!Yi.length)return null;let y=Yi[Yi.length-1]*1.35,M=128,L=12,T=[],A=[],D=[.3,.62,.85],B=(ne,N,q,ae,Z,xe)=>{T.push(ne,0,N,q,0,ae),A.push(D[0]*Z,D[1]*Z,D[2]*Z,D[0]*xe,D[1]*xe,D[2]*xe)},X=Yi.slice();X.push(y),X.forEach((ne,N)=>{let q=N===X.length-1?.11:.2;for(let ae=0;ae<M;ae++){let Z=ae/M*C,xe=(ae+1)/M*C;B(Math.cos(Z)*ne,Math.sin(Z)*ne,Math.cos(xe)*ne,Math.sin(xe)*ne,q,q)}});for(let ne=0;ne<L;ne++){let N=ne/L*C,q=Math.cos(N),ae=Math.sin(N),Z=Yi[0]*.28;B(q*Z,ae*Z,q*y,ae*y,.2,.02)}for(let ne=0;ne<36;ne++){let N=ne/36*C,q=Math.cos(N),ae=Math.sin(N),Z=ne%9===0?y*.045:y*.018;B(q*y,ae*y,q*(y+Z),ae*(y+Z),.24,.05)}let O=new S.BufferGeometry;O.setAttribute("position",new S.BufferAttribute(new Float32Array(T),3)),O.setAttribute("color",new S.BufferAttribute(new Float32Array(A),3));let V=new S.LineSegments(O,new S.LineBasicMaterial({vertexColors:!0,transparent:!0,opacity:.85,blending:S.AdditiveBlending,depthWrite:!1}));return V.frustumCulled=!1,V.visible=!!H.grid,Wt.add(V),V}();let n=`
varying vec3 vW;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,o=`
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uCol;
uniform float uR0, uR1, uAmt;
varying vec3 vW;
void main(){
  vec3 rel = vW - uSun;
  float r = length(rel);
  float x = r / uR0;
  /* the radial law, held off the star: inside 0.9 r0 the corona and the
     glare sprite are what a reader sees, and a sheet running to r^-2.3
     under them is a white hole */
  float rad = pow(max(x, 0.35), -2.3);
  float hole = smoothstep(0.30, 1.0, x);
  float edge = 1.0 - smoothstep(uR1 * 0.55, uR1, r);
  vec3 toCam = normalize(uCam - vW);
  vec3 toSun = normalize(uSun - vW);
  /* c = 1: the star is behind the camera, the dust is seen full and lit
     from the front. c = -1: the star is beyond the dust, seen through it. */
  float c = clamp(dot(toCam, toSun), -1.0, 1.0);
  /* Henyey\u2013Greenstein with the scattering angle's cosine, which is -c: the
     light came *from* the star and leaves *toward* the camera */
  float g = 0.55;
  float fwd = (1.0 - g * g) / pow(1.0 + g * g + 2.0 * g * c, 1.5);
  /* the gegenschein: a backscatter peak a few degrees across */
  float back = 0.55 * exp(-(1.0 - c) * 28.0);
  float ph = 0.28 + 0.12 * fwd + back;
  float I = rad * hole * edge * ph * uAmt;
  gl_FragColor = vec4(uCol * I, 1.0);
}`;if(aa=function(){if(!G||!Yi.length||He<0)return null;let y=Yi[0]*.34,M=Yi[Yi.length-1]*1.15,L=new S.PlaneGeometry(M*2,M*2,1,1);L.rotateX(-Math.PI/2);let T=new S.ShaderMaterial({uniforms:{uSun:{value:new S.Vector3},uCam:{value:new S.Vector3},uCol:{value:new S.Color(1,.9,.76)},uR0:{value:y},uR1:{value:M},uAmt:{value:0}},vertexShader:n,fragmentShader:o,transparent:!0,depthWrite:!1,depthTest:!0,side:S.DoubleSide,blending:S.AdditiveBlending}),A=new S.Mesh(L,T);return A.frustumCulled=!1,A.renderOrder=-2,Wt.add(A),A}(),function(){let y=Ne.length;if(!y){Li=di=null;return}let M=new Float32Array(y*3),L=new Float32Array(y),T=new Float32Array(y*3),A=new Float32Array(y);Ne.forEach((q,ae)=>{q.pos.toArray(M,ae*3),q.gz0=q.R*(q.tier===0?17:10),L[ae]=q.gz0,A[ae]=q.tier===0?.85:.5,q.color.clone().lerp(new S.Color(16777215),.44).toArray(T,ae*3)});let D=new S.BufferGeometry;D.setAttribute("position",new S.BufferAttribute(M,3)),D.setAttribute("aSize",new S.BufferAttribute(L,1)),D.setAttribute("aColor",new S.BufferAttribute(T,3)),D.setAttribute("aAlpha",new S.BufferAttribute(A,1)),xl(D,y),Li=new S.Points(D,$i(600,.07,.62)),Li.material.uniforms.uMinPx.value=3.2,Li.frustumCulled=!1,Wt.add(Li);let B=3,X=new Float32Array(y*B*3),O=new Float32Array(y*B),V=new Float32Array(y*B*3),ne=new Float32Array(y*B);Ne.forEach((q,ae)=>{q.hzA=q.oA0*2.7+ae*1.9;let Z=q.reachA!==void 0?q.reachA+q.reachB*H.gap:q.reach||120,xe=q.color.clone().lerp(new S.Color(4880584),.22);for(let se=0;se<B;se++){let be=ae*B+se;q.pos.toArray(X,be*3),O[be]=q.tier===0?Z*(se?3.4:5):0,ne[be]=0,xe.toArray(V,be*3)}});let N=new S.BufferGeometry;N.setAttribute("position",new S.BufferAttribute(X,3)),N.setAttribute("aSize",new S.BufferAttribute(O,1)),N.setAttribute("aColor",new S.BufferAttribute(V,3)),N.setAttribute("aAlpha",new S.BufferAttribute(ne,1)),xl(N,y*B),di=new S.Points(N,$i(600,0,0)),di.frustumCulled=!1,di.renderOrder=-1,Wt.add(di)}(),Mt=null,G&&He>=0){let h=We[He];Mt=new S.Group;let y=new S.ShaderMaterial({vertexShader:es,fragmentShader:$h,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new S.Color().fromArray(ma(6300))},uEdge:{value:new S.Color().fromArray(ma(4800))}}}),M=new S.Mesh(new S.IcosahedronGeometry(h,5),y);Mt.add(M);let L=new S.ShaderMaterial({vertexShader:es,fragmentShader:Hp,transparent:!0,depthWrite:!1,blending:S.AdditiveBlending,uniforms:{uCol:{value:new S.Color(16742986)},uAmt:{value:.95},uTime:{value:0}}}),T=new S.Mesh(new S.IcosahedronGeometry(h*1.04,4),L);Mt.add(T);let A=new S.ShaderMaterial({vertexShader:es,fragmentShader:hb,transparent:!0,depthWrite:!1,blending:S.AdditiveBlending,uniforms:{uCol:{value:new S.Color(16738874)},uAmt:{value:2},uTime:{value:0}}}),D=new S.Mesh(new S.IcosahedronGeometry(h*1.18,4),A);Mt.add(D);let B=new S.Mesh(new S.IcosahedronGeometry(h*1.55,3),new S.MeshBasicMaterial({color:16764810,transparent:!0,opacity:.085,blending:S.AdditiveBlending,depthWrite:!1,side:S.BackSide}));Mt.add(B);let X=3.6+Math.min(2.2,h*.03);Mt.userData={surface:M,rim:T,pro:D,halo:B,R:h,lit:X,surfMat:y,rimMat:L,proMat:A},Wt.add(Mt),od.intensity=X}Oi=new S.IcosahedronGeometry(1,G>900?2:3),Yc=new S.MeshPhongMaterial({emissive:132620,emissiveIntensity:1,shininess:18,specular:725014,flatShading:!1}),Yc.extensions={derivatives:!0},Yc.onBeforeCompile=h=>{Bp(h,!0),Dp(h,!0)},dn=new S.InstancedMesh(Oi,Yc,Math.max(1,G)),dn.count=G,dn.instanceMatrix.setUsage(S.DynamicDrawUsage),dn.frustumCulled=!1,Wt.add(dn);for(let h=0;h<G;h++)dn.setColorAt(h,new S.Color(Ze[h*3],Ze[h*3+1],Ze[h*3+2]));dn.instanceColor&&(dn.instanceColor.setUsage(S.DynamicDrawUsage),dn.instanceColor.needsUpdate=!0);{let h=new Float32Array(Math.max(1,G)*4);Qa=new Uint8Array(Math.max(1,G));for(let y=0;y<G;y++)Vp(y,h,y*4),Qa[y]=h[y*4+3];Oi.setAttribute("aSurf",new S.InstancedBufferAttribute(h,4)),db()}{jh=new Array(G),gl=new Float32Array(Math.max(1,G)),Eo=new Float32Array(Math.max(1,G)*4),Ao=new Float32Array(Math.max(1,G)*4),hi=new Float32Array(Math.max(1,G)*4),Kc=new Float32Array(Math.max(1,G)),Jn=new Float32Array(Math.max(1,G)*4);let h=new S.Color(16777215),y=new S.Color;for(let L=0;L<G;L++){let T=et[L],A=null;if(T.kind==="wiki")A=T.anchor;else if(T.kind==="moon"){let D=et[T.anchorNode];A=D&&D.kind==="wiki"?D.anchor:null}jh[L]=A,gl[L]=A?Math.max(20,(A.reach||60)*.55):Math.max(300,(Ei||1600)*.9),A?y.copy(A.starCol||A.color):y.copy(U1),y.toArray(Ao,L*4),Ao[L*4+3]=T.kind==="wiki"?1:T.kind==="moon"?.18:T.kind==="core"?0:.4,T.kind==="moon"&&(hi[L*4+3]=We[T.anchorNode]||0,Kc[L]=A?A.R||6:He>=0?We[He]:34),ad(L,H.spr,1,Eo.subarray(L*4,L*4+4))}let M=new S.InstancedBufferAttribute(Eo,4);M.setUsage(S.DynamicDrawUsage),Oi.setAttribute("aStar",M),Oi.setAttribute("aStarCol",new S.InstancedBufferAttribute(Ao,4));{let L=new S.InstancedBufferAttribute(hi,4);L.setUsage(S.DynamicDrawUsage),Oi.setAttribute("aOcc",L),Oi.setAttribute("aOccS",new S.InstancedBufferAttribute(Kc,1)),Oi.setAttribute("aRingS",new S.InstancedBufferAttribute(Jn,4))}}Ki=new S.BufferGeometry,il=new Float32Array(Math.max(1,G)*3),Mo=new Float32Array(Math.max(1,G)),da=new Float32Array(Math.max(1,G)*3),jc=new Float32Array(Math.max(1,G)),So=new Float32Array(Math.max(1,G));for(let h=0;h<G;h++)So[h]=Mo[h]=We[h]*(et[h].kind==="core"?16:et[h].kind==="wiki"?9:7.5),jc[h]=et[h].kind==="wiki"?.8:et[h].kind==="core"?1:.58,da[h*3]=Ze[h*3],da[h*3+1]=Ze[h*3+1],da[h*3+2]=Ze[h*3+2];Ki.setAttribute("position",new S.BufferAttribute(il,3)),Ki.setAttribute("aSize",new S.BufferAttribute(Mo,1)),Ki.setAttribute("aColor",new S.BufferAttribute(da,3)),Ki.setAttribute("aAlpha",new S.BufferAttribute(jc,1)),xl(Ki,Math.max(1,G)),Ki.setDrawRange(0,G),ha=new S.Points(Ki,$i(600,.06,0)),ha.material.uniforms.uMinPx.value=1.8,ha.frustumCulled=!1,Wt.add(ha);let s=40;ui=[];{let h=T=>T!==He&&J[T].k!=="raw"&&(J[T].inb|0)>=3,y=new Map,M=[];for(let T=0;T<G;T++){if(!h(T))continue;M.push(T);let A=J[T].c,D=y.get(A);(D===void 0||(J[T].inb|0)>(J[D].inb|0))&&y.set(A,T)}M.sort((T,A)=>(J[A].inb|0)-(J[T].inb|0));let L=new Set(y.values());M.slice(0,Math.max(1,Math.ceil(M.length*.01))).forEach(T=>L.add(T)),ui=M.filter(T=>L.has(T)).slice(0,s)}if(ui.length){let h=Math.max.apply(null,ui.map(L=>J[L].inb|0)),y=new S.RingGeometry(1,1.8297,128,1),M=new S.MeshBasicMaterial({map:ub(),transparent:!0,opacity:.72,side:S.DoubleSide,blending:S.AdditiveBlending,depthWrite:!1});M.customProgramCacheKey=()=>"vo-ring-shadow",M.onBeforeCompile=L=>{L.vertexShader=`attribute vec4 aRing;
varying vec3 vRP; varying vec3 vRC; varying vec3 vRS; varying float vRR;
`+L.vertexShader,L.vertexShader=L.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vRP = mvPosition.xyz;
  vRC = (modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  vRS = (viewMatrix * modelMatrix * vec4(aRing.xyz, 1.0)).xyz;
  vRR = aRing.w;`),L.fragmentShader=`varying vec3 vRP; varying vec3 vRC; varying vec3 vRS; varying float vRR;
`+L.fragmentShader,L.fragmentShader=L.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 L = normalize(vRS - vRC);
    vec3 rel = vRP - vRC;
    float tt = dot(rel, L);
    float sh = 1.0;
    if (tt < 0.0 && vRR > 0.0) {
      float d = length(rel - L * tt);
      sh = 0.07 + 0.93 * smoothstep(vRR * 0.80, vRR * 1.30, d);
    }
    vec3 vw = normalize(-vRP);
    float cth = clamp(dot(-L, vw), -1.0, 1.0);
    float den = 1.3844 - 1.24 * cth;
    float fw = min(0.6156 / max(den * sqrt(max(den, 1e-4)), 0.02), 4.0);
    outgoingLight *= sh * (0.70 + 0.32 * fw);
    diffuseColor.a *= sh;
  }
#include <output_fragment>`)},Nn=new S.InstancedMesh(y,M,ui.length),Nn.instanceMatrix.setUsage(S.DynamicDrawUsage),Nn.frustumCulled=!1,Wt.add(Nn),ed=[],Xa=new Float32Array(ui.length),dl=new Float32Array(ui.length*4);{let L=new S.InstancedBufferAttribute(dl,4);L.setUsage(S.DynamicDrawUsage),y.setAttribute("aRing",L)}ui.forEach((L,T)=>{ed.push(new S.Quaternion().setFromEuler(new S.Euler(mi[L*4]+Math.PI*.5,0,0))),Xa[T]=1.185+(J[L].inb|0)/h*.135,Jn[L*4]=0,Jn[L*4+1]=Math.cos(mi[L*4]),Jn[L*4+2]=Math.sin(mi[L*4]),Jn[L*4+3]=We[L]*Xa[T],Nn.setColorAt(T,new S.Color(I(Ze[L*3],1,.3),I(Ze[L*3+1],1,.3),I(Ze[L*3+2],1,.3)))}),Nn.instanceColor&&(Nn.instanceColor.needsUpdate=!0)}yn=Ae.length,ul=yn>4e3?10:yn>1500?14:24,Uc=new Array(yn),wo=new Float32Array(Math.max(1,yn)).fill(1);{let h=Xh(Math.max(1,yn),ul);rl=h.geo,hp=h.pos,up=h.col,pp=h.perStrip,rl.setDrawRange(0,yn*h.idxPerStrip),fp=qh(1),Zc=new S.Mesh(rl,fp),Zc.frustumCulled=!1,Wt.add(Zc)}mp=new Int32Array(td),Jc=new Int32Array(G);for(let h=0;h<G;h++)Jc[h]=h;Jc.sort((h,y)=>We[y]-We[h]);{let h=Xh(td,pa);To=h.geo,Fh=h.pos,Nh=h.col,a1=h.perStrip,gp=h.idxPerStrip,To.setDrawRange(0,0),Ha=new S.Mesh(To,qh(1.45)),Ha.frustumCulled=!1,Wt.add(Ha)}ol=new Int32Array(vr),Wa=new Float32Array(vr),Ih=new Float32Array(vr);for(let h=0;h<vr;h++)ol[h]=Math.floor(Math.random()*Math.max(1,yn)),Wa[h]=Math.random(),Ih[h]=.0024+Math.random()*.005;al=new Float32Array(vr*xr*3),kh=new Float32Array(vr*xr),sl=new Float32Array(vr*xr*3),Qc=new Float32Array(vr*xr),Zi=new S.BufferGeometry,Zi.setAttribute("position",new S.BufferAttribute(al,3)),Zi.setAttribute("aSize",new S.BufferAttribute(kh,1)),Zi.setAttribute("aColor",new S.BufferAttribute(sl,3)),Zi.setAttribute("aAlpha",new S.BufferAttribute(Qc,1)),xl(Zi,vr*xr),ll=new S.Points(Zi,$i(600)),ll.frustumCulled=!1,ll.visible=yn>0,Wt.add(ll),gr=new S.Group,gr.visible=!1,Wt.add(gr),$c=new S.Mesh(new S.RingGeometry(1,1.02,96),new S.MeshBasicMaterial({color:16758344,transparent:!0,opacity:.85,side:S.DoubleSide,blending:S.AdditiveBlending,depthWrite:!1})),gr.add($c),Ji=new S.Mesh(new S.RingGeometry(1,1.05,48),new S.MeshBasicMaterial({color:6087167,transparent:!0,opacity:.75,side:S.DoubleSide,blending:S.AdditiveBlending,depthWrite:!1})),Ji.visible=!1,Wt.add(Ji),ti=new S.Group,ti.visible=!1,Wt.add(ti);let c=10980346;cl=new S.Mesh(new S.RingGeometry(1,1.045,84),new S.MeshBasicMaterial({color:c,transparent:!0,opacity:.85,side:S.DoubleSide,blending:S.AdditiveBlending,depthWrite:!1})),ti.add(cl),qa=new S.Mesh(new S.RingGeometry(1,1.1,64,1,0,C*.34),new S.MeshBasicMaterial({color:c,transparent:!0,opacity:.6,side:S.DoubleSide,blending:S.AdditiveBlending,depthWrite:!1})),ti.add(qa),ua=new S.Mesh(new S.TetrahedronGeometry(1,0),new S.MeshBasicMaterial({color:c,transparent:!0,opacity:.75,blending:S.AdditiveBlending,depthWrite:!1})),ti.add(ua),Fr=[],Ne.forEach(h=>{let y=Xp(h.code,"#5ce1ff",h.tier===0?22:17,!0);Wt.add(y),Fr.push({sprite:y,get:()=>h.pos,far:(h.tier===0?1.6:2.8)*Math.max(600,(Ei||1200)*.8),cat:h})});let u=220,m=[];for(let h=0;h<G;h++)J[h].k!=="raw"&&m.push(h);m.sort((h,y)=>(J[y].inb|0)-(J[h].inb|0)),m.slice(0,u).forEach(h=>{let y=Xp(J[h].n,"#9beaff",12+Math.min(7,J[h].inb*.12));y.material.opacity=0,Wt.add(y),Fr.push({sprite:y,idx:h,far:Math.max(420,(Ei||1200)*.42),node:!0})}),Fp(Ei||1600),Ip(Ei||1600),Xu(),In&&(In.visible=G>0,In.scale.setScalar(Math.max(120,(We[He]||17)*15))),Qn&&(Qn.visible=G>0,Qn.scale.setScalar(Math.max(120,(We[He]||17)*15)*1.62)),An&&(An.visible=!1,An.material.opacity=0),pn&&(pn.visible=!1,pn.material.opacity=0),yp(),fa(),Br.at=performance.now(),Br.n=0,Br.sum=0,Y()}let Br={at:0,n:0,sum:0};function pb(n){if(H.qAuto||!Br.at||G<600||Ee.on)return;let o=n-Br.at;o<3e3||(Br.sum+=kl,Br.n++,!(o<7e3)&&(H.qAuto=1,Br.sum/Br.n<26&&Js()!=="fast"?(Qs("fast",!0),P(k("q.auto"),6e3)):an()))}let mb='"Malgun Gothic","Apple SD Gothic Neo","Yu Gothic UI","Microsoft YaHei UI","Segoe UI",sans-serif',qp=26;function Xp(n,o,s,c){let u=String(n),m=u.length>qp?u.slice(0,qp-1)+"\u2026":u,h=46,y=15,M=Math.round(h*.15),L=document.createElement("canvas"),T=L.getContext("2d"),A=(c?"700 ":"600 ")+h+"px "+mb,D=c&&"letterSpacing"in T?Math.round(h*.13)+"px":"";D&&(T.letterSpacing=D),T.font=A,L.width=Math.ceil(T.measureText(m).width)+y*2+(D?h*.13:0),L.height=h+y*2,T.font=A,D&&(T.letterSpacing=D),T.textBaseline="middle",T.lineJoin="round",T.miterLimit=2;let B=L.height/2;T.shadowColor=o,T.shadowBlur=24,T.strokeStyle=o,T.lineWidth=M*.55,T.strokeText(m,y,B),T.shadowBlur=0,T.strokeStyle="rgba(2,7,14,.93)",T.lineWidth=M,T.strokeText(m,y,B),T.fillStyle="#eaf9ff",T.fillText(m,y,B);let X=new S.CanvasTexture(L),O=Tt.capabilities.isWebGL2;X.generateMipmaps=O,X.minFilter=O?S.LinearMipmapLinearFilter:S.LinearFilter,X.magFilter=S.LinearFilter,X.anisotropy=Math.max(1,Math.min(8,Tt.capabilities.getMaxAnisotropy()));let V=new S.Sprite(new S.SpriteMaterial({map:X,transparent:!0,depthWrite:!1,depthTest:!0,opacity:.9}));return V.scale.set(s*L.width/L.height,s,1),V.renderOrder=5,V}function gb(){Wt&&(Wt.traverse(n=>{n.geometry&&n.geometry.dispose(),(Array.isArray(n.material)?n.material:n.material?[n.material]:[]).forEach(s=>{s.map&&s.map.dispose();let c=yr.indexOf(s);c>=0&&yr.splice(c,1),c=Ka.indexOf(s),c>=0&&Ka.splice(c,1),c=ml.indexOf(s),c>=0&&ml.splice(c,1),s.dispose()})}),wt.remove(Wt),Wt=null,bo=Li=di=ji=dn=ha=Zc=ll=null,Pr=aa=null,Ha=To=Fh=Nh=null,gr=Ji=ti=oa=Mt=null,_o=sa=la=ca=null,$a=null,Hc=Wc=qc=Xc=null,Nn=null,ui=[],ed=[],Xa=null,dl=null,ts=null,Fr=[])}let de={tgt:new S.Vector3(0,0,0),tgtD:new S.Vector3(0,0,0),dist:2400,distD:1250,th:.7,thD:.7,ph:1.06,phD:1.06,roll:0,rollD:0,thV:0,phV:0,aX:0,aY:0,idle:0,follow:-1};function Ur(){de.idle=0}let ns={th:.62,ph:.95,dist:1250};function vb(){de.follow=-1,de.tgtD.set(0,0,0),de.thD=ns.th,de.phD=ns.ph,de.distD=ns.dist,de.rollD=0,de.thV=0,de.phV=0,Ur()}function xb(n){if(de.follow>=0&&(de.follow<G?de.tgtD.set(he[de.follow*3],he[de.follow*3+1],he[de.follow*3+2]):de.follow=-1),Di===1&&Wr<0){let T=R(n>1e-4?.016666666666666666/n:1,.25,4);de.thV=de.thV*.45+de.aX*T*.14,de.phV=de.phV*.45+de.aY*T*.14}else if(de.thV||de.phV){de.thD-=de.thV*n*60,de.phD=R(de.phD-de.phV*n*60,.12,Math.PI-.12);let T=Math.pow(.045,n);de.thV*=T,de.phV*=T,Math.abs(de.thV)<2e-5&&(de.thV=0),Math.abs(de.phV)<2e-5&&(de.phV=0)}de.aX=0,de.aY=0,de.idle+=n;let o=E.on?2:7,s=E.on?.03:.019;de.idle>o&&(de.thD-=n*s*R((de.idle-o)/4,0,1));let c=1-Math.pow(.0012,n);de.dist=I(de.dist,de.distD,c),de.th=I(de.th,de.thD,c),de.ph=I(de.ph,de.phD,c),de.roll=I(de.roll,de.rollD,c*.7),de.tgt.lerp(de.tgtD,c);let u=de.th,m=de.ph,h=de.dist,y=de.roll,M=Math.sin(m),L=Math.cos(m);if(Ie.position.set(de.tgt.x+h*M*Math.sin(u),de.tgt.y+h*L,de.tgt.z+h*M*Math.cos(u)),Ie.up.set(Math.sin(y),Math.cos(y),0),Ie.lookAt(de.tgt),pt){let T=f("mindbox").offsetWidth;if(T>1){let A=2*h*Math.tan(Ie.fov*Math.PI/360)*Ie.aspect;Yp.set(1,0,0).applyQuaternion(Ie.quaternion).multiplyScalar(A*(T*.5/Math.max(1,a()))),Ie.position.add(Yp)}}}let Yp=new S.Vector3;function yb(n,o,s){de.thD-=n,de.phD=R(de.phD-o,.12,Math.PI-.12),s&&(de.aX+=n,de.aY+=o),Ur()}function wb(n){de.distD=R(de.distD*n,12,24e3),Ur()}function bb(n,o){let s=new S.Vector3().setFromMatrixColumn(Ie.matrix,0),c=new S.Vector3().setFromMatrixColumn(Ie.matrix,1),u=de.distD*.0016;de.follow=-1,de.tgtD.addScaledVector(s,-n*u).addScaledVector(c,o*u),Ur()}function tu(){vb(),P("VIEW RESET")}function cd(n,o){n<0||n>=G||(Gn(n),de.follow=n,de.tgtD.set(he[n*3],he[n*3+1],he[n*3+2]),de.distD=R(We[n]*(o?9:20)+34,34,900),de.thV=0,de.phV=0,Ur())}function jp(){if(!G)return 0;let n=new Float64Array(G);for(let o=0;o<G;o++)n[o]=Math.hypot(he[o*3],he[o*3+1],he[o*3+2]);return n.sort(),G<12?n[G-1]:n[Math.min(G-1,Math.floor(G*.93))]}function dd(){if(!Wt)return;Vu(0);let n=jp();de.follow=-1,de.tgtD.set(0,0,0),de.rollD=0,de.thD=.62,de.phD=.95,de.thV=0,de.phV=0;let o=j.on?j.hole.w:a(),s=j.on?j.hole.h:l(),c=Math.max(1,Math.min(2.6,s/Math.max(1,o))),u=E.on?.6:j.on?.8*c:c;de.distD=G?R((n*1.25+120)*u,200,22e3):1250,de.dist=de.distD*1.35,de.tgt.set(0,0,0),ns.th=de.thD,ns.ph=de.phD,ns.dist=de.distD,Ur()}let hd=new S.Vector3,Kp=new S.Vector3,Zp=12,_b=2.2,Mb=1.18,wa=[];function nu(n,o,s){if(!G)return-1;Ie.updateMatrixWorld();let c=a(),u=l(),m=(n*.5+.5)*c,h=(-o*.5+.5)*u,y=u*.5/Math.tan(Ie.fov*Math.PI/360);wa.length=0;let M=9;for(let B=0;B<G;B++){if(Sn[B]<.12)continue;Kp.set(he[B*3]-Ie.position.x,he[B*3+1]-Ie.position.y,he[B*3+2]-Ie.position.z);let X=Kp.length();if(X<.001||(hd.set(he[B*3],he[B*3+1],he[B*3+2]).project(Ie),hd.z>1))continue;let O=(hd.x*.5+.5)*c,V=(-hd.y*.5+.5)*u,ne=Math.hypot(O-m,V-h),N=Math.max(.6,We[B]*y/X),q=Math.max(N,We[B]*_b*y/X);if(ne>Math.max(q,Zp))continue;let ae=ne<=N?0:ne<=q?1:2,Z=ae===0?X:ae===1?ne/q:ne/Zp;ae<M&&(M=ae),wa.push(B,ae,Z)}if(!wa.length)return-1;let L=-1,T=1e30,A=-1,D=0;for(let B=0;B<wa.length;B+=3){if(wa[B+1]!==M)continue;let X=wa[B],O=wa[B+2];O<T&&(T=O,L=X),X===s&&(A=X,D=O)}return A>=0&&A!==L&&D<=T*Mb?A:L}let Ke=-1,rn=-1,Co="",zr=!1,ir=-1,ba=new Set,is=new Set;function rs(){return ba.size>1}function Jp(n){ir=-1,(ba.size||is.size)&&(ba=new Set,is=new Set,n||P(k("route.clear"))),os()}function Sb(n,o){if(ba=new Set,is=new Set,n<0||o<0||n>=G||o>=G||n===o||!fn)return 0;let s=new Int32Array(G).fill(-1),c=new Uint8Array(G);c[n]=1;let u=[n],m=!1;for(let M=0;M<u.length&&!m;M++){let L=u[M],T=fn[L];T&&T.forEach(A=>{c[A]||(c[A]=1,s[A]=L,u.push(A),A===o&&(m=!0))})}if(!m)return 0;let h=[];for(let M=o;M>=0&&(h.push(M),M!==n);M=s[M]);h.forEach(M=>ba.add(M));let y=new Set;for(let M=0;M+1<h.length;M++){let L=h[M],T=h[M+1];y.add(L<T?L+":"+T:T+":"+L)}for(let M=0;M<yn;M++){let L=Ae[M],T=L[0],A=L[1];y.has(T<A?T+":"+A:A+":"+T)&&is.add(M)}return h.length-1}let wl=new Set,Qp=new Set;function Gn(n,o){let s=Ke;if(Ke=n,wl.clear(),n>=0&&(Qp.add(n),n!==s&&!o&&(h_(n),Ee.on||_l(n,1))),de.follow=pt?-1:n,ir>=0&&n>=0&&n!==ir){let c=Sb(ir,n);ir=-1,P(c?k("route.hops",{n:c}):k("route.none"))}n>=0&&fn[n]&&fn[n].forEach(c=>wl.add(c)),os(),pt&&n>=0&&Lu(n)}function $p(){let n=(jt.meta.years||[]).filter(Boolean);f("s-nodes").textContent=jt.meta.files||0,f("s-edges").textContent=jt.meta.edges||0,f("s-sys").textContent=Ne.length;{let s=jt.meta.broken|0;f("s-broken").textContent=s;let c=f("r-broken");c.classList.toggle("live",s>0),c.classList.toggle("on",zr),c.title=s>0?k("broken.on"):k("broken.none")}f("s-span").textContent=n.length?n[0]+"\u2013"+n[n.length-1]:"\u2014",f("l-cnt").textContent=Ne.length,f("vault-name").textContent=jt.meta.vault||"EMPTY SPACE",f("hint").classList.toggle("on",G===0&&!qe),f("b-clear").style.display=G&&!qe?"":"none";let o=f("legbody");if(o.innerHTML="",!Ne.length){o.innerHTML='<div style="opacity:.3;font-size:11px;letter-spacing:.14em;padding:8px 0;text-align:center">NO VAULT LOADED</div>';return}Ne.forEach(s=>{let c=document.createElement("div");c.className="lrow",c.innerHTML='<span class="dot" style="color:#'+s.color.getHexString()+'"></span><em>'+Me(Jh(s))+"</em><i>"+(s.temp?gu(s.temp)+" \xB7 ":"")+s.n+"</i>",s.temp&&(c.title=k("cls.star",{s:gu(s.temp),t:Math.round(s.temp/100)*100})),c.onclick=()=>{s.on=!s.on,c.classList.toggle("off",!s.on)},o.appendChild(c),s.el=c})}let iu=14;function em(n){let o=[],s=[],c=[];Ae.forEach(([M,L,T])=>{M===n?o.push([L,T]):L===n&&(T===1?c:s).push([M,T])});let u=(M,L)=>{if(!L.length)return"";let T=new Set,A=L.filter(([X])=>!T.has(X)&&T.add(X)),D=([X,O])=>'<a data-i="'+X+'">'+(O===2?"\u2248 ":O===1?"\u2934 ":"\u2192 ")+Me(J[X].n)+"</a>",B=A.slice(iu);return"<b>"+M+" ("+A.length+")</b>"+A.slice(0,iu).map(D).join("")+(B.length?'<span class="rest">'+B.map(D).join("")+'</span><u class="more">'+k("insp.more",{n:B.length})+"</u>":"")},m=J[n],h="",y=m.bk|0;if(y>0){let M=m.bn||[],L=M.slice(0,iu);h='<b class="warn">'+k("insp.broken")+" ("+y+")</b>"+L.map(T=>'<i class="dead">\u2715 '+Me(T)+"</i>").join("")+(M.length>L.length||y>M.length?'<u class="more">'+k("insp.more",{n:y-L.length})+"</u>":"")}return u("OUTBOUND",o)+u("BACKLINKS",s)+u("SOURCE MATERIAL",c)+h}function tm(n,o){n.querySelectorAll("a").forEach(s=>{s.onclick=()=>o(+s.dataset.i)}),n.querySelectorAll("u.more").forEach(s=>{s.onclick=()=>{let c=s.previousElementSibling;c&&c.classList.contains("rest")&&c.classList.add("on"),s.remove()}})}function os(){if(f("insp").style.display=Ju()?"":"none",Ke<0||Ke>=G){f("i-empty").style.display="",f("i-real").style.display="none",f("i-kind").textContent="\u2014";return}let n=J[Ke];f("i-empty").style.display="none",f("i-real").style.display="",f("i-kind").textContent=(n.k==="raw"?"RAW":"WIKI")+(n.d?" \xB7 "+n.d:""),f("i-name").textContent=n.n,f("i-path").textContent=n.p+"   \xB7   "+n.w+" words   \xB7   \u2190"+n.inb+(n.mt?"   \xB7   "+k("insp.touched",{t:g1(n.mt)}):"");{let y=Xb(Ke);y&&(f("i-path").textContent+="   \xB7   "+y)}let o=Tp(Ke);f("c-pl").textContent=o.links,f("c-mo").textContent=o.moons,f("c-mo2").textContent=o.far,nm(),f("i-props").innerHTML=(n.pr||[]).slice(0,12).map(y=>"<b>"+Me(y[0])+"</b><s>"+Me(y[1])+"</s>").join(""),f("i-tags").innerHTML=(n.t||[]).slice(0,10).map(y=>'<span class="tag">'+Me(y)+"</span>").join(""),f("i-x").textContent=n.x||k("insp.nobody");let s=f("i-links");s.innerHTML=em(Ke),tm(s,y=>Gn(y));let c=f("i-go"),u=n.n.length>12?n.n.slice(0,12)+"\u2026":n.n;c.textContent=Oe(u),f("i-route").textContent=k(rs()?"insp.route.c":ir>=0?"insp.route.p":"insp.route"),f("i-route").classList.toggle("am",rs()||ir>=0);let m=f("i-core"),h=Ke===He;m.textContent=k(h&&H.coreNote?"insp.core.on":"insp.core"),m.style.display=h&&!H.coreNote?"none":"",f("i-route").style.gridColumn=m.style.display==="none"?"1 / -1":""}function nm(){let n=f("o-a"),o=f("o-e"),s=f("o-p"),c=f("o-i");if(!n)return;if(Ke<0||Ke>=G||!et[Ke]||et[Ke].kind==="core"){n.textContent=o.textContent=s.textContent=c.textContent="\u2014",f("i-orb").classList.add("none");return}f("i-orb").classList.remove("none");let u=et[Ke],m=u.aNow||u.r0||0;n.textContent=m>=1e3?(m/1e3).toFixed(2)+"k":m.toFixed(0),o.textContent=(u.ecc||0).toFixed(3);let y=(nl&&Vc?nl[Ke]:m)/(m>1e-4?m:1e-4),M=y<.06?.06:y>6?6:y,L=(u.sp||0)*M*Math.sqrt(M)*H.spd;if(L<=1e-12)s.textContent="\u221E";else{let A=C/L/1e3;s.textContent=A<100?A.toFixed(1)+"s":A<6e3?(A/60).toFixed(1)+"m":(A/3600).toFixed(1)+"h"}Md(u);let T=Tn[2]*Ln[0]-Tn[0]*Ln[2];c.textContent=(Math.acos(R(Math.abs(T),0,1))*180/Math.PI).toFixed(1)+"\xB0"}f("i-go").onclick=()=>{Ke<0||cd(Ke,!0)},f("i-core").onclick=()=>{if(!Cd)return;let n=Ke>=0&&Ke!==He?J[Ke].p:"",o=Ke>=0?J[Ke].n:"";H.coreNote=n,an();let s=p0();try{Dd(Cd,s)}catch(c){console.error(c),P(k("load.render"))}P(n?k("core.set",{n:o}):k("core.auto"))},f("i-open").onclick=n=>mt(Ke,n),f("i-name").addEventListener("mouseover",n=>{if(!(!st.hover||Ke<0))try{st.hover(St(Ke),n,f("i-name"))}catch(o){console.error("vault-orrery: host preview",o)}});let ud=!1,bl=0,_a=[],im=0,fd=()=>{im=performance.now()};g("pointermove",fd,{passive:!0}),g("pointerdown",fd,{passive:!0}),g("keydown",fd,{passive:!0}),g("wheel",fd,{passive:!0});let Eb=[{label:"MIND MAP",key:"M",run:()=>Cu()},{label:"GENESIS",key:"G",run:()=>Ma()},{label:"RIPPLE",key:"SPACE",run:()=>Ml()},{label:"POSTER",key:"P",run:()=>xd()},{label:"LINK LAYER",key:"L",run:()=>ou()},{label:"REFERENCE PLANE",key:"X",run:()=>au()},{label:"RESET VIEW",key:"R",run:()=>tu()},{label:"SOUND",key:"U",run:()=>Po(!ye.on)},{label:"GUIDE",key:"?",run:()=>Nd()},{label:"OPEN NOTE",key:"O",run:n=>mt(Ke,n),live:()=>ee()&&Ke>=0}];function pd(){ud=!0,f("srch").style.display="block",f("sin").value="",f("sin").focus(),rm("")}function ru(){ud=!1,f("srch").style.display="none"}function Ab(n){let o=Yn[n];if(!o)return;H.adv=!0,f("ctl").classList.add("adv"),f("advtog").textContent="\u25BE ADVANCED",ri&&(ri.value=o.label),Hi=o.label.toLowerCase(),Aa(),ar(),an(),mn();let s=Ea.get(n);if(s){try{s.wrap.scrollIntoView({block:"nearest"})}catch(c){}s.wrap.classList.remove("found"),requestAnimationFrame(()=>s.wrap.classList.add("found")),setTimeout(()=>s.wrap.classList.remove("found"),1600)}}function rm(n){Co=n.trim().toLowerCase();let s=Co;if(_a=[],s){let c=[];for(let u=0;u<G;u++){let m=J[u];(zc[u]||(m.n+" "+m.p).toLowerCase()).includes(s)&&c.push(u)}c.sort((u,m)=>J[m].inb-J[u].inb),c.forEach(u=>_a.push({kind:"note",i:u})),At.forEach(u=>{(u.label.toLowerCase().includes(s)||u.k.toLowerCase()===s)&&_a.push({kind:"knob",kn:u})}),Eb.forEach(u=>{u.live&&!u.live()||u.label.toLowerCase().includes(s)&&_a.push({kind:"act",a:u})})}bl=0,f("sres").innerHTML=_a.slice(0,40).map((c,u)=>{let m=u===0?' class="sel"':"";if(c.kind==="note"){let h=J[c.i];return'<div data-k="'+u+'"'+m+">"+Me(h.n)+"<i>"+(h.k==="raw"?"RAW":"WIKI")+(h.d?" "+h.d:"")+"</i></div>"}return c.kind==="knob"?'<div data-k="'+u+'"'+m+">"+Me(c.kn.label)+"<i>"+k("find.knob")+" \xB7 "+c.kn.g.toUpperCase()+"</i></div>":'<div data-k="'+u+'"'+m+">"+Me(c.a.label)+"<i>"+k("find.act")+" \xB7 "+c.a.key+"</i></div>"}).join(""),f("sres").querySelectorAll("div").forEach(c=>{c.onclick=u=>om(+c.dataset.k,u)})}function om(n,o){let s=_a[n];if(s){if(ru(),s.kind==="note"){ee()&&(o.ctrlKey||o.metaKey)?(Gn(s.i),mt(s.i,o)):cd(s.i,!0);return}Co="",s.kind==="knob"?Ab(s.kn.k):s.a.run(o)}}f("sin").addEventListener("input",n=>rm(n.target.value)),f("sin").addEventListener("keydown",n=>{if(n.key==="Escape")Co="",ru();else if(n.key==="Enter")n.preventDefault(),om(bl,n);else if(n.key==="ArrowDown"||n.key==="ArrowUp"){n.preventDefault(),bl=R(bl+(n.key==="ArrowDown"?1:-1),0,Math.min(39,_a.length-1)),f("sres").querySelectorAll("div").forEach((s,c)=>s.classList.toggle("sel",c===bl));let o=f("sres").querySelector("div.sel");if(o)try{o.scrollIntoView({block:"nearest"})}catch(s){}}});function ou(){pl=(pl+1)%fl.length,f("g-layer").textContent=fl[pl].name,P("LINK LAYER \xB7 "+fl[pl].name)}let Tb=n=>{let o=new Date(n);return o.getUTCFullYear()+"-"+String(o.getUTCMonth()+1).padStart(2,"0")+"-"+String(o.getUTCDate()).padStart(2,"0")};function Lb(n){let o=0;for(let s=0;s<Ro.length;s++)n>=Ro[s].u0&&(o=s);return o}function md(n){Ee.on=!!n&&G>0,Ee.on||(Ee.play=!1,Ee.u=1),f("gen").classList.toggle("on",Ee.on),f("b-gen").classList.toggle("am",Ee.on),f("dk-gen").classList.toggle("lit",Ee.on),Ee.on&&(Ee.u=0,Ee.play=!0,Ee.stage=-1,ye.on&&Mt&&pm(Mt.position.x,Mt.position.y,Mt.position.z),Rb(),Gn(-1),dd()),Gr(!0),mn()}function au(){H.grid=!H.grid,an(),Pr&&(Pr.visible=H.grid),P(k(H.grid?"grid.on":"grid.off"))}function Ma(){if(!G){P(k("need.vault"));return}if(Ee.on&&Ee.u>=1){Ee.u=0,Ee.play=!0,Gr(!0);return}md(!Ee.on),Ee.on&&P(k("gen.play"))}function Rb(){let n=f("genmarks");Ee.marksFor!==Ro&&(n.innerHTML="",Ro.forEach((o,s)=>{if(s===0||s===Ro.length-1)return;let c=document.createElement("i");c.textContent=o.code,c.style.left=R(o.u0*100,2,96).toFixed(2)+"%",c.dataset.k=s,n.appendChild(c)}),Ee.marksFor=Ro,am())}function am(){let n=f("genmarks");if(!n||!n.offsetWidth)return;let o=[...n.querySelectorAll("i")].reverse(),s=1/0;o.forEach(c=>{c.style.visibility="";let u=c.offsetLeft-c.offsetWidth/2;if(u+c.offsetWidth+8>s){c.style.visibility="hidden";return}s=u})}function Gr(n){if(!Ee.on)return;f("gen-r").value=Math.round(Ee.u*1e3),f("gen-play").textContent=Ee.play?"\u275A\u275A":"\u25B6",f("gen-spd").textContent=(Ee.rate<1?"\xBD":Ee.rate)+"\xD7";let o=0,s=0,c=0;for(let m=0;m<G;m++)if(Fn[m]<=Ee.u){o++;let h=Ai[m];h&&h>s&&(s=h)}Ne.forEach(m=>{m.genT<=Ee.u&&c++}),f("gen-cnt").textContent=o+" / "+G,f("gen-date").textContent=o===0?"\u2014":(s?Tb(s):k("gen.undated"))+"  \xB7  "+k("gen.sys",{n:c});let u=Lb(Ee.u);if(u!==Ee.stage||n){let m=u!==Ee.stage&&Ee.stage>=0;if(Ee.stage=u,f("gen-ph").textContent=Ro[u].code,f("gen-desc").textContent=k(Ro[u].k),f("genmarks").querySelectorAll("i").forEach(h=>h.classList.toggle("now",+h.dataset.k===u)),m){let h=f("genstage");h.classList.remove("step"),requestAnimationFrame(()=>h.classList.add("step"))}}}function Cb(n){if(!Ee.on||!Ee.play)return;let o=Ee.u;if(Ee.u+=n*Ee.rate/Ee.playSec,Ee.u>=1){Ee.u=1,Ee.play=!1,Gr(!0),P(k("gen.done"));return}Ne.forEach(s=>{if(s.genT>o&&s.genT<=Ee.u){let c=-1,u=1e9;for(let m=0;m<G;m++)Nt[m]===s&&Fn[m]<u&&(u=Fn[m],c=m);c>=0&&_l(c,.55)}}),qr%4===0&&Gr(!1)}f("gen-r").addEventListener("input",n=>{Ee.play=!1,Ee.u=R(+n.target.value/1e3,0,1),Gr(!0)}),f("gen-play").onclick=()=>{!Ee.play&&Ee.u>=.999&&(Ee.u=0),Ee.play=!Ee.play,Gr(!0)},f("gen-rst").onclick=()=>{Ee.u=0,Ee.play=!0,Gr(!0)},f("gen-spd").onclick=()=>{let n=[.5,1,2,4];Ee.rate=n[(n.indexOf(Ee.rate)+1)%n.length],Gr(!0)},f("b-gen").onclick=Ma;let su=!1,lu=!1,sm=-1;function Db(){let n=Ee.on?R((Ee.u-.06)/.26,0,1):1;if(n===sm)return;sm=n;let o=s=>{let c=s&&s.material;c&&(c.userData.op0===void 0&&(c.userData.op0=c.opacity),c.opacity=c.userData.op0*n)};oa&&oa.children.forEach(o),o(bo),o(ji)}function Pb(){if(!Ee.on){su&&ei&&(ei.fill(1),Va.fill(0),su=!1);return}su=!0;let n=Ee.u,o=Ee.grow,s=Ee.flash;for(let c=0;c<G;c++){let u=Fn[c];if(n<u){ei[c]=0,Va[c]=0;continue}let m=(n-u)/o;if(m>=1){ei[c]=1;let h=(n-u-o)/s;Va[c]=h<1?1:0}else{ei[c]===0&&Ee.play&&Mu(c,.6);let h=1-Math.pow(1-m,3);ei[c]=.06+.94*h+Math.sin(m*Math.PI)*.26*(1-m*.3),Va[c]=1}}}let Fb=3,rr=[],cu=!1;function _l(n,o){if(n<0||n>=G||!fn)return;let s=new Int16Array(G).fill(-1);s[n]=0;let c=[n],u=0;for(let h=0;h<c.length;h++){let y=c[h],M=fn[y];if(!M)continue;let L=s[y]+1;L>9||M.forEach(T=>{s[T]<0&&(s[T]=L,c.push(T),L>u&&(u=L))})}let m=3.1;rr.length>=Fb&&rr.shift(),rr.push({dist:s,src:n,reach:u,age:0,speed:m,life:u/m+.62,gain:o===void 0?1:o})}function lm(){rr.length=0,Zn&&Zn.fill(0)}function Nb(n){if(!(!G||!Zn)){if(!rr.length){(Zn[0]||cu)&&(Zn.fill(0),cu=!1);return}Zn.fill(0),cu=!0;for(let o=rr.length-1;o>=0;o--){let s=rr[o];if(s.age+=n,s.age>s.life){rr.splice(o,1);continue}let c=s.age*s.speed,u=1-s.age/s.life,m=s.gain*(.32+.68*u),h=s.dist,y=ye.on&&H.sRip>=.02;y&&!s.hit&&(s.hit=new Uint8Array(G));for(let M=0;M<G;M++){let L=h[M];if(L<0)continue;let T=(L-c)/.62;if(T>2.4||T<-2.4)continue;let A=Math.exp(-T*T)*m/(1+L*.3);A>Zn[M]&&(Zn[M]=A),y&&T<=0&&!s.hit[M]&&L>0&&(s.hit[M]=1,Sn[M]>.12&&Mu(M,m/(1+L*.45)))}}}}function Ml(){if(Ke<0){P(k("need.node"));return}_l(Ke,1),P(k("ripple",{n:J[Ke].n}))}f("i-ripple").onclick=Ml,f("i-route").onclick=()=>{if(rs()||ir>=0){Jp();return}Ke<0||(ir=Ke,P(k("route.pick")),os())};let du=9+Math.random()*8;function Ib(n){if(!G||Ee.on||(du-=n,du>0))return;du=16+Math.random()*16;let o=-1,s=-1;for(let c=0;c<7;c++){let u=Math.floor(Math.random()*G),m=(fn[u]?fn[u].size:0)*(Sn[u]>.4?1:.1);m>s&&(s=m,o=u)}o>=0&&s>0&&_l(o,.42)}let as=52,hu=42,uu=as+1,kb=uu*2,Lt=new Float32Array(uu*3),Bt=null,or=null,Vr=null,fu=null,pu=null,mu=14,Do=[],Sl=0,gd=new S.Vector3;function Ob(){if(!or){or=ga(3,(n,o,s,c,u)=>{s[n]=[26,60,130][n],u[n]=[1,.34,.11][n],c[n*3]=.8,c[n*3+1]=.95,c[n*3+2]=1},$i(700,.25,1,!1)),or.visible=!1,or.renderOrder=3;{let n=Xh(2,uu);fu=n.pos,pu=n.col,Vr=new S.Mesh(n.geo,qh(1)),Vr.frustumCulled=!1,Vr.visible=!1,wt.add(Vr)}}}function cm(n){Ob();let o=Math.max(900,(Ei||1200)*1.55),s=n>=0&&n<G?n:-1,c,u;if(s>=0){let m=he[s*3],h=he[s*3+1],y=he[s*3+2],M=Math.atan2(y,m)+(Math.random()-.5)*1.4,L=R(jp()*.85,400,o);c=new S.Vector3(Math.cos(M)*L,h*.4+(Math.random()-.5)*L*.3,Math.sin(M)*L),u=new S.Vector3(m,h,y).sub(c).multiplyScalar(1/6)}else{let m=Math.random()*C,h=(Math.random()-.5)*.8;c=new S.Vector3(Math.cos(m)*o,Math.sin(h)*o*.55,Math.sin(m)*o),u=new S.Vector3(Math.random()-.5,(Math.random()-.5)*.5,Math.random()-.5).multiplyScalar(o*(.1+Math.random()*.2)).clone().sub(c).normalize().multiplyScalar(o*.052)}Bt={pos:c,vel:u,life:0,R:o,target:s,dusty:.35+Math.random()*.9,trail:[]},or.visible=!0,Vr.visible=!0}function ss(){Bt=null,or&&(or.visible=!1),Vr&&(Vr.visible=!1),mu=45+Math.random()*70}function Bb(n){if(!G)return;if(!Bt){if(Sl>0)Sl-=n;else if(Do.length){let ne=Dt(Do.shift());if(ne>=0){cm(ne);return}}mu-=n*Math.max(.15,H.spd),mu<=0&&cm(-1);return}let o=Bt.target;if(o>=G){ss();return}let s=o>=0?Math.min(.05,n):Math.min(.05,n)*Math.max(0,H.spd);if(Bt.life+=n,s>0){let ne=Bt.pos,N=Math.max(Bt.R*.05,ne.length()),q=Bt.R*Bt.R*.3;if(Bt.vel.addScaledVector(ne,-q/(N*N*N)*s*(o>=0?.08:1)),o>=0){gd.set(he[o*3],he[o*3+1],he[o*3+2]);let ae=gd.distanceTo(ne),Z=Bt.vel.length();if(ae<Math.max((We[o]||2)*3.5,10)+Z*s*1.5){Gb(o);return}gd.sub(ne).normalize().multiplyScalar(Z),Bt.vel.lerp(gd,1-Math.pow(.3,s))}ne.addScaledVector(Bt.vel,s),Bt.trail.unshift(ne.clone()),Bt.trail.length>as+1&&(Bt.trail.length=as+1)}if(o<0&&Bt.life>6&&Bt.pos.length()>Bt.R*2.1){ss();return}if(Bt.life>(o>=0?30:150)){ss();return}let c=or.geometry.attributes.position.array;for(let ne=0;ne<3;ne++)c[ne*3]=Bt.pos.x,c[ne*3+1]=Bt.pos.y,c[ne*3+2]=Bt.pos.z;or.geometry.attributes.position.needsUpdate=!0;let u=R(Bt.R*.55/Math.max(1,Bt.pos.length()),.25,2.2),m=or.geometry.attributes.aAlpha.array;m[0]=1*u,m[1]=.34*u,m[2]=.11*u,or.geometry.attributes.aAlpha.needsUpdate=!0;let h=Bt.trail,y=h.length,M=Bt.dusty,L=Ie.position,T=L.x,A=L.y,D=L.z,B=l()*.5/Math.tan(Ie.fov*Math.PI/360),O=Math.max(1,L.distanceTo(Bt.pos))/B,V=k1();{let ne=Bt.R*.34*u,N=as+1,q=0;for(let be=0;be<N;be++){let Te=be*3;if(be<y){let De=h[be],_e=De.length()||1,Ce=be/as,Xe=ne*Ce*Ce;Lt[Te]=De.x+De.x/_e*Xe,Lt[Te+1]=De.y+De.y/_e*Xe,Lt[Te+2]=De.z+De.z/_e*Xe,q=be}else Lt[Te]=Lt[q*3],Lt[Te+1]=Lt[q*3+1],Lt[Te+2]=Lt[q*3+2]}let ae=1,Z=.87,xe=.66,se=0;for(let be=0;be<N;be++){let Te=be*3,De=be/as,_e=(be>0?be-1:0)*3,Ce=(be<N-1?be+1:N-1)*3,Xe=be<y?(1-De)*(1-De*.72)*u*1.15*M:0;rd(fu,pu,se,Lt[Te],Lt[Te+1],Lt[Te+2],Lt[Ce]-Lt[_e],Lt[Ce+1]-Lt[_e+1],Lt[Ce+2]-Lt[_e+2],Lt[Te]-T,Lt[Te+1]-A,Lt[Te+2]-D,Xe>0?(1.6+13*De)*V*.5*O:0,ae*Xe,Z*Xe,xe*Xe),se+=2}}{let ne=Bt.pos,N=ne.length()||1,q=ne.x/N,ae=ne.y/N,Z=ne.z/N,xe=Math.abs(q)<.9?1:0,se=Math.abs(q)<.9?0:1,be=se*Z,Te=-xe*Z,De=xe*ae-se*q,_e=Math.hypot(be,Te,De)||1;be/=_e,Te/=_e,De/=_e;let Ce=ae*De-Z*Te,Xe=Z*be-q*De,Qe=q*Te-ae*be,me=Bt.R*.62*u,ve=u*1.25*(1.35-M*.55),ke=Bt.life,Pe=(lt,Kt)=>{let Vt=Math.sin(lt*7.4+ke*1.9)*.055*lt+Math.sin(lt*3.1-ke*1.1)*.03*lt,Ht=Math.sin(lt*5.3-ke*1.5)*.048*lt,Hn=me*lt;Kt[0]=ne.x+q*Hn+(be*Vt+Ce*Ht)*me,Kt[1]=ne.y+ae*Hn+(Te*Vt+Xe*Ht)*me,Kt[2]=ne.z+Z*Hn+(De*Vt+Qe*Ht)*me},Ue=Ub,ot=lt=>.72+.55*Math.abs(Math.sin(lt*9.1+ke*2.3)),Je=hu+1;for(let lt=0;lt<Je;lt++)Pe(lt/hu,Ue),Lt[lt*3]=Ue[0],Lt[lt*3+1]=Ue[1],Lt[lt*3+2]=Ue[2];let Rt=kb;for(let lt=0;lt<Je;lt++){let Kt=lt*3,Vt=lt/hu,Ht=(lt>0?lt-1:0)*3,Hn=(lt<Je-1?lt+1:Je-1)*3,Bo=(1-Vt)*(1-Vt*.55)*ve*ot(Vt);rd(fu,pu,Rt,Lt[Kt],Lt[Kt+1],Lt[Kt+2],Lt[Hn]-Lt[Ht],Lt[Hn+1]-Lt[Ht+1],Lt[Hn+2]-Lt[Ht+2],Lt[Kt]-T,Lt[Kt+1]-A,Lt[Kt+2]-D,(1.1+2.4*Vt)*V*.5*O,.42*Bo,.72*Bo,1*Bo),Rt+=2}}Vr.geometry.attributes.position.needsUpdate=!0,Vr.geometry.attributes.aColor.needsUpdate=!0}let Ub=[0,0,0];function dm(){let n=new Map;if(!G||!he)return n;for(let o=0;o<G;o++){let s=J[o];n.set(s.fp||s.p,{x:he[o*3],y:he[o*3+1],z:he[o*3+2],r:We[o]||2,cr:Ze[o*3],cg:Ze[o*3+1],cb:Ze[o*3+2],mt:+s.mt||0,ct:+s.ct||0,n:s.n})}return n}let El=6;function hm(n){if(E.on||!n||!G)return;let o=new Set,s=new Map;for(let u=0;u<G;u++){let m=J[u],h=m.fp||m.p;o.add(h);let y=n.get(h),M=+m.mt||0;y?M&&y.mt&&M>y.mt+500&&Do.push(h):(m.ct&&s.set(+m.ct,h),M&&Do.push(h))}let c=0;return n.forEach((u,m)=>{o.has(m)||u.ct&&s.has(u.ct)||c++<El&&fm(u,"nova")}),Do.length>6&&(Do.length=6),c}function zb(){if(E.on||!G||!el||!Cr)return;let n=-1,o=0;for(let s=0;s<G;s++)Cr[s]>o&&(o=Cr[s],n=s);n<0||Date.now()-o>14*864e5||(Do.push(St(n)),Sl=2.5)}function Gb(n){let o=J[n];fm({x:he[n*3],y:he[n*3+1],z:he[n*3+2],r:We[n]||2,cr:.8,cg:.95,cb:1,n:o?o.n:""},"strike"),Ee.on||_l(n,.9),Mu(n,1.3),o&&P(k("ev.comet",{n:o.n})),ss(),Sl=1.4}let Al=[],Ui=null,um=[];function Vb(){if(Ui)return;Ui=ga(El,(o,s,c,u,m)=>{c[o]=0,m[o]=0,u[o*3]=u[o*3+1]=u[o*3+2]=1},$i(900,0,1,!1)),Ui.renderOrder=4;let n=new S.RingGeometry(.8,1,72,1);for(let o=0;o<El;o++){let s=new S.Mesh(n,new S.MeshBasicMaterial({color:16777215,transparent:!0,opacity:0,fog:!1,blending:S.AdditiveBlending,depthWrite:!1,side:S.DoubleSide}));s.visible=!1,s.frustumCulled=!1,s.renderOrder=4,wt.add(s),um.push(s)}}function fm(n,o){Vb(),Al.length>=El&&Al.shift();let s=o==="nova";Al.push({x:n.x,y:n.y,z:n.z,r:Math.max(1.5,n.r),t:0,life:s?4.6:1.5,size:s?R(n.r*34,110,460):R(n.r*16,50,200),reach:s?34:9,cr:n.cr,cg:n.cg,cb:n.cb}),s&&(n.n&&P(k("ev.nova",{n:n.n})),pm(n.x,n.y,n.z))}let vd=new S.Vector3;function Hb(n){if(!Ui)return;let o=Ui.geometry.attributes.position.array,s=Ui.geometry.attributes.aSize.array,c=Ui.geometry.attributes.aColor.array,u=Ui.geometry.attributes.aAlpha.array;for(let m=0;m<El;m++){let h=Al[m],y=um[m];if(!h){u[m]=0,s[m]=0,y.visible=!1;continue}if(h.t+=n,h.t>=h.life){Al.splice(m,1),m--;continue}let M=h.t/h.life,L=Math.min(1,h.t/.16),T=L*Math.exp(-Math.max(0,h.t-.16)*(5.1/h.life)),A=1-L*.55;o[m*3]=h.x,o[m*3+1]=h.y,o[m*3+2]=h.z,s[m]=h.size*(.55+.45*L),u[m]=T*1.4,c[m*3]=I(h.cr,1,A),c[m*3+1]=I(h.cg,1,A),c[m*3+2]=I(h.cb,1,A);let D=1-Math.pow(1-M,2.2),B=h.r*(2+h.reach*D);y.visible=!0,y.position.set(h.x,h.y,h.z),y.scale.set(B,B,B),y.lookAt(Ie.position),y.material.opacity=Math.pow(1-M,1.7)*.85,y.material.color.setRGB(I(h.cr,1,.45),I(h.cg,1,.45),I(h.cb,1,.45))}Ui.geometry.attributes.position.needsUpdate=!0,Ui.geometry.attributes.aSize.needsUpdate=!0,Ui.geometry.attributes.aColor.needsUpdate=!0,Ui.geometry.attributes.aAlpha.needsUpdate=!0}function pm(n,o,s){if(!ye.on||!ye.ctx||H.sRip<.02)return;let c=ye.ctx,u=c.currentTime,m=R(.32*H.sRip,.001,.5),h=c.createGain();h.gain.setValueAtTime(1e-4,u),h.gain.exponentialRampToValueAtTime(m,u+.04),h.gain.exponentialRampToValueAtTime(3e-4,u+2.4);let y=h;try{if(c.createStereoPanner){let O=c.createStereoPanner();vd.set(n,o,s).project(Ie),O.pan.value=vd.z<1&&Number.isFinite(vd.x)?R(vd.x,-1,1)*.72:0,h.connect(O),y=O}}catch(O){y=h}y.connect(ye.bus||ye.master),ye.echo&&y.connect(ye.echo);let M=c.createOscillator();M.type="sine",M.frequency.setValueAtTime(96,u),M.frequency.exponentialRampToValueAtTime(34,u+1.8),M.connect(h),M.start(u),M.stop(u+2.5);let L=c.createBufferSource(),T=Math.floor(c.sampleRate*1.6),A=c.createBuffer(1,T,c.sampleRate),D=A.getChannelData(0);for(let O=0;O<T;O++)D[O]=(Math.random()*2-1)*(1-O/T);L.buffer=A;let B=c.createBiquadFilter();B.type="lowpass",B.frequency.setValueAtTime(900,u),B.frequency.exponentialRampToValueAtTime(70,u+1.6);let X=c.createGain();X.gain.value=.55,L.connect(B),B.connect(X),X.connect(h),L.start(u),L.stop(u+1.7)}function Wb(n){Hb(n)}function qb(n){let o=J[n],s=et&&et[n]?et[n].kind:"wiki";return s==="core"?null:s==="moon"||s==="spiral"||s==="shell"?"cls.rock":Math.log(1+(o.inb|0))*1.55+Math.log(1+(o.w||0)/120)*.7>=3.6?"cls.giant":"cls.terr"}function gu(n){return n>=6e3?"F":n>=5200?"G":n>=3700?"K":"M"}function Xb(n){let o=[],s=qb(n);s&&o.push(k(s)),ui&&ui.indexOf(n)>=0&&o.push(k("cls.ringed"));let c=Nt&&Nt[n];return c&&c.temp&&o.push(k("cls.star",{s:gu(c.temp),t:Math.round(c.temp/100)*100})),o.join("   \xB7   ")}function xd(){if(!G){P(k("need.vault"));return}let n=f("hud"),o=n.style.display,s=Tt.getPixelRatio(),c=R(Math.round(3840/Math.max(1,a())),1,4);try{n.style.display="none",Tt.setPixelRatio(c),Tt.setSize(a(),l(),!1),Ie.aspect=a()/l(),Ie.updateProjectionMatrix();let u=l()/(2*Math.tan(Ie.fov*Math.PI/360))*c;yr.forEach(L=>{L.uniforms&&(L.uniforms.uScale.value=u)}),Lp(Math.max(1,a()*c),Math.max(1,l()*c)),Wh();let m=Tt.domElement,h=document.createElement("canvas");h.width=m.width,h.height=m.height;let y=h.getContext("2d");y.drawImage(m,0,0);let M=Math.max(11,Math.round(h.height*.014));y.font="500 "+M+"px ui-monospace,Consolas,monospace",y.textBaseline="alphabetic",y.fillStyle="rgba(150,225,255,.62)",y.fillText((jt.meta.vault||"VAULT").toUpperCase(),M*1.6,h.height-M*2.6),y.fillStyle="rgba(200,235,255,.30)",y.fillText(G+" NOTES \xB7 "+(jt.meta.edges|0)+" LINKS \xB7 "+Ne.length+" SYSTEMS",M*1.6,h.height-M*1.1),h.toBlob(L=>{if(!L){P(k("poster.fail"));return}let T=URL.createObjectURL(L),A=document.createElement("a");A.href=T,A.download=(jt.meta.vault||"vault").replace(/[^\w가-힣ぁ-んァ-ヶー一-龥.-]+/g,"_")+"-orrery-"+h.width+"x"+h.height+".png",A.click(),setTimeout(()=>URL.revokeObjectURL(T),3e4),P(k("poster.ok",{w:h.width,h:h.height}))},"image/png")}catch(u){console.error(u),P(k("poster.fail"))}finally{Tt.setPixelRatio(s),n.style.display=o,Yr()}}f("b-post").onclick=xd;let Vn=1080,gi=1920,Sa=300,Tl=440,mm=gi-Sa-Tl,vu=6,gm=15,vm=[["basic","age"],["basic","notes"],["basic","links"],["basic","systems"],["best","bigsys"],["best","cited"],["best","longest"],["act","year"],["act","words"],["act","month"],["act","streak"],["fun","ly"],["fun","rogue"],["fun","const"]],xu=vm.map(n=>n[1]),Yb=["age","notes","links","systems","cited","const"];function jb(n){let o=n.d?Date.parse(n.d):0,s=+n.ct||0,c=o>0&&s>0?Math.min(o,s):o>0?o:s;return Number.isFinite(c)&&c>0?c:0}function Kb(n){let o=2166136261;for(let u=0;u<n.length;u++)o^=n.charCodeAt(u),o=Math.imul(o,16777619);o>>>=0;let s=["Lyra","Cygnus","Draco","Aquila","Carina","Vela","Corona","Orion","Lacerta","Pyxis","Columba","Ursa"],c=["Memoriae","Scriptorum","Notarum","Ideae","Libri","Mentis","Verbi","Somnii","Studii","Lucis"];return s[o%s.length]+" "+c[(o>>>8)%c.length]}function Zb(){let n=Z=>Math.round(Z).toLocaleString("en-US"),o={},s=new Date().getFullYear(),c=new Map,u=new Set,m=new Uint32Array(G),h=1/0,y=0,M=0;for(let Z=0;Z<G;Z++){let xe=J[Z],se=jb(xe);if(y+=xe.w||0,!se)continue;se<h&&(h=se);let be=new Date(se);be.getFullYear()===s&&M++;let Te=be.getFullYear()+"."+String(be.getMonth()+1).padStart(2,"0");c.set(Te,(c.get(Te)||0)+1),u.add(Math.floor((se-be.getTimezoneOffset()*6e4)/864e5))}for(let Z=0;Z<Ae.length;Z++){let xe=Ae[Z][0],se=Ae[Z][1];xe<G&&m[xe]++,se<G&&m[se]++}let L=Z=>{let xe=-1,se=0;for(let be=0;be<G;be++){let Te=Z(J[be]);Te>se&&(se=Te,xe=be)}return xe};o.age=h<1/0?{v:k("cu.days",{n:n((Date.now()-h)/864e5)})}:null,o.notes={v:n(G)},o.links=jt.meta.edges|0?{v:n(jt.meta.edges|0)}:null,o.systems={v:n(Ne.length)};let T=null;Ne.forEach(Z=>{(!T||Z.n>T.n)&&(T=Z)}),o.bigsys=T?{v:Jh(T),name:!0,u:k("cu.notes",{n:n(T.n)})}:null;let A=L(Z=>Z.inb|0);o.cited=A>=0?{v:J[A].n,name:!0,u:k("cu.cites",{n:n(J[A].inb)})}:null;let D=L(Z=>Z.w|0);o.longest=D>=0?{v:J[D].n,name:!0,u:k("cu.words",{n:n(J[D].w)})}:null,o.year=h<1/0?{v:n(M)}:null,o.words=y?{v:n(y)}:null;let B="",X=0;c.forEach((Z,xe)=>{Z>X&&(X=Z,B=xe)}),o.month=B?{v:B,u:k("cu.notes",{n:n(X)})}:null;let O=[...u].sort((Z,xe)=>Z-xe),V=0,ne=0,N=NaN;O.forEach(Z=>{V=Z===N+1?V+1:1,N=Z,V>ne&&(ne=V)}),o.streak=ne?{v:k("cu.days",{n:n(ne)})}:null;let q=0;for(let Z=0;Z<Ae.length;Z++){let xe=Ae[Z][0],se=Ae[Z][1];xe>=G||se>=G||(q+=Math.hypot(he[xe*3]-he[se*3],he[xe*3+1]-he[se*3+1],he[xe*3+2]-he[se*3+2]))}o.ly=q?{v:k("cu.ly",{n:n(q/100)})}:null;let ae=0;for(let Z=0;Z<G;Z++)m[Z]||ae++;return o.rogue={v:n(ae)},o.const={v:Kb(String(jt.meta.vault||"")),name:!0},o}function Jb(){let n=a(),o=l(),s=20,c=16,u=Math.round(R(n*.3,210,268)),m=o-2*s,h=m*9/16,y=n-2*s-u-c;h>y&&(h=Math.max(90,y),m=h*16/9),h=Math.round(h),m=Math.round(m);let M=Math.round(Math.max(s,(n-h-c-u)/2)),L=Math.round((o-m)/2),T=h/Vn;j.frame={x:M,y:L,w:h,h:m},j.hole={x:M,y:Math.round(L+Sa*T),w:h,h:Math.max(1,Math.round(mm*T))};let A=f("card-frame");A.style.left=M+"px",A.style.top=L+"px",A.style.width=h+"px",A.style.height=m+"px";let D=f("card-pnl");D.style.left=M+h+c+"px",D.style.top=L+"px",D.style.width=u+"px",D.style.maxHeight=m+"px",En.style.left=j.hole.x+"px",En.style.top=j.hole.y+"px",En.style.width=j.hole.w+"px",En.style.height=j.hole.h+"px",En.style.right="auto",En.style.bottom="auto",Tt.setPixelRatio(Vn/j.hole.w),ym()}function Qb(){let n=getComputedStyle(f("hud"));return{mono:n.getPropertyValue("--mono").trim()||"monospace",kr:n.getPropertyValue("--kr").trim()||"sans-serif"}}function $b(){let n=new Date,o=s=>String(s).padStart(2,"0");return n.getFullYear()+"."+o(n.getMonth()+1)+"."+o(n.getDate())}function Ll(n,o,s,c,u,m,h,y,M){let L=m,T=()=>{n.font=y+" "+L+"px "+h,"letterSpacing"in n&&(n.letterSpacing=(M*L).toFixed(1)+"px")};for(T();n.measureText(o).width>u&&L>m*.62;)L-=2,T();let A=o;if(n.measureText(A).width>u){for(;A.length>1&&n.measureText(A+"\u2026").width>u;)A=A.slice(0,-1);A+="\u2026"}n.fillText(A,s,c),"letterSpacing"in n&&(n.letterSpacing="0px")}function xm(n){let o=Qb(),s="#02040a",c=110,u=n.createLinearGradient(0,0,0,Sa+c);u.addColorStop(0,s),u.addColorStop(Sa/(Sa+c),s),u.addColorStop(1,"rgba(2,4,10,0)"),n.fillStyle=u,n.fillRect(0,0,Vn,Sa+c),u=n.createLinearGradient(0,gi-Tl-c,0,gi),u.addColorStop(0,"rgba(2,4,10,0)"),u.addColorStop(c/(Tl+c),s),u.addColorStop(1,s),n.fillStyle=u,n.fillRect(0,gi-Tl-c,Vn,Tl+c),n.strokeStyle="rgba(92,225,255,.7)",n.lineWidth=2;let m=40,h=34;n.beginPath(),n.moveTo(m,m+h),n.lineTo(m,m),n.lineTo(m+h,m),n.moveTo(Vn-m,gi-m-h),n.lineTo(Vn-m,gi-m),n.lineTo(Vn-m-h,gi-m),n.stroke(),n.textAlign="center",n.textBaseline="alphabetic",n.fillStyle="#eaf9ff",n.shadowColor="rgba(92,225,255,.55)",n.shadowBlur=26,Ll(n,String(jt.meta.vault||"VAULT").toUpperCase(),Vn/2,162,920,74,o.kr,"600",.2),n.shadowBlur=0,n.fillStyle="rgba(92,225,255,.6)",Ll(n,"\u2014  "+$b()+"  \u2014",Vn/2,220,900,24,o.mono,"500",.3);let y=j.sel.filter(L=>j.vals&&j.vals[L]),M=y.length;if(M){let L=M<=3?[y]:M===4?[y.slice(0,2),y.slice(2)]:[y.slice(0,3),y.slice(3)],T=L.length===1?[1668]:[1584,1758];L.forEach((A,D)=>{let B=960/A.length;A.forEach((X,O)=>{let V=60+B*(O+.5),ne=j.vals[X];n.fillStyle=ne.name?"#eaf9ff":"#5ce1ff",Ll(n,ne.v,V,T[D],B-34,ne.name?44:66,ne.name?o.kr:o.mono,"600",ne.name?0:.02),n.fillStyle="rgba(223,246,255,.58)",Ll(n,k("cs."+X)+(ne.u?"  \xB7  "+ne.u:""),V,T[D]+48,B-16,27,o.kr,"500",.04)})})}n.fillStyle="rgba(223,246,255,.3)",Ll(n,k("card.mark"),Vn/2,gi-54,900,22,o.mono,"500",.22)}function ym(){if(!j.on||!j.frame)return;let n=f("card-bands"),o=j.frame,s=devicePixelRatio||1;n.width=Math.round(o.w*s),n.height=Math.round(o.h*s),n.style.width=o.w+"px",n.style.height=o.h+"px";let c=n.getContext("2d");c.setTransform(n.width/Vn,0,0,n.height/gi,0,0),c.clearRect(0,0,Vn,gi),xm(c),j.bands||(j.bands=document.createElement("canvas"),j.bands.width=Vn,j.bands.height=gi);let u=j.bands.getContext("2d");u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,Vn,gi),xm(u)}function yu(){j.out||(j.out=document.createElement("canvas"),j.out.width=Vn,j.out.height=gi);let n=j.out.getContext("2d");return n.fillStyle="#02040a",n.fillRect(0,0,Vn,gi),n.drawImage(En,0,Sa,Vn,mm),n.drawImage(j.bands,0,0),j.out}function wm(){let n=f("card-opts");n.replaceChildren(),["basic","best","act","fun"].forEach(o=>{let s=document.createElement("div");s.className="cgh",s.textContent=k("card.g."+o),n.appendChild(s),vm.filter(c=>c[0]===o).forEach(c=>{let u=c[1],m=j.vals[u],h=document.createElement("div");h.className="crow",h.classList.toggle("on",j.sel.indexOf(u)>=0),h.classList.toggle("na",!m);let y=document.createElement("span");y.textContent=k("cs."+u);let M=document.createElement("i");M.textContent=m?m.v:"\u2014",h.appendChild(y),h.appendChild(M),h.onclick=()=>e_(u),n.appendChild(h)})}),f("card-n").textContent=j.sel.length+" / "+vu}function e_(n){if(!j.vals[n]||j.rec||j.cd)return;let o=j.sel.indexOf(n);if(o>=0)j.sel.splice(o,1);else if(j.sel.length<vu)j.sel.push(n);else{P(k("card.full"));return}j.sel.sort((s,c)=>xu.indexOf(s)-xu.indexOf(c)),H.card=j.sel.slice(),an(),wm(),ym()}function wu(){if(E.on||j.on)return;if(!G){P(k("need.vault"));return}pt&&hs(),Qu(),Gn(-1),rn=-1,j.vals=Zb();let n=Array.isArray(H.card)?H.card.filter(o=>xu.indexOf(o)>=0):Yb;j.sel=n.filter(o=>j.vals[o]).slice(0,vu),j.on=!0,r.classList.add("card"),wm(),Yr(),dd()}function bm(){j.on&&(j.rec&&bu(),Sm(),j.on=!1,r.classList.remove("card"),["left","top","width","height","right","bottom"].forEach(n=>{En.style[n]=""}),Tt.setPixelRatio(vt.base*vt.now),Yr())}function t_(){return(jt.meta.vault||"vault").replace(/[^\w가-힣ぁ-んァ-ヶー一-龥.-]+/g,"_")+"-orrery-card"}function _m(n,o,s){if(!n||!n.size){P(k("card.fail"));return}let c=URL.createObjectURL(n),u=document.createElement("a");u.href=c,u.download=t_()+"."+o,u.click(),setTimeout(()=>URL.revokeObjectURL(c),3e4),P(k(s||"card.saved",{f:u.download}),5e3)}function n_(){j.on&&!j.rec&&!j.cd&&(j.shot=!0)}function i_(){if(typeof MediaRecorder=="undefined"||!MediaRecorder.isTypeSupported)return"";let n=["video/mp4;codecs=avc1.640028","video/mp4;codecs=avc1.42E01F","video/mp4","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"];for(let o=0;o<n.length;o++)if(MediaRecorder.isTypeSupported(n[o]))return n[o];return""}let Mm=0;function r_(){if(!j.on||j.rec||j.cd)return;let n=i_();if(!n||!(j.bands&&"captureStream"in j.bands)){P(k("card.norec"));return}let o=3;j.cd=1,f("card").classList.add("arm");let s=()=>{if(j.cd){if(o>0){f("card-cd").textContent=o,o--,Mm=setTimeout(s,800);return}f("card-cd").textContent="",j.cd=0,o_(n)}};s()}function Sm(){clearTimeout(Mm),j.cd=0,f("card-cd").textContent="",f("card").classList.remove("arm")}function o_(n){let o=yu(),s,c;try{s=o.captureStream(30),c=new MediaRecorder(s,{mimeType:n,videoBitsPerSecond:12e6})}catch(m){console.error("vault-orrery: card recorder",m),P(k("card.norec")),f("card").classList.remove("arm");return}let u=[];c.ondataavailable=m=>{m.data&&m.data.size&&u.push(m.data)},c.onstop=()=>{s.getTracks().forEach(h=>h.stop());let m=n.indexOf("mp4")>=0;_m(new Blob(u,{type:n.split(";")[0]}),m?"mp4":"webm",m?"card.saved":"card.webm")},j.rec={rec:c,live:!0,t0:performance.now()},f("card").classList.remove("arm"),f("card").classList.add("rec"),f("card-bar").style.width="0%",f("card-t").textContent=k("card.stop"),c.start(500)}function bu(){let n=j.rec;if(n){n.live=!1,j.rec=null,f("card").classList.remove("rec");try{n.rec.stop()}catch(o){console.error("vault-orrery: card recorder",o)}}}function a_(){if(j.shot&&(j.shot=!1,yu().toBlob(n=>_m(n,"png"),"image/png")),j.rec&&j.rec.live){yu();let n=(performance.now()-j.rec.t0)/1e3;f("card-bar").style.width=Math.min(100,n/gm*100)+"%",n>=gm&&bu()}}f("dk-card").onclick=wu,f("card-x").onclick=bm,f("card-png").onclick=n_,f("card-mp4").onclick=r_;let ye={on:!1,ctx:null,master:null,wind:null,move:null,holo:null,bus:null,echo:null,wetIn:null,dry:null,wet:null,wetLP:null,conv:null,dl:null,dlLP:null,fb:null,droneFilt:null,drone:[],irSecs:0},s_=[{f:41.2,w:"sine",lvl:.42,swing:.1,lf:.021},{f:55,w:"triangle",lvl:.3,swing:.12,lf:.031},{f:82.4,w:"sawtooth",lvl:.1,swing:.05,lf:.043,det:-6},{f:82.4,w:"sawtooth",lvl:.1,swing:.05,lf:.037,det:7},{f:164.8,w:"triangle",lvl:.09,swing:.05,lf:.027,det:4},{f:659.3,w:"sine",lvl:.03,swing:.028,lf:.019}];function Em(n,o){let s=Math.floor(n.sampleRate*o),c=n.createBuffer(1,s,n.sampleRate),u=c.getChannelData(0),m=0;for(let h=0;h<s;h++)m=m*.985+(Math.random()*2-1)*.12,u[h]=m;return c}function Am(n,o,s){let c=Math.max(1,Math.floor(n.sampleRate*o)),u=n.createBuffer(2,c,n.sampleRate),m=Math.floor(n.sampleRate*.028);for(let h=0;h<2;h++){let y=u.getChannelData(h),M=0;for(let L=0;L<c;L++){let T=L/c;M+=(Math.random()*2-1-M)*(.3-T*.24);let A=Math.pow(1-T,s);y[L]=M*A*(L<m?L/m*(L/m):1)}for(let L=0;L<7;L++){let T=Math.floor(n.sampleRate*(.03+Math.random()*.11));T<c&&(y[T]+=(Math.random()*2-1)*.3*(1-L/7))}}return u}function l_(){if(ye.ctx)return!0;let n=window.AudioContext||window.webkitAudioContext;if(!n)return!1;try{let o=new n,s=o.createGain();s.gain.value=0,s.connect(o.destination);let c=o.createGain(),u=o.createGain();u.gain.value=.52,c.connect(u),u.connect(s);let m=o.createDelay(.5);m.delayTime.value=.045;let h=o.createConvolver();h.buffer=Am(o,H.sRoom,2.7),ye.irSecs=H.sRoom;let y=o.createBiquadFilter();y.type="lowpass",y.frequency.value=Ge,y.Q.value=.4;let M=o.createGain();M.gain.value=Be,c.connect(m),m.connect(h),h.connect(y),y.connect(M),M.connect(s);let L=o.createGain(),T=o.createDelay(4);T.delayTime.value=H.sEchoT;let A=o.createBiquadFilter();A.type="lowpass",A.frequency.value=1150;let D=o.createGain();D.gain.value=H.sEcho,L.connect(T),T.connect(A),A.connect(D),D.connect(T),A.connect(c);let B=o.createBiquadFilter();B.type="lowpass",B.frequency.value=nt,B.Q.value=.7;let X=o.createBiquadFilter();X.type="highpass",X.frequency.value=34,X.Q.value=.5,B.connect(X),X.connect(c);let O=o.createOscillator();O.frequency.value=.023;let V=o.createGain();V.gain.value=90,O.connect(V),V.connect(B.frequency),O.start(),ye.drone.length=0,s_.forEach((ve,ke)=>{let Pe=ve.f,Ue=o.createOscillator();Ue.type=ve.w,Ue.frequency.value=Pe,ve.det&&(Ue.detune.value=ve.det);let ot=o.createGain();ot.gain.value=ve.lvl;let Je=o.createOscillator();Je.frequency.value=ve.lf;let Rt=o.createGain();Rt.gain.value=ve.swing,Je.connect(Rt),Rt.connect(ot.gain),Je.start(),Ue.connect(ot),ot.connect(B),Ue.start(),ye.drone.push({o:Ue,g:ot,lg:Rt,base:Pe,lvl:ve.lvl,swing:ve.swing})});let ne=Em(o,4),N=o.createBufferSource();N.buffer=ne,N.loop=!0;let q=o.createBiquadFilter();q.type="bandpass",q.frequency.value=420,q.Q.value=.9;let ae=o.createOscillator();ae.frequency.value=.017;let Z=o.createGain();Z.gain.value=260,ae.connect(Z),Z.connect(q.frequency),ae.start();let xe=o.createGain();xe.gain.value=0;let se=o.createOscillator();se.frequency.value=.045;let be=o.createGain();be.gain.value=0,se.connect(be),be.connect(xe.gain),se.start(),N.connect(q),q.connect(xe),xe.connect(c),N.start(),ye.wind={g:xe,lg:be,lvl:.1};let Te=o.createBufferSource();Te.buffer=ne,Te.loop=!0;let De=o.createBiquadFilter();De.type="lowpass",De.frequency.value=260,De.Q.value=.6;let _e=o.createGain();_e.gain.value=0,Te.connect(De),De.connect(_e),_e.connect(c),Te.start(),ye.move={g:_e,lp:De};let Ce=o.createOscillator();Ce.type="sine",Ce.frequency.value=1318.5;let Xe=o.createGain();Xe.gain.value=0;let Qe=o.createOscillator();Qe.frequency.value=5.3;let me=o.createGain();return me.gain.value=.004,Qe.connect(me),me.connect(Xe.gain),Qe.start(),Ce.connect(Xe),Xe.connect(c),Ce.start(),ye.holo={o:Ce,g:Xe},ye.ctx=o,ye.master=s,ye.bus=c,ye.echo=L,ye.wetIn=m,ye.dry=u,ye.wet=M,ye.wetLP=y,ye.conv=h,ye.dl=T,ye.dlLP=A,ye.fb=D,ye.droneFilt=B,!0}catch(o){return console.error(o),!1}}function _u(){let n=ye;if(!n.ctx)return;let o=n.ctx.currentTime,s=(u,m,h)=>u.setTargetAtTime(m,o,h||.06);n.master.gain.cancelScheduledValues(o),s(n.master.gain,n.on?.28*H.sVol:0,.35),s(n.wet.gain,Be,.12),n.wetLP.frequency.setTargetAtTime(Ge,o,.1),n.dlLP.frequency.setTargetAtTime(R(Ge*.68,200,6e3),o,.1),s(n.fb.gain,H.sEcho,.1),n.dl.delayTime.setTargetAtTime(H.sEchoT,o,.2),n.droneFilt.frequency.setTargetAtTime(nt,o,.12);let c=Math.pow(2,H.sTune/12);n.drone.forEach(u=>{u.o.frequency.setTargetAtTime(u.base*c,o,.3),s(u.g.gain,u.lvl*H.sDrone,1.4),s(u.lg.gain,u.swing*H.sDrone,1.4)}),n.wind&&(s(n.wind.g.gain,n.wind.lvl*H.sDrone,1.4),s(n.wind.lg.gain,n.wind.lvl*.45*H.sDrone,1.4)),c_()}let Tm=0;function c_(){!ye.ctx||!ye.conv||Math.abs(H.sRoom-ye.irSecs)<.05||(clearTimeout(Tm),Tm=setTimeout(()=>{!ye.ctx||!ye.conv||(ye.irSecs=H.sRoom,ye.conv.buffer=Am(ye.ctx,H.sRoom,2.7))},260))}function Po(n){if(n&&!l_()){P(k("audio.no"));return}ye.on=!!n,H.snd=ye.on,an(),f("b-snd").classList.toggle("am",ye.on),Cl(),ye.ctx&&(ye.on&&ye.ctx.state==="suspended"&&ye.ctx.resume(),_u()),P(k(ye.on?"audio.on":"audio.off"))}function ls(n){let o=Pt[R(H.sScale|0,0,Pt.length-1)].s,s=o[Math.abs(n*7+J[n].n.length)%o.length];return 220*Math.pow(2,(s+(J[n].k==="raw"?0:12)+H.sTune)/12)}let Fo=new S.Vector3;function Lm(n){return n<0||n>=G||!he||(Fo.set(he[n*3],he[n*3+1],he[n*3+2]).project(Ie),!(Fo.z<1)||!Number.isFinite(Fo.x))?0:R(Fo.x,-1,1)*.72}function yd(n,o,s,c){let u=ye.ctx,m=ls(n),h=u.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(s,o+.04),h.gain.exponentialRampToValueAtTime(4e-4,o+c);let y=h;try{if(u.createStereoPanner){let M=u.createStereoPanner();M.pan.value=Lm(n),h.connect(M),y=M}}catch(M){y=h}y.connect(ye.bus||ye.master),ye.echo&&y.connect(ye.echo),[[m,1,1],[m*1.0035,.45,1],[m*2,.26,.8],[m*2.76,.12,.55],[m*3.98,.07,.4],[m*5.4,.04,.3]].forEach(([M,L,T])=>{let A=u.createOscillator();A.type="sine",A.frequency.value=M;let D=u.createGain();D.gain.setValueAtTime(L,o),D.gain.exponentialRampToValueAtTime(L*.02+1e-5,o+Math.max(.15,c*T)),A.connect(D),D.connect(h),A.start(o),A.stop(o+c+.2)})}function d_(n,o,s){let c=ye.ctx,u=ls(n)*2,m=c.createGain();m.gain.setValueAtTime(1e-4,o),m.gain.exponentialRampToValueAtTime(s,o+.004),m.gain.exponentialRampToValueAtTime(s*.35,o+.09),m.gain.exponentialRampToValueAtTime(3e-4,o+.95);let h=m;try{if(c.createStereoPanner){let M=c.createStereoPanner();M.pan.value=Lm(n),m.connect(M),h=M}}catch(M){h=m}h.connect(ye.bus||ye.master),ye.echo&&h.connect(ye.echo);let y=c.createOscillator();y.type="sine",y.frequency.setValueAtTime(u*.75,o),y.frequency.exponentialRampToValueAtTime(u,o+.05),y.connect(m),y.start(o),y.stop(o+1.15),[[2.756,.24,.42],[5.404,.1,.2]].forEach(([M,L,T])=>{let A=c.createOscillator();A.type="sine",A.frequency.setValueAtTime(u*M*.97,o),A.frequency.exponentialRampToValueAtTime(u*M,o+.035);let D=c.createGain();D.gain.setValueAtTime(1e-4,o),D.gain.exponentialRampToValueAtTime(L,o+.003),D.gain.exponentialRampToValueAtTime(1e-4,o+T),A.connect(D),D.connect(m),A.start(o),A.stop(o+T+.1)})}function h_(n){!ye.on||!ye.ctx||n<0||n>=G||Se<.02||yd(n,ye.ctx.currentTime,.15*Se,ft)}let Rl=0;function Mu(n,o){if(!ye.on||!ye.ctx||n<0||n>=G||H.sRip<.02)return;let s=ye.ctx.currentTime;if(Rl<s&&(Rl=s),Rl-s>.6)return;let c=Rl;Rl+=.056+Math.random()*.042,d_(n,c,R(.11*o*H.sRip,5e-4,.26))}function u_(){if(!ye.on||!ye.ctx||!ye.droneFilt)return;let n=ye.ctx.currentTime,o=Math.max(600,(Ei||1200)*2.2),s=R((de.dist-160)/o,0,1),c=s*s*(3-2*s);if(ye.droneFilt.frequency.setTargetAtTime(nt*(1.25-.6*c),n,.35),ye.wet.gain.setTargetAtTime(Be*(.82+.34*c),n,.35),ye.dry.gain.setTargetAtTime(.52*(1.12-.3*c),n,.35),ye.move){let u=Ie.position.distanceTo(Rm);Rm.copy(Ie.position);let m=R(u/Math.max(30,de.dist*.02),0,1);ye.move.g.gain.setTargetAtTime(m*.14*(.45+.55*H.sDrone),n,.18),ye.move.lp.frequency.setTargetAtTime(200+m*520,n,.25)}ye.holo&&ye.holo.g.gain.setTargetAtTime(pt?.011:0,n,.7)}let Rm=new S.Vector3;function Cm(n,o){if(!ye.on||!ye.ctx)return;let s=ye.ctx,c=s.currentTime,u=s.createBufferSource();u.buffer=Em(s,1.2);let m=s.createBiquadFilter();m.type="bandpass",m.Q.value=1.4,m.frequency.setValueAtTime(n?260:2400,c),m.frequency.exponentialRampToValueAtTime(n?2400:260,c+.7);let h=s.createGain();h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(.13,c+.12),h.gain.exponentialRampToValueAtTime(3e-4,c+.85),u.connect(m),m.connect(h),h.connect(ye.bus),ye.echo&&h.connect(ye.echo),u.start(c),u.stop(c+1),n&&o>=0&&o<G&&(yd(o,c+.1,.07,3.2),ye.holo.o.frequency.setTargetAtTime(ls(o)*4,c,.3))}f("b-snd").onclick=()=>{Po(!ye.on),ye.on&&(H.adv=!0,H.tab="sound",Yu(),Aa(),mn(),an())};let Dm=["\u25E1","\u263E","\u2727","\u224B","\u25C7"];function f_(){if(F)return F;let n=document.createElement("div");n.id="sndstage";let o=document.createElement("div");o.className="top";let s=document.createElement("div");s.className="mini",s.id="sndpow",s.onclick=()=>{Po(!ye.on),ye.on&&Pm()};let c=document.createElement("canvas");c.id="sndscope",o.appendChild(s),o.appendChild(c);let u=document.createElement("div");u.className="cap",u.id="sndcap";let m=document.createElement("div");m.id="sndmoods",Pt.forEach((y,M)=>{let L=document.createElement("u");L.dataset.m=M,L.title=y.n,L.innerHTML="<i>"+Dm[M%Dm.length]+"</i><span></span>",L.onclick=()=>{H.sScale=M,ye.on||Po(!0),an(),ar(),Cl(),Pm(),L.classList.remove("play"),L.offsetWidth,L.classList.add("play")},m.appendChild(L)});let h=document.createElement("div");return h.className="mini",h.id="sndbox",h.onclick=()=>{H.sBox=!H.sBox,H.sBox&&!ye.on&&Po(!0),ue=null,an(),Cl(),P(k(H.sBox?"snd.box.on":"snd.box.off"))},n.appendChild(o),n.appendChild(u),n.appendChild(m),n.appendChild(h),F=n,n}function Cl(){if(!F)return;let n=F.querySelector("#sndpow");n.textContent=k(ye.on?"snd.off":"snd.on"),n.classList.toggle("on",ye.on),F.querySelector("#sndcap").textContent=k("snd.mood");let o=R(H.sScale|0,0,Pt.length-1);F.querySelectorAll("#sndmoods u").forEach(c=>{let u=+c.dataset.m;c.querySelector("span").textContent=k("snd.m"+u),c.classList.toggle("on",u===o)});let s=F.querySelector("#sndbox");s.innerHTML=k("snd.box")+"<small></small>",s.querySelector("small").textContent=k("snd.box.t"),s.classList.toggle("on",!!H.sBox)}function Pm(){if(!ye.on||!ye.ctx||!G)return;let n=[];for(let u=0;u<G;u++)u!==He&&n.push(u);n.sort((u,m)=>(J[m].inb|0)-(J[u].inb|0));let o=new Set,s=[];for(let u of n.slice(0,40)){let m=Math.round(ls(u));if(o.has(m)||(o.add(m),s.push(u)),s.length>=6)break}s.sort((u,m)=>ls(u)-ls(m));let c=ye.ctx.currentTime+.04;s.forEach((u,m)=>yd(u,c+m*.17,.12,2.8))}function p_(){if(!F||!F.isConnected||!F.offsetParent)return;let n=F.querySelector("#sndscope"),o=Math.max(1,Math.round(n.clientWidth*(devicePixelRatio||1))),s=Math.max(1,Math.round(n.clientHeight*(devicePixelRatio||1)));n.width!==o&&(n.width=o),n.height!==s&&(n.height=s);let c=n.getContext("2d");c.clearRect(0,0,o,s),ye.ctx&&!ye.scope&&(ye.scope=ye.ctx.createAnalyser(),ye.scope.fftSize=1024,ye.master.connect(ye.scope));let u=ye.on&&ye.scope;u&&((!oe||oe.length!==ye.scope.fftSize)&&(oe=new Float32Array(ye.scope.fftSize)),ye.scope.getFloatTimeDomainData(oe)),c.lineWidth=Math.max(1,s/22),c.strokeStyle=u?"rgba(255,190,90,.9)":"rgba(92,225,255,.35)",c.shadowColor=u?"rgba(255,182,72,.6)":"transparent",c.shadowBlur=u?s/5:0,c.beginPath();let m=u?oe.length:2;for(let h=0;h<m;h++){let y=h/(m-1)*o,M=u?R(oe[h]*4.5,-1,1):0,L=s/2-M*(s/2-2);h?c.lineTo(y,L):c.moveTo(y,L)}c.stroke()}let wd=8;function m_(){if(!H.sBox||!ye.on||!ye.ctx||!G||!he){ue=null;return}(!ue||ue.length!==G)&&(ue=new Int16Array(G).fill(-1));let n=Ie.position,o=ye.ctx.currentTime;for(let s=0;s<G;s++){let c=et[s];if(s===He||!c||!c.anchor||!c.anchor.pos)continue;let u=c.anchor.pos,m=Math.atan2(he[s*3+2]-u.z,he[s*3]-u.x),h=Math.atan2(n.z-u.z,n.x-u.x),y=(m-h)/C;y-=Math.floor(y);let M=Math.floor(y*wd),L=ue[s];if(ue[s]=M,L<0||L===M)continue;let T=(M-L+wd)%wd;T!==1&&T!==wd-1||(Fo.set(he[s*3],he[s*3+1],he[s*3+2]).project(Ie),!(!(Fo.z<1)||Math.abs(Fo.x)>1.02||Math.abs(Fo.y)>1.02)&&(fe<o&&(fe=o),!(fe-o>.35)&&(yd(s,fe,c.kind==="wiki"?.06:.035,2.2),fe+=.12)))}}if(H.snd){let n=()=>{b("pointerdown",n),b("keydown",n),Po(!0)};g("pointerdown",n),g("keydown",n)}let $={root:-1,sel:-1,trail:[],hint:null,hop2:!1,list:[],has:new Set,cnt:[0,0,0],rr:[0,0,0],anchor:new S.Vector3,guide:null,sect:null,star:null,holo:null,retic:null,pRoot:[],pCross:[]},Su=26,g_=34,Dl=[19,10.5,6.6],Eu=[0,250,460],v_=[0,36,24],Fm=[0,.062,-.094],Nm=[0,0,1.95],x_=7e-5,pt=!1;$.hop2=!!H.mmHop;let cs=[],ds=[];for(let n=0;n<3;n++){let o=Math.cos(Fm[n]),s=Math.sin(Fm[n]),c=Math.cos(Nm[n]),u=Math.sin(Nm[n]);cs.push([c,0,-u]),ds.push([u*o,-s,c*o])}function Au(){let n=H.spr/3.2,o=H.szPl;for(let s=1;s<3;s++){let c=$.cnt[s]*(Dl[s]*o*2+v_[s])/C;$.rr[s]=Math.max(Eu[s],c)*n}$.rr[2]<$.rr[1]*1.85&&($.rr[2]=$.rr[1]*1.85)}function y_(){if(!$.list.length||!We)return;let n=H.szPl;for(let o=0;o<$.list.length;o++){let s=$.list[o],c=s.i;We[c]=Dl[s.hop]*n,So&&Mo&&(So[c]=Mo[c]=We[c]*9)}}function w_(n){Au();let o=$.anchor;for(let s=0;s<$.list.length;s++){let c=$.list[s],u=c.i;if(!c.hop){he[u*3]=o.x,he[u*3+1]=o.y,he[u*3+2]=o.z;continue}c.ma+=n*c.sp;let m=$.rr[c.hop],h=cs[c.hop],y=ds[c.hop],M=c.ang+c.ma,L=Math.cos(M),T=Math.sin(M);he[u*3]=o.x+(L*h[0]+T*y[0])*m,he[u*3+1]=o.y+(L*h[1]+T*y[1])*m,he[u*3+2]=o.z+(L*h[2]+T*y[2])*m}}function b_(){if($.guide)return $.guide;let n=$.guide=new S.Group;n.renderOrder=1;for(let o=1;o<3;o++){let c=new Float32Array(720),u=cs[o],m=ds[o];for(let y=0;y<240;y++){let M=y/240*C,L=Math.cos(M),T=Math.sin(M);c[y*3]=L*u[0]+T*m[0],c[y*3+1]=L*u[1]+T*m[1],c[y*3+2]=L*u[2]+T*m[2]}let h=new S.BufferGeometry;h.setAttribute("position",new S.BufferAttribute(c,3)),n.add(new S.LineLoop(h,new S.LineBasicMaterial({color:6084863,transparent:!0,opacity:o===1?.15:.09,depthWrite:!1,blending:S.AdditiveBlending})))}return wt.add(n),n}function __(){if(D_(1/60),!!$.guide&&($.guide.visible=!1,!!pt&&($.guide.position.copy($.anchor),$.guide.children[0].scale.setScalar($.rr[1]),$.guide.children[1].scale.setScalar($.rr[2]),$.guide.children[1].visible=$.cnt[2]>0,$.sect&&($.sect.visible=!0,$.sect.position.copy($.anchor),$.sect.scale.setScalar($.rr[1]*1.13)),$.star))){$.star.visible=!0,$.star.position.copy($.anchor);let n=performance.now()*.001;$.star.userData.surfMat.uniforms.uTime.value=n,$.star.userData.rimMat.uniforms.uTime.value=n}}let Pl=null;function Im(n){if(ji&&(ji.visible=n?!1:G>0),bo&&(bo.visible=!n),oa&&(oa.visible=!n),Pr&&(Pr.visible=n?!1:H.grid),Nn&&(Nn.visible=!n),n&&(In&&(In.visible=!1),Qn&&(Qn.visible=!1),An&&(An.visible=!1),pn&&(pn.visible=!1)),Jn&&Oi&&Oi.attributes.aRingS){if(n){Pl||(Pl=Jn.slice());for(let o=3;o<Jn.length;o+=4)Jn[o]=0}else if(Pl)Jn.set(Pl),Pl=null;else return;Oi.attributes.aRingS.needsUpdate=!0}}function Tu(n){Au();let o=Math.max($.rr[1],$.cnt[2]?$.rr[2]:0)+Dl[1]*H.szPl*6;de.follow=-1,de.tgtD.copy($.anchor),de.distD=R(o*1.85+90,120,9e3),de.thV=0,de.phV=0,n&&(de.phD=.46,de.rollD=0),Ur()}function M_(n){$.sect&&(wt.remove($.sect),$.sect.traverse(u=>{u.geometry&&u.geometry.dispose(),u.material&&u.material.dispose()}));let o=$.sect=new S.Group;o.renderOrder=1;let s=cs[1],c=ds[1];n.forEach(u=>{let m=u.a1-u.a0,h=Math.max(6,Math.ceil(m/C*160)),y=new Float32Array((h+1)*3),M=Math.min(.06,m*.18);for(let T=0;T<=h;T++){let A=u.a0+M+(m-M*2)*(T/h),D=Math.cos(A),B=Math.sin(A);y[T*3]=D*s[0]+B*c[0],y[T*3+1]=D*s[1]+B*c[1],y[T*3+2]=D*s[2]+B*c[2]}let L=new S.BufferGeometry;L.setAttribute("position",new S.BufferAttribute(y,3)),o.add(new S.Line(L,new S.LineBasicMaterial({color:u.c.color,transparent:!0,opacity:.42,depthWrite:!1,blending:S.AdditiveBlending})))}),wt.add(o)}function S_(n){$.star&&(wt.remove($.star),$.star.traverse(y=>{y.geometry&&y.geometry.dispose(),y.material&&y.material.dispose()}),$.star=null);let o=Nt&&Nt[n],s=o&&o.temp||6300,c=Dl[0]*H.szPl*1.03,u=$.star=new S.Group,m=new S.ShaderMaterial({vertexShader:es,fragmentShader:$h,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new S.Color().fromArray(ma(s))},uEdge:{value:new S.Color().fromArray(ma(s*.762))}}});u.add(new S.Mesh(new S.IcosahedronGeometry(c,4),m));let h=new S.ShaderMaterial({vertexShader:es,fragmentShader:Hp,transparent:!0,depthWrite:!1,blending:S.AdditiveBlending,uniforms:{uCol:{value:new S.Color().fromArray(ma(s*.7))},uAmt:{value:.8},uTime:{value:0}}});u.add(new S.Mesh(new S.IcosahedronGeometry(c*1.04,3),h)),u.userData={surfMat:m,rimMat:h},u.renderOrder=2,wt.add(u)}function E_(n){if($.pRoot=[],$.pCross=[],!!Ae)for(let o=0;o<yn;o++){let s=Ae[o][0],c=Ae[o][1];!$.has.has(s)||!$.has.has(c)||(s===n||c===n?$.pRoot:$.pCross).push(o)}}let A_=`
varying vec2 vP;
void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,T_=`
precision highp float;
uniform float uSweep; uniform float uBright; uniform float uLane1; uniform float uLane2;
varying vec2 vP;
void main(){
  float r = length(vP);
  if (r > 1.0) discard;
  float ang = atan(vP.y, vP.x);
  /* the graduations: rings at a tenth of the plate, radials every fifteen
     degrees, both hairlines that fade with the plate toward its rim */
  /* Hairlines, and few of them. Rings at a fifth of the plate, radials
     every thirty degrees, both thin and both dim: the graduations of an
     instrument are read, not looked at, and a plate that glows is a toy.
     The two lanes are the only firm lines on it. */
  float rg = abs(fract(r * 5.0 + 0.5) - 0.5);
  float ring = smoothstep(0.018, 0.0, rg) * 0.22;
  float ag = abs(fract(ang / 6.2831853 * 12.0 + 0.5) - 0.5);
  float radial = smoothstep(0.03, 0.0, ag / max(r * 6.0, 0.35)) * 0.16;
  float lane = smoothstep(0.008, 0.0, abs(r - uLane1)) * 0.7
             + smoothstep(0.007, 0.0, abs(r - uLane2)) * 0.45;
  /* the sweep is a slow, faint brightening of the graduations as it passes
     \u2014 not a radar's beam, a scan the eye notices only when it is looking */
  float d = mod(uSweep - ang, 6.2831853);
  float sweep = exp(-d * 1.6) * 0.30;
  /* the plate itself, barely, gone at the rim and gone at the star */
  float plate = 0.045 * (1.0 - r) * smoothstep(0.03, 0.12, r);
  float a = (plate + ring + radial + lane + sweep * (0.6 * ring + 0.5 * radial))
          * pow(1.0 - r, 0.6) * uBright;
  gl_FragColor = vec4(vec3(0.62, 0.82, 0.94) * a, a);
}`;function L_(){if($.holo)return $.holo;let n=$.holo=new S.Group,o=new S.Vector3().fromArray(cs[1]),s=new S.Vector3().fromArray(ds[1]),c=new S.Vector3().crossVectors(o,s).normalize();n.quaternion.setFromRotationMatrix(new S.Matrix4().makeBasis(o,s,c)),$.holoN=c,$.holoQ=n.quaternion.clone();let u=new S.Mesh(new S.CircleGeometry(1,96),new S.ShaderMaterial({vertexShader:A_,fragmentShader:T_,uniforms:{uSweep:{value:0},uBright:{value:1},uLane1:{value:.4},uLane2:{value:.8}},transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:S.AdditiveBlending,side:S.DoubleSide}));u.renderOrder=0,n.add(u);let m=new S.LineBasicMaterial({color:10470616,transparent:!0,opacity:.22,depthWrite:!1,blending:S.AdditiveBlending}),h=[];for(let A=0;A<2;A++){let B=new Float32Array(216);for(let V=0;V<36;V++){let ne=V/36*C,N=Math.cos(ne),q=Math.sin(ne),ae=V%3===0?.028:.012;B[V*6]=N*(1-ae),B[V*6+1]=q*(1-ae),B[V*6+2]=0,B[V*6+3]=N*(1+ae),B[V*6+4]=q*(1+ae),B[V*6+5]=0}let X=new S.BufferGeometry;X.setAttribute("position",new S.BufferAttribute(B,3));let O=new S.LineSegments(X,m);O.renderOrder=1,n.add(O),h.push(O)}let y=new S.Group;for(let A=0;A<3;A++){let B=new Float32Array(123);for(let O=0;O<=40;O++){let V=A*C/3+O/40*(C/9);B[O*3]=Math.cos(V)*.92,B[O*3+1]=Math.sin(V)*.92,B[O*3+2]=0}let X=new S.BufferGeometry;X.setAttribute("position",new S.BufferAttribute(B,3)),y.add(new S.Line(X,new S.LineBasicMaterial({color:10479871,transparent:!0,opacity:.8,depthWrite:!1,blending:S.AdditiveBlending})))}y.renderOrder=1,y.visible=!1,n.add(y);let L=ga(300,(A,D,B,X,O)=>{let V=Math.sqrt(Math.random())*1.05,ne=Math.random()*C;D[A*3]=Math.cos(ne)*V,D[A*3+1]=Math.sin(ne)*V,D[A*3+2]=(Math.random()-.5)*.02,B[A]=.8+Math.random()*1.4,O[A]=.05+Math.random()*.12,X[A*3]=.7,X[A*3+1]=.82,X[A*3+2]=.92},$i(600,.3,0,!1));wt.remove(L),L.renderOrder=1,n.add(L);let T=ga(2,(A,D,B,X,O)=>{D[A*3]=D[A*3+1]=D[A*3+2]=0,B[A]=A===0?110:300,O[A]=A===0?.38:.06,X[A*3]=1,X[A*3+1]=.93,X[A*3+2]=.8},$i(900,.15,1,!1));return wt.remove(T),T.renderOrder=3,n.userData={plate:u,ticks:h,seg:y,dust:L,flare:T},wt.add(n),wt.add(T),n}function R_(n){$.retic&&(wt.remove($.retic),$.retic.traverse(M=>{M.geometry&&M.geometry.dispose(),M.material&&M.material.dispose()}));let o=$.retic=new S.Group,s=new S.Vector3().fromArray(cs[1]),c=new S.Vector3().fromArray(ds[1]),u=new S.Quaternion().setFromRotationMatrix(new S.Matrix4().makeBasis(s,c,new S.Vector3().crossVectors(s,c).normalize())),m=64,h=new Float32Array((m+1)*3);for(let M=0;M<=m;M++){let L=M/m*C;h[M*3]=Math.cos(L),h[M*3+1]=Math.sin(L),h[M*3+2]=0}let y=new S.BufferGeometry;y.setAttribute("position",new S.BufferAttribute(h,3)),n.forEach(M=>{if(M.hop!==1)return;let L=Nt&&Nt[M.i],T=new S.Line(y,new S.LineBasicMaterial({color:L?L.color:6084863,transparent:!0,opacity:.34,depthWrite:!1,blending:S.AdditiveBlending}));T.quaternion.copy(u),T.userData={i:M.i,spin:Math.random()*C,dir:Math.random()<.5?1:-1},T.renderOrder=2,o.add(T)}),wt.add(o)}let km=new S.Quaternion,C_=new S.Vector3(0,0,1);function D_(n){let o=$.holo;if(!o)return;let s=pt&&$.list.length>0;if(o.visible=s,o.userData.flare.visible=s,$.retic&&($.retic.visible=s),!s)return;let c=performance.now()*.001,u=($.cnt[2]>0?$.rr[2]:$.rr[1]*1.6)*1.12;o.position.copy($.anchor),o.scale.setScalar(u);let m=o.userData;if(m.plate.material.uniforms.uLane1.value=$.rr[1]/u,m.plate.material.uniforms.uLane2.value=$.cnt[2]>0?$.rr[2]/u:-1,m.plate.material.uniforms.uSweep.value=c*.18,m.ticks[0].scale.setScalar($.rr[1]/u),m.ticks[1].scale.setScalar($.rr[2]/u),m.ticks[1].visible=$.cnt[2]>0,m.seg.scale.setScalar($.rr[1]/u),m.seg.rotation.z=-c*.12,m.dust.rotation.z=c*.02,m.flare.position.copy($.anchor),$.star){let h=$.star.userData.surfMat.uniforms.uCore.value,y=m.flare.geometry.attributes.aColor.array;for(let M=0;M<2;M++)y[M*3]=h.r,y[M*3+1]=h.g,y[M*3+2]=h.b;m.flare.geometry.attributes.aColor.needsUpdate=!0}$.retic&&$.retic.children.forEach(h=>{let y=h.userData.i;h.position.set(he[y*3],he[y*3+1],he[y*3+2]),h.scale.setScalar((We[y]||8)*1.7),h.userData.spin+=0,km.setFromAxisAngle(C_,h.userData.spin),h.quaternion.copy($.holoQ).multiply(km)})}function Hr(n,o){if(n<0||n>=G)return;if(!o||o.push!==!1){let X=$.trail.indexOf(n);X>=0?$.trail.length=X+1:$.trail.push(n)}$.root=n,$.sel=n;let c=fn[n]?Array.from(fn[n]):[];c.sort((X,O)=>(J[O].inb|0)-(J[X].inb|0));let u=c.length>Su;c=c.slice(0,Su);let m=new Map;c.forEach(X=>{let O=Nt&&Nt[X],V=O?O.key:"";m.has(V)||m.set(V,{c:O,list:[]}),m.get(V).list.push(X)});let h=[...m.values()].sort((X,O)=>O.list.length-X.list.length),y=new Map,M=[],L=[],T=0;h.forEach(X=>{let O=T/Math.max(1,c.length)*C;X.list.forEach(ne=>{let N=T/Math.max(1,c.length)*C;y.set(ne,N),M.push({j:ne,a:N}),T++});let V=T/Math.max(1,c.length)*C;X.c&&X.list.length&&L.push({c:X.c,a0:O,a1:V})});let A=[],D=0;if($.hop2&&c.length){let X=new Set(c);X.add(n);let O=new Map;c.forEach(V=>{let ne=y.get(V),N=fn[V];N&&N.forEach(q=>{if(X.has(q))return;let ae=O.get(q);ae||(ae={i:q,s:0,vx:0,vy:0},O.set(q,ae)),ae.s++,ae.vx+=Math.cos(ne),ae.vy+=Math.sin(ne)})}),A=[...O.values()],D=A.length,A.sort((V,ne)=>ne.s-V.s||(J[ne.i].inb|0)-(J[V.i].inb|0)),A=A.slice(0,g_),A.forEach(V=>{V.a=Math.atan2(V.vy,V.vx)}),A.sort((V,ne)=>V.a-ne.a)}$.list=[],$.has=new Set,$.cnt[0]=1,$.cnt[1]=c.length,$.cnt[2]=A.length;let B=(X,O,V)=>{$.list.push({i:X,hop:O,ang:V,ma:0,sp:O?x_*Math.pow(Eu[1]/Eu[O],1.5):0}),$.has.add(X)};B(n,0,0),M.forEach(X=>B(X.j,1,X.a));{let X=-1/0,O=A.map(ne=>{let N=ne.a;for(;N<X;)N+=C;return X=N,N}),V=O.length?O[0]:0;A.forEach((ne,N)=>{let q=V+(N+.5)/A.length*C;B(ne.i,2,.55*O[N]+.45*q)})}$.hint={trunc:u?fn[n].size:0,hop2total:D,hop2n:A.length},Om(),f("mmleg2").style.display=A.length?"":"none",Au(),fa(),M_(L),S_(n),E_(n),L_(),R_($.list),Tu(!1),P_(),Gn(n,!0),Lu(n)}function Om(){let n=$.hint||{};f("mmhint").innerHTML=(n.trunc?k("mm.trunc",{t:n.trunc,n:Su})+"<br>":"")+(n.hop2total>n.hop2n?k("mm.trunc2",{t:n.hop2total,n:n.hop2n})+"<br>":"")+k("mm.hintfull")+(ee()?" \xB7 "+k("mm.hintopen"):"")}function P_(){let n=f("mmcrumbs");n.innerHTML="",$.trail.slice(-8).forEach((o,s,c)=>{if(s){let m=document.createElement("i");m.textContent="\u203A",n.appendChild(m)}let u=document.createElement("span");u.textContent=J[o].n,s===c.length-1?u.className="here":u.onclick=()=>Hr(o),n.appendChild(u)}),f("mmback").classList.toggle("live",$.trail.length>1)}f("mmback").onclick=()=>{$.trail.length<2||($.trail.pop(),Hr($.trail[$.trail.length-1],{push:!1}))};function Lu(n){let o=$.sel;$.sel=n;let s=J[n],c=Nt[n]&&Nt[n].color||Gh;f("mmside").style.setProperty("--nodec","#"+c.getHexString()),f("mm-kind").textContent=(s.k==="raw"?"RAW ARCHIVE":"WIKI CONCEPT")+(s.d?" \xB7 "+s.d:"")+(n===$.root?" \xB7 "+k("mm.isroot"):""),f("mm-name").textContent=s.n,f("mm-path").textContent=s.p+"  \xB7  "+s.w+" words  \xB7  \u2190"+s.inb;let u=Tp(n);f("m-pl").textContent=u.links,f("m-mo").textContent=u.moons,f("m-mo2").textContent=u.far;let m=(s.t||[]).slice(0,12);f("mm-tagsec").style.display=m.length?"":"none",f("mm-tags").innerHTML=m.map(L=>'<span class="tag">'+Me(L)+"</span>").join("");let h=f("mm-x");h.textContent=s.x||k("mm.nobody"),h.classList.toggle("none",!s.x);let y=f("mm-links");y.innerHTML=em(n),tm(y,L=>Hr(L));let M=s.n.length>10?s.n.slice(0,10)+"\u2026":s.n;f("mm-go").textContent=Oe(M),f("mm-center").style.display=n===$.root?"none":"",o!==n&&(f("mmside").scrollTop=0)}function Bm(n){$.hop2=!!n,H.mmHop=$.hop2,an(),f("mm-hop").classList.toggle("on",$.hop2),pt&&$.root>=0&&Hr($.root,{push:!1})}f("mm-hop").onclick=()=>Bm(!$.hop2),f("mm-hop").classList.toggle("on",$.hop2);function Um(n){if($.list.length<2)return;let o=$.list.findIndex(c=>c.i===$.sel);o<0&&(o=0);let s=(o+n+$.list.length)%$.list.length;Gn($.list[s].i,!0)}function Ru(n){let o=n!==void 0&&n>=0?n:Ke;if(o<0||o>=G){P(k("need.node"));return}pt=!0,$.anchor.set(he[o*3],he[o*3+1],he[o*3+2]),Im(!0),b_(),ss(),rn=-1,Di=0,f("mind").classList.add("on"),f("hud").classList.add("mindon"),$.trail=[],Hr(o),Tu(!0),Cm(!0,o)}function hs(){pt&&(pt=!1,Cm(!1,-1),f("mind").classList.remove("on"),f("hud").classList.remove("mindon"),Im(!1),$.guide&&($.guide.visible=!1),$.sect&&($.sect.visible=!1),$.star&&($.star.visible=!1),$.holo&&($.holo.visible=!1,$.holo.userData.flare.visible=!1),$.retic&&($.retic.visible=!1),$.pRoot=[],$.pCross=[],$.list.length=0,$.has.clear(),$.cnt[0]=$.cnt[1]=$.cnt[2]=0,fa(),Wt&&$.root>=0&&$.root<G&&(Vu(0),de.follow=$.root,de.tgtD.set(he[$.root*3],he[$.root*3+1],he[$.root*3+2]),de.distD=R(We[$.root]*34+240,240,3e3),Ur()))}function Cu(){pt?hs():Ru()}f("mm-close").onclick=hs,f("mm-go").onclick=()=>{let n=$.sel;hs(),Gn(n),cd(n,!0)},f("mm-center").onclick=()=>{$.sel!==$.root&&Hr($.sel)},f("mm-open").onclick=n=>mt($.sel,n),f("i-mm").onclick=()=>Ru(Ke);let Di=0,Du=0,Pu=0,Fu=0,Wr=-1,Fl=!1,wr=new S.Vector2(0,0),Nu=0,Iu=-1,ku=-1e4,Ou=-1e4,zm=0,Gm=0,F_=7,N_=30,I_=420,k_=20;En.addEventListener("pointerdown",n=>{if(Di=n.button===2?2:1,Du=n.clientX,Pu=n.clientY,Fu=0,Wr=-1,zm=n.clientX,Gm=n.clientY,Fl=!0,wr.x=d(n),wr.y=p(n),Di===1&&n.shiftKey&&!j.on){let o=nu(wr.x,wr.y,rn);o>=0&&(Wr=o,id=o,ja.add(o))}try{En.setPointerCapture(n.pointerId)}catch(o){}}),En.addEventListener("pointermove",n=>{let o=n.clientX-Du,s=n.clientY-Pu;Du=n.clientX,Pu=n.clientY,wr.x=d(n),wr.y=p(n),Fl=!0,Di&&(Fu+=Math.abs(o)+Math.abs(s),Wr>=0?O_(Wr,wr.x,wr.y,1/60):Di===2?bb(o,s):yb(o*.0104,s*.0104,!0))}),En.addEventListener("pointerenter",()=>{Fl=!0}),En.addEventListener("pointerleave",()=>{Di||(Fl=!1,rn=-1)}),g("pointerup",n=>{if(!Di)return;let o=Math.hypot(n.clientX-zm,n.clientY-Gm)<=F_&&Fu<N_;if(Wr>=0)ja.add(Wr),id=-1,o&&Vm(Wr,n),Wr=-1;else if(!(Di===1&&o&&j.on)){if(Di===1&&o){Qu();let s=nu(d(n),p(n),rn);s>=0?(rn=s,Vm(s,n)):Gn(-1)}}Di=0});function Vm(n,o){if(E.on){ee()&&mt(n,o);return}if(ee()&&(o.ctrlKey||o.metaKey)){Gn(n),mt(n,o);return}let s=performance.now(),c=Math.hypot(o.clientX-ku,o.clientY-Ou)<k_;if(s-Nu<I_&&(Iu===n||c)){if(Nu=0,Iu=-1,ku=Ou=-1e4,pt){Hr(n);return}Gn(n),Ru(n);return}Nu=s,Iu=n,ku=o.clientX,Ou=o.clientY,Gn(n)}En.addEventListener("contextmenu",n=>n.preventDefault());let Bu=new S.Vector3,Hm=new S.Vector3,Wm=new S.Vector3;En.addEventListener("wheel",n=>{n.preventDefault();let o=Math.exp(n.deltaY*.0011);if(o<1&&de.follow<0&&!pt&&!j.on){let s=d(n),c=p(n);Bu.set(s,c,.5).unproject(Ie).sub(Ie.position).normalize(),Hm.set(0,0,-1).applyQuaternion(Ie.quaternion);let u=Bu.dot(Hm);if(u>.2){let m=Ie.position.distanceTo(de.tgtD);Wm.copy(Ie.position).addScaledVector(Bu,m/u),de.tgtD.lerp(Wm,1-o)}}wb(o)},{passive:!1});let bd=new S.Vector3,qm=new S.Vector3;function O_(n,o,s,c){qm.set(he[n*3],he[n*3+1],he[n*3+2]);let u=Ie.position.distanceTo(qm);bd.set(o,s,.5).unproject(Ie).sub(Ie.position).normalize().multiplyScalar(u).add(Ie.position);let m=R(de.dist*.3,30,420),h=1-Math.pow(6e-4,Math.min(c,.05)),y=1/Math.max(.001,c);for(let M=0;M<3;M++){let L=n*3+M,T=he[L]-cn[L],A=(M===0?bd.x:M===1?bd.y:bd.z)-T,D=cn[L];cn[L]=I(D,R(A,-m,m),h),Dr[L]=(cn[L]-D)*y*.35}}function B_(n){return!n||n.nodeType!==1?!1:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n.isContentEditable?!0:!!(n.closest&&n.closest('input,textarea,select,[contenteditable="true"],[contenteditable=""],.cm-editor'))}g("keydown",n=>{if(E.on||ud||B_(n.target))return;Y();let o=n.key.toLowerCase();if(YM()){n.preventDefault(),Wl();return}if(XM()){n.preventDefault(),(o==="escape"||n.key==="?")&&Id();return}if(j.on){o==="escape"?(n.preventDefault(),j.rec?bu():j.cd?Sm():bm()):o==="g"?(n.preventDefault(),Ma()):o===" "&&(n.preventDefault(),n.repeat||Ml());return}if(n.key==="?"){n.preventDefault(),Nd();return}if(pt){if(o==="enter"&&(n.ctrlKey||n.metaKey)){n.preventDefault(),mt($.sel,n);return}if(o==="escape"||o==="m")n.preventDefault(),hs();else if(o==="arrowright"||o==="arrowdown"||o==="tab")n.preventDefault(),Um(n.shiftKey&&o==="tab"?-1:1);else if(o==="arrowleft"||o==="arrowup")n.preventDefault(),Um(-1);else if(o==="enter")n.preventDefault(),$.sel!==$.root&&Hr($.sel);else if(o==="backspace")n.preventDefault(),f("mmback").onclick();else if(o==="f")n.preventDefault(),Tu(!0);else if(o==="g")n.preventDefault(),f("mm-go").onclick();else if(o==="2")n.preventDefault(),Bm(!$.hop2);else return;return}if(o==="o"&&ee()&&!n.ctrlKey&&!n.metaKey&&!n.altKey){n.preventDefault(),mt(Ke,n);return}if((n.ctrlKey||n.metaKey)&&o==="k"){n.preventDefault(),pd();return}if(o==="/")n.preventDefault(),pd();else if(o==="m")n.preventDefault(),Cu();else if(o==="r")tu();else if(o==="l")ou();else if(o==="x")au();else if(o==="g")n.preventDefault(),Ma();else if(o===" ")n.preventDefault(),n.repeat||Ml();else if(o==="p")n.preventDefault(),xd();else if(o==="c"&&!n.ctrlKey&&!n.metaKey&&!n.altKey)n.preventDefault(),wu();else if(o==="u")n.preventDefault(),Po(!ye.on);else if(o==="h"){let s=f("hud").style.display!=="none";f("hud").style.display=s?"none":"",s&&P(k("hud.off"),2600)}else if(o==="escape"){if(Qu())return;Ee.on?md(!1):rr.length?lm():rs()||ir>=0?Jp():zr?(zr=!1,f("r-broken").classList.remove("on")):(Gn(-1),Co="")}});let ii=null,qt=-1,us=!1,zi={uStar:{value:new S.Vector4(0,0,0,100)},uStarCol:{value:new S.Vector4(1,1,1,1)},uOcc:{value:new S.Vector4(0,0,0,0)},uOccS:{value:6},uRingS:{value:new S.Vector4(0,1,0,0)},aSurf:{value:new S.Vector4(0,0,8,1)}},Nl=new Float32Array(4),Il=new Float32Array(4);function U_(){if(ii)return;let n=new S.MeshPhongMaterial({shininess:18,specular:725014,emissive:132620});n.extensions={derivatives:!0},n.onBeforeCompile=o=>{o.uniforms.uStar=zi.uStar,o.uniforms.uStarCol=zi.uStarCol,o.uniforms.uOcc=zi.uOcc,o.uniforms.uOccS=zi.uOccS,o.uniforms.uRingS=zi.uRingS,o.uniforms.aSurf=zi.aSurf,Bp(o,!1),Dp(o,!1)},ii=new S.Mesh(new S.SphereGeometry(1,96,64),n),ii.visible=!1,wt.add(ii)}function z_(){return!G||Ee.on?-1:(o=>{if(o<0||o>=G||o===He)return!1;let s=he[o*3]-Ie.position.x,c=he[o*3+1]-Ie.position.y,u=he[o*3+2]-Ie.position.z;return Math.sqrt(s*s+c*c+u*u)<We[o]*70})(Ke)?Ke:-1}function G_(n){return U_(),Vp(n,Il,0),zi.aSurf.value.set(Il[0],Il[1],Il[2],Il[3]),!0}function V_(n){let o=z_();if(o!==qt&&(qt=o,us=!1),qt>=0&&!us&&(us=G_(qt)),!!ii){if(qt<0||!us){ii.visible=!1;return}ii.visible=!0,ii.position.set(he[qt*3],he[qt*3+1],he[qt*3+2]);{let s=Qa?Up[Qa[qt]]:0;ii.scale.set(We[qt],We[qt]*(1-s),We[qt])}Eo&&(ad(qt,H.spr,Bi,Nl),zi.uStar.value.set(Nl[0],Nl[1],Nl[2],Nl[3]),zi.uStarCol.value.set(Ao[qt*4],Ao[qt*4+1],Ao[qt*4+2],Ao[qt*4+3]),zi.uOcc.value.set(hi[qt*4],hi[qt*4+1],hi[qt*4+2],hi[qt*4+3]),zi.uOccS.value=Kc[qt]||6,Jn&&zi.uRingS.value.set(Jn[qt*4],Jn[qt*4+1],Jn[qt*4+2],Jn[qt*4+3])),Gp(qt,ii.quaternion)}}function H_(){ii&&(wt.remove(ii),ii.geometry.dispose(),ii.material.dispose(),ii=null,qt=-1,us=!1)}let Uu=performance.now(),kl=60,en=0,qr=0,Gi=new S.Matrix4,Xm=new S.Quaternion,Xr=new S.Vector3,Vi=new S.Vector3,Ym=new S.Vector3,vt={base:Math.min(devicePixelRatio||1,2),now:1,want:1,still:0,hold:0,ceil:2,px:0,py:0,pz:0,fx:0,fy:0,fz:0,had:!1},jm=13e6,W_=1.6,_d=0;function zu(){return vt.still<.45?1:vt.still<1.1?Math.min(1.45,vt.ceil):vt.ceil}function q_(n){if(E.on||j.on)return;if(x.on){vt.hold=0;return}let o=Ie.matrixWorld.elements,s=o[12],c=o[13],u=o[14],m=-o[8],h=-o[9],y=-o[10],M=!vt.had;if(!M){let X=l()*.5/Math.tan(Ie.fov*Math.PI/360),O=Math.max(1,de.dist),V=Math.hypot(s-vt.px,c-vt.py,u-vt.pz),ne=Math.hypot(m-vt.fx,h-vt.fy,y-vt.fz);M=(V/O+ne)*X>.0625}vt.px=s,vt.py=c,vt.pz=u,vt.fx=m,vt.fy=h,vt.fz=y,vt.had=!0,_d=Wt?_d+n:0;let L=_d<W_||Lo!==0||Ri!==H.gap;M||L||!Wt||pt?vt.still=0:vt.still+=n;let T=zu();if(vt.hold+=n,vt.now>1&&vt.hold>1&&kl<42){vt.ceil=Math.max(1,vt.now-.55),vt.now=1,vt.hold=0,Km();return}if(Math.abs(T-vt.now)<.01)return;let A=a(),D=l(),B=vt.base;T>vt.now&&A*D*B*B*T*T>jm&&(vt.ceil=Math.max(1,Math.sqrt(jm/(A*D*B*B))),Math.abs(zu()-vt.now)<.01)||(vt.now=zu(),vt.hold=0,Km())}function Km(){Tt.setPixelRatio(vt.base*vt.now),Yr()}function Yr(){j.on&&Jb();let n=j.on?j.hole.w:a(),o=j.on?j.hole.h:l();Tt.setSize(n,o,!1),Ie.aspect=n/o,Ie.updateProjectionMatrix();let s=o/(2*Math.tan(Ie.fov*Math.PI/360))*(Tt.getPixelRatio()/vt.base);yr.forEach(u=>{u.uniforms&&(u.uniforms.uScale.value=s)});let c=Tt.getPixelRatio();Lp(Math.max(1,Math.round(n*c)),Math.max(1,Math.round(o*c))),mn()}g("resize",Yr);let X_=n=>n.kind==="shell"?n.inc:n.inc*H.tlt,Tn=new Float32Array(3),Ln=new Float32Array(3);function Y_(n,o){let s=1-2*(o+.5)/Math.max(1,n.sN||1),c=Math.sqrt(Math.max(0,1-s*s)),u=o*ge,m=Math.cos(u)*c,h=s,y=Math.sin(u)*c,M=Math.abs(m)<.9?1:0,L=Math.abs(m)<.9?0:1,T=L*y-0*h,A=0*m-M*y,D=M*h-L*m,B=Math.hypot(T,A,D)||1;T/=B,A/=B,D/=B,n.su=[T,A,D],n.sv=[h*D-y*A,y*T-m*D,m*A-h*T]}let br=new Float32Array(2);function Gu(n,o){if(!(n>1e-4)){br[0]=Math.cos(o),br[1]=Math.sin(o);return}let s=Math.sin(o),c=o+n*s*(1+n*Math.cos(o));for(let u=0;u<2;u++){let m=Math.cos(c);c-=(c-n*Math.sin(c)-o)/(1-n*m||1e-6)}br[0]=Math.cos(c)-n,br[1]=Math.sqrt(1-n*n)*Math.sin(c)}function Md(n){let o=X_(n),s=Math.cos(o),c=Math.sin(o),u=H.sph;if(u<.001||!n.su)return Tn[0]=1,Tn[1]=0,Tn[2]=0,Ln[0]=0,Ln[1]=c,Ln[2]=s,Zm(n);let m=n.su,h=n.sv,y=m[0]<0?-1:1,M=1+(m[0]*y-1)*u,L=m[1]*y*u,T=m[2]*y*u,A=h[0]*y*u,D=c+(h[1]*y-c)*u,B=s+(h[2]*y-s)*u,X=Math.hypot(M,L,T)||1,O=Math.hypot(A,D,B)||1;Tn[0]=M/X,Tn[1]=L/X,Tn[2]=T/X,Ln[0]=A/O,Ln[1]=D/O,Ln[2]=B/O,Zm(n)}function Zm(n){let o=n.aop;if(!o)return;let s=Math.cos(o),c=Math.sin(o);for(let u=0;u<3;u++){let m=Tn[u],h=Ln[u];Tn[u]=m*s+h*c,Ln[u]=h*s-m*c}}function Jm(n,o,s,c){Vc||(nl[n]=s);let u=Ti[n];if(c){let m=nl[n]/(s>1e-4?s:1e-4),h=m<.06?.06:m>6?6:m;u+=c*o.sp*h*Math.sqrt(h),Ti[n]=u}return u}function Vu(n){let o=n*H.spd;en+=o;let s=!1,c=Bi,u=c>.001?Math.pow(c,-1.5):1;if(Ne.forEach((h,y)=>{if(h.oR===void 0)return;h.oMA===void 0&&(h.oMA=h.oA0),h.oMA+=o*h.oSp*u;let M=h.oMA,L=h.oR*c;if(h.pos.set(Math.cos(M)*L,h.oY*c,Math.sin(M)*L),Li){let T=Li.geometry.attributes.position.array;if(T[y*3]=h.pos.x,T[y*3+1]=h.pos.y,T[y*3+2]=h.pos.z,di){let A=di.geometry.attributes.position.array,B=(h.reachA!==void 0?h.reachA+h.reachB*Ri:h.reach||120)*.42*H.spr,X=Math.cos(h.hzA||0)*B,O=Math.sin(h.hzA||0)*B,V=y*9;A[V]=h.pos.x,A[V+1]=h.pos.y,A[V+2]=h.pos.z,A[V+3]=h.pos.x+X,A[V+4]=h.pos.y+B*.18,A[V+5]=h.pos.z+O,A[V+6]=h.pos.x-X,A[V+7]=h.pos.y-B*.18,A[V+8]=h.pos.z-O}s=!0}}),s&&(Li.geometry.attributes.position.needsUpdate=!0,di&&(di.geometry.attributes.position.needsUpdate=!0)),Ne.forEach(h=>{h.si!==void 0&&(h.sy+=.0016,h.sx+=7e-4,h.rz+=.0021)}),ji&&(ji.rotation.y=en*85e-7,ji.scale.set(c,.68*c,c)),bo&&(bo.rotation.y=-en*55e-6,bo.scale.setScalar(c)),oa&&oa.scale.setScalar(c),Pr&&Pr.visible&&Pr.scale.setScalar(c),Mt){let h=Mt.userData;Mt.position.set(he[He*3],he[He*3+1],he[He*3+2]),h.surfMat.uniforms.uTime.value=en*.001,h.rimMat.uniforms.uTime.value=en*.001,h.proMat.uniforms.uTime.value=en*.001,h.rimMat.uniforms.uAmt.value=.8+.28*Math.sin(en*.0017+.4)+.1*Math.sin(en*.0043);let y=1+Math.sin(en*85e-5)*.022,M=Ee.on?ei[He]:1;Mt.visible=M>.001&&!pt;let L=H.briSun;h.halo.material.opacity=.085*L,h.rimMat.uniforms.uAmt.value*=R(L,.15,2.4),Mt.scale.setScalar(M*(We[He]/(h.R||1))),h.surface.scale.setScalar(y),h.halo.scale.setScalar(1+Math.sin(en*61e-5+1.4)*.05),od.intensity=h.lit*R(M,0,1)*H.briSun}let m=H.spr;for(let h=0;h<G;h++){let y=et[h];if(y.kind==="moon")continue;if(y.kind==="core"){he[h*3]=cn[h*3],he[h*3+1]=cn[h*3+1],he[h*3+2]=cn[h*3+2];continue}Md(y);let M,L=y.y;if(y.kind==="wiki"){let D=Math.max(.05,(Ya.step*Ri+y.gapA)/(y.step0||1));M=(y.inner+(y.r0-y.inner)*D)*m}else M=y.r0*c,L*=c;y.aNow=M,L*=1-H.sph,Gu(y.ecc,Jm(h,y,M,o));let T=br[0],A=br[1];he[h*3]=y.anchor.pos.x+(T*Tn[0]+A*Ln[0])*M+cn[h*3],he[h*3+1]=y.anchor.pos.y+(T*Tn[1]+A*Ln[1])*M+L+cn[h*3+1],he[h*3+2]=y.anchor.pos.z+(T*Tn[2]+A*Ln[2])*M+cn[h*3+2]}for(let h=0;h<G;h++){let y=et[h];if(y.kind!=="moon")continue;let M=y.anchorNode;Md(y);let L=y.r0*m;y.aNow=L,Gu(y.ecc,Jm(h,y,L,o));let T=br[0],A=br[1];he[h*3]=he[M*3]+(T*Tn[0]+A*Ln[0])*L+cn[h*3],he[h*3+1]=he[M*3+1]+(T*Tn[1]+A*Ln[1])*L+cn[h*3+1],he[h*3+2]=he[M*3+2]+(T*Tn[2]+A*Ln[2])*L+cn[h*3+2]}pt&&(w_(o),__()),Vc=!0}function j_(n){let o=1-Math.pow(.004,n);if(pt){for(let s=0;s<G;s++)Sn[s]=I(Sn[s],$.has.has(s)?1:0,o);Qm(n);return}for(let s=0;s<G;s++){let c=Nt[s],u=c.on?1:.02;if(Co&&(u*=zc[s].includes(Co)?1:.07),zr&&(u*=(J[s].bk|0)>0?1:.05),rs()?u*=ba.has(s)?1:.05:Ke>=0&&(s===Ke?u*=1:wl.has(s)?u*=.92:u*=.24),Ee.on){u=ei[s]>0?c.on?1:.02:0,Sn[s]=u?Math.min(u,Sn[s]+n*9):0;continue}Sn[s]=I(Sn[s],u,o)}Qm(n)}let No=new S.Quaternion,Hu=new S.Euler;function Qm(n){if($a&&($a.uniforms.uTime.value=en*.001,$a.uniforms.uBright.value=R(H.briSys*1.6,0,2.2)),!Ne||!Ne.length)return;let o=1-Math.pow(.004,n),s=Li?Li.geometry.attributes.aAlpha:null,c=di?di.geometry.attributes.aAlpha:null,u=di?di.geometry.attributes.aSize:null,m=!1;Ne.forEach((h,y)=>{if(!h.op0)return;if(c&&h.tier===0){let X=Math.max(60,(h.reachA!==void 0?h.reachA+h.reachB*Ri:h.reach||120)*H.spr),O=Ie.position.distanceTo(h.pos),V=R((O/X-1.5)/2.5,0,1),ne=(pt?0:h.on?1:0)*V*V*H.briSys,N=1+.04*Math.sin(en*19e-5+h.oA0*1.7);for(let q=0;q<3;q++){let ae=y*3+q;c.array[ae]=I(c.array[ae],ne*(q?.045:.075),o),u.array[ae]=X*(q?3.4:5)*N}c.needsUpdate=!0,u.needsUpdate=!0}let M=pt?0:h.on?1:0;Ee.on&&(M*=Ee.u>=h.genT?R((Ee.u-h.genT)/Ee.grow,0,1):0);let L=h.vis=I(h.vis===void 0?M:h.vis,M,o),T=h.tier===0?H.briSys:1;s&&(s.array[y]=h.op0.glow*L*T,m=!0);let A=h.si;if(A===void 0||!_o)return;let D=L>.006?h.sR:0,B=1+Math.sin(en*.0011+h.oA0*3.1)*.035;No.identity(),Xr.set(D*B,D*B,D*B),Gi.compose(h.pos,No,Xr),_o.setMatrixAt(A,Gi),Hc[A]=h.op0.core*L*R(T*2.2,0,1),No.setFromEuler(Hu.set(h.sx,h.sy,0)),Xr.set(D,D,D),Gi.compose(h.pos,No,Xr),sa.setMatrixAt(A,Gi),Wc[A]=h.op0.shell*L*T,No.setFromEuler(Hu.set(h.rx,0,h.rz)),Gi.compose(h.pos,No,Xr),la.setMatrixAt(A,Gi),qc[A]=h.op0.ring*L*T,No.setFromEuler(Hu.set(h.rx*.72,h.rz*.3,-h.rz*.86)),Gi.compose(h.pos,No,Xr),ca.setMatrixAt(A,Gi),Xc[A]=h.op0.ring2*L*T*(.72+.38*Math.sin(en*52e-5+h.oA0*2.3))}),m&&(s.needsUpdate=!0),_o&&[_o,sa,la,ca].forEach(h=>{h.instanceMatrix.needsUpdate=!0,h.geometry.attributes.aAlpha.needsUpdate=!0})}let Ol={ref:1,k:1.15,floor:.3},$m=new S.Frustum,K_=new S.Matrix4,Wu=new S.Sphere;function Z_(){if(!aa)return;let n=aa.material.uniforms,o=Mt?Mt.position:Vi.set(0,0,0),s=Ie.position.distanceTo(o),c=R((s/n.uR0.value-1.6)/2.4,0,1),u=H.zod*c*c*.16;(pt||!Mt||!Mt.visible)&&(u=0),Ee.on&&He>=0&&(u*=R(ei[He],0,1)),n.uAmt.value=u,aa.visible=u>5e-4,aa.visible&&(aa.position.copy(o),n.uSun.value.copy(o),n.uCam.value.copy(Ie.position))}function qu(n){let o=1-(n/Ol.ref-1)*Ol.k;return o>1?1:o<Ol.floor?Ol.floor:o}function J_(){Ol.ref=Math.max(60,de.dist),I1(),Ie.updateMatrixWorld(),$m.setFromProjectionMatrix(K_.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse))}let fs={core:1,wiki:1,moon:1,spiral:1,shell:1};function Q_(){fs.core=H.briSun,fs.wiki=H.briPl,fs.moon=H.briMn,fs.spiral=fs.shell=H.briPl}function $_(){if(!G||!dn||!dn.instanceColor)return;let n=dn.instanceColor.array,o=H.bri;Q_();let s=Ee.on,c=rr.length>0,u=Ie.position,m=u.x,h=u.y,y=u.z,M=H.spr,L=Bi,T=l()*.5/Math.tan(Ie.fov*Math.PI/360),A=Oi.attributes.aStar;for(let D=0;D<G;D++){let B=pt&&!$.has.has(D),X=B?et[D].kind:pt?"wiki":et[D].kind,O=X!==et[D].kind&&D===He;if(Vi.set(he[D*3],he[D*3+1],he[D*3+2]),ad(D,M,L,Eo.subarray(D*4,D*4+4)),hi[D*4+3]>0)if(pt)hi[D*4]=0,hi[D*4+1]=1e7,hi[D*4+2]=0;else{let De=et[D].anchorNode;hi[D*4]=he[De*3],hi[D*4+1]=he[De*3+1],hi[D*4+2]=he[De*3+2]}let V=D===He&&Mt&&!pt?0:We[D];B&&(V=0),D===qt&&us&&(V=0),s&&(V*=ei[D]),c&&Zn[D]>.004&&(V*=1+Zn[D]*.16),Gp(D,Xm);let ne=Qa?Up[Qa[D]]:0;Xr.set(V,V*(1-ne),V),Gi.compose(Vi,Xm,Xr),dn.setMatrixAt(D,Gi);let N=.1+Sn[D]*.9;D===Ke?N=1:D===rn&&(N=Math.min(1,N*1.35)),c&&Zn[D]>.004&&(N+=Zn[D]*.9);let q=fs[X]||1,ae=Math.min(1.8,N*(.55+o*q*.45));n[D*3]=Ze[D*3]*ae,n[D*3+1]=Ze[D*3+1]*ae,n[D*3+2]=Ze[D*3+2]*ae,il[D*3]=he[D*3],il[D*3+1]=he[D*3+1],il[D*3+2]=he[D*3+2];let Z=Sn[D]*(X==="wiki"?.62:X==="core"?1:.38);O&&(Z*=.5);let xe=he[D*3]-m,se=he[D*3+1]-h,be=he[D*3+2]-y,Te=Math.sqrt(xe*xe+se*se+be*be);if(X!=="core"){let De=Eo[D*4]-he[D*3],_e=Eo[D*4+1]-he[D*3+1],Ce=Eo[D*4+2]-he[D*3+2],Xe=Math.sqrt(De*De+_e*_e+Ce*Ce),Qe=.5*(1+(De*xe+_e*se+Ce*be)/(Xe*Te+1e-6));Z*=.12+.88*Qe;let me=et[D].aNow;if(me>1&&!pt){let ke=me/(Xe+1e-6);Z*=ke*ke<.45?.45:ke*ke>2.2?2.2:ke*ke}let ve=We[D]*T/Math.max(1,Te);ve>5&&(Z*=Math.max(.15,1-(ve-5)/12))}D===Ke?Z=Math.min(1.6,Z*2.1):wl.has(D)&&(Z*=1.5),s&&Va[D]&&(Z*=2.6),!s&&!pt&&ra[D]>.002&&(Z+=ra[D]*1.9),c&&Zn[D]>.004&&(Z+=Zn[D]*2.2),Z*=qu(Te),B&&(Z=0),jc[D]=Math.min(2.6,Z*o*q),(s||lu)&&(Mo[D]=So[D]*(s?ei[D]:1))}if(Nn){for(let D=0;D<ui.length;D++){let B=ui[D];Vi.set(he[B*3],he[B*3+1],he[B*3+2]);let X=We[B]*Xa[D],O=X/Math.max(1,Ie.position.distanceTo(Vi));X*=lb(R((O-.0052)/.0123,0,1)),s&&(X*=ei[B]),Gi.compose(Vi,ed[D],Xr.set(X,X,X)),Nn.setMatrixAt(D,Gi),ad(B,M,L,dl.subarray(D*4,D*4+4)),dl[D*4+3]=X/(Xa[D]||1)}Nn.instanceMatrix.needsUpdate=!0,Nn.geometry.attributes.aRing.needsUpdate=!0}(s||lu)&&(Ki.attributes.aSize.needsUpdate=!0,lu=s),dn.instanceMatrix.needsUpdate=!0,dn.instanceColor.needsUpdate=!0,A&&(A.needsUpdate=!0),dn.geometry.attributes.aOcc&&(dn.geometry.attributes.aOcc.needsUpdate=!0),Ki.attributes.position.needsUpdate=!0,Ki.attributes.aAlpha.needsUpdate=!0}function eM(n){let o=fl[pl],s=o.mask,c=!!o.cross;if(Ee.on){let m=Ee.u,h=.016;for(let y=0;y<yn;y++){let M=Ae[y];if(!s[M[2]]||c&&Nt[M[0]]===Nt[M[1]]){wo[y]=0;continue}wo[y]=m<=Gc[y]?0:R((m-Gc[y])/h,0,1)}return}let u=Math.min(1,n*5.2);for(let m=0;m<yn;m++){let h=Ae[m],y=s[h[2]]&&!(c&&Nt[h[0]]===Nt[h[1]])?1:0,M=1-m%17*.028;wo[m]+=(y-wo[m])*u*M,Math.abs(y-wo[m])<.004&&(wo[m]=y)}}let jr=new Float32Array(3);function e0(n){let o,s,c;if(n===He)o=he[n*3],s=he[n*3+1],c=he[n*3+2];else{let y=Nt[n];if(!y||!y.pos)return-1;o=y.pos.x,s=y.pos.y,c=y.pos.z}jr[0]=o,jr[1]=s,jr[2]=c;let u=o-he[n*3],m=s-he[n*3+1],h=c-he[n*3+2];return Math.sqrt(u*u+m*m+h*h)}function tM(){if(!yn)return;let n=(.2+.34*(1-H.ten))*H.arc,o=.05+.09*(1-H.ten),s=pt?0:H.bnd,c=H.lnk,u=Ke,m=pt||Di?-1:rn,h=Math.max(200,Ei||1200),y=rs(),M=!y&&u<0&&m<0&&!pt,L=rr.length>0?Zn:null,T=he,A=hp,D=up,B=Sn,X=pp,O=H.lwd,V=0,ne=!1,N=0,q=Ie.position,ae=q.x,Z=q.y,xe=q.z,se=l()*.5/Math.tan(Ie.fov*Math.PI/360),be=0;for(let Te=0;Te<yn;Te++){let De=Ae[Te],_e=De[0],Ce=De[1],Xe=De[2],Qe=wo[Te],me=B[_e],ve=B[Ce],ke=(me<ve?me:ve)*(Xe===0?.55:.4)*c;if(pt&&(ke*=_e===$.root||Ce===$.root?1.7:.3),y?ke*=is.has(Te)?4.2:.05:u>=0?ke*=_e===u||Ce===u?3.4:.22:m>=0&&(ke*=_e===m||Ce===m?2.6:.55),L){let ht=L[_e]>L[Ce]?L[_e]:L[Ce];ht>.004&&(ke+=ht*1.5*c)}Qe<1&&(ke*=Qe>0?Qe:0);let Pe=Uc[Te];Pe||(Pe=Uc[Te]={});let Ue=T[_e*3],ot=T[_e*3+1],Je=T[_e*3+2],Rt=T[Ce*3],lt=T[Ce*3+1],Kt=T[Ce*3+2],Vt=(Ue+Rt)*.5,Ht=(ot+lt)*.5,Hn=(Je+Kt)*.5,Bo=Vt-ae,sn=Ht-Z,Zr=Hn-xe,Mr=Math.sqrt(Bo*Bo+sn*sn+Zr*Zr);ke*=qu(Mr);let Jr=Ue-Rt,Qr=ot-lt,$r=Je-Kt,ln=Math.sqrt(Jr*Jr+Qr*Qr+$r*$r);if(M){let ht=R((ln/h-.3)/.9,0,1);ke*=1-.68*ht*ht*(3-2*ht)}let M0=0,rf=0,S0=0,kd=Math.sqrt(Vt*Vt+Ht*Ht+Hn*Hn);if(kd>1e-4&&ln>1e-4){let ht=Vt/kd,Zt=Ht/kd,Ut=Hn/kd,gn=(ht*Jr+Zt*Qr+Ut*$r)/(ln*ln),vn=ht-gn*Jr,hn=Zt-gn*Qr,wn=Ut-gn*$r,kn=Math.sqrt(vn*vn+hn*hn+wn*wn);if(kn>.08){let Pi=ln*o/kn;M0+=vn*Pi,rf+=hn*Pi,S0+=wn*Pi}}rf+=ln*n;let E0=Vt+M0,A0=Ht+rf,T0=Hn+S0,eo=Ue+(E0-Ue)*(2/3),to=ot+(A0-ot)*(2/3),no=Je+(T0-Je)*(2/3),io=Rt+(E0-Rt)*(2/3),ro=lt+(A0-lt)*(2/3),oo=Kt+(T0-Kt)*(2/3);if(s>.002){let ht=e0(_e);if(ht>=0){let Ut=s*(ln<ht?ln/(ht>.001?ht:.001):1);eo+=(jr[0]-eo)*Ut,to+=(jr[1]-to)*Ut,no+=(jr[2]-no)*Ut}let Zt=e0(Ce);if(Zt>=0){let Ut=s*(ln<Zt?ln/(Zt>.001?Zt:.001):1);io+=(jr[0]-io)*Ut,ro+=(jr[1]-ro)*Ut,oo+=(jr[2]-oo)*Ut}if(ln>1e-4){let Ut=-Jr/ln,gn=-Qr/ln,vn=-$r/ln,hn=(eo-Ue)*Ut+(to-ot)*gn+(no-Je)*vn,wn=hn<ln*.08?ln*.08:hn>ln*.45?ln*.45:hn;if(wn!==hn){let lr=wn-hn;eo+=Ut*lr,to+=gn*lr,no+=vn*lr}let kn=(io-Ue)*Ut+(ro-ot)*gn+(oo-Je)*vn,Pi=kn<ln*.55?ln*.55:kn>ln*.92?ln*.92:kn;if(Pi!==kn){let lr=Pi-kn;io+=Ut*lr,ro+=gn*lr,oo+=vn*lr}}}let L0=0;{let ht=Ue-2*eo+io,Zt=ot-2*to+ro,Ut=Je-2*no+oo,gn=eo-2*io+Rt,vn=to-2*ro+lt,hn=no-2*oo+Kt,wn=ht*ht+Zt*Zt+Ut*Ut,kn=gn*gn+vn*vn+hn*hn;L0=Math.sqrt(wn>kn?wn:kn)}let R0=!1;if(Qe>.002&&ke>.002){Wu.center.set(Vt,Ht,Hn);let ht=ln*.5,Zt=eo-Vt,Ut=to-Ht,gn=no-Hn,vn=Math.sqrt(Zt*Zt+Ut*Ut+gn*gn);vn>ht&&(ht=vn);let hn=io-Vt,wn=ro-Ht,kn=oo-Hn,Pi=Math.sqrt(hn*hn+wn*wn+kn*kn);Pi>ht&&(ht=Pi),Wu.radius=ht,$m.intersectsSphere(Wu)||(R0=!0,be++)}if(Qe<=.002||ke<=.002||R0){if(Pe.zero){V+=X,Pe.str=0,Pe.ty=Xe;continue}for(let ht=0;ht<X;ht++)A[V*3]=Ue,A[V*3+1]=ot,A[V*3+2]=Je,D[V*3]=0,D[V*3+1]=0,D[V*3+2]=0,V++;Pe.str=0,Pe.ty=Xe,Pe.zero=!0,ne=!0;continue}Pe.zero=!1,ne=!0;let sr=h1(L0*se/(Mr>1?Mr:1),ul),Ta=0;if(sr>=6&&Xe!==0){let ht=ln*se/(Mr>1?Mr:1)/(sr-1);Ta=Math.round(26/(ht>.01?ht:.01)),Ta=Ta<2?2:Ta>7?7:Ta}let C0=O*(Xe===0?1:.86);u>=0&&(_e===u||Ce===u)&&(C0*=1.5);let ao=wp[Xe],vs=.5,ZM=ao.r*ke,JM=ao.g*ke,QM=ao.b*ke,$M=(Ze[_e*3]-ao.r)*vs*ke,eS=(Ze[_e*3+1]-ao.g)*vs*ke,tS=(Ze[_e*3+2]-ao.b)*vs*ke,nS=(Ze[Ce*3]-ao.r)*vs*ke,iS=(Ze[Ce*3+1]-ao.g)*vs*ke,rS=(Ze[Ce*3+2]-ao.b)*vs*ke,D0=1/(sr-1);Gt[0]=Ue,Gt[1]=ot,Gt[2]=Je;for(let ht=1;ht<sr;ht++){let Zt=ht*D0*Qe,Ut=1-Zt,gn=Ut*Ut*Ut,vn=3*Ut*Ut*Zt,hn=3*Ut*Zt*Zt,wn=Zt*Zt*Zt;Gt[ht*3]=gn*Ue+vn*eo+hn*io+wn*Rt,Gt[ht*3+1]=gn*ot+vn*to+hn*ro+wn*lt,Gt[ht*3+2]=gn*Je+vn*no+hn*oo+wn*Kt}let oS=C0*.5*Mr/se;for(let ht=0;ht<ul;ht++){let Zt=ht<sr?ht:sr-1,Ut=Zt*3,gn=Gt[Ut],vn=Gt[Ut+1],hn=Gt[Ut+2],wn=(Zt>0?Zt-1:0)*3,kn=(Zt<sr-1?Zt+1:sr-1)*3,Pi=ht>=sr||Ta&&ht>0&&ht<sr-1&&ht%Ta===0,lr=Pi?0:Qe<1&&ht>=sr-2?2.6:1,Od=2*Zt*D0-1,of=Od<0?-Od:0,af=Od>0?Od:0;rd(A,D,V,gn,vn,hn,Gt[kn]-Gt[wn],Gt[kn+1]-Gt[wn+1],Gt[kn+2]-Gt[wn+2],gn-ae,vn-Z,hn-xe,Pi?0:oS,(ZM+$M*of+nS*af)*lr,(JM+eS*of+iS*af)*lr,(QM+tS*of+rS*af)*lr),V+=2,Pi||N++}Pe.ax=Ue,Pe.ay=ot,Pe.az=Je,Pe.bx=Rt,Pe.by=lt,Pe.bz=Kt,Pe.c1x=eo,Pe.c1y=to,Pe.c1z=no,Pe.c2x=io,Pe.c2y=ro,Pe.c2z=oo,Pe.str=ke,Pe.ty=Xe,Pe.prog=Qe}$t.linkLive=N,$t.linkCap=yn*ul,$t.linkCull=be,ne&&(rl.attributes.position.needsUpdate=!0,rl.attributes.aColor.needsUpdate=!0)}function nM(){if(!Ha)return;let n=H.trl>.02&&G>0&&!pt;if(Ha.visible=n,!n){To.setDrawRange(0,0);return}let o=Ie.position,s=o.x,c=o.y,u=o.z,m=l()*.5/Math.tan(Ie.fov*Math.PI/360),h=Fh,y=Nh,M=he,L=Bi,T=H.spr,A=H.trl,D=0,B=0;for(let X=0;X<G&&D<td;X++){let O=Jc[X],V=et[O];if(!V||V.kind==="core"||!V.sp)continue;let ne=Sn[O];if(ne<.06)continue;let N=M[O*3]-s,q=M[O*3+1]-c,ae=M[O*3+2]-u,Z=N*N+q*q+ae*ae;if(Z<1)continue;let xe=Math.sqrt(Z),se=We[O]*m/xe;if(se<.9)continue;let be=se>4?1:(se-.9)/3.1,Te,De,_e=V.y;if(V.kind==="moon"){let sn=V.anchorNode;Te=V.r0*T,t0.set(M[sn*3],M[sn*3+1],M[sn*3+2]),De=t0,_e=0}else if(V.kind==="wiki"){let sn=Math.max(.05,(Ya.step*Ri+V.gapA)/(V.step0||1));Te=(V.inner+(V.r0-V.inner)*sn)*T,De=V.anchor.pos}else Te=V.r0*L,_e*=L,De=V.anchor.pos;if(!De||!(Te>.01))continue;let Ce=Ti[O];Md(V);let Xe=Tn[0],Qe=Tn[1],me=Tn[2],ve=Ln[0],ke=Ln[1],Pe=Ln[2];_e*=1-H.sph;let Ue=-u1/(pa-1)*(V.sp<0?-1:1),ot=V.ecc||0,Je=0,Rt=0,lt=Ze[O*3],Kt=Ze[O*3+1],Vt=Ze[O*3+2],Ht=A*be*R(ne,0,1)*(O===Ke?1.7:1)*qu(xe)*.55;for(let sn=0;sn<pa;sn++)Gu(ot,Ce+sn*Ue),Je=br[0],Rt=br[1],Gt[sn*3]=De.x+(Je*Xe+Rt*ve)*Te+cn[O*3],Gt[sn*3+1]=De.y+(Je*Qe+Rt*ke)*Te+_e+cn[O*3+1],Gt[sn*3+2]=De.z+(Je*me+Rt*Pe)*Te+cn[O*3+2];let Bo=R(se*.2*H.lwd,.8,5)*.5*xe/m;for(let sn=0;sn<pa;sn++){let Zr=sn*3,Mr=(sn>0?sn-1:0)*3,Jr=(sn<pa-1?sn+1:pa-1)*3,Qr=1-sn/(pa-1),$r=Ht*Qr*Qr;rd(h,y,B,Gt[Zr],Gt[Zr+1],Gt[Zr+2],Gt[Jr]-Gt[Mr],Gt[Jr+1]-Gt[Mr+1],Gt[Jr+2]-Gt[Mr+2],Gt[Zr]-s,Gt[Zr+1]-c,Gt[Zr+2]-u,Bo*Qr,lt*$r,Kt*$r,Vt*$r),B+=2}mp[D++]=O}To.setDrawRange(0,D*gp),To.attributes.position.needsUpdate=!0,To.attributes.aColor.needsUpdate=!0,$t.trails=D}let t0=new S.Vector3;function iM(n){if(yn){for(let o=0;o<vr;o++){if(Wa[o]+=Ih[o]*n*60*Math.max(.15,H.spd),Wa[o]>1)if(Wa[o]=0,pt&&($.pRoot.length||$.pCross.length)){let h=Math.random()<.8&&$.pRoot.length||!$.pCross.length?$.pRoot:$.pCross;ol[o]=h[Math.floor(Math.random()*h.length)]}else ol[o]=Math.floor(Math.random()*yn);let s=Uc[ol[o]];if(!s||s.str<.03||s.c1x===void 0){for(let h=0;h<xr;h++)Qc[o*xr+h]=0;continue}let c=s.prog===void 0?1:s.prog,u=wp[s.ty],m=Math.min(1,s.str*2.4);for(let h=0;h<xr;h++){let y=o*xr+h,M=Math.max(0,Wa[o]-h*.022)*c,L=1-M,T=L*L*L,A=3*L*L*M,D=3*L*M*M,B=M*M*M;al[y*3]=T*s.ax+A*s.c1x+D*s.c2x+B*s.bx,al[y*3+1]=T*s.ay+A*s.c1y+D*s.c2y+B*s.by,al[y*3+2]=T*s.az+A*s.c1z+D*s.c2z+B*s.bz;let X=1-h/xr;kh[y]=(2.4+s.str*5)*(.55+.45*X),sl[y*3]=u.r,sl[y*3+1]=u.g,sl[y*3+2]=u.b,Qc[y]=m*Math.sin(M*Math.PI)*X*X}}Zi.attributes.position.needsUpdate=!0,Zi.attributes.aSize.needsUpdate=!0,Zi.attributes.aColor.needsUpdate=!0,Zi.attributes.aAlpha.needsUpdate=!0}}let It={i:[],x:[],y:[],w:[],h:[],p:[],o:[],ok:[],ord:[],keep:[]},Sd=new S.Vector3,rM=["idp","leg","keys","ctl","insp","gen"],vi={n:0,x0:new Float32Array(8),y0:new Float32Array(8),x1:new Float32Array(8),y1:new Float32Array(8),at:-99};function oM(){vi.n=0;let n=f("hud");if(!n||n.style.display==="none")return;let o=n.classList.contains("mindon");for(let s of rM){let c=f(s);if(!c||!c.offsetWidth||c.style.display==="none"||o&&s!=="gen")continue;let u=vi.n++;vi.x0[u]=c.offsetLeft-6,vi.y0[u]=c.offsetTop-6,vi.x1[u]=c.offsetLeft+c.offsetWidth+6,vi.y1[u]=c.offsetTop+c.offsetHeight+6}}function aM(n,o,s,c){for(let u=0;u<vi.n;u++)if(n+s>vi.x0[u]&&n-s<vi.x1[u]&&o+c>vi.y0[u]&&o-c<vi.y1[u])return!0;return!1}function sM(){if(!Fr||!Fr.length)return;(qr-vi.at>12||qr<vi.at)&&(oM(),vi.at=qr);let n=Ie.position,o=a(),s=l(),c=s*.5/Math.tan(Ie.fov*Math.PI/360),u=Ie.matrixWorld.elements,m=u[4],h=u[5],y=u[6],M=0;for(let T=0;T<Fr.length;T++){let A=Fr[T];A.vis===void 0&&(A.vis=1);let D=A.node?Vi.set(he[A.idx*3],he[A.idx*3+1],he[A.idx*3+2]):Vi.copy(A.get()),B=n.distanceTo(D),X,O;if(A.node){let me=J[A.idx];X=R((A.far-B)/A.far,0,1)*(Sn[A.idx]<.05?0:Sn[A.idx]>.5?1:.12),X*=A.idx===Ke?1.4:me.inb>12?1:.72,pt&&Sn[A.idx]>.5&&(X=Math.max(X,.96)),O=me.inb|0,A.idx===Ke?O+=4e5:A.idx===Ot?O+=2e5:A.idx===rn&&(O+=1e5)}else{let me=A.cat.vis===void 0?A.cat.on?1:0:A.cat.vis;X=R((A.far-B)/(A.far*.55),0,1)*(.12+me*.83)*(me<.05?0:1),B<130&&(X*=R(B/130,0,1)),O=5e5+(A.cat.tier===0?4e5:0)+(A.cat.n|0)}if(X=R(X,0,1),X<=.012){A.sprite.visible=!1;continue}let V=R(B*.0016,.55,5.2),N=(A.node?12+Math.min(7,J[A.idx].inb*.12):A.cat.tier===0?22:17)*V,q=A.sprite.material.map.image,ae=q.width/q.height,Z=N*c/B,se=((A.node?We[A.idx]:A.cat.sR||A.cat.R||6)*c/B*1.3+Z*.62+5)*B/c,be=D.x+m*se,Te=D.y+h*se,De=D.z+y*se;if(Sd.set(be,Te,De).project(Ie),Sd.z>1){A.sprite.visible=!1;continue}let _e=(Sd.x*.5+.5)*o,Ce=(-Sd.y*.5+.5)*s,Xe=Z*ae*.5,Qe=Z*.5;if(_e+Xe<0||_e-Xe>o||Ce+Qe<0||Ce-Qe>s){A.sprite.visible=!1;continue}A.sprite.position.set(be,Te,De),A.sprite.scale.set(N*ae,N,1),It.i[M]=T,It.x[M]=_e,It.y[M]=Ce,It.w[M]=Xe,It.h[M]=Qe,It.p[M]=O,It.o[M]=X,It.ord[M]=M,M++}It.ord.length=M,It.ord.sort((T,A)=>It.p[A]-It.p[T]);let L=0;for(let T=0;T<M;T++){let A=It.ord[T],D=It.p[A]>=4e5&&It.p[A]<5e5||!aM(It.x[A],It.y[A],It.w[A],It.h[A]);for(let B=0;B<L;B++){let X=It.keep[B];if(Math.abs(It.x[A]-It.x[X])<(It.w[A]+It.w[X])*.96&&Math.abs(It.y[A]-It.y[X])<(It.h[A]+It.h[X])*1.15){D=!1;break}}D&&(It.keep[L++]=A),It.ok[A]=D}for(let T=0;T<M;T++){let A=Fr[It.i[T]];A.vis+=((It.ok[T]?1:0)-A.vis)*.16;let D=It.o[T]*A.vis;A.sprite.material.opacity=D,A.sprite.visible=D>.012}}let lM=16.7;function Io(n,o,s){let c=f(n);c.textContent=o<.1?"<0.1":o.toFixed(o<10?1:0),c.parentElement.classList.toggle("hot",o>lM*s)}function cM(n){if(qr%6)return;f("s-fps").textContent=kl.toFixed(0),$t.on&&(Io("p-sim",$t.sim,.35),Io("p-pick",$t.pick,.12),Io("p-inst",$t.inst,.2),Io("p-link",$t.link,.25),Io("p-trlms",$t.trl,.15),Io("p-spr",$t.spr,.15),Io("p-draw",$t.draw,.3),Io("p-tot",$t.tot,.9),f("p-lv").textContent=$t.linkCap?$t.linkLive+" / "+$t.linkCap:"\u2014",f("p-cull").textContent=yn?$t.linkCull+" / "+yn:"\u2014",f("p-trl").textContent=$t.trails+" / "+td,f("p-dc").textContent=Tt.info.render.calls),f("s-dist").textContent=de.dist.toFixed(0)+" U";{let s=l()*.5/Math.tan(Ie.fov*Math.PI/360),c=de.dist/s;f("s-scale").textContent=G?(c>=10?c.toFixed(0):c>=1?c.toFixed(1):c.toFixed(2))+" U/PX":"\u2014";let u=f("sbar");if(u)if(!G||c<=0)u.style.display="none";else{let m=c*130,h=Math.pow(10,Math.floor(Math.log10(m))),y=m/h,M=(y<1.5?1:y<3.5?2:y<7.5?5:10)*h;u.style.display="block",u.firstElementChild.style.width=(M/c).toFixed(1)+"px",f("sbar-t").textContent=(M>=1e3?M/1e3+"k":M)+" U"}}Ke>=0&&!(qr&7)&&nm(),f("hud").classList.toggle("idle",performance.now()-im>9e3&&!ud&&!Ee.on&&!pt&&!Kr);let o=f("tgt");rn>=0&&rn<G?(Vi.set(he[rn*3],he[rn*3+1],he[rn*3+2]).project(Ie),Vi.z<1?(o.style.display="block",o.style.left=(Vi.x*.5+.5)*a()+"px",o.style.top=(-Vi.y*.5+.5)*l()+"px",o.textContent=J[rn].n):o.style.display="none"):o.style.display="none",Ga&&performance.now()>Ga&&(f("toast").classList.remove("on"),Ga=0)}let Rn={host:!0,running:!1,raf:0,lost:!1};["pointerdown","pointermove","wheel"].forEach(n=>{En.addEventListener(n,Y,{passive:!0}),f("hud").addEventListener(n,Y,{passive:!0})});function dM(n){let o=E.on?E.step:j.rec?33.333333333333336:j.on?0:n-x.touch>x.idleMs&&!Ee.on?x.idleStep:0;return x.on=o>0,o&&n-x.last<o-4?!0:(x.last=n,!1)}let $t={on:!1,sim:0,pick:0,inst:0,link:0,trl:0,spr:0,draw:0,tot:0,linkLive:0,linkCap:0,linkCull:0,trails:0,t0:0};function ko(n,o){$t[n]=$t[n]*.9+o*.1}function Oo(){return $t.on?performance.now():0}function hM(){return Rn.host&&!document.hidden&&!Rn.lost}function Ed(){hM()?i0():n0()}function n0(){Rn.running=!1,Rn.raf&&(cancelAnimationFrame(Rn.raf),Rn.raf=0),ye.ctx&&ye.ctx.state==="running"&&ye.ctx.suspend().catch(()=>{})}function i0(){Rn.running=!0,Uu=performance.now(),Rn.raf&&cancelAnimationFrame(Rn.raf),Rn.raf=requestAnimationFrame(r0),ye.on&&ye.ctx&&ye.ctx.state==="suspended"&&ye.ctx.resume().catch(()=>{})}_("visibilitychange",Ed),En.addEventListener("webglcontextlost",()=>{Rn.lost=!0,Ed(),P(k("gl.lost"),8e3)},!1),En.addEventListener("webglcontextrestored",()=>{Rn.lost=!1,Yr(),Ed(),P(k("gl.restored"))},!1);function r0(n){if(Rn.raf=requestAnimationFrame(r0),dM(n))return;let o=Math.min(64,n-Uu);Uu=n;let s=o/1e3;if(kl=kl*.92+1e3/Math.max(1,o)*.08,pb(n),qr++,!Wt){Wh();return}H.frs>=.5&&Date.now()-cp>v1&&zh();let c=Oo();Cb(s),Pb(),Db(),Ib(s),Nb(s),xb(s),y1(s),l1(s),Vu(o),pt||Bb(s),Wb(s),j_(s),V_(s);let u=Oo();Fl&&!Di&&!j.on&&(rn=nu(wr.x,wr.y,rn));let m=Oo();eM(s),J_(),Z_(),$_();let h=Oo();tM();let y=Oo();nM();let M=Oo();iM(s),sM();let L=Oo();u_(),m_(),p_();let T=n*.001;for(let O=0;O<yr.length;O++)yr[O].uniforms&&(yr[O].uniforms.uTime.value=T);if(Op.value=H.det,Ke>=0&&Ke<G&&gr?(gr.visible=!0,gr.position.set(he[Ke*3],he[Ke*3+1],he[Ke*3+2]),$c.scale.setScalar(We[Ke]*2.9),$c.quaternion.copy(Ie.quaternion)):gr&&(gr.visible=!1),Ot>=0&&Ot<G&&ti){let O=Ee.on?R(ei[Ot],0,1):1;if(ti.visible=O>.03,ti.visible){ti.position.set(he[Ot*3],he[Ot*3+1],he[Ot*3+2]);let V=.5+.5*Math.sin(en*.0031),ne=Math.max(We[Ot]*(3.6+V*.5),E.on?Ie.position.distanceTo(ti.position)*.016*(1+V*.14):0);cl.scale.setScalar(ne),cl.quaternion.copy(Ie.quaternion),cl.material.opacity=(.45+V*.42)*O,qa.scale.setScalar(ne*1.3),qa.quaternion.copy(Ie.quaternion),qa.rotateZ(en*.0012),qa.material.opacity=(.28+(1-V)*.36)*O;let N=Ie.position.distanceTo(ti.position),q=R(N*.011,We[Ot]*.5,We[Ot]*2.6);Ym.set(0,1,0).applyQuaternion(Ie.quaternion),ua.position.copy(Ym).multiplyScalar(ne*1.9+q*1.6),ua.scale.setScalar(q),ua.quaternion.copy(Ie.quaternion),ua.rotateZ(Math.PI*.25),ua.material.opacity=(.45+V*.4)*O}}else ti&&(ti.visible=!1);rn>=0&&rn<G&&rn!==Ke&&Ji?(Ji.visible=!0,Ji.position.set(he[rn*3],he[rn*3+1],he[rn*3+2]),Ji.scale.setScalar(We[rn]*2.2),Ji.quaternion.copy(Ie.quaternion)):Ji&&(Ji.visible=!1),Yh.position.copy(Ie.position).normalize();let A=l()*.5/Math.tan(Ie.fov*Math.PI/360);if(In&&G&&!pt){let O=Ie.position.length(),V=(Ee.on?R(ei[He],0,1):1)*(pt?0:1),ne=R((We[He]||17)*9+O*.05,90,900)*V;Mt&&In.position.copy(Mt.position),In.visible=V>.02;let N=R(O/((We[He]||17)*40),0,1),q=Mt?Ie.position.distanceTo(Mt.position):O,ae=wt.fog?wt.fog.density*q:0,Z=Math.exp(-ae*ae),xe=Z>.3?Z:.3,se=Z>.2?Z:.2,be=Z>.08?Z:.08;if(In.material.opacity=.85*V*(.38+.62*N)*xe,In.scale.setScalar(ne),Qn){Qn.visible=V>.02,Qn.position.copy(In.position),Qn.material.rotation=en*21e-6;let Te=1+Math.sin(en*43e-5+.8)*.075;Qn.scale.setScalar(ne*1.62*Te),Qn.material.opacity=(.34+.16*Math.sin(en*67e-5))*V*se}if(An){let Te=(We[He]||17)*A/Math.max(1,O),De=R((90-Te)/80,0,1),_e=H.glare*De*V;if(An.visible=_e>.004,An.visible){An.position.copy(In.position);let Ce=R(O*.52,ne*2.2,O*.88);An.scale.setScalar(Ce),An.material.opacity=Math.min(.95,_e*.78)*be;let Xe=R((H.glare-.5)/1.9,0,1)*De*V;if(Xe>.008){let Qe=fb();Qe.visible=!0,Qe.position.copy(In.position),Qe.scale.setScalar(Ce*1.45),Qe.material.opacity=Math.min(.95,Xe*1.24)}else pn&&(pn.visible=!1)}else pn&&(pn.visible=!1)}}let D=R(Bi*Bi,.02,3);if(Or&&(Or.rotation.y=en*75e-7,Or.scale.setScalar(Bi),Or.material.uniforms.uBright.value=fi.dust*D),ni){ni.rotation.y=-en*42e-7,ni.scale.setScalar(Bi),ni.material.uniforms.uBright.value=fi.gas*D,ni.material.uniforms.uTime.value=en*.001;let O=ni.material.uniforms;Mt&&G?(O.uSunV.value.copy(Mt.position).applyMatrix4(Ie.matrixWorldInverse),O.uSunR.value=Math.max(400,(We[He]||17)*40),Mt.userData.surfMat&&O.uSunCol.value.copy(Mt.userData.surfMat.uniforms.uCore.value)):O.uSunV.value.set(0,0,-1e9)}if(er&&(er.material.uniforms.uBright.value=fi.dome),er&&(er.visible=fi.dome>.002),ni&&(ni.visible=fi.gas>5e-4),Or&&(Or.visible=fi.dust>.002),xa&&(xa.visible=fi.band>.002),Ir&&(Ir.visible=fi.motes>.002),tr&&(tr.visible=H.vei>.002),Ir){let O=Ir.material.uniforms;O.uCam.value.copy(Ie.position),O.uTime.value=en*.001,O.uBright.value=fi.motes}if(va){va.rotation.y=en*11e-7;let O=sd.uniforms;Mt&&G?O.uSunDir.value.copy(Mt.position).applyMatrix4(Ie.matrixWorldInverse).normalize():O.uSunDir.value.set(0,0,1)}xa&&(xa.rotation.y=en*8e-7);{let O=Ie.position;va&&va.position.copy(O),xa&&xa.position.copy(O),ni&&ni.position.copy(O),tr&&tr.position.copy(O),er&&er.position.copy(O)}cM(n),q_(s);let B=Oo(),X=Wh();if(j.on&&a_(),$t.on){let O=performance.now();ko("sim",u-c),ko("pick",m-u),ko("inst",h-m),ko("link",y-h),ko("trl",M-y),ko("spr",L-M),ko("draw",O-B),ko("tot",O-c)}}function Xu(){Object.assign(fi,Y1(H.str));let n=sd.uniforms;n.uBright.value=fi.stars,n.uLimit.value=fi.limit,va&&(va.visible=fi.stars>0),Ka.forEach(o=>{o.uniforms.uBright.value=fi.band,o.uniforms.uTwinkle.value=0})}function Yu(){f("ctl").classList.toggle("adv",!!H.adv),f("advtog").textContent=(H.adv?"\u25BE ":"\u25B8 ")+"ADVANCED"}let uM=[["leg","legFold","legfold"],["keys","keysFold","keysfold"]];function fM(){uM.forEach(([n])=>f(n).classList.remove("fold"))}let Ea=new Map;function pM(n){return n.get?n.get():Math.round(H[n.k]*n.sc)}function mM(n,o){if(n.set){n.set(o);return}H[n.k]=R(o,n.min,n.max)/n.sc}function gM(n){return n.get?n.get():H[n.k]}function Bl(n){return H.pin.indexOf(n)>=0}function vM(){let n=document.createElement("div");return n.id="ctltabs",yo.forEach(([o])=>{let s=document.createElement("u");s.dataset.g=o,s.onclick=()=>{H.tab=o,ri&&(ri.value=""),Hi="",Aa(),ar(),an(),mn()},n.appendChild(s),ju.set(o,s)}),ri=document.createElement("input"),ri.id="ctlfind",ri.type="text",ri.spellcheck=!1,ri.oninput=()=>{Hi=ri.value.trim().toLowerCase(),Aa(),ar(),mn()},n.appendChild(ri),n}let ps=null;function o0(n){ps=n||null,a0()}function a0(){if(!ms)return;let n=ps?"kd."+ps.k:"",o=!!(n&&ie[n]);ms.classList.toggle("desc",o),ms.textContent=o?k(n):Hi&&!At.some(s0)?k("ctl.none"):k("pin.hint")}function xM(){At.forEach(n=>{let o=document.createElement("div");o.className="sl";let s=document.createElement("b"),c=document.createElement("span");c.className="nm";let u=document.createElement("u");u.className="pin";let m=document.createElement("span"),h=document.createElement("i");c.append(u,m),s.append(c,h);let y=document.createElement("input");y.type="range",y.min=n.min,y.max=n.max,y.step=n.step||1,o.append(s,y),u.onclick=()=>yM(n.k),o.addEventListener("pointerenter",()=>o0(n)),o.addEventListener("pointerleave",()=>{ps===n&&o0(null)}),y.addEventListener("input",M=>{mM(n,+M.target.value),n.apply&&n.apply(),ar(),an()}),Ea.set(n.k,{wrap:o,lab:m,val:h,inp:y,pin:u})}),ms=document.createElement("div"),ms.id="ctlhint",f("ctladv").parentNode.insertBefore(vM(),f("ctladv")),Aa()}let ju=new Map,ms=null,ri=null,Hi="";function s0(n){if(!Hi)return!1;let o=n.label.toLowerCase(),s=(n.i18n?k(n.i18n):"").toLowerCase();return o.indexOf(Hi)>=0||!!s&&s.indexOf(Hi)>=0}function Aa(){let n=f("ctlgrid"),o=f("ctladv");At.forEach(m=>{let h=Ea.get(m.k),y=Bl(m.k);h.wrap.classList.toggle("pinned",y),y&&n.appendChild(h.wrap)});let s=yo.some(([m])=>m===H.tab)?H.tab:yo[0][0],c=At.filter(m=>!Bl(m.k)&&(Hi?s0(m):m.g===s&&m.k!=="sScale")),u=f_();s==="sound"&&!Hi?(o.appendChild(u),Cl()):u.parentNode===o&&o.removeChild(u),c.forEach(m=>o.appendChild(Ea.get(m.k).wrap)),At.forEach(m=>{let h=Ea.get(m.k);!Bl(m.k)&&c.indexOf(m)<0&&h.wrap.parentNode===o&&(o.removeChild(h.wrap),ps===m&&(ps=null))}),yo.forEach(([m])=>{let h=ju.get(m);h&&(h.classList.toggle("on",!Hi&&m===s),h.classList.toggle("empty",!At.some(y=>y.g===m&&!Bl(y.k))))}),o.classList.toggle("found",!!Hi),o.appendChild(ms)}function yM(n){let o=H.pin.indexOf(n);o>=0?H.pin.splice(o,1):H.pin.push(n),o>=0&&(H.adv=!0),Aa(),ar(),an(),mn(),P(k(o>=0?"pin.off":"pin.on",{n:(Yn[n]||{}).label||n}))}let Ku=0;function l0(){Ku||(Ku=requestAnimationFrame(()=>{Ku=0;let n=0,o=(c,u)=>{c.classList.remove("scan");let m=c.scrollWidth-c.clientWidth;u&&m>2?(c.style.setProperty("--nmx",-m-3+"px"),c.style.setProperty("--nmd",(n%7*1.8).toFixed(1)+"s"),c.classList.add("scan")):c.style.removeProperty("--nmx"),n++};Ea.forEach(c=>{c.lab&&c.lab.parentNode&&o(c.lab.parentNode,!0)});let s=f("ctl");s&&s.querySelectorAll(".mini").forEach(c=>{if(!c.firstElementChild&&c.firstChild){let m=document.createElement("span");for(;c.firstChild;)m.appendChild(c.firstChild);c.appendChild(m)}let u=c.firstElementChild;o(c,!!u&&u.tagName==="SPAN"&&c.children.length===1)})}))}function ar(){Yu(),fM(),At.forEach(o=>{let s=Ea.get(o.k);if(!s)return;let c=Bl(o.k);s.inp.value=pM(o),s.lab.textContent=o.i18n?k(o.i18n):o.label,s.val.textContent=o.fmt(gM(o)),s.pin.textContent=c?"\u25C6":"\u25C7",s.pin.title=k(c?"pin.off":"pin.on",{n:o.label})}),yo.forEach(([o,s])=>{let c=ju.get(o);c&&(c.textContent=k(s))}),ri&&(ri.placeholder=k("ctl.find")),a0(),Xu(),Zh();let n=Js();r.querySelectorAll("#qsel u").forEach(o=>o.classList.toggle("on",o.dataset.q===n))}r.querySelectorAll("#qsel u").forEach(n=>{n.onclick=()=>Qs(n.dataset.q)}),f("r-broken").onclick=()=>{!G||!(jt.meta.broken|0)||(zr=!zr,f("r-broken").classList.toggle("on",zr),P(k(zr?"broken.on":"broken.off")))},f("s-fps").onclick=()=>{$t.on=!$t.on,f("perf").classList.toggle("on",$t.on),$t.on&&(qr=0),mn()},f("instog").onclick=()=>{!f("idp").classList.toggle("inst")&&$t.on&&f("s-fps").onclick(),mn()},f("advtog").onclick=()=>{H.adv=f("ctl").classList.toggle("adv"),Yu(),an(),mn()},f("b-rst").onclick=()=>{Object.assign(H,Rr),H.pin=ia.slice();let n=new Set;At.forEach(o=>{if(!(!o.apply||n.has(o.apply))){n.add(o.apply);try{o.apply()}catch(s){console.error("vault-orrery: reset "+o.k,s)}}}),Hi="",ri&&(ri.value=""),H.deckAt=null,Aa(),ar(),m1(),an(),P("CONTROLS RESET"),mn()};let wM=!1;f("ctltl").onclick=()=>{wM=!0;let n=f("ctl").classList.toggle("fold");f("ctlfold").textContent=n?"[ + ]":"[ \u2212 ]",l0()};let gs=240,bM=316,Zu=null,Ul=null;function c0(n,o,s){H.deckAt={x:Math.round(n),y:Math.round(o),w:Math.round(R(s,gs,Math.max(gs,a()-24)))},mn()}let _M=[["nw",-1,-1],["ne",1,-1],["sw",-1,1],["se",1,1]];{let n=f("ctl"),o=f("ctltl"),s=()=>({x:n.offsetLeft-(H.deckAt?0:n.offsetWidth/2),y:n.offsetTop,w:n.offsetWidth}),c=0,u=0,m=0,h=null,y=0,M=1,L=1;_M.forEach(([A,D,B])=>{let X=document.createElement("div");X.className="ctlgrip "+A,X.title="DRAG TO RESIZE",X.addEventListener("pointerdown",O=>{M=D,L=B,T(O,2)}),n.appendChild(X)}),Zu=A=>{if(!c)return;let D=A.clientX-u,B=A.clientY-m;if(c===1){y=Math.max(y,Math.abs(D)+Math.abs(B)),c0(h.x+D,h.y+B,h.w);return}let X=h.w+D*M,O=R(X,gs,Math.max(gs,a()-24)),V=M<0?h.x+(h.w-O):h.x,ne=L<0?h.y+B:h.y;c0(V,ne,O)},Ul=()=>{c&&(c=0,r.classList.remove("dragdeck"),an())};let T=(A,D)=>{A.button===0&&(c=D,D===1&&(y=0),h=s(),u=A.clientX,m=A.clientY,r.classList.add("dragdeck"),A.preventDefault())};o.addEventListener("dblclick",()=>{H.deckAt=null,an(),mn(),P(k("deck.reset"))})}g("pointermove",n=>{Zu&&Zu(n)}),g("pointerup",()=>{Ul&&Ul()}),g("pointercancel",()=>{Ul&&Ul()});function mn(){let n=f("insp"),o=f("dock"),s=a(),c=l();MM(s,c);let u=o.offsetLeft,m=o.offsetWidth,h=u+m/2>s/2,y=h?16:u+m+10,M=h?u-10:s-16,L=R(o.offsetTop,12,Math.max(12,c-24));n.style.right=s-M+"px";let T=h?u-10:y;Q.forEach(O=>{let V=f(O),ne=W.open.has(O);if(f("dk-"+O).classList.toggle("on",ne),V.style.display=ne?"":"none",!ne)return;if(V.classList.remove("fold"),V.style.right="auto",V.style.bottom="auto",V.style.transform="none",V.style.top="12px",V.style.maxHeight=Math.max(90,c-24)+"px",O==="ctl"){let q=h?T-16:s-T-16,ae=H.deckAt&&+H.deckAt.w>0?+H.deckAt.w:bM,Z=R(ae,gs,Math.max(gs,q));V.style.width=Z+"px",V.classList.toggle("tight",Z<430);let xe=V.querySelector(".bd");xe&&(xe.style.maxHeight=Math.max(90,c-24-46)+"px"),l0()}let N=Math.max(12,Math.min(L,c-12-V.offsetHeight));V.style.top=N+"px",h?(T-=V.offsetWidth,V.style.left=Math.max(8,T)+"px",T-=10):(V.style.left=T+"px",T+=V.offsetWidth+10)}),Q.forEach(O=>{let V=f(O).querySelector(".dkb .dkpin");V&&V.classList.toggle("on",W.pin.has(O))}),n.style.display=Ju()?"":"none";let A=n.offsetWidth||352,D=0;W.open.forEach(O=>{let V=f(O);V.offsetLeft+V.offsetWidth>M-A-10&&V.offsetLeft<M&&(D=Math.max(D,V.offsetTop+V.offsetHeight))}),n.style.maxHeight=Math.max(96,Math.min(c*.64,c-32,D?c-D-16-12:c))+"px";let B=Math.max(120,M-(Ju()?(n.offsetWidth||352)+14:0)-y),X=f("gen");X.style.width=Math.min(660,B)+"px",X.style.left=Math.round(y+B/2)+"px",f("genmarks").style.display=B<380?"none":"",am()}function Ju(){return Ke>=0&&Ke<G&&a()>=620}function MM(n,o){let s=f("dock"),c=H.railAt;if(!c){s.style.left="10px",s.style.top="12px";return}let u=s.offsetWidth,m=s.offsetHeight;s.style.left=Math.round(10+R(+c.fx,0,1)*Math.max(0,n-u-20))+"px",s.style.top=Math.round(12+R(+c.fy,0,1)*Math.max(0,o-m-24))+"px"}function SM(n){W.open.forEach(o=>{W.pin.has(o)||W.open.delete(o)}),W.open.add(n),mn()}function d0(n){W.open.delete(n),W.pin.delete(n)&&h0(),mn()}function EM(n){W.open.has(n)?d0(n):SM(n)}function AM(n){W.pin.has(n)?W.pin.delete(n):(W.pin.add(n),W.open.add(n)),h0(),mn()}function h0(){H.dock=[...W.pin],an()}function Qu(){let n=!1;return W.open.forEach(o=>{W.pin.has(o)||(W.open.delete(o),n=!0)}),n&&mn(),n}Q.forEach(n=>{f("dk-"+n).onclick=()=>EM(n);let o=document.createElement("span");o.className="dkb";let s=document.createElement("i");s.className="fx dkpin",s.textContent="PIN",s.setAttribute("data-i18n-title","dock.pin"),s.title=k("dock.pin"),s.onclick=u=>{u.stopPropagation(),AM(n)};let c=document.createElement("i");c.className="fx dkx",c.textContent="\u2715",c.setAttribute("data-i18n-title","dock.close"),c.title=k("dock.close"),c.onclick=u=>{u.stopPropagation(),d0(n)},o.appendChild(s),o.appendChild(c),f(n).firstElementChild.appendChild(o)}),f("dk-search").onclick=()=>pd(),f("dk-gen").onclick=()=>Ma();let $u=null,zl=null;{let n=f("dock"),o=null,s=!1,c=!1;n.addEventListener("pointerdown",m=>{m.button===0&&(o={x:m.clientX,y:m.clientY,l:n.offsetLeft,t:n.offsetTop,grip:m.target===f("dkgrip")},s=!1,o.grip&&m.preventDefault())}),n.addEventListener("click",m=>{c&&(c=!1,m.stopPropagation(),m.preventDefault())},!0);let u=(m,h)=>{let y=a(),M=l(),L=n.offsetWidth,T=n.offsetHeight;return{fx:R((m-10)/Math.max(1,y-L-20),0,1),fy:R((h-12)/Math.max(1,M-T-24),0,1)}};$u=m=>{if(!o)return;let h=m.clientX-o.x,y=m.clientY-o.y;if(!s){if(Math.abs(h)+Math.abs(y)<(o.grip?1:6))return;s=!0,n.classList.remove("snap"),r.classList.add("dragrail")}H.railAt=u(o.l+h,o.t+y),mn()},zl=()=>{if(!o||(o=null,!s))return;s=!1,c=!0,setTimeout(()=>{c=!1},0),r.classList.remove("dragrail");let m=a(),h=l(),y=n.offsetWidth,M=n.offsetHeight,L=H.railAt,T=28;L.fx*(m-y-20)<T&&(L.fx=0),(1-L.fx)*(m-y-20)<T&&(L.fx=1),L.fy*(h-M-24)<T&&(L.fy=0),(1-L.fy)*(h-M-24)<T&&(L.fy=1),L.fx===0&&L.fy===0&&(H.railAt=null),n.classList.add("snap"),mn(),setTimeout(()=>n.classList.remove("snap"),220),an()},f("dkgrip").addEventListener("dblclick",()=>{H.railAt=null,an(),mn(),P(k("dock.reset"))})}g("pointermove",n=>{$u&&$u(n)}),g("pointerup",()=>{zl&&zl()}),g("pointercancel",()=>{zl&&zl()});let Gl=/\.(md|markdown|txt)$/i,TM=/(^|\/)(\.obsidian|\.smart-env|\.claude|\.git|\.trash|node_modules|assets)(\/|$)/i,u0=/(\d{4})-(\d{2})-(\d{2})/,Ad=[],Td=[];try{let n=JSON.parse(w.get("orrery2.ignore")||"[]");Array.isArray(n)&&(Ad=n.filter(o=>typeof o=="string"))}catch(n){}function f0(){Td=[],Ad.forEach(n=>{let o=String(n).trim();if(o)if(o.length>1&&o[0]==="/"&&o[o.length-1]==="/")try{Td.push(new RegExp(o.slice(1,-1),"i"))}catch(s){console.warn("vault-orrery: bad ignore pattern",o,s)}else{let s=o.replace(/^\/+/,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");s&&Td.push(new RegExp("^"+s,"i"))}})}f0();function LM(n){Ad=Array.isArray(n)?n.filter(o=>typeof o=="string"):[],f0();try{w.set("orrery2.ignore",JSON.stringify(Ad))}catch(o){}}let ef=n=>TM.test("/"+n),tf=n=>Td.some(o=>o.test(String(n).replace(/^\/+/,"")));function nf(n){return String(n).trim().replace(/^[\["']+|[\]"']+$/g,"").trim()}function RM(n){n.charCodeAt(0)===65279&&(n=n.slice(1));let o=/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/.exec(n);if(!o)return{fm:{},body:n};let s={},c=null;return o[1].split(/\r?\n/).forEach(u=>{let m=/^[ \t]*-[ \t]+(.*)$/.exec(u);if(m){c&&(Array.isArray(s[c])||(s[c]=[]),s[c].push(nf(m[1])));return}let h=/^([^:#][^:]*):[ \t]*(.*)$/.exec(u);if(!h)return;c=h[1].trim().toLowerCase();let y=h[2].trim();if(!y){s[c]=[];return}s[c]=y[0]==="["?y.slice(1).replace(/\]\s*$/,"").split(",").map(nf).filter(Boolean):nf(y)}),{fm:s,body:n.slice(o[0].length)}}let CM=new Set(["tags","\uD0DC\uADF8","tag","keywords","date","created","\uB0A0\uC9DC","datetime","sources","\uCD9C\uCC98","source","aliases","alias","cssclasses","cssclass","position"]);function DM(n){if(!n||typeof n!="object")return null;let o=[];for(let s in n){if(o.length>=16)break;let c=String(s).trim();if(!c||CM.has(c.toLowerCase()))continue;let u=n[s];if(u==null||u==="")continue;let m;if(Array.isArray(u)){let h=u.map(y=>String(y).trim()).filter(Boolean).slice(0,8);if(!h.length)continue;m=h.join(", ")}else{if(typeof u=="object")continue;m=String(u).trim()}m&&o.push([c,m.length>90?m.slice(0,89)+"\u2026":m])}return o.length?o:null}function PM(n){let o=n.tags||n.\uD0DC\uADF8||n.tag||n.keywords||[];return typeof o=="string"&&(o=o.split(/[,\s]+/)),(Array.isArray(o)?o:[]).map(s=>String(s).replace(/^#/,"").trim()).filter(Boolean).slice(0,24)}function FM(n,o){let s=[],c=new Set;return[].concat(n||[],Array.isArray(o)?o:[]).forEach(u=>{let m=String(u).replace(/^#/,"").trim();if(!m)return;let h=m.toLowerCase();c.has(h)||(c.add(h),s.push(m))}),s.slice(0,24)}function NM(n,o){let s=n.date||n.created||n.\uB0A0\uC9DC||n.datetime||"";Array.isArray(s)&&(s=s[0]||"");let c=u0.exec(String(s))||u0.exec(o.split("/").pop());return c?c[0]:""}function IM(n){return n.replace(/```[\s\S]*?```/g," ").replace(/^\s*>\s?/gm,"").replace(/^#{1,6}\s*/gm,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[\[([^\]|#^]+)(?:[#^][^\]|]*)?(?:\|([^\]]*))?\]\]/g,(o,s,c)=>(c||s).trim()).replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").replace(/^\s*[-*+]\s+/gm,"").replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim().slice(0,620)}function kM(n,o){let s=n.map(me=>me.path.replace(/\\/g,"/").split("/")),c="";if(s.length&&s[0].length>1){let me=s[0][0];s.every(ve=>ve.length>1&&ve[0]===me)&&(c=me)}let u=n.map((me,ve)=>{let ke=s[ve].slice(c?1:0),Pe=ke.join("/"),{fm:Ue,body:ot}=RM(me.text),Je=me.meta&&typeof me.meta=="object"?me.meta:null;return{rel:Pe,fp:me.path.replace(/\\/g,"/"),dir:ke.slice(0,-1).join("/"),name:ke[ke.length-1].replace(Gl,""),fm:Ue,body:ot,hm:Je,t:FM(PM(Ue),Je&&Je.tags),pr:DM(Je&&Je.props||Ue),d:NM(Ue,Pe),mt:Je&&+Je.mtime>0?+Je.mtime:0,ct:Je&&+Je.ctime>0?+Je.ctime:0,w:(ot.match(/\S+/g)||[]).length,sz:me.text.length,x:IM(ot)}}),m=u.length,h=new Map,y=new Map;u.forEach((me,ve)=>{let ke=me.name.toLowerCase();h.has(ke)||h.set(ke,ve),y.set(me.rel.toLowerCase().replace(Gl,""),ve)});let M=me=>{let ve=String(me).split("#")[0].split("|")[0].trim().replace(/^\[+|\]+$/g,"").replace(/^[.\/]+/,"").replace(Gl,"").toLowerCase();if(!ve)return-1;if(y.has(ve))return y.get(ve);let ke=ve.split("/").pop();return h.has(ke)?h.get(ke):-1},L=/\[\[([^\]\[|#^]+)(?:[#^][^\]|]*)?(?:\|[^\]]*)?\]\]/g,T=/\]\(([^)\s]+\.(?:md|markdown))\)/gi,A=0,D=new Int32Array(m),B=new Array(m).fill(null),X=new Int32Array(m),O=new Map;u.forEach((me,ve)=>{O.set(me.fp.toLowerCase(),ve),O.set(me.rel.toLowerCase(),ve)});let V=me=>{let ve=String(me).replace(/\\/g,"/").replace(/^\.?\//,"").toLowerCase();return O.has(ve)?O.get(ve):M(ve)},ne=u.map((me,ve)=>{if(me.hm&&me.hm.links){let Ue=new Set;Object.keys(me.hm.links).forEach(Je=>{let Rt=V(Je);Rt>=0&&(Ue.add(Rt),X[Rt]+=Math.max(1,me.hm.links[Je]|0))});let ot=Math.max(0,me.hm.broken|0);return A+=ot,D[ve]=ot,Array.isArray(me.hm.brokenNames)&&me.hm.brokenNames.length&&(B[ve]=me.hm.brokenNames.map(String)),Ue}let ke=new Set,Pe;for(L.lastIndex=0;Pe=L.exec(me.body);){let Ue=M(Pe[1]);if(Ue>=0)ke.add(Ue),X[Ue]++;else{A++,D[ve]++;let ot=Pe[1].trim();B[ve]||(B[ve]=[]),B[ve].length<24&&B[ve].indexOf(ot)<0&&B[ve].push(ot)}}for(T.lastIndex=0;Pe=T.exec(me.body);){let Ue=Pe[1];try{Ue=decodeURIComponent(Ue)}catch(Je){}let ot=M(Ue);ot>=0&&(ke.add(ot),X[ot]++)}return ke}),N=u.map(me=>{let ve=me.fm.sources||me.fm.\uCD9C\uCC98||me.fm.source||[],ke=Array.isArray(ve)?ve:ve?[ve]:[],Pe=new Set;return ke.forEach(Ue=>{let ot=M(Ue);ot>=0&&Pe.add(ot)}),Pe}),q=u.some(me=>/^(wiki|raw)\//i.test(me.rel)),ae=new Uint8Array(m);ne.forEach((me,ve)=>{me.size&&(ae[ve]=1),me.forEach(ke=>{N[ve].has(ke)||(ae[ke]=1)})});let Z=u.map((me,ve)=>q?/^raw\//i.test(me.rel)?"raw":/^wiki\//i.test(me.rel)||me.dir?"wiki":"root":ae[ve]?"wiki":"raw"),xe=new Map,se=me=>me.replace(/^[\s_~.\-+=!#@]+/,"").replace(/^(?:0\d{0,2}|\d{1,2}\s*[-_.)])[\s_\-.]*(?=\S)/,"")||me,be=u.map((me,ve)=>{let ke,Pe,Ue,ot,Je=null,Rt=null;if(Z[ve]==="raw"){let lt=me.d?+me.d.slice(0,4):0;ke="raw:"+lt,Pe="raw",Je=lt?"cat.rawYear":"cat.rawUndated",Rt=lt?{y:lt}:null,Ue=k(Je,Rt),ot=lt?"ARCHIVE-"+lt:"ARCHIVE-UNDATED"}else{let lt=me.dir.replace(/^wiki(\/|$)/i,"");ke="wiki:"+lt,Pe="wiki";let Kt=lt.split("/").filter(Boolean).pop(),Vt=Kt?se(Kt):"";Kt?Ue=Vt:(Je="cat.hub",Ue=k(Je));let Ht=Kt?/^[\x20-\x7E]+$/.test(Vt)?Vt.toUpperCase():Vt:"HELM";ot=Ht.length>20?Ht.slice(0,19)+"\u2026":Ht}return xe.has(ke)||xe.set(ke,{key:ke,dom:Pe,code:ot,label:Ue,lkey:Je,larg:Rt,n:0}),xe.get(ke).n++,ke}),Te=[...xe.values()];Te.sort((me,ve)=>me.dom===ve.dom?ve.n-me.n:me.dom==="wiki"?-1:1);let De=[],_e=new Set,Ce=(me,ve,ke)=>{if(me===ve||me<0||ve<0)return!1;let Pe=me+":"+ve+":"+ke;return _e.has(Pe)?!1:(_e.add(Pe),De.push([me,ve,ke]),!0)};u.forEach((me,ve)=>{if(Z[ve]==="raw")return;let ke=new Set(N[ve]);ne[ve].forEach(Pe=>{Z[Pe]==="raw"&&ke.add(Pe)}),ke.forEach(Pe=>{Z[Pe]==="raw"&&Ce(Pe,ve,1)})}),ne.forEach((me,ve)=>me.forEach(ke=>{_e.has(ke+":"+ve+":1")||Ce(ve,ke,0)}));let Xe=u.map((me,ve)=>({p:me.rel,fp:me.fp,n:me.name,k:Z[ve],f:me.rel.split("/")[0]||"",d:me.d,y:me.d?+me.d.slice(0,4):0,t:me.t,mt:me.mt,ct:me.ct,w:me.w,sz:me.sz,x:me.x,inb:X[ve],c:be[ve],pr:me.pr,bk:D[ve],bn:B[ve]||null})),Qe=[...new Set(Xe.map(me=>me.y).filter(Boolean))].sort();return{meta:{vault:o||c||"DROPPED VAULT",files:Xe.length,edges:De.length,wiki:Xe.filter(me=>me.k!=="raw").length,raw:Xe.filter(me=>me.k==="raw").length,broken:A,years:Qe},cats:Te,nodes:Xe,edges:De}}let Ld=()=>new Promise(n=>setTimeout(n,0));function Rd(n,o){f("load").classList.toggle("on",!!n),o&&(f("loadmsg").textContent=o),n||(f("loadbar").firstElementChild.style.width="0%",f("loadsub").textContent="")}function Vl(n,o){f("loadbar").firstElementChild.style.width=Math.round(n*100)+"%",o!==void 0&&(f("loadsub").textContent=o)}function p0(){return{sel:Ke>=0?St(Ke):"",follow:de.follow>=0?St(de.follow):"",tgt:de.tgtD.clone(),dist:de.distD,th:de.thD,ph:de.phD,roll:de.rollD}}function OM(n){if(!n)return;de.tgtD.copy(n.tgt),de.distD=n.dist,de.thD=n.th,de.phD=n.ph,de.rollD=n.roll,de.tgt.copy(n.tgt),de.dist=n.dist,de.th=n.th,de.ph=n.ph,de.roll=n.roll,de.thV=0,de.phV=0;let o=n.sel?Dt(n.sel):-1;o>=0&&Gn(o,!0);let s=n.follow?Dt(n.follow):-1;de.follow=s,Ur()}function BM(){let n=new Map,o=new Map;try{if(Ti&&J){let s=Math.min(G,Ti.length,J.length);for(let c=0;c<s;c++){let u=J[c];if(!u)continue;let m=u.fp||u.p;m&&n.set(m,Ti[c])}}Ne&&Ne.forEach(s=>{!s||s.key===void 0||(s.oMA!==void 0||s.rz!==void 0)&&o.set(s.key,{oMA:s.oMA,sx:s.sx,sy:s.sy,rz:s.rz})})}catch(s){return console.warn("vault-orrery: orbital phases not carried",s),null}return n.size||o.size?{ph:n,sys:o}:null}function UM(n){if(!n||!Ti||!J)return;let o=Math.min(G,Ti.length,J.length);for(let s=0;s<o;s++){let c=J[s];if(!c)continue;let u=n.ph.get(c.fp||c.p);u!==void 0&&Number.isFinite(u)&&(Ti[s]=u)}Ne&&Ne.forEach(s=>{if(!s||s.key===void 0)return;let c=n.sys.get(s.key);c&&(Number.isFinite(c.oMA)&&(s.oMA=c.oMA),Number.isFinite(c.sx)&&(s.sx=c.sx),Number.isFinite(c.sy)&&(s.sy=c.sy),Number.isFinite(c.rz)&&(s.rz=c.rz))})}let Cd=null;function Dd(n,o){Cd=n;let s=BM();ru(),hs(),H_(),lm(),Qp.clear(),ss(),Do.length=0,Sl=0,md(!1),Ke=-1,rn=-1,Co="",zr=!1,wl.clear(),ir=-1,ba=new Set,is=new Set,gb(),Ap(n),$e=null,Wp(),UM(s),$p(),os(),Yr(),_d=0,o?OM(o):dd(),ki(Mn)}let m0=["x","sz","w","mt","ct"],g0=n=>Math.round(Math.log(1+(n|0)/90)*20);function v0(n,o){if(n===o)return!0;if(Array.isArray(n)&&Array.isArray(o)){if(n.length!==o.length)return!1;for(let s=0;s<n.length;s++)if(!v0(n[s],o[s]))return!1;return!0}return!1}function zM(n,o){if(!n||!o||n===Un||o===Un)return!1;let s=n.nodes,c=o.nodes,u=n.edges,m=o.edges;if(s.length!==c.length||u.length!==m.length||n.cats.length!==o.cats.length||n.meta.vault!==o.meta.vault||n.meta.broken!==o.meta.broken)return!1;for(let h=0;h<u.length;h++){let y=u[h],M=m[h];if(y[0]!==M[0]||y[1]!==M[1]||y[2]!==M[2])return!1}for(let h=0;h<n.cats.length;h++){let y=n.cats[h],M=o.cats[h];if(y.key!==M.key||y.n!==M.n||y.label!==M.label||y.code!==M.code)return!1}for(let h=0;h<s.length;h++){let y=s[h],M=c[h];for(let L in M)if(!(m0.indexOf(L)>=0)&&!v0(y[L],M[L]))return!1;for(let L in y)if(!(L in M))return!1;if(g0(y.w)!==g0(M.w))return!1}return Vh(s)===Vh(c)}function GM(n){for(let o=0;o<G;o++){let s=J[o],c=n.nodes[o];for(let u of m0)s[u]=c[u];Cr[o]=+s.mt||0,Cr[o]&&(el=!0)}zh(),os()}function VM(n,o){let s=n.length,c=new Map;for(let M=0;M<s;M++){let L=n[M].meta&&n[M].meta.links;if(L)for(let T in L){let A=String(T).replace(/\\/g,"/").toLowerCase();c.set(A,(c.get(A)||0)+Math.max(1,L[T]|0))}}let u=[Mn,H.coreNote].filter(Boolean).map(M=>M.toLowerCase()),m=M=>u.some(L=>M===L||M.endsWith("/"+L)),h=n.map((M,L)=>{let T=String(M.path).replace(/\\/g,"/").toLowerCase();return{i:L,pin:m(T)?1:0,inb:c.get(T)||0,mt:M.meta&&+M.meta.mtime||0}});h.sort((M,L)=>L.pin-M.pin||L.inb-M.inb||L.mt-M.mt||M.i-L.i);let y=new Uint8Array(s);for(let M=0;M<o&&M<s;M++)y[h[M].i]=1;return n.filter((M,L)=>y[L])}let Kr=!1;async function Pd(n,o,s){if(Kr)return;let c=!!(s&&s.quiet),u=G,m=n.filter(ne=>Gl.test(ne.path)&&!ef(ne.path)),h=m.filter(ne=>!tf(ne.path)),y=m.length-h.length;if(!h.length){c||P(k(y?"excl.all":"load.nomd"));return}let M=H.maxNodes|0,L=h.length,T=M>0&&L>M?VM(h,M):h,A=L-T.length;Kr=!0,c||(Rd(!0,"READING VAULT"),Vl(0,A?k("cap.hit",{n:T.length,total:L}):k("load.notes",{n:T.length})));let D=[];for(let ne=0;ne<T.length;ne++){try{D.push({path:T[ne].path,text:await T[ne].file.text(),meta:T[ne].meta||null})}catch(N){}ne%16===0&&(c||Vl(ne/T.length*.7,T[ne].path),await Ld())}c||Vl(.78,k("load.graph")),await Ld();let B=null;try{B=kM(D,o)}catch(ne){console.error(ne),P(k("load.failed")),Rd(!1),Kr=!1;return}if(!B.nodes.length){P(k("load.empty")),Rd(!1),Kr=!1;return}if(c&&u&&zM(Cd,B)){let ne=dm();GM(B),hm(ne),Kr=!1;return}c||Vl(.9,k("load.orbit")),await Ld();let X=c?p0():null,O=c&&u?dm():null;try{Dd(B,X)}catch(ne){console.error(ne),P(k("load.render")),Dd(Un)}let V=O?hm(O):0;if(!O&&!u&&zb(),c||(Vl(1),await Ld(),Rd(!1)),Kr=!1,c){G!==u&&!V&&P(k("sync.done",{n:G}));return}P(B.meta.vault+" \xB7 "+B.meta.files+" NOTES \xB7 "+B.meta.edges+" LINKS"),y&&setTimeout(()=>P(k("excl.some",{n:y})),2600),A&&setTimeout(()=>P(k("cap.hit",{n:T.length,total:L})),5200),jM()}f("b-load").onclick=()=>f("fpick").click(),f("hint-btn").onclick=()=>f("fpick").click(),f("fpick").addEventListener("change",n=>{let o=Array.from(n.target.files||[]);o.length&&Pd(o.map(s=>({path:s.webkitRelativePath||s.name,file:s}))),n.target.value=""}),f("b-clear").onclick=()=>{Dd(Un),P(k("vault.empty"))};function x0(n,o,s){return new Promise(c=>{if(!n)return c();if(n.isFile){n.file(M=>{o.push({path:s+n.name,file:M}),c()},()=>c());return}if(!n.isDirectory)return c();let u=s+n.name+"/";if(ef(u)||tf(u))return c();let m=n.createReader(),h=[],y=()=>m.readEntries(M=>{if(!M.length){Promise.all(h.map(L=>x0(L,o,u))).then(()=>c());return}h.push(...M),y()},()=>c());y()})}let Hl=0,y0=n=>{let o=n.dataTransfer&&n.dataTransfer.types;return o?o.indexOf?o.indexOf("Files")>=0:Array.prototype.indexOf.call(o,"Files")>=0:!1};g("dragenter",n=>{qe||!y0(n)||(n.preventDefault(),++Hl===1&&!Kr&&f("drop").classList.add("on"))}),g("dragover",n=>{qe||!y0(n)||(n.preventDefault(),n.dataTransfer.dropEffect="copy")}),g("dragleave",n=>{qe||!Hl||--Hl<=0&&(Hl=0,f("drop").classList.remove("on"))}),g("drop",async n=>{if(qe)return;n.preventDefault(),Hl=0,f("drop").classList.remove("on");let o=Array.from(n.dataTransfer.items||[]).map(u=>u.webkitGetAsEntry&&u.webkitGetAsEntry()).filter(Boolean),s=[],c="";if(o.length){o.length===1&&o[0].isDirectory&&(c=o[0].name);for(let u of o)await x0(u,s,"")}else Array.from(n.dataTransfer.files||[]).forEach(u=>s.push({path:u.name,file:u}));Pd(s,c)});function HM(){ar(),Ne.forEach(n=>{n.el&&(n.el.querySelector("em").textContent=Jh(n))}),os(),Ee.on&&Gr(!0),pt&&$.sel>=0&&(Om(),Lu($.sel)),typeof _r!="undefined"&&_r&&w0()}function w0(){_r&&(delete f("bpick").dataset.i18n,f("bpick").textContent=k("boot.staged",{name:_r.name||k("boot.nofold"),n:_r.list.length}))}let Fd=!1;try{Fd=w.get("orrery2.intro")==="1"}catch(n){}function b0(){G&&f("intro").classList.add("on")}let WM=[["guide.s.move",[["DRAG \xB7 WHEEL","guide.look"],["RIGHT-DRAG","guide.pan"],["SHIFT-DRAG","guide.drag"],["R","guide.reset"]]],["guide.s.find",[["/ \xB7 CTRL-K","guide.search"],["O \xB7 CTRL-CLICK","guide.note",()=>ee()],["BROKEN","guide.broken"],["ROUTE FROM HERE","guide.route"]]],["guide.s.read",[["L","guide.layer"],["X","guide.grid"],["SPACE","guide.ripple"],["SKY","guide.sky"]]],["guide.s.mode",[["M \xB7 DBL-CLICK","guide.mind"],["G","guide.gen"],["P","guide.poster"],["C","guide.card"]]],["guide.s.rest",[["QUALITY","guide.quality"],["U","guide.sound"],["H","guide.hud"],["?","guide.help"]]]];function qM(){f("guidebody").innerHTML=WM.map(([o,s])=>{let c=s.filter(u=>!u[2]||u[2]());return c.length?'<div class="gsec">'+Me(k(o))+"</div>"+c.map(u=>'<div class="grow"><u>'+Me(u[0])+"</u><b>"+Me(k(u[1]))+"</b></div>").join(""):""}).join(""),f("guidefoot").innerHTML=Me(k("guide.foot"))+"<u>"+Me(k("intro.reopen"))+"</u>";let n=f("guidefoot").querySelector("u");n&&(n.onclick=()=>{Id(),b0()})}function Nd(){qM(),f("guide").classList.add("on"),f("guidebody").scrollTop=0}function Id(){f("guide").classList.remove("on")}function XM(){return f("guide").classList.contains("on")}function Wl(){if(f("intro").classList.contains("on")&&(f("intro").classList.remove("on"),!Fd)){Fd=!0;try{w.set("orrery2.intro","1")}catch(n){}}}function YM(){return f("intro").classList.contains("on")}function jM(){Fd||E.on||setTimeout(b0,900)}f("introgo").onclick=Wl,f("introgen").onclick=()=>{Wl(),Ee.on||Ma()},f("gen-x").onclick=()=>md(!1),f("introx").onclick=Wl,f("intro").onclick=n=>{n.target===f("intro")&&Wl()},f("guidex").onclick=Id,f("guide").onclick=n=>{n.target===f("guide")&&Id()},f("keyshelp").onclick=n=>{n.stopPropagation(),Nd()},Ap(Un),Wp(),$p(),xM(),ar(),Yr(),f("g-layer").textContent=fl[0].name,Gn(-1),dd();let _r=null;f("b-folder").onclick=()=>f("fpick2").click(),f("fpick2").addEventListener("change",n=>{let s=Array.from(n.target.files||[]).filter(u=>{let m=u.webkitRelativePath||u.name;return Gl.test(m)&&!ef(m)&&!tf(m)});if(!s.length){f("bpick").dataset.i18n="boot.nomd",f("bpick").textContent=k("boot.nomd"),f("bpick").classList.remove("ok"),_r=null;return}let c=(s[0].webkitRelativePath||"").split("/")[0]||"";_r={list:s.map(u=>({path:u.webkitRelativePath||u.name,file:u})),name:c},w0(),f("bpick").classList.add("ok"),f("b-go").classList.remove("alt"),n.target.value=""}),f("b-go").onclick=()=>{if(f("boot").classList.add("gone"),setTimeout(()=>f("boot").style.display="none",950),_r){let n=_r;_r=null,setTimeout(()=>Pd(n.list,n.name),320)}},i0();let _0={search:pd,mindmap:Cu,genesis:Ma,ripple:Ml,poster:xd,card:wu,layer:ou,grid:au,sound:()=>Po(!ye.on),reset:tu,hud:()=>{let n=f("hud");n.style.display=n.style.display==="none"?"":"none"},open:()=>mt(Ke,null),help:Nd},ql={debug:()=>({running:Rn.running,host:Rn.host,raf:Rn.raf,glLost:Rn.lost,hidden:document.hidden,frames:qr,nodes:G,gap:{knob:H.gap,now:Ri,sys:Bi},cam:{th:de.thD,ph:de.phD,dist:de.distD,thV:de.thV,phV:de.phV,idle:de.idle},selected:Ke,active:Ot,halo:{glare:An&&An.visible?+An.material.opacity.toFixed(3):0,ice:pn&&pn.visible?+pn.material.opacity.toFixed(3):0,built:!!pn},mind:pt?{root:$.root,lit:$.has.size,lanes:$.rr.map(n=>+n.toFixed(1)),hopRadii:[0,1,2].map(n=>{let o=$.list.filter(c=>c.hop===n);if(!o.length)return 0;let s=We[o[0].i];return o.every(c=>We[c.i]===s)?+s.toFixed(3):null})}:null,radiiRestored:!!(G&&Si&&We.every((n,o)=>Math.abs(n-Si[o]*(et[o].kind==="core"?H.szSun:et[o].kind==="moon"?H.szMn:H.szPl))<.001))}),setHosted:Ye,setVisible(n){Rn.host=!!n,Ed()},setIgnoreFilters:LM,setLang:Le,setMaxNodes(n){H.maxNodes=Math.max(0,n|0),ar(),an()},load:Pd,setHostHooks:gt,revealPath:Yt,setActivePath:ki,busy:()=>Kr,commands:()=>Object.keys(_0),command(n){let o=_0[n];return o?(o(),!0):!1},destroy(){if(Rn.host=!1,n0(),[pe.rt,pe.a,pe.b].forEach(n=>{if(n)try{n.dispose()}catch(o){}}),pe.rt=pe.a=pe.b=null,pe.ok=!1,ye.ctx){try{ye.ctx.close()}catch(n){}ye.ctx=null}try{Tt.dispose()}catch(n){}}};ql.resize=()=>{Yr(),mn()},ql.root=r;let KM=ql.destroy;return ql.destroy=()=>{try{KM()}catch(n){console.error("vault-orrery: teardown",n)}v.splice(0).forEach(n=>{try{n()}catch(o){}}),r.replaceChildren()},ql}var Ua="vault-orrery-view",ta="vault-orrery-mini",o1=2500,U2=24,z2=24,Ba=class extends Mi.ItemView{constructor(t,i){super(t);this.plugin=i;this.api=null;this.io=null;this.ro=null;this.syncPending=!1;this.mini=!1;this.scheduleSync=(0,Mi.debounce)(()=>{this.syncVault()},o1,!1)}getViewType(){return Ua}getDisplayText(){return"Vault Orrery"}getIcon(){return"orbit"}isMini(){return this.mini}async onOpen(){let t=this.contentEl;t.empty(),t.addClass("vault-orrery-host");let i=t.createDiv({cls:"vo-root"}),a=new DOMParser().parseFromString(i1,"text/html");for(;a.body.firstChild;)i.appendChild(a.body.firstChild);try{this.api=r1(i,this.mini?this.plugin.engineStoreReadOnly():this.plugin.engineStore(),{mini:this.mini})}catch(d){console.error("Vault Orrery: engine failed to start",d),t.empty(),t.createEl("p",{text:"Vault Orrery could not start. See the developer console for details."});return}if(this.api.setHosted(!0),this.api.setHostHooks({open:(d,p)=>{this.openNote(d,p)},hover:(d,p,v)=>this.hoverNote(d,p,v)}),this.plugin.applySettingsTo(this.api),this.mini){let d=t.createDiv({cls:"vo-mini-expand",attr:{"aria-label":"Open the full orrery"}});(0,Mi.setIcon)(d,"maximize-2"),d.addEventListener("click",()=>{this.plugin.activateView()})}this.io=new IntersectionObserver(d=>{var p;for(let v of d){let g=v.boundingClientRect;!g.width||!g.height||(p=this.api)==null||p.setVisible(v.isIntersecting)}},{threshold:0}),this.io.observe(i),this.ro=new ResizeObserver(()=>{var d,p;(d=this.api)==null||d.resize(),(p=this.api)==null||p.setVisible(i.offsetWidth>0&&i.offsetHeight>0)}),this.ro.observe(i);let l=()=>this.scheduleSync();this.registerEvent(this.app.vault.on("create",l)),this.registerEvent(this.app.vault.on("delete",l)),this.registerEvent(this.app.vault.on("rename",l)),this.registerEvent(this.app.vault.on("modify",l)),this.registerEvent(this.app.metadataCache.on("resolved",l)),this.registerEvent(this.app.workspace.on("file-open",d=>this.syncActive(d))),this.syncActive(this.app.workspace.getActiveFile()),await this.loadVault()}async openNote(t,i){let a=this.app.vault.getAbstractFileByPath(t);if(!(a instanceof Mi.TFile)){new Mi.Notice(`Vault Orrery: ${t} is no longer in the vault.`);return}let l=this.app.workspace,d;if(i.newWindow)d=l.getLeaf("window");else if(i.newLeaf)d=l.getLeaf("tab");else{let p=l.getMostRecentLeaf(l.rootSplit);d=p&&p!==this.leaf?p:l.getLeaf("tab")}await d.openFile(a,{active:!0})}hoverNote(t,i,a){this.app.workspace.trigger("hover-link",{event:i,source:lp,hoverParent:this,targetEl:a,linktext:t})}syncActive(t){if(!this.api)return;let i=t&&t.extension==="md"?t.path:"";this.api.setActivePath(i),i&&!this.mini&&this.plugin.settings.followActiveNote&&this.api.revealPath(i)}reveal(t,i=!1){if(!this.api)return!1;let a=this.api.revealPath(t.path);return!a&&!i&&new Mi.Notice(`Vault Orrery: ${t.basename} is not in the cosmos on screen \u2014 it may be excluded, or past the maximum-notes ceiling.`),a}async syncVault(){if(!(!this.api||!this.plugin.settings.liveSync)){if(this.api.busy()){if(this.syncPending)return;this.syncPending=!0,window.setTimeout(()=>{this.syncPending=!1,this.syncVault()},o1);return}await this.loadVault(!0)}}async onClose(){var t,i,a;this.scheduleSync.cancel(),(t=this.io)==null||t.disconnect(),this.io=null,(i=this.ro)==null||i.disconnect(),this.ro=null,(a=this.api)==null||a.destroy(),this.api=null,this.contentEl.empty(),this.plugin.releaseTexts()}onResize(){var t;(t=this.api)==null||t.resize()}getApi(){return this.api}diagnostics(){var _,b,w,f,C,R,I,E;let t=(b=(_=this.api)==null?void 0:_.root)!=null?b:this.contentEl.querySelector(".vo-root");if(!t)return"no engine mounted in this leaf";let i=x=>t.querySelector("#"+x),a=t.querySelector("#gl"),l=t.getBoundingClientRect(),d=a?getComputedStyle(a):null,p=a?a.getContext("webgl2")||a.getContext("webgl"):null,v="n/a";if(l.width&&l.height){let x=document.elementFromPoint(l.left+l.width/2,l.top+l.height/2);v=x?`${x.tagName.toLowerCase()}#${x.id||"-"}.${x.className||"-"}`:"nothing"}let g=(f=(w=i("s-fps"))==null?void 0:w.textContent)!=null?f:"?";return[`leaf box      ${Math.round(l.width)} x ${Math.round(l.height)}`,`root client   ${t.clientWidth} x ${t.clientHeight}`,`canvas buffer ${a?a.width+" x "+a.height:"NO CANVAS"}`,`canvas css    ${d?`${d.width} x ${d.height} display:${d.display} vis:${d.visibility} op:${d.opacity} z:${d.zIndex}`:"-"}`,`webgl         ${p?p.isContextLost()?"CONTEXT LOST":"ok":"no context"}`,`at leaf centre ${v}`,`nodes ${(R=(C=i("s-nodes"))==null?void 0:C.textContent)!=null?R:"?"}   fps ${g}   range ${(E=(I=i("s-dist"))==null?void 0:I.textContent)!=null?E:"?"}`,`run gate      ${this.api?JSON.stringify(this.api.debug()):"-"}`,`root classes  ${t.className}`].join(`
`)}async loadVault(t=!1){if(!this.api)return;let i=this.app.vault.getMarkdownFiles();if(!i.length){t||new Mi.Notice("Vault Orrery: no markdown files in this vault.");return}this.plugin.pruneTexts(i);let a=i.map(l=>({path:l.path,file:{text:()=>this.plugin.readText(l)},meta:this.metaFor(l)}));await this.api.load(a,this.app.vault.getName(),{quiet:t})}metaFor(t){let i=this.app.metadataCache,a=i.resolvedLinks[t.path],l=i.unresolvedLinks[t.path],d=0,p=[];if(l)for(let w in l)d+=l[w],p.length<U2&&p.push(w);let v=i.getFileCache(t),g=v?(0,Mi.getAllTags)(v):null,_={},b=v==null?void 0:v.frontmatter;if(b){let w=0;for(let f in b){if(f==="position"||w>=z2)continue;let C=b[f];C==null||!(typeof C!="object"||Array.isArray(C)&&C.every(I=>I===null||typeof I!="object"))||(_[f]=C,w++)}}return{links:a?{...a}:{},broken:d,brokenNames:p,tags:g?g.map(w=>w.replace(/^#/,"")):[],props:_,mtime:t.stat.mtime,ctime:t.stat.ctime}}},Lh=class extends Ba{constructor(){super(...arguments);this.mini=!0}getViewType(){return ta}getDisplayText(){return"Vault Orrery mini"}},lp="vault-orrery";var Bc=require("obsidian"),G2=["auto","ko","en","ja","zh"],V2=r=>typeof r=="string"&&G2.includes(r),na={language:"auto",maxNodes:0,liveSync:!0,followActiveNote:!1,followExcludedFiles:!0,extraIgnoreFilters:[],miniOffered:!1,engineStore:{}},Rh=class extends Bc.PluginSettingTab{constructor(t,i){super(t,i);this.plugin=i}getSettingDefinitions(){return[{name:"Language",desc:"Interface language. Your note and folder names are never translated.",aliases:["\uD55C\uAD6D\uC5B4","\u65E5\u672C\u8A9E","\u4E2D\u6587","locale","translation"],control:{type:"dropdown",key:"language",options:{auto:"Match Obsidian",ko:"\uD55C\uAD6D\uC5B4",en:"English",ja:"\u65E5\u672C\u8A9E",zh:"\u4E2D\u6587"},defaultValue:na.language}},{name:"Maximum notes",desc:"A ceiling on how many notes are drawn at once. Large vaults run a spring simulation over every body, so this is where performance is traded for completeness. Set to 0 for no limit. When the ceiling truncates a vault, the view says so rather than showing a partial cosmos as if it were the whole one.",aliases:["performance","limit","large vault"],control:{type:"slider",key:"maxNodes",min:0,max:1e4,step:500,defaultValue:na.maxNodes}},{type:"group",heading:"The editor",items:[{name:"Mini orrery in the sidebar",desc:"Keep a small, quiet copy of the cosmos in the right sidebar. It drifts on its own, marks the note you are editing, and opens a note when you click its planet. It draws at a third of the full view's frame rate with the light effects off, and stops entirely while the sidebar is closed.",aliases:["sidebar","mini","ambient","background","widget"],control:{type:"toggle",key:"showMini",defaultValue:!0}},{name:"Keep up with the vault",desc:"Re-derive the cosmos when notes are written, created, renamed or deleted while the view is open. The camera and the selection stay where they are. Turn this off on a very large vault, where each rebuild reads every note again; the Reload vault command then does it on request.",aliases:["live","refresh","update","watch"],control:{type:"toggle",key:"liveSync",defaultValue:na.liveSync}},{name:"Follow the active note",desc:'Move the camera to whichever note you open in the editor. Left off, the note being edited is still marked in the sky \u2014 the camera simply stays where you put it, and "Reveal the active note in the orrery" flies to it on request.',aliases:["sync","active file","follow"],control:{type:"toggle",key:"followActiveNote",defaultValue:na.followActiveNote}}]},{type:"group",heading:"Exclusions",cls:"vault-orrery-exclusions",items:[{name:"Respect excluded files",desc:"Hide the notes listed under Settings \u2192 Files & Links \u2192 Excluded files, exactly as Obsidian's own graph does. Turning this off will show notes you have hidden elsewhere.",aliases:["hidden","ignore","userIgnoreFilters"],control:{type:"toggle",key:"followExcludedFiles",defaultValue:na.followExcludedFiles}},{name:"Additional exclusions",desc:"One pattern per line, on top of Obsidian's. A plain path is treated as a prefix (archive hides archive/ and archive.md); a pattern wrapped in slashes is a regular expression (/^\\d{4}-/).",aliases:["ignore","filter","regex"],control:{type:"textarea",key:"extraIgnoreFilters",placeholder:`archive
/^\\d{4}-/`,rows:4,defaultValue:""}}]},{type:"group",heading:"Privacy",items:[{name:"Network access",desc:"This plugin makes no network requests of any kind \u2014 no telemetry, no update check, no remote fonts or scripts. Your notes are read, laid out and drawn entirely on this machine, and nothing about them is stored outside the vault.",aliases:["telemetry","offline","analytics"]}]}]}getControlValue(t){let i=this.plugin.settings;switch(t){case"language":return i.language;case"maxNodes":return i.maxNodes;case"liveSync":return i.liveSync;case"followActiveNote":return i.followActiveNote;case"followExcludedFiles":return i.followExcludedFiles;case"extraIgnoreFilters":return i.extraIgnoreFilters.join(`
`);case"showMini":return this.plugin.miniOpen();default:return}}async setControlValue(t,i){let a=this.plugin.settings;switch(t){case"language":if(!V2(i))return;a.language=i;break;case"maxNodes":{let l=Number(i);if(!Number.isFinite(l))return;a.maxNodes=l;break}case"liveSync":a.liveSync=!!i;break;case"followActiveNote":a.followActiveNote=!!i;break;case"followExcludedFiles":a.followExcludedFiles=!!i;break;case"extraIgnoreFilters":a.extraIgnoreFilters=String(i).split(`
`).map(l=>l.trim()).filter(Boolean);break;case"showMini":i?await this.plugin.openMini(!0):this.plugin.closeMini();return;default:return}await this.plugin.saveSettings(),this.plugin.pushSettingsToViews()}display(){var i;let{containerEl:t}=this;t.empty();for(let a of this.getSettingDefinitions())if("type"in a&&a.type==="group"){a.heading&&new Bc.Setting(t).setName(a.heading).setHeading();let l=a.cls?t.createDiv({cls:a.cls}):t;for(let d of(i=a.items)!=null?i:[])this.renderFallback(l,d)}else"type"in a||this.renderFallback(t,a)}renderFallback(t,i){if("type"in i)return;let a=new Bc.Setting(t).setName(i.name);typeof i.desc=="string"&&a.setDesc(i.desc);let l=i.control;if(!l)return;let d=this.getControlValue(l.key),p=v=>{this.setControlValue(l.key,v)};switch(l.type){case"dropdown":a.addDropdown(v=>v.addOptions(l.options).setValue(String(d)).onChange(p));break;case"slider":a.addSlider(v=>v.setLimits(l.min,l.max,l.step).setValue(Number(d)).onChange(p));break;case"toggle":a.addToggle(v=>v.setValue(!!d).onChange(p));break;case"textarea":a.addTextArea(v=>{l.placeholder&&v.setPlaceholder(l.placeholder),v.setValue(String(d)).onChange(p),l.rows&&(v.inputEl.rows=l.rows)});break}}};var H2='<circle cx="50" cy="50" r="12" fill="currentColor"/><ellipse cx="50" cy="50" rx="44" ry="18" fill="none" stroke="currentColor" stroke-width="6"/><circle cx="94" cy="50" r="8" fill="currentColor"/>',W2=[["open","Open the selected note"],["search","Search the cosmos"],["mindmap","Mind map of the selected note"],["genesis","Genesis \u2014 play the vault's formation"],["ripple","Ripple from the selected note"],["poster","Save a poster"],["card","Make a photo card (9:16 image or 15-second clip)"],["layer","Cycle the link layer"],["grid","Show or hide the reference plane"],["sound","Ambient sound"],["reset","Reset the view"],["hud","Show or hide the HUD"],["help","Show the first-flight guide"]],Ch=class extends Xi.Plugin{constructor(){super(...arguments);this.settings=na;this.flushStore=(0,Xi.debounce)(()=>{this.saveSettings()},800,!1);this.texts=new Map;this.pushed=new WeakMap}async onload(){await this.loadSettings(),(0,Xi.addIcon)("orbit",H2),this.registerView(Ua,t=>new Ba(t,this)),this.registerView(ta,t=>new Lh(t,this)),this.addRibbonIcon("orbit","Open Vault Orrery",()=>this.activateView()),this.addCommand({id:"open",name:"Open",callback:()=>this.activateView()}),this.addCommand({id:"open-mini",name:"Open the mini orrery in the sidebar",callback:()=>this.openMini(!0)}),this.app.workspace.onLayoutReady(()=>{this.settings.miniOffered||(this.settings.miniOffered=!0,this.saveSettings(),this.openMini(!0))}),this.addCommand({id:"reload-vault",name:"Reload vault",checkCallback:t=>{let i=this.views();return i.length?(t||i.forEach(a=>void a.loadVault()),!0):!1}}),this.addCommand({id:"diagnostics",name:"Show render diagnostics",checkCallback:t=>{let i=this.views();return i.length?(t||new Xi.Notice(i[0].diagnostics(),6e4),!0):!1}}),this.addCommand({id:"reveal-active",name:"Reveal the active note in the orrery",checkCallback:t=>{let i=this.app.workspace.getActiveFile();return!i||i.extension!=="md"?!1:(t||this.revealFile(i),!0)}});for(let[t,i]of W2)this.addCommand({id:"mode-"+t,name:i,checkCallback:a=>{var d;let l=this.views();return l.length?(a||(d=l[0].getApi())==null||d.command(t),!0):!1}});this.registerEvent(this.app.workspace.on("file-menu",(t,i)=>{!(i instanceof Xi.TFile)||i.extension!=="md"||t.addItem(a=>a.setTitle("Show in Vault Orrery").setIcon("orbit").onClick(()=>{this.revealFile(i)}))})),this.registerHoverLinkSource(lp,{display:"Vault Orrery",defaultMod:!0}),this.addSettingTab(new Rh(this.app,this)),this.registerEvent(this.app.workspace.on("layout-change",()=>this.pushSettingsToViews()))}onunload(){this.flushStore.cancel(),this.saveSettings()}views(){return this.app.workspace.getLeavesOfType(Ua).map(t=>t.view).filter(t=>t instanceof Ba)}allViews(){let t=this.app.workspace;return[...t.getLeavesOfType(Ua),...t.getLeavesOfType(ta)].map(i=>i.view).filter(i=>i instanceof Ba)}miniOpen(){return this.app.workspace.getLeavesOfType(ta).length>0}async openMini(t){let i=this.app.workspace,a=i.getLeavesOfType(ta)[0];if(!a){let l=i.getRightLeaf(!1);if(!l)return;a=l,await a.setViewState({type:ta,active:!1})}t&&await i.revealLeaf(a)}closeMini(){this.app.workspace.getLeavesOfType(ta).forEach(t=>t.detach())}async readText(t){let i=this.texts.get(t.path);if(i&&i.mtime===t.stat.mtime&&i.size===t.stat.size)return i.text;let a=await this.app.vault.cachedRead(t);return this.texts.set(t.path,{mtime:t.stat.mtime,size:t.stat.size,text:a}),a}pruneTexts(t){let i=new Set(t.map(a=>a.path));for(let a of this.texts.keys())i.has(a)||this.texts.delete(a)}releaseTexts(){this.allViews().length<=1&&this.texts.clear()}async revealFile(t){var l;await this.activateView();let i=this.views()[0];if(!i)return;let a=d=>{i.reveal(t,d>0)||d>0&&window.setTimeout(()=>a(d-1),400)};a((l=i.getApi())!=null&&l.busy()?25:0)}async activateView(){let t=this.app.workspace.getLeavesOfType(Ua);if(t.length){await this.app.workspace.revealLeaf(t[0]);return}let i=this.app.workspace.getLeaf("tab");await i.setViewState({type:Ua,active:!0}),await this.app.workspace.revealLeaf(i)}async loadSettings(){let t=await this.loadData();this.settings=Object.assign({},na,t!=null?t:{}),this.settings.engineStore=Object.assign({},this.settings.engineStore)}async saveSettings(){await this.saveData(this.settings)}engineStoreReadOnly(){return{get:t=>{var i;return(i=this.settings.engineStore[t])!=null?i:null},set:()=>{}}}engineStore(){return{get:t=>{var i;return(i=this.settings.engineStore[t])!=null?i:null},set:(t,i)=>{this.settings.engineStore[t]=String(i),this.flushStore()}}}pushSettingsToViews(){this.allViews().forEach(t=>{let i=t.getApi();i&&this.applySettingsTo(i)})}applySettingsTo(t){let i=this.pushed.get(t),a=this.resolveLang(),l=this.ignoreFilters(),d=JSON.stringify(l);(!i||i.lang!==a)&&(this.settings.language!=="auto"||!this.engineHasLang())&&t.setLang(a),(!i||i.maxNodes!==this.settings.maxNodes)&&t.setMaxNodes(this.settings.maxNodes),(!i||i.filters!==d)&&t.setIgnoreFilters(l),this.pushed.set(t,{lang:a,maxNodes:this.settings.maxNodes,filters:d})}engineHasLang(){let t=this.settings.engineStore["orrery2.lang"];return t==="ko"||t==="en"||t==="ja"||t==="zh"}resolveLang(){let i=(l=>l==="auto"?null:l)(this.settings.language);if(i)return i;let a=(Xi.moment.locale()||"en").toLowerCase();return a.startsWith("ko")?"ko":a.startsWith("ja")?"ja":a.startsWith("zh")?"zh":"en"}ignoreFilters(){var a;let t=this.settings.extraIgnoreFilters.slice();if(!this.settings.followExcludedFiles)return t;let i=null;try{let l=this.app.vault;i=(a=l.getConfig)==null?void 0:a.call(l,"userIgnoreFilters")}catch(l){console.warn("Vault Orrery: could not read userIgnoreFilters",l)}return Array.isArray(i)?[...i.filter(l=>typeof l=="string"),...t]:(i!=null&&console.warn("Vault Orrery: unexpected userIgnoreFilters shape",i),t)}};

/* nosourcemap */