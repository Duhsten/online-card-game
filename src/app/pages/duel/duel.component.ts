import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.scss']
})
export class DuelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //@ts-ignore
    createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "src/assets/Build/asset.data.br",
      frameworkUrl: "/assets/Build/assets.framework.js.br",
      codeUrl: "src/assets/Build/asset.wasm.br",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "YourCompagny",
      productName: "yourProjectName",
      productVersion: "1.0"
    });
}

}
