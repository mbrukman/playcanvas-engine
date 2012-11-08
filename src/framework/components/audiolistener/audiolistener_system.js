pc.extend(pc.fw, function () {
    /**
    * @name pc.fw.AudioListenerComponentSystem
    * @class Component System for adding and removing {@link pc.fw.AudioComponent} objects to Enities.
    * @constructor Create a new AudioListenerComponentSystem
    * @extends pc.fw.ComponentSystem
    */
    var AudioListenerComponentSystem = function (context, manager) {
        this.id = "audiolistener";
        context.systems.add(this.id, this);
    
        this.ComponentType = pc.fw.AudioListenerComponent;
        this.DataType = pc.fw.AudioListenerComponentData;
        
        this.schema = [];
        this.exposeProperties();
        
        this.manager = manager;
        this.current = null;

        pc.fw.ComponentSystem.bind('update', this.onUpdate.bind(this));
    };        
    AudioListenerComponentSystem = pc.inherits(AudioListenerComponentSystem, pc.fw.ComponentSystem);
    
    pc.extend(AudioListenerComponentSystem.prototype, {
        initializeComponentData: function (component, data, properties) {
            AudioListenerComponentSystem._super.initializeComponentData.call(this, component, data, properties);
            component.setCurrentListener();
        },
        onUpdate: function (dt) {
            if (this.current) {
                var position = this.current.getPosition();
                this.manager.listener.setPosition(position);

                var wtm = this.current.getWorldTransform();
                this.manager.listener.setOrientation(wtm);
            }
        }
    });

    return {
        AudioListenerComponentSystem : AudioListenerComponentSystem 
    };
}());