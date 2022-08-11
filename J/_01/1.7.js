import Rx from "rxjs";

Rx.Observable.fromEvent(document.querySelector("#student-ssn"), "keyup")
    .pluck("srcElement", "value")
    .map((ssn) => ssn.replace(/^\s*|\s*$|\-s/g, ""))
    .filter((ssn) => ssn !== null && ssn.length === 9)
    .subscribe((valid_ssn) => console.log(`올바른 SSN ${valid_ssn}`));
