var __awaiter=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(s,n){function a(e){try{l(r.next(e))}catch(e){n(e)}}function o(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){e.done?s(e.value):new i(function(t){t(e.value)}).then(a,o)}l((r=r.apply(e,t||[])).next())})};((e,t,i)=>{const r=5e6;class s{constructor(){this.fileReader=new FileReader,this.fileReader.addEventListener("loadend",()=>{this.complete&&this.complete(this.fileReader.result)})}readAsArrayBuffer(e){return new Promise(t=>{this.complete=t,this.fileReader.readAsArrayBuffer(e)})}}e.addEventListener("DOMContentLoaded",()=>{let e={fileOpen:t.querySelector("#filePickerOpen"),filePicker:t.querySelector("#filePicker"),imageContainer:t.querySelector("#imageContainer"),emptyText:t.querySelector("#emptyText"),imageTemplate:t.querySelector("#imageTemplate"),imageViewer:t.querySelector(".image-viewer"),imageViewerMain:t.querySelector(".image-viewer img"),closeButton:t.querySelector("#closeButton"),scanContainer:t.querySelector("#scanContainer"),progressContainer:t.querySelector(".progress"),progress:t.querySelector(".progress-bar")},i=()=>{e.imageContainer.querySelectorAll(".col-md-3:not(.d-none)").forEach(t=>e.imageContainer.removeChild(t))};e.filePicker.addEventListener("change",t=>{let n=t.target;if(0===n.files.length)return;let a=n.files[0];e.progressContainer.classList.remove("d-none"),e.progress.style.width="0%",e.progress.textContent="Parsing..",e.emptyText.classList.add("d-none"),e.fileOpen.classList.add("d-none"),i();let o=new class{constructor(e){this.file=e,this.fileReader=new FileReader,this.imagePoints=[],this.markerStart=!1,this.jpegStart=0,this.lastPosition=0,this.fileReader.addEventListener("loadend",()=>{let e=this.markerStart,t=this.jpegStart,i=new Uint8Array(this.fileReader.result);for(let r=0;r<i.length;r++)255!==i[r]||e?e&&(216===i[r]?t=r-1+this.lastPosition:217===i[r]&&this.imagePoints.push([t,r+this.lastPosition]),e=!1):e=!0;this.markerStart=e,this.jpegStart=t,this.lastPosition+=r;let s=this.readNextChunk();!1===s?this.done(this.imagePoints):this.progress(s)})}readNextChunk(){const e=this.lastPosition+r>this.file.size;if(this.lastPosition>this.file.size)return!1;{const t=e?void 0:r+this.lastPosition,i=this.file.slice(this.lastPosition,t);return this.fileReader.readAsArrayBuffer(i),this.lastPosition/this.file.size*100}}extractPoints(){return new Promise(e=>{this.done=e,this.readNextChunk()})}extractImages(e){return __awaiter(this,void 0,void 0,function*(){let t=new s,i=[];for(let r=0;r<e.length;r++){this.progress(r/e.length*100);let s=e[r],n=this.file.slice(s[0],s[1]),a=new Uint8Array(yield t.readAsArrayBuffer(n));i.push(URL.createObjectURL(new Blob([a],{type:"image/jpeg"})))}return i})}}(a);o.progress=(t=>{e.progress.style.width=t+"%"}),o.extractPoints().then(t=>(e.progress.textContent="Extracting..",o.extractImages(t))).then(t=>(t=>{if(i(),0===t.length)e.emptyText.classList.remove("d-none");else{e.emptyText.classList.add("d-none");for(let i=0;i<t.length;i++){let r=e.imageTemplate.cloneNode(!0),s=r.querySelector("img");r.classList.remove("d-none"),s.src=t[i],r.addEventListener("click",()=>{e.imageViewerMain.src=t[i],e.imageViewer.classList.remove("d-none")}),e.imageContainer.appendChild(r)}}})(t)).then(()=>{e.progressContainer.classList.add("d-none"),e.fileOpen.classList.remove("d-none"),e.filePicker.value=null})}),e.fileOpen.addEventListener("click",()=>{e.filePicker.click()}),e.closeButton.addEventListener("click",()=>{e.imageViewer.classList.add("d-none")})})})(window,document,console);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbIndpbmRvdyIsImRvY3VtZW50IiwiY29uc29sZSIsIlJFQURfQlVGRkVSIiwiUHJvbWlzZVJlYWRlciIsIltvYmplY3QgT2JqZWN0XSIsInRoaXMiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wbGV0ZSIsInJlc3VsdCIsImJsb2IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRBc0FycmF5QnVmZmVyIiwiRE9NIiwiZmlsZU9wZW4iLCJxdWVyeVNlbGVjdG9yIiwiZmlsZVBpY2tlciIsImltYWdlQ29udGFpbmVyIiwiZW1wdHlUZXh0IiwiaW1hZ2VUZW1wbGF0ZSIsImltYWdlVmlld2VyIiwiaW1hZ2VWaWV3ZXJNYWluIiwiY2xvc2VCdXR0b24iLCJzY2FuQ29udGFpbmVyIiwicHJvZ3Jlc3NDb250YWluZXIiLCJwcm9ncmVzcyIsImNsZWFyTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJmaWxlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJ3aWR0aCIsInRleHRDb250ZW50IiwiYWRkIiwidGh1bWJSZWFkZXIiLCJpbWFnZVBvaW50cyIsIm1hcmtlclN0YXJ0IiwianBlZ1N0YXJ0IiwibGFzdFBvc2l0aW9uIiwiZGF0YSIsIlVpbnQ4QXJyYXkiLCJpIiwicHVzaCIsImNodW5rUHJvZyIsInJlYWROZXh0Q2h1bmsiLCJkb25lIiwid291bGRFeGNlZWQiLCJzaXplIiwibmV4dEVuZCIsInVuZGVmaW5lZCIsIm5leHRTbGljZSIsInNsaWNlIiwicG9pbnRzIiwic2xpY2VSZWFkZXIiLCJpbWFnZXMiLCJwb2ludCIsImZpbGVTbGljZSIsImJ1ZmYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwidHlwZSIsImV4dHJhY3RQb2ludHMiLCJ0aGVuIiwiZXh0cmFjdEltYWdlcyIsImltYWdlQ2hpbGQiLCJjbG9uZU5vZGUiLCJpbWFnZVByZXZpZXciLCJzcmMiLCJhcHBlbmRDaGlsZCIsInVwZGF0ZUxpc3QiLCJ2YWx1ZSIsImNsaWNrIl0sIm1hcHBpbmdzIjoidVNBc0JBLEVBQUVBLEVBQWdCQyxFQUFvQkMsS0FnQnJDLE1BQU1DLEVBQWMsVUFFcEJDLEVBR0NDLGNBQ0NDLEtBQUtDLFdBQWEsSUFBSUMsV0FDdEJGLEtBQUtDLFdBQVdFLGlCQUFpQixVQUFXLEtBQ3ZDSCxLQUFLSSxVQUNSSixLQUFLSSxTQUFTSixLQUFLQyxXQUFXSSxVQUlqQ04sa0JBQWtCTyxHQUNqQixPQUFPLElBQUlDLFFBQVFDLElBQ2xCUixLQUFLSSxTQUFXSSxFQUNoQlIsS0FBS0MsV0FBV1Esa0JBQWtCSCxNQTBGckNaLEVBQU9TLGlCQUFpQixtQkFBb0IsS0FFM0MsSUFBSU8sR0FDSEMsU0FBVWhCLEVBQVNpQixjQUFjLG1CQUNqQ0MsV0FBWWxCLEVBQVNpQixjQUFjLGVBQ25DRSxlQUFnQm5CLEVBQVNpQixjQUFjLG1CQUN2Q0csVUFBV3BCLEVBQVNpQixjQUFjLGNBQ2xDSSxjQUFlckIsRUFBU2lCLGNBQWMsa0JBQ3RDSyxZQUFhdEIsRUFBU2lCLGNBQWMsaUJBQ3BDTSxnQkFBaUJ2QixFQUFTaUIsY0FBYyxxQkFDeENPLFlBQWF4QixFQUFTaUIsY0FBYyxnQkFDcENRLGNBQWV6QixFQUFTaUIsY0FBYyxrQkFDdENTLGtCQUFtQjFCLEVBQVNpQixjQUFjLGFBQzFDVSxTQUFVM0IsRUFBU2lCLGNBQWMsa0JBRTlCVyxFQUFZLEtBQzRCYixFQUFJSSxlQUFlVSxpQkFBaUIsMEJBQ3RFQyxRQUFRQyxHQUFTaEIsRUFBSUksZUFBZWEsWUFBWUQsS0EyQjFEaEIsRUFBSUcsV0FBV1YsaUJBQWlCLFNBQVd5QixJQUMxQyxJQUFJQyxFQUE0QkQsRUFBTUMsT0FDdEMsR0FBNEIsSUFBeEJBLEVBQU9DLE1BQU1DLE9BQWMsT0FDL0IsSUFBSUMsRUFBYUgsRUFBT0MsTUFBTSxHQUU5QnBCLEVBQUlXLGtCQUFrQlksVUFBVUMsT0FBTyxVQUN2Q3hCLEVBQUlZLFNBQVNhLE1BQU1DLE1BQVEsS0FDM0IxQixFQUFJWSxTQUFTZSxZQUFjLFlBQzNCM0IsRUFBSUssVUFBVWtCLFVBQVVLLElBQUksVUFDNUI1QixFQUFJQyxTQUFTc0IsVUFBVUssSUFBSSxVQUUzQmYsSUFDQSxJQUFJZ0IsRUFBYyxVQW5JbkJ4QyxZQUFZaUMsR0FDWGhDLEtBQUtnQyxLQUFPQSxFQUNaaEMsS0FBS0MsV0FBYSxJQUFJQyxXQUN0QkYsS0FBS3dDLGVBQ0x4QyxLQUFLeUMsYUFBYyxFQUNuQnpDLEtBQUswQyxVQUFZLEVBQ2pCMUMsS0FBSzJDLGFBQWUsRUFFcEIzQyxLQUFLQyxXQUFXRSxpQkFBaUIsVUFBVyxLQUMzQyxJQUFJc0MsRUFBY3pDLEtBQUt5QyxZQUNuQkMsRUFBWTFDLEtBQUswQyxVQUNqQkUsRUFBbUIsSUFBSUMsV0FBd0I3QyxLQUFLQyxXQUFXSSxRQUNuRSxJQUFLLElBQUl5QyxFQUFJLEVBQUdBLEVBQUlGLEVBQUtiLE9BQVFlLElBQ2hCLE1BQVpGLEVBQUtFLElBQWdCTCxFQUVkQSxJQUNNLE1BQVpHLEVBQUtFLEdBQ1JKLEVBQVlJLEVBQUksRUFBSTlDLEtBQUsyQyxhQUNMLE1BQVpDLEVBQUtFLElBQ2I5QyxLQUFLd0MsWUFBWU8sTUFBTUwsRUFBV0ksRUFBSTlDLEtBQUsyQyxlQUU1Q0YsR0FBYyxHQVBkQSxHQUFjLEVBVWhCekMsS0FBS3lDLFlBQWNBLEVBQ25CekMsS0FBSzBDLFVBQVlBLEVBQ2pCMUMsS0FBSzJDLGNBQWdCOUMsRUFFckIsSUFBSW1ELEVBQVloRCxLQUFLaUQsaUJBRUgsSUFBZEQsRUFDSGhELEtBQUtrRCxLQUFLbEQsS0FBS3dDLGFBRWZ4QyxLQUFLc0IsU0FBUzBCLEtBS2pCakQsZ0JBQ0MsTUFBTW9ELEVBQWNuRCxLQUFLMkMsYUFBZTlDLEVBQWNHLEtBQUtnQyxLQUFLb0IsS0FDaEUsR0FBSXBELEtBQUsyQyxhQUFlM0MsS0FBS2dDLEtBQUtvQixLQUNqQyxPQUFPLEVBQ0QsQ0FDTixNQUFNQyxFQUFVRixPQUFjRyxFQUFZekQsRUFBY0csS0FBSzJDLGFBQ3ZEWSxFQUFZdkQsS0FBS2dDLEtBQUt3QixNQUFNeEQsS0FBSzJDLGFBQWNVLEdBR3JELE9BREFyRCxLQUFLQyxXQUFXUSxrQkFBa0I4QyxHQUMxQnZELEtBQUsyQyxhQUFlM0MsS0FBS2dDLEtBQUtvQixLQUFRLEtBSWhEckQsZ0JBQ0MsT0FBTyxJQUFJUSxRQUFRQyxJQUNsQlIsS0FBS2tELEtBQU8xQyxFQUNaUixLQUFLaUQsa0JBSURsRCxjQUFjMEQsbURBQ25CLElBQUlDLEVBQWMsSUFBSTVELEVBQ2xCNkQsS0FFSixJQUFLLElBQUliLEVBQUksRUFBR0EsRUFBSVcsRUFBTzFCLE9BQVFlLElBQUssQ0FDdkM5QyxLQUFLc0IsU0FBU3dCLEVBQUlXLEVBQU8xQixPQUFTLEtBQ2xDLElBQUk2QixFQUFRSCxFQUFPWCxHQUNmZSxFQUFZN0QsS0FBS2dDLEtBQUt3QixNQUFNSSxFQUFNLEdBQUlBLEVBQU0sSUFDNUNFLEVBQU8sSUFBSWpCLGlCQUFpQmEsRUFBWWpELGtCQUFrQm9ELElBRTlERixFQUFPWixLQUFLZ0IsSUFBSUMsZ0JBQWdCLElBQUlDLE1BQU1ILElBQVNJLEtBQU0saUJBRzFELE9BQU9QLE1BNEQyQjNCLEdBRWxDTyxFQUFZakIsU0FBVyxDQUFDQSxJQUN2QlosRUFBSVksU0FBU2EsTUFBTUMsTUFBUWQsRUFBVyxNQUd2Q2lCLEVBQVk0QixnQkFDVkMsS0FBSzVCLElBQ0w5QixFQUFJWSxTQUFTZSxZQUFjLGVBQ3BCRSxFQUFZOEIsY0FBYzdCLEtBRWpDNEIsS0FBS1QsR0FoRFMsQ0FBQ0EsSUFHakIsR0FGQXBDLElBRXNCLElBQWxCb0MsRUFBTzVCLE9BQ1ZyQixFQUFJSyxVQUFVa0IsVUFBVUMsT0FBTyxjQUN6QixDQUNOeEIsRUFBSUssVUFBVWtCLFVBQVVLLElBQUksVUFFNUIsSUFBSyxJQUFJUSxFQUFZLEVBQUdBLEVBQUlhLEVBQU81QixPQUFRZSxJQUFLLENBQy9DLElBQUl3QixFQUE2QjVELEVBQUlNLGNBQWN1RCxXQUFVLEdBQ3pEQyxFQUFpQ0YsRUFBVzFELGNBQWMsT0FFOUQwRCxFQUFXckMsVUFBVUMsT0FBTyxVQUM1QnNDLEVBQWFDLElBQU1kLEVBQU9iLEdBRTFCd0IsRUFBV25FLGlCQUFpQixRQUFTLEtBQ3BDTyxFQUFJUSxnQkFBZ0J1RCxJQUFNZCxFQUFPYixHQUNqQ3BDLEVBQUlPLFlBQVlnQixVQUFVQyxPQUFPLFlBR2xDeEIsRUFBSUksZUFBZTRELFlBQVlKLE1BNEJoQkssQ0FBV2hCLElBQzFCUyxLQUFLLEtBQ0wxRCxFQUFJVyxrQkFBa0JZLFVBQVVLLElBQUksVUFDcEM1QixFQUFJQyxTQUFTc0IsVUFBVUMsT0FBTyxVQUM5QnhCLEVBQUlHLFdBQVcrRCxNQUFRLFNBSTFCbEUsRUFBSUMsU0FBU1IsaUJBQWlCLFFBQVMsS0FDdENPLEVBQUlHLFdBQVdnRSxVQUdoQm5FLEVBQUlTLFlBQVloQixpQkFBaUIsUUFBUyxLQUN6Q08sRUFBSU8sWUFBWWdCLFVBQVVLLElBQUksZUExTWpDLENBK01HNUMsT0FBUUMsU0FBVUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3gwYS90aHVtYmRhdGEzLXZpZXdlci9tYXN0ZXIvc3JjLyJ9