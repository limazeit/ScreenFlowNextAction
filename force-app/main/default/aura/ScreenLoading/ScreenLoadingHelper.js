({
    waitAndNext : function(component, helper) {
        var seconds = component.get('v.secondsTimer');
        var milliseconds = (seconds * 1000);
        setTimeout(function(){
            var navigate = component.get("v.navigateFlow");
            navigate("NEXT");
        }, milliseconds);
    }
})