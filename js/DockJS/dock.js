var DockJS = DockJS || {};

(function( DockJS ) {
    
    "use strict";
    
    var Dock = function( elem, title, parent, type ) {
        if( typeof title === "undefined" ) title = "Unamed";
        if( typeof parent === "undefined" ) parent = null;
        if( typeof type === undefined ) type = null;
        
        this.root = elem;
        this.title = title;
        this.parent = parent;
        this.type = type;
        
        this.initialize();
    };
    
    Dock.prototype.initialize = function() {
        var dockTitlebarTitle = document.createElement("h1");
        dockTitlebarTitle.innerHTML = this.title;
        dockTitlebarTitle.className = "title";
        
        var dockTitlebar = document.createElement("div");
        dockTitlebar.className = "dockjs-titlebar";
        dockTitlebar.appendChild( dockTitlebarTitle );
        
        var dockBody = document.createElement("div");
        dockBody.className = "dockjs-body";
        
        var dock = document.createElement("div");
        dock.className = "dockjs-dock";
        dock.appendChild( dockTitlebar );
        dock.appendChild( dockBody );
        
        this.root.appendChild( dock );
    };
    
    DockJS.Dock = Dock;
    
}( DockJS ));