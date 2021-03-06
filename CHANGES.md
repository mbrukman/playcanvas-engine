# PlayCanvas Engine Changes

### v0.169.0
* Scripts referenced in scene are preloaded during loadScene() and loadSceneHierarchy()
* No longer load scripts during app.preload()

### v0.168.12
* [FIX] Jumping pixels on normal mapped reflections

### v0.168.11
* [FIX] texCubeLOD path bug introduced in 0.168.9

### v0.168.10
* Improve specular occlusion

### v0.168.9
* Added Dual-Paraboloid atlased reflections
* Use Spherical Harmonics instead of low-res cubemap
* Automatically switch to DP/SH where applicable
* drawQuadWithShader now accepts rect to set viewport
* [FIX] Prefiltered dds loading
* [FIX] Prefiltering 128x128 LDR cubemaps
* [FIX] More cubemap related bugs
* [FIX] Use parallax map channel
* [FIX] Don't use vertex colors on meshes that don't have them
* [FIX] Don't use skyboxMip for non-prefiltered cubemaps
* [FIX] Reload textures when their files have changed
* [FIX] Reload materials and cubemaps when referenced textures have changed

### v0.168.8
* Expose alpha test in pc.PhongMaterial

### v0.168.7
* [FIX] Material data changes applied to all clones
* [FIX] Don't store scene data in resource cache as entity operations modify it
* [FIX] Deleting material from primitive model component works again

### v0.168.6
* [FIX] Destroy AudioManager when application is destroyed.
* [FIX] Better handling of application destruction while resources are being preloaded.

### v0.168.5
* [FIX] Added fix for instancing.
* Added pc.Application#destroy.

### v0.168.4
* [FIX] Materials cubemap property works again.

### v0.168.3
* [FIX] Fix alpha sorting

### v0.168.2
* [FIX] Scripts with absolute URLs get attributes initialized correctly again.

### v0.168.1
* Don't create default Entity in Scene. This causes error when application hasn't been created (e.g. in Editor previews)

### v0.168.0
* [BREAKING] Complete refactor resource loader system
* [BREAKING] AssetRegistry#load() now takes single asset
* [BREAKING] ResourceLoader#request replaced with ResourceLoader#load
* AssetRegistry#get replaces getAssetById
* New event-based asset loading
* New application setup structure
* Application#configure - to initialize application from data
* Application#preload - to preload assets and scripts
* Application#loadScene - to load the scene json file
* Application#loadSceneHiearchy - to load just the hierarchy from the scene json
* Application#loadSceneSettings - to load just the settings form the scene json
* Script loading now parallel with script priorities to assign ordering

### v0.167.6
* [FIX] Fixed bug with initializing kinematic rigid body position when cloning.
* Added graphicsDevice#maxPixelRatio

### v0.167.5
* [FIX] Do not update rigidbody system if ammo.js is not loaded yet.
* Added methods for rendering various shapes in 'immediate' mode.

### v0.167.4
* [FIX] Performance issues when cloning entities with animation components.

### v0.167.3
* Support HDR lightmaps
* [FIX] Error when removing skybox from scene

### v0.167.2
* Removed references to old Designer
* Component schemas are now simple string arrays
* Removed pack component
* Removed designer component
* [FIX] Generate different shaders for meshes with and without UV1
* [FIX] Disallow using UV1 maps on meshes without it
* [FIX] Handle updating audiosource#3d property
* [FIX] Stop audiosource when its asset is removed or when the audiosource component is removed
* [FIX] One shot sounds no longer play when switching tabs
* [FIX] Stop current animation if its asset is removed from the animation component
* [FIX] Camera frustum shape is now properly updated when the canvas is resized


### v0.167.1
* [FIX] texCubeLOD code path fixes

### v0.167.0
* [FIX] Multiple particle fixes: emission rate stability

### v0.166.4
* [FIX] Seams at skybox borders
* LDR skyboxs now work with exposure and tonemapping
* Added pc.Scene#skyboxIntensity which works as an environment multiplier
* Added pc.Scene#skyboxMip to select mip level to use for skybox

### v0.166.3
* Removed skybox component.
* [FIX] Reject dds / crn texture requests if they fail to load the file URLs.
* [FIX] Clamp anisotropy values to avoid WebGL errors.
* [FIX] Shader generation when using RGBM texture for emission.
* [FIX] Appearance when metalness is 0.
* [FIX] Gamma correction artifacts.
* [FIX] Cubemap seams on WebGL.

### v0.166.2
* [FIX] Work around for Chrome bug that prevents audio from looping

### v0.166.1
* [FIX] Don't use opacity when blend mode is BLEND_NONE.
* Added BLEND_ADDITIVEALPHA blend mode.
* Added vertex color material inputs.
* Added support for loading hdr cubemaps and textures.
* Added contrast and intensity controls for specular occlusion.

### v0.166.0
* Added support for multiple shader variants.
* [FIX] Receive shadows.
* [FIX] Using same material on skinned and non skinned meshes is now allowed.
* [FIX] Add assets that do not have a file field to the resource loader cache.
* [FIX] Flipped X axis for cubemaps.

### v0.165.9
* [FIX] Shader compilation error for Toksvig.

### v0.165.8
* Lerp Toksvig
* [FIX] AABB calculation for skinned meshes.
* [FIX] Exceptions when changing particle emitter shape at runtime.
* [FIX] Clear scene prefiltered properties when skybox is removed.
* [FIX] Issue with duplicate models disappearing when the material mapping on the model asset changes.
* [FIX] Invalid declaration for chunks.
* [FIX] Particle emitter debug shape was twice larger than it should be.
* Gamma and tonemapping are no longer global.
* Change cubemap resolution if it was resized.

### v0.165.7
* [FIX] Shader bug on Nexus 5 fixed by removing vNormalW varying.

### v0.165.6
* [FIX] Pre-filtered cubemaps don't effect phong materials
* [FIX] Removed deprecated hdr property from pc.Texture

### v0.165.5
* [FIX] Shadow clamping issue.
* Added asset.resources property and made asset.resource another property
* Assets can now load multiple resources
* Cubemap resource loader now returns multiple textures if cubemap is prefiltered

### v0.165.4
* [FIX] Incorrect shadow clamping.
* [FIX] Bug in GPU particles on Intel HD devices.
* [FIX] Getting viewMatrix from camera.
* [FIX] Reload skybox if it changes.
* [FIX] Typo for material chunks.
* Added support for prefiltered cubemaps as dds textures.
* Simplified using prefiltered cubemaps.
* Simplified and optimized shadowmap clamping.
* Removed unused varyings in shaders.

### v0.165.3
* [FIX] Remove vVertexColor varying from default material shader.

### v0.165.2
* [FIX] Shadowmap shader now accounts for selected opacity channel.

### v0.165.1
* [FIX] Changing gamma correction now works properly.

### v0.165.0
* Added Box-Projected cubemaps.
* Added support for custom shader chunks.
* Added support for Metalness workflow.
* Added support for Refraction.
* Added light bitmasks to select which lights affect specific surfaces.
* Added support for ETC1 texture compresssion.
* Added camera frustum culling.
* Added support for controlling shadow map update rate.
* Added support for geometry instancing.
* Gamma correction is now an enum instead of a boolean.
* Added support for changing fragment shader precision.
* First direct / spot shadow map is now projected in the vertex shader.
* Can now change shadow map sampling per light / material.
* Now firing 'remove' event when an asset is removed. If an asset is removed from the asset registry components will remove the reference to that asset.
* Now setting texture references to null for materials whose texture assets are removed.
* Changed .vs / .ps files to .vert / .frag instead.
* Added improvements to cubemap prefiltering.
* Added lots of graphics fixes and optimizations.
* [FIX] Point light shadows circular artifact.
* [FIX] Wrong bias for spot light shadows.
* [FIX] Shader error when using phong + ambientTint.

### v0.164.3
* Add pc.Application#timeScale

### v0.164.2
* [FIX] pc.Mat3 setIdentity was setting 16 values instead of 9
* [FIX] Errors if rigid body component is removed
* [FIX] Make sure asset ids are ints
* [FIX] Documentation fixes

### v0.164.1
* [FIX] Make sure there is a collision component when checking for collision events.
* [FIX] Remove camera from system's camera list when the camera component is removed.
* [FIX] Removed global time variable that prevents multiple applications running on the same page.

### v0.164.0
* Added Entity#addComponent and Entity#removeComponent
* Deprecated ComponentSystem#addComponent and ComponentSystem#removeComponent
* Removed pc.ApplicationContext, replaced with pc.Application everywhere
* Added relevant properties from pc.ApplicationContext to pc.Application, `root`, `systems`, `loader`, `assets`, etc.
* [FIX] worldToScreen
* [FIX] Camera's no longer effected by entity's scale
* [FIX] Fixed height map on Intel GPU

### v0.163.5
* [FIX] Cubemap and cubemap filtering related fixes.
* [FIX] Changing collision component properties now works without disable/re-enabling component.
* [FIX] Mesh particles.
* [FIX] Firefox bugs by removing alpha:false from the context creation.
* Added saving and loading of single-file DDS cubemaps.
* Replaced pc.BODYGROUP_DEFAULT with pc.BODYGROUP_DYNAMIC.
* Added sphere spawn shape and initial velocity to particles.
* Material system refactoring.
* Configurable UV set for all maps.
* Configurable RGBA channel(s) for all maps (except normal).
* Tiling/Offset now work for all maps.

### v0.163.4
* [FIX] Add light property to light component schema.

### v0.163.3
* [FIX] Hotfix - Cannot read property 'PIXELFORMAT_RGBA32F' of undefined

### v0.163.2
* GPU cubemap prefiltering.
* Support for loading RGBA32F DDS textures.
* [FIX] CPU particles work with new engine changes.
* [FIX] GLSL for mediump devices.

### v0.163.1
* [FIX] screenToWorld works again

### v0.163.0
* Moved (almost) all API objects into the pc.* namespace
* Added CameraComponent#worldToScreen
* Initial support for loading DDS textures
* Patch Math to add Math.log2
* Removed pc.ForwardRenderer from the docs (internal not API)
* Hide lots of low-level/non-API classes from the documentation

### v0.162.8
* Removed requestAnimationFrame polyfill since browser support is now at 100%.
* Added documentation for particlesystem component.
* Old particle system was deleted.
* Removed 2 from ParticleEmitter2/particle2.
* depthTest renamed to depthWrite in particles (that's what it actually does).
* Removed unneeded code from simulation.
* [FIX] Flickering bug when using CPU wrapping.
* [FIX] Particle gamma correction fix

### v0.162.7
* Single mipmapped prefiltered cubemap instead of 6 by using EXT_shader_texture_lod. Only enabled when extension exists AND device has less than 16 samplers (mobiles).

### v0.162.6
* Added check for more than 65k verts in particle system.
* Particle systems wrapBounds are now relative to emitter position instead of camera position.
* Particle systems mode parameter now uses enum, not string.
* Particle systems depth softening control is now a bit more intuitive.
* Added _activeCamera to scene object.
* Removed camera property from particle system.
* [FIX] Particle systems alignToMotion.
* [FIX] Gamma correction on particles in some conditions.
* [FIX] Particle shader caching key generation.
* [FIX] Runtime CPU-GPU particle switch.
* [FIX] Sorting of mesh particles.
* [FIX] Mobile particle problems.
* [FIX] Depth softening bugs.

### v0.162.5
* Added RigidBodyComponent#teleport(Vec3, Quat)
* Removed skybox from documentation

### v0.162.4
* Added autoPlay to particle systems
* Particle systems no longer disable themselves
* [FIX] Issue when cloning particles that contained boolean parameters with false values

### v0.162.3
* Specular lighting now respects AO maps.

### v0.162.2
* Added reset(), stop(), play(), pause() and isPlaying() methods to particle systems
* Replaced oneShot property with loop property in particle systems
* Non-looped particle emitters do not start emission unless play() is called
* [FIX] particles CPU stretching
* [FIX] WebGL warning spamming by disallowing particles to be rendered into depth map

### v0.162.1
* Added alignToMotion to particle systems.
* Exposed shadowBias for light components.
* [FIX] Particle stretching.
* [FIX] Only alpha sort mesh instances in the main world.
* [FIX] Removed debug log.
* [FIX] Light intensity not working because of typo.

### v0.162.0

* Scene can now have a skybox by setting scene.skybox = cubemap.
* Added optional destinations parameter in livelink#send.
* Shader now uses scene's prefilteredCubeMap if it's not overridden in material;
* [FIX] Light intensity issues
* [FIX] Picker can now only select basic and phong material mesh instances. This fixes picking if a sky box is in the scene.
* [FIX] Document rigidbody group and mask properties.
* [FIX] Missing rigidbody constant BODYGROUP_ENGINE_3.

### v0.161.0

* [BREAKING] Texture.maxAnisotropy -> Texture.anisotropy. Device.maxSupportedMaxAnisotropy -> Device.maxAnisotropy
* [FIX] Picking and gizmo rendering fixed when depthWrite is false in the scene
* Added support for groups and masks to the RigidBody component
* Optimized RigidBodySystem update loop to take advantage of groups and masks
* Resample textures which are too large for device
* Added pc.gfx.Device.readPixels() to read pixels from current render target
* Remove low-level graphics logging on start up
* Deprecated ScriptComponentSystem.broadcast()
* Deprecated ScriptComponent.send()


### v0.160.1

* Remove excess console logging


### v0.160.0

* Lots of changes in shading, moving towards physically based rendering
* Added tonemapping and exposure in pack settings
* Support tinting textures in materials
* Use RGB format for jpg textures or RGBA otherwise
* Added new cubemap assets
* Simplified checks for undefined
* Added user strict to graphics API files
* Removed WebGL validation
* Optimized call to getMotionState
* Can now create a skybox using a cubemap texture
* Deferred texture and framebuffer creation until they are required by the graphics device
* [FIX] Fog not blending correctly
* [FIX] Tonemapping and fog for particles
* [FIX] Mouse input example
* [FIX] Wrote namespace for LIGHTTYPE enum.
* [FIX] HTML5 Audio API fallback works again. This is relevant to IE that doesn't support Web Audio yet.
* [FIX] Picking now works for transparent and/or depth write disabled meshes.


### v0.159.4

* [FIX] particlesystem component reset function now works for one shots if lifetime is less than reset interval.


### v0.159.3

* [FIX] Emissive maps work again.
* [FIX] pc.Curve with no keys
* Added CURVE_CATMULL and CURVE_CARDINAL to pc.Curve()
* Added filter for shadowResolution to only show up when castShadows is true.


### v0.159.2

* [FIX] Cloning CurveSet
* [FIX] Cloning ParticleSystem


### v0.159.1

* Added metadata to particle system curves to allow 'between two curves' editing in Designer
* Changed default values of particle system attributes
* Removed maxEmissionTime from particle system
* [FIX] Issues with spawnBounds and wrapBounds
* [FIX] Appearance of different blend modes for particles
* [FIX] Shadow resolution is now available for all light types
* [FIX] CurveSet cloning
* Updated component attributes descriptions


### v0.159.0

* Added point light shadows
* Added falloffMode to point lights and spot lights


### v0.158.9

* [FIX] Reduced number of varyings required for texture coordinates.
* [FIX] Flip particle textures the right way up.


### v0.158.8

* [FIX] Prevent min filter warnings in Designer
* Cube/sphere maps are now treated as sRGB, added Schlick's fresnel
* Velocities are now primary way to specify particle motions
* Added default texture for particle systems
* Update physics example to latest version of ammo.js
* Update README.md


### v0.158.7

* Fix needed for new ammo.js
* Added velocity graphs and different blend types to particlesystem component


### v0.158.6

* Added global gammaCorrection option to pc.scene.Scene
* Added gamma option to phong materials


### v0.158.5

* [FIX] Multiple lights, 1 or more are shadow casting and 1 or more are not, could cause exception on render.


### v0.158.4

* [FIX] Intel XDK now loads textures properly.


### v0.158.3

* [FIX] Ambient lighting is now respected when there are no lights enabled.


### v0.158.2

* [FIX] Errors when there are no lights in the scene.


### v0.158.1

* [FIX] Non-fresnel reflections.


### v0.158.0

* New shader system. Supports far more lights, fresnel, parallax mapping and better specular reflectance.


### v0.157.4

* [FIX] pc.math.Quat#slerp now works for opposite quaternions.


### v0.157.3

* [FIX] Replace canvas.style.width with canvas.style.clientWidth.


### v0.157.2

* [FIX] Mouse tests.


### v0.157.0

* [FIX] Fullscreen in Chrome - ignored keyboard input.
* [FIX] Mouse now attach events on window but data is related to target.


### v0.156.2

* [FIX] A mesh instance's bounding box is now guaranteed to be correct when it is queried.
* [FIX] pc.input.GamePad#is/wasPressed now respects the latest GamePad API spec.


### v0.156.1

* [FIX] Issue where sounds sometimes play twice in the beginning


### v0.156.0

* Assets no longer have resource ids, Fixed examples for the new asset format
* Use a TextureRequest for skybox textures instead of ImageRequests so that they can be cached correctly and used by other assets like materials without issues
* Added textured cube to examples.


### v0.155.1

* Added CONTRIB file with CLA details and tips
* Use the current Gamepad API
* [FIX] Audiosources with 'activate' false no longer play on startup


### v0.155.0

* pc.fw.Entity#clone is now synchronous


### v0.154.6

* Can now reorder Entities or insert them at specific indices in a parent's child list.


### v0.154.5

* [FIX] Negative speed for animations now works as expected.


### v0.154.4

* [FIX] Do not abort XHR requests with status 0 when downloading local files.


### v0.154.3

* [FIX] Backed out synchronous-clone branch until we fix a bug related to skyboxes.


### v0.154.2

* [FIX] Picking for skinned meshes.
* [FIX] pc.fw.Entity#clone is now synchronous.


### v0.154.1

* [FIX] Phong shader generation where there are no lights enabled.


### v0.154.0

* [FIX] Shadows for orthographic cameras.
* Removed all dynamic allocations for directional shadow casting lights.
* Added LINELOOP and TRIFAN graphics primitives.
* Disable blending for post effect quad rendering.
* Use a texture for passing bone matrices to vertex shaders if GPU supports it. This avoids having to split the skin up. Performance seems more or less similar.
* [FIX] Models with a reflection map now render if no lights are present.
* [FIX] Respect a mesh instance's receiveShadow property.
* Unprivate the docs for AssetRegistry#find and AssetRegistry#findAll


### v0.153.0

* User must now explicitly set the blendType of a material as opacity and opacityMap are no longer doing this automatically.
* Removed MaterialResourceLoader, now use MaterialResourceHandler everywhere.
* Add nicer error messages if model tries to load material asset which isn't present.


### v0.152.2

* Added pc.Vec3#project
* Added pc.shape.Sphere#intersectRay
* [FIX] Bug where materials with opacity 1 would not become transparent if their opacity changed to less than 1 at runtime


### v0.152.1

* [FIX] Typo in the example for pc.resources.ResourceLoader.request
* [FIX] Load model even when no material mappings for a model have been found
* [FIX] Remove camera and lights debug shapes when a camera gets disabled
* Removed color correction post effect
* Convert script attributes of type 'vector' to pc.Vec3


### v0.152.0

* Re-factor AssetRegistry
* [BREAKING] AssetRegistry#update() is replace with AssetRegistry#addGroup() and AssetRegistry#createAndAddAsset()
* [BREAKING] AssetRegistry#all() is replaced with AssetRegistry#list([groupName])
* Added displayNames to all post effect scripts


### v0.151.2

* Removed some parameters from bloom post effect.


### v0.151.1

* Merged pull request by b1naryth1ef: Cleaned up build script.


### v0.151.0

* Updated build.py for Git


### v0.150.1

* Increased decimal precision of camera clip planes to 5.
* Show 3 arrows for directional light gizmo.


### v0.150.0

* Added PostEffectQueue#setRenderTargetScale which means post effects can use buffers larger or smaller than the canvas
* Added GraphNode#findByPath and GraphNode#getPath for querying scene hierarchy.


### v0.149.2

* [FIX] Backout last change and use last version of ammo because raycasting works differently in latest version


### v0.149.1

* [FIX] Bug with casting collision object to a btRigidBody in raycastFirst.


### v0.149.0

* Added shadowDistance property to the scene, beyond which shadows are not rendered.
* [FIX] Update the scene's shaders when shadows are toggled.


### v0.148.0

* Updated ammo.js to latest kripken master branch


### v0.147.9

* [FIX] Typo in default clear options.


### v0.147.8

* [FIX] screenToWorld now works for orthographic cameras.


### v0.147.7

* Added 'resizecanvas' event fired from the pc.gfx.Device
* [FIX] Render targets of post effects are now resized when necessary
* Added optimization for events#fire method


### v0.147.6

* [FIX] Only add material to material cache if its asset is found in the asset registry


### v0.147.5

* [FIX] Delete the cached model when in onAssetChange
* [FIX] Add onAssetChange listener even when we're not in the designer so that we catch changes to model mappings that come from the designer via livelink
* [FIX] New assets are now added to the asset registry via livelink
* Fixes in README.md
* Updated examples


### v0.147.4

* Added animation example and Playbot model
* Added post effects and camera scripts under extras
* Added LICENSE file


### v0.147.3

* Improve float packing algorithm (used for shadow mapping).
* [FIX] postEffects is initialized before enabled


### v0.147.2

* [FIX] Frame buffer clearing now works if flags are zero.
* [FIX] Documentation fixes for post effects.


### v0.147.1

* Documented post effects.


### v0.147.0

* When an entity is destroyed it will first disable all of its components.
* When a component is initialized its onEnable method will be called.
* Added pc.posteffect.PostEffectQueue for managing multiple post effects for a camera. The camera component now has a post effects queue allowing users to add / remove post effects to a camera.
* Added example using post effects.
* Added various post effects.
* Camera system now has an array of active cameras instead of a 'current' camera. The application framework now renders all cameras instead of just the current camera.
* Exposed priority, clearColorBuffer, clearDepthBuffer and rect for the camera component, Now supporting pc.Vec2 and pc.Vec4 as runtime types.
* All post effects now derive from pc.posteffect.PostEffect.
* [FIX] Set particle_time to 0 when a particle emitter is initialized.


### v0.146.1

* [FIX] Set state that affects shadow buffer clearing before the clear happens (in particular, depth write).


### v0.146.0

* Support for loading models with URL mapping instead of resource_id mapping
* Added resource handler for text resources


### v0.145.4

* [FIX] Disable simulation before changing the rigidbody type so that simulation will be properly enabled again after the type changes
* Improved the docs for applyForce


### v0.145.3

* [FIX] Added null check when updating script instances in case some of them are removed from the update list while the loop is in progress


### v0.145.2

* Changed camera nearClip and farClip minimum to be 0.0001 and decimal precision to 3 digits


### v0.145.1

* [FIX] Remove assignment to constructor property in pc.inherits, seems to fix FF Bug which breaks inheritance randomly!?


### v0.145.0

* Added documentation to currentTime and duration in the animation component
* Updated docs for pc.math.random
* Added examples directory with spinning cube example
* Added docs for pc.math.Vec3 parameters
* [FIX] Bug where triggerleave / collisionend would not always be fired
* [FIX] Removed call to entity.trigger.initialize right after the constructor
* [FIX] All tests now pass
* [FIX] Rogue 'light' global var
* [FIX] Added simulationEnabled in rigidbody_data to avoid enabling / disabling rigidbody simulation multiple times
* [FIX] Bug where a model component would not update its model's graph if it started disabled
* [FIX] If a collision component is initialised before a rigid body component and a trigger is created, make sure to destroy that trigger when the rigid body is initialised


### v0.144.3

* [FIX] Ensure render targets are rendered fullscreen for post fx.


### v0.144.2

* [FIX] Error when trying to call script instance#destroy when removing a script component


### v0.144.1

* [FIX] Renamed pc.events.initalize to pc.events.attach to prevent it breaking compatibility when adding events to script instances


### v0.144.0

* Improved entity enabling / disabling mechanism to include children
* Improved component enabling / disabling mechanism
* Various optimizations


### v0.143.4

* [FIX] Fixed typos in script attribute docs


### v0.143.3

* [FIX] Call e.preventDefault in 'touchmove' event to avoid issues in Chrome Android


### v0.143.2

* [FIX] Identity texture transform now correctly generated.


### v0.143.1

* Optimizations in the script system, obb shapes and materials


### v0.143.0

* Call onEnable / onDisable methods on script instances when their script component is enabled / disbled


### v0.142.0

* Added enabling / disabling of Entities and Components


### v0.141.1

* [FIX] On FFOS, packaged apps does not have content type set correctly for some data formats (e.g. OGG).


### v0.141.0

* Added pitch to audiosource component


### v0.140.0

* Added input_mouse#wasReleased method


### v0.139.1

* Added documentation for decimalPrecision for script attributes


### v0.139.0

* Added postInitialize method in scripts


### v0.138.3

* [FIX] Script Attributes would not update correctly from the designer
* [FIX] Documentation fixes


### v0.138.2

* [FIX] Only include texture transforms in Phong materials if they are not the identity matrix


### v0.138.1

* [FIX] Update particle emitter code to latest Math API.


### v0.138.0

* Added onAttributeChanged method in scripts and 'set' event for script attributes
* Default near / far camera clip planes now default to 0.3 and 1000
* [FIX] pc.Quat#transformVector now creates a pc.Vec3 result instead of a pc.Quat
* [FIX] Error when a collision component has been destroyed and we need to call collision exit events


### v0.137.2

* [FIX] Gravity livelink now works with the new Math API.


### v0.137.1

* Add support for fullscreen 'screenscanvas' mode in CocoonJS.


### v0.137.0

* Exposed material texture transforms in the designer
* Added texture tiling, offset and rotation


### v0.136.2

* [FIX] UV transforms work again.


### v0.136.1

* [FIX] CameraNode#screenToWorld (new Maths API)
* [FIX] Global ambient now works again
* [FIX] Triggers now work again (new Maths API)


### v0.136.0

* [BREAKING] New Maths API
* Replaced pc.math.vec2 with pc.Vec2
* Replaced pc.math.vec3 with pc.Vec3
* Replaced pc.math.vec4 with pc.Vec4
* Replaced pc.math.quat with pc.Quat
* Replaced pc.math.mat4 with pc.Mat4
* See docs for more details


### v0.135.2

* [FIX] bumpMapFactor now becomes bumpiness in the Phong material

### v0.135.1

* Hide ballsocketjoint from the docs.
* [FIX] Prevent the engine throwing an exception on startup if the anisotropic filter extension is not available.


### v0.135.0

* Merged model and primitive components
* Added cylinder collision


### v0.134.0

* [FIX] Collision component cloning issues
* [FIX] Fullscreen button should now work in IE11+
* [FIX] Capsule resize bug in the designer where the same capsule would be always be edited
* Render collision sphere as a sphere rather than a circle
* Optimized max anisotropy handling
* Removed support in the engine for specular factor map because nobody uses them
* Added docs for gloss map on Phong material
* Added pc.Color#clone and pc.scene.Material#clone
* Support for more Phong material attributes in the designer


### v0.133.2

* [FIX] More accurate reporting of delta time in the framework (fixes jittery physics).


### v0.133.1

* [FIX] Sphere maps now load into the engine correctly.


### v0.133.0

* Changed rigidbody.bodyType to rigidBody.type


### v0.132.1

* [FIX] Materials are no longer tied to a single scene (broke picking).


### v0.132.0

* Moved Asset and AssetRegistry from pc.fw into pc.asset
* Renamed getAsset() to getAssetByResourceId()
* Added AssetRegistry.find() and AssetRegistry.findAll(), and deprecated getAssetByName


### v0.131.1

* [FIX] Allow PlayCanvas to run in IE11 by avoiding UNSIGNED_BYTE data with vertexAttribPointer if it's not supported.


### v0.131.0

* Integrated fog settings with the Designer


### v0.130.3

* Updated script component docs


### v0.130.2

* Updated script component docs


### v0.130.1

* Updated script related documentation


### v0.130.0

* Added script attributes support
* LightNode#setColor now takes a pc.Color instead of a pc.math.vec3
* Changed camera and light node code to be in object notation
* [FIX] Changing shadow resolution in Designer works again
* [FIX] Reflection map handled correctly in PhongMaterial


### v0.129.2

* [FIX] Depth write state caching.
* [FIX] Blend function caching now works properly.


### v0.129.1

* Removed setFrontFace function.
* Added EXP fog and fixed the equation for determining EXP2 fog factor.
* [FIX] Light enabling/disabling works in Designer again.


### v0.129.0

* [FIX] Cloning Entities with light components works
* Added render states to materials
* [FIX] Trigger volumes no longer deactivate after a period of in-activity
* [FIX] Fixed crash in Designer when collision component is removed


### v0.128.2

* [FIX] Setting linear and angular velocity values on a kinematic rigidbody works again
* [FIX] Moving a trigger (collision component) works


### v0.128.1

* [FIX] Touch co-ordinates now match MouseEvent co-ordinates. i.e. top-left to bottom-right and match the CSS size of the element
* More docs to Entity and pc.net.http


### v0.128.0

* Added context.touch if the browser has touch controls enabled
* Filtering camera fov and orthoHeight based on projection value


### v0.127.3

* [FIX] Issues with collision mesh scaling


### v0.127.2

* Fix docs for light component


### v0.127.1

* Add documentation for light component


### v0.127.0

* [BREAKING] Remove all directionallight, pointlight, spotlight components. Replaced with light component


### v0.126.6

* [FIX] Light cloning issue
* [FIX] Issue when setting range on spotlights
* Added support for non-billboarded particles


### v0.126.5

* Changed trigger documentation.
* Added particle system support - only static emitters are supported for now.


### v0.126.4

* [FIX] Error when rigid body entities are null.


### v0.126.3

* [FIX] Error when cloning collision components.


### v0.126.2

* [FIX] Alpha sorting now uses the bounding box so create a default one.


### v0.126.1

* Updated collision event documentation


### v0.126.0

* Added light component that combines all other lights into one. (private for now)
* Now filtering rigid body properties that are irrelevant to static rigid bodies
* Added triggerenter and triggerleave events and now only firing contact, collisionstart, collisionend events between rigid bodies


### v0.125.2

* [FIX] Added collision component 'type' in its properties


### v0.125.1

* [BREAKING] Remove all old collision* components


### v0.125.0

* [FIX] Designer crash when removing a rigidbody component and trying to move the Entity
* No longer fire contact events between two static bodies
* No longer fire contact events between triggers
* Add documenation for collision component
* Removed deprecated 2D physics code


### v0.124.0

* Added collision component which has the functionality of all the other collision components.


### v0.123.1

* [FIX] Opacity of zero now works. Setting an opacity map now sets the correct blend mode on the material.


### v0.123.0

* Added collision triggers when an entity only has a collision component and not a rigid body


### v0.122.3

* Render transparent meshes back to front order
* Change OPEN_ENTITY livelink message to match new Designer format


### v0.122.2

* [FIX] Gizmo no longer broken - take a copy of Pack data before opening


### v0.122.1

* [FIX] If Ammo not loaded


### v0.122.0

* [FIX] Loading pack settings at startup


### v0.121.0

* Support for PackSettings livelink messages


### v0.120.2

* [FIX] Check the precision capabilities of the GPU and generate shaders accordingly.
* Now calling activate internally in rigid body methods that apply forces etc.


### v0.120.1

* Added docs for pc.scene.Mesh and pc.scene.MeshInstance.


### v0.120.0

* Support for displaying remote cameras in designer


### v0.119.1

* [FIX] Force cache-busting off on resources to fix script debugging


### v0.119.0

* No longer caching scripts when running from the designer


### v0.118.0

* Added component system descriptions


### v0.117.0

* [FIX] Docs for pc.input.Controller
* [FIX] Docs for pc.fw.ApplicationContext


### v0.116.0

* Added pc.input.Keyboard#wasReleased()
* [FIX] Capsule rendering in Designer


### v0.115.1

* [FIX] Previous change broke kinematic objects


### v0.115.0

* Changed setLinearVelocity and setAngularVelocity methods to linearVelocity and angularVelocity properties
* Add applyTorque and applyTorqueImpulse to Rigidbody Component
* Changed setLinearFactor and setAngularFactor methods to linearFactor and angularFactor properties
* Add linearDamping and angularDamping properties to Rigidbody Component



### v0.114.1

* [FIX] Update raycasting to the latest Ammo API.


### v0.114.0

* Update Ammo (Physics Engine) to be based on Bullet 2.8.1
* Allocate less when loading animations


### v0.113.0

* Added pc.resources.JsonResourceHandler for loading assets of type 'json'.


### v0.112.0

* [FIX] Update setLinearFactor and setAngularFactor to work correctly


### v0.111.5

* [FIX] Lighting is now correct for non-uniform scaled objects.


### v0.111.4

* [FIX] Handle the case where a single material is referenced by a skinned and an unskinned mesh.


### v0.111.3

* Skin splitting works again.
* pc.json API now private.


### v0.111.2

* [FIX] Sky boxes no longer flicker.


### v0.111.1

* [FIX] Default assets list in animation component to [] not null


### v0.111.0

* [BREAKING] New Model Asset format
* Support for Textures as first-class Assets
* Support for Materials as first-class Assets


### v0.110.0

* Added ballsocket joint component.


### v0.109.1

* [FIX] 109 broke scene rendering/picking in Designer.


### v0.109.0

* Added a forward render for scene rendering.
* Added Bokeh post effect.
* Added depth shader.


### v0.108.0

* [FIX] Check for supported audio types when loading for Web Audio API
* Added sepia post effect
* Added blend post effect
* Added edge detect post effect


### v0.107.4

* [FIX] Static cubemap component fixed.
* Add camera component property to get/set the render target.


### v0.107.3

* [FIX] Flip skybox in X.


### v0.107.2

* Docs improvements.


### v0.107.1

* [FIX] pc.Color accepts another pc.Color as a constructor argument


### v0.107.0

* [BREAKING] Removed Bloom Component
* [BREAKING] Removed 'offscreen' attribute from Camera Component
* [BREAKING] Changed pc.gfx.VertexElementType to pc.gfx.ELEMENTTYPE_
* [BREAKING] Removed pc.gfx.VertexElement
* [FIX] Cubemap Component no longer crashes
* Added new pc.posteffect namespace for Post Effects
* Added Bloom, FXAA and Luminosity post effects


### v0.106.2

* [FIX] ResourceLoader now correctly loads identical child resources concurrently.


### v0.106.1

* Added generic vertex semantics for things like particle data.


### v0.106.0

* [BREAKING] Frame buffers are now render targets
* [BREAKING] Decoupled PlayCanvas file format from shader code by introducing vertex semantics
* [BREAKING] Updated Camera, Primitive, Directional Light, Spot Light and Point Light components to use pc.Color
* Application code can create render targets of arbitary pixel format
* pc.Color object for representing RGBA colors
* [FIX] Camera setOrthoHeight() now updates the matrix


### v0.105.3

* [FIX] Updated screenToWorld function to no longer require pc.gfx.Device.getCurrent.


### v0.105.2

* Updated pc.gfx docs.


### v0.105.1

* [FIX] Correct lookup of precalculatedTangents setting.


### v0.105.0

* Engine updated to support multiple canvases on a single page
* [BREAKING] pc.gfx.Device.getCurrent() and pc.gfx.Device.setCurrent() removed
* pc.gfx.Device now avaiable in pc.fw.ApplicationContext
* [FIX] pc.math.vec3.clone creates a proper clone now


### v0.104.5

* Store the DOM touch event in pc.input.TouchEvent to allow calling of prevent Default in handler.


### v0.104.4

* [FIX] Rigid body system now steps the simulation independent of frame rate.


### v0.104.3

* [FIX] Exceptions that are thrown in script constructors or initialize() are no longer swallowed


### v0.104.2

* Added support for scaled collision meshes.


### v0.104.1

* Documentation fixes for ResourceLoader


### v0.104.0

* New pc.resources.ResourceLoader which returns a RSVP.Promise instead of using callbacks


### v0.103.0

* Added collisioncapsule component
* Engine updated to comply with JSHint
* [FIX] No longer possible to pick line geometry
* [FIX] Corrected primitive types for bloom and model loading
* [FIX] Sounds (Web Audio API) now pause correctly if paused more than once on a single play through



### v0.102.3

* [FIX] Updated to latest Web Audio API spec. PlayCanvas apps no longer crash in Firefox Nightly.


### v0.102.2

* [FIX] GraphNode right, up and forwards properties now work.
* [FIX] pc.math.multiply now creates a result quaternion correctly if not supplied as parameter.


### v0.102.1

* [FIX] Don't add collision meshes to the hierarchy.


### v0.102.0

* Added new collision mesh component.


### v0.101.1

* [FIX] Animation blending works again (broken in 0.99.1).


### v0.101.0

* Documented almost all of pc.math and renamed a number of functions for uniformity.


### v0.100.0

* Added pc.math.smoothstep and pc.math.smootherstep.
* pc.math.pot -> pc.math.powerOfTwo
* Removed pc.math trigonometric functions.
* Documented the whole quaternion API.
* Allow skybox to be rendered at any time with any camera (much more robust and faster too!).

-------
### v0.99.1
-------
* Update a skeleton's graph if a time is explicitly set. Prevents you seeing previous animation frame on playing an anim from an entity script, since entity script udpates occur after animation component update.

-------
### v0.99.0
-------
* Aspect ratio of Designer-rendered cameras is now fixed at 16/9.
* Exposed aspectRatio on camera component.
* Added right, up and forwards properties to pc.scene.GraphNode.
* Update a skeleton's interpolated keyframes immediately upon setting a new time.

-------
### v0.98.6
-------
* Added documenation for pc.fw.Entity#clone()

-------
### v0.98.5
-------
* Soften PCF shadows.

-------
### v0.98.4
-------
* [FIX] Prevent GLSL pow function from being passed zero which causes glitches on Mac OS X.

-------
### v0.98.3
-------
* Optimize setting of vertex buffer attributes in the graphics device.
* Simplified and optimized GLSL lighting code.
* [FIX] Specular lighting calculation now takes the light color into account.

-------
### v0.98.2
-------
* Renamed enums for blend modes and primitive types.
* Disable blending for opaque meshes.
* Add a blend type to a material that specifies how it should blend when rendered.

-------
### v0.98.1
-------
* Added pc.audio.Channel#getDuration() to safely access the duration of the audio clip
* Added pc.string.toBool() to convert a string value to a boolean value

-------
### v0.97.2
-------
* [FIX] Work around presumed GLSL compiler bug on Mac where directional light appears inverted in Y axis. Code should be equivalent.

-------
### v0.97.1
-------
* Optimized WebGL texture state setting.
* [FIX] Phong shader now generates correct GLSL for lightmapping with no lights.

-------
### v0.97.0
-------
* Add pc.fw.AudioSourceComponent#unpause() to resume playback from paused (instead of using play() which starts from the beginning of the sound)
* [FIX] Tabbing away correctly suspends audio in Firefox

-------
### v0.96.6
-------
* [FIX] Use parentNode value for element if touch event lands on an SVG element. [Properly this time]

-------
### v0.96.5
-------
* [FIX] Use parentNode value for element if touch event lands on an SVG element.

-------
### v0.96.4
-------
* [FIX] Fix so that touch position is not null in Firefox when using SVG elements

-------
### v0.96.3
-------
* [FIX] Fix to touch events when attached to elements without width and height attributes (i.e. not the canvas)

-------
### v0.96.2
-------
* [FIX] No longer call preventDefault() in TouchDevice event handling. User should call it themselves.

-------
### v0.96.1
-------
* [FIX] Make sure physics libraries are loaded before loading Entities

-------
### v0.96.0
-------
* loadFromTOC function for pc.fw.Application
* Added AssetCache for preloading asset metadata
* Added pc.fw.ContentFile for where preloaded data is stored
* pc.gfx.VertexBufferUsage -> pc.gfx.BUFFER_
* pc.gfx.IndexFormat -> pc.gfx.INDEXFORMAT_
* Restore gl format of index buffer that is used when primitive is drawn
* Made ResourceLoaderDisplay prettier
* Deprecate AssetResourceHandler and EntityResourceHandler

-------
### v0.95.0
-------
* Added Entity#clone() method
* Support opacity on shadow maps (useful for alpha-tested foliage)
* Check if isActive() is true before syncing entity to rigidbody

-------
### v0.94.3
-------
* [FIX] Procedural cylinder code was generating caps incorrectly, causing NaNs to be generated for tangents.
* Renormalize normal and tangent in case the model matrix has a scale in it.

-------
### v0.94.2
-------
* Better scaling function for normal map.
* [FIX] Fixes for when no lights are enabled.

-------
### v0.94.1
-------
* Switched engine back to using precalculated tangents, but can be switched on a device flag.
* Change spotlight boundary interpolation.
* Fix shadow interaction with non-shadowcasting lights.
* All Phong lighting now done in world space.
* Reflection maps now lerp towards diffuse color based on reflectivity.
* Fix WebGL errors about texture completeness (unitialised texture objects).

-------
### v0.94.0
-------
* Engine no longer generate vertex tangents. Instead, it perturbs surface normals using a normal map in the fragment shader.
* Added support for heightmap bump mapping.
* Added support for gloss maps (per-pixel shininess).
* Specular shininess no longer queried from specular map alpha channel (use gloss map instead).
* Per pixel opacity no longer queried from diffuse map alpha channel (use opacity map instead).

-------
### v0.93.1
-------
* Physics docs corrections.

-------
### v0.93.0
-------
* Renamed collisionbox.size to collisionbox.halfExtents

-------
### v0.92.0
-------
* First public version of rigidbody component

-------
### v0.91.0
-------
* Renamed 'body3d' component to 'rigidbody' component
* Added isActive() and activate() to rigidbody component
* Better argument options for applyForce() and applyImpulse()

-------
### v0.90.2
-------
* relativePoint for Body3d.applyForce and Body3d.applyImpulse is now an optional argument, defaults to 0,0,0
* [FIX] Default values for body3d and collisionbox

-------
### v0.90.1
-------
* [FIX] Activate body inside a syncTransform() so that livelink movement re-activates

-------
### v0.90.0
-------
* [FIX] GraphNode#rotate() and GraphNode#rotateLocal() take can accept a single vector argument like in the docs
* Replace Body3d 'static' with 'bodyType' which can be dynamic, kinematic or static.
* hasEvent() added to event API to check whether an handler is bound
* Working on Body3d component
* Add support for contact/collision events
* Add support for raycastFirst()
* 'collisionbox' format changed to single 'size' property
* Fire 'livelink:updatetransform' event when entity transform is updated over a livelink

-------
### v0.89.0
-------
* Implemented pc.scene.Model#generateWireframe.
* Added pc.input.TouchDevice
* Added shadow resolution attribute. Removed cast shadows attribute from point light component.

-------
### v0.88.1
-------
* Added pc.fw.CameraComponent#screenToWorld.
* [FIX] Skybox now renders correctly in Designer.

-------
### v0.88.0
-------
* [FIX] Engine now honours toggling of cast shadows in Designer.
* pc.gfx.ClearFlag -> pc.gfx.CLEARFLAG
* Reworked directional light shadowmap camera frustum calculation.
* Set WebGL to treat alpha more similarly to OpenGL.
* Corrected aspect ratio of directional light shadow frustum. Added a fudge factor to Z limits of frustum to prevent clipping of shadow casters.
* Initial support for inserting one-shot commands into draw call queue (to do things like clearing the depth buffer).

-------
### v0.87.0
-------
* Replace event methods .bind()/.unbind() with .on()/.off(). Deprecated bind()/unbind().
* [FIX] Designer cameras now no longer create frustum graphics resources (caused WebGL errors).

-------
### v0.86.6
-------
* [FIX] Binary skins now partition correctly.

-------
### v0.86.5
-------
* [FIX] Final fix for skybox component.

-------
### v0.86.4
-------
* [FIX] Skybox now renders at the correct depth.

-------
### v0.86.3
-------
* [FIX] Infinite loop for scenes with shadows.

-------
### v0.86.2
-------
* [FIX] Only mesh instances marked as shadow caster rendered into shadow map.

-------
### v0.86.1
-------
* [FIX] Skybox component updated to new pc.scene API.

-------
### v0.86.0
-------
* New Scene library with sorting enabled -- rendering speed boost++!
* Support for loading code libraries before Application starts
* Replace AppData with application_properties from the Properties resource
* Body3D component beta testing
* [FIX] Use clientWidth to get canvas size instead of style.width (which is 100%)

-------
### v0.85.4
-------
* [FIX] Script instance initialize() method is called when an Entity is created over LiveLink

-------
### v0.85.3
-------
* [FIX] Point lights render with the right color in Designer again.
* [FIX] pc.input.Controller now handles mouse move properly again.

-------
### v0.85.2
-------
* [FIX] Texture filters set incorrectly on JSON model load.

-------
### v0.85.1
-------
* Update Body3d transforms after stepping simulation

-------
### v0.85.0
-------
* [BREAKING] Mouse and Keyboard events are now passed pc.input.MouseEvent and pc.input.KeyboardEvent respectively. The original browser event is available as the 'event' property.
* [BREAKING] Some pc.input enumerations have changed now EVENT_MOUSEMOVE, etc and MOUSEBUTTON_LEFT, etc. They are also featured in the documentation now.
* Initial work on Body3d component
* [FIX] A problem with editing packs in forked depots has been resolved
* [FIX] Primitive Component color works correctly

-------
### v0.84.1
-------
* [FIX] Animation component now plays an animation on set in the connected game.

-------
### v0.84.0
-------
* New material APIs. See pc.scene.PhongMaterial, DepthMaterial, PickMaterial and BasicMaterial.
* [FIX] Updated pad handling in pc.input to the latest GamePad spec.

-------
### v0.83.1
-------
* [FIX] Removed some debug comments

-------
### v0.83.0
-------
* pc.event.bind() and pc.event.unbind() now take an optional scope parameter to use as 'this' when firing.
* Optimized GraphNode#getWorldTransform. It no longer syncs the entire hierarchy, just the path from the root to the queried node
* [FIX] Script updates were called after the script component had been removed because events weren't unbound properly
* [FIX] Deleting Script Component within update no longer skips an update
* [FIX] Deleting Body2d Component with no collision body no longer crashes

-------
### v0.82.6
-------
* [FIX] Rotating Body2d Components in Designer works
* [FIX] Convert between Eulers and single Angle for Body2d Components more robustly

-------
### v0.82.5
-------
* [FIX] 2D collision works again in the Designer

-------
### v0.82.4
-------
* [FIX] Prevent rendering of collisioncircle components unless debugRender flag is set

-------
### v0.82.3
-------
* [FIX] All components properly updated to new texture API.

-------
### v0.82.2
-------
* [FIX] Additional typo in binary texture stream reader.

-------
### v0.82.1
-------
* [FIX] binary stream reader to use new texture API.
* Fixed reference to entity.close()

-------
### v0.82.0
-------
* [BREAKING] Renamed Entity#close to Entity#destroy
* [BREAKING] New pc.gfx.Texture API. Much simpler interface more based around properties. pc.gfx.Texture2D and pc.gfx.TextureCube collapsed back into pc.gfx.Texture.
* Added much greater control over the pixel format of textures. The API now support creation of L8, L8A8, R5G6B5, R5G5B5A1, R4G4B4A1, R8G8B8 and R8G8B8A8 textures.
* Don't expose PickComponent in designer. It doens't work

-------
### v0.81.7
-------
* [FIX] cubemap component works again.

-------
### v0.81.6
-------
* [FIX] script.broadcast fixed.
* [FIX] PickSystem debug rendering works.
* [FIX] Set correct filter/address modes on pick buffer texture.

-------
### v0.81.5
-------
* Lots of documentation changes to go with the new documentation template

-------
### v0.81.4
-------
* [FIX] GraphNode#lookAt now correctly marks the local transform as dirty.

-------
### v0.81.3
-------
* [FIX] Prevent audio sources from playing in Designer.

-------
### v0.81.2
-------
* [FIX] AudioSourceComponent play function fixed for 2D sounds.

-------
### v0.81.1
-------
* [FIX] Fog GLSL fixed.

-------
### v0.81.0
-------
* Added support for anisotropic texture filtering.

-------
### v0.80.0
-------
* [BREAKING] New API Components and ComponentSystems
* [BREAKING] Removed deprecated 'header' Component
* [BREAKING] Removed all render() methods from Component systems and scripts
* Attach pc.fw.Component for each system that is attached to an Entity
* Generate getter/setter properties on Components for properties that are defined in the Component schema
* Updated all existing Component Systems to work with new system
* Components and scripts updates are driven by events now. Only events that are registered will be called
* Added postUpdate() event called after all update() events

-------
### v0.79.3
-------
* [FIX] Spotlighting now correctly normalizes the spot direction after it is passed to the fragment shader.

-------
### v0.79.2
-------
* Restrict bone limit a little further to allow for more complex shaders.

-------
### v0.79.1
-------
* Limit the number of supported bones per skin in order to get around a performance issue on the Mac Mini 2009.

-------
### v0.79.0
-------
* [FIX] Body2d works in degrees everywhere
* [FIX] pc.math.mat4.fromEulersXYZ
* Fixed math unit tests
* Added trig functions in degrees pc.math.sin/cos/tan/asin/acos/atan/atan2
* Some shader optimizations

-------
### v0.78.1
-------
* [FIX][BREAKING] Renamed MouseEvent.buttons to MouseEvent._buttons to avoid clash with new FireFox event property

-------
### v0.78.0
-------
* [BREAKING] Renamed ScriptObject method updateFixed() to fixedUpdate()
* fixedUpdate() now runs before update()

-------
### v0.77.1
-------
* [FIX] Rendering collisionrects works again

-------
### v0.77.0
-------
* [BREAKING] All pc.math library functions take degrees instead of radians
* [BREAKING] Removed GraphNode methods setParent() and setChildren()
* [BREAKING] Update binary model format to use new transform components
* [BREAKING] Update animation format to use eulers instead of quaternions for rotations
* Split LTM out into distinct position, rotation, scale components, generate LTM/WTM only when dirty
* Added methods to quaternion invert(), setFromEulers(), transformVector()
* Change Pack format to use position, rotation, scale instead of translate, rotate, scale
* Optimized mat4.fromEulerXYZ()
* Added GraphNode method translateLocal(), rotateLocal(), rotate()
* Added GraphNode methods get/setLocalEulerAngles()
* No longer overwrite the exports property in engine as this breaks some nodejs modules
* Script component urls field is now a proper array instead of a comma-separated string

-------
### v0.76.0
-------
* Engine now loads in nodejs environment
* Deprecate requestAnimFrame() and replace with requestAnimationFrame()
* Replace requestAnimationFrame shim with new version from Paul Irish

-------
### v0.75.6
-------
* [FIX] Offscreen buffer creation deferred until rendering occurs. Fixes bloom on app start up.
* [FIX] Bloom no longer crashes the engine when disabled from Designer.

-------
### v0.75.5
-------
* [FIX] Point light spheres no longer crash the Designer.
* Shader system now uses shared GLSL snippets.

-------
### v0.75.4
-------
* [FIX] Reduced shadow mapping artifacts.

-------
### v0.75.3
-------
* [FIX] Back out previous fix for pc.math.quat.toMat4()

-------
### v0.75.2
-------
* [FIX] Fix for pc.math.quat.toMat4()

-------
### v0.75.1
-------
* [FIX] Body2d components were overwriting ltm with shared variable

-------
### v0.75.0
-------
* Scale mouse value in pc.input.Controller.getAxis() down to more closely match the gamepad values
* [FIX] pc.input.Mouse.isPointerLocker() works correctly

-------
### v0.74.0
-------
* Optimized Body2d so that it no longer updates the transform static bodies every frame.
* [FIX] pc.math.mat4.getZ() no longer creates a vec3 if one is supplied

-------
### v0.73.0
-------
* Fullscreen API support, use enableFullscreen(), disableFullscreen() on pc.fw.Application
* PointerLock API support, use enablePointerLock(), disablePointerLock() on pc.input.Mouse
* setCanvasFillMode() on pc.fw.Application is used to setup the way the canvas is resized
* setCanvasResolution() on pc.fw.Application is used to set the resolution of the canvas
* resizeCanvas() on pc.fw.Application performs the resize
* getApplication() on pc.fw.Application is used to get the application instance
* [FIX] body2d.raycastFirst sometimes returned the wrong entity

-------
### v0.72.0
-------
* Clear old events from mouse and keyboard if they are attached to a second element
* Allow Controller to take a options argument to pass in existing Mouse/Keyboard/Gamepad input handlers
* Updated Closure Compiler

-------
### v0.71.2
-------
* [FIX] Check for existing cachedMaterial before setting/deleting when handling shadow maps. Duplicated materials are shared between meshes so must only be deleted once.
* [FIX] Handle case where <audio> tag isn't supported. e.g. Headless clients

-------
### v0.71.1
-------
* Sync hierarchy and mesh AABBs after loading and cloning models.

-------
### v0.71.0
-------
* [FIX] Fix picking for cloned models
* [FIX] Add new components over LiveLink in correct order.

-------
### v0.70.0
-------
* [FIX] CollisionRect renders again

-------
### v0.69.0
-------
* [FIX] pc.scene.Model.clone() correctly clones textures, materials and geometry lists

-------
### v0.68.0
-------
* [FIX] updates to collisionrect and collisioncircle values in the Designer are reflect in the live game.
* [FIX] Set velocity to 0 when updating transform of a body2d component from the Designer

-------
### v0.67.4
-------
* [FIX] Eye space z sorting is now based on mesh AABB center rather than WTM position.

-------
### v0.67.3
-------
* Fix for 0.67.2.

-------
### v0.67.2
-------
* Optimize pc.math.mat4.compose and fromEulerXYZ to use scratch matrices.

-------
### v0.67.1
-------
* [FIX] Body2d Component rotates correctly in designer.
* Added setPositionAndAngle() to Body2d component

-------
### v0.67.0
-------
* [FIX] Body2d Component sometimes creates upside down transforms, because undefined value was being used as index

-------
### v0.66.0
-------
* Added TextureCache object to cache loaded textures and use them instead of reloading

-------
### v0.65.0
-------
* Added optional ignore value to Body2dComponentSystem.raycastFirst

-------
### v0.64.1
-------
* Optimize the number of varying used by the phong shader generator with relation to UV sets and texture transforms.

-------
### v0.64.0
-------
* [FIX] Handle onclose event in pc.net.Socket()
* [FIX] Body2dComponentSystem.setAngle and setPosition update world transform directly so that hierarchy is in sync

-------
### v0.63.0
-------
* Added support for Keep Aspect Ratio in Application Data
* Increased gamepad deadzone
* [FIX] Changes made to 2D body and collision in Designer are reflected in live game

-------
### v0.62.0
-------
* Added pc.debug.display() which displays an object in the corner of the page
* Added gamepad support with pc.input.GamePads (Chrome Canary, FF Special build at the mo)
* [FIX] Audio that has finished playing no longer restarts when you tab away and return.
* Added isPlaying() method to pc.audio.Channel which returns true if the channel is currently playing audio.
* [FIX] Binary geometries with vertex colors now load. Also, binary skin cloning is fixed.

-------
### v0.61.1
-------
* [FIX] Check that animations have been loaded before playing on AnimationComponentSystem.setModel

-------
### v0.61.0
-------
* [FIX] Added support to the animation system for blending two skeletons with different topologies.
* [BREAKING] AnimationComponentSystem.setAnimation() renamed to play()

-------
### v0.60.0
-------
* Added caching for downloaded files to pc.resources.ResourceLoader.
    Anything store as a Asset on the server can be cached and multiple instances are cloned (models) or shared.
* Added canonical identifiers internally to pc.resources.ResourceLoader.
    Files in different assets with matches hashes will be loaded from a single source
* [BREAKING] Model loader now ignores texture transforms on the texture. Instead they are taken from a material's parameters.
* Scene#setGlobalAmbient now also accepts separate r, g and b parameters.
* Global ambient now works when there are no lights enabled.
* Optimized some code generation for the Phong shader generator, especially for the case when no lights are enabled.

-------
### v0.59.0
-------
* [FIX] Fix possible crash when animation components are loaded while the application is running
* [FIX] Fix possible crash when loading body2d components while the application is running

-------
### v0.58.0
-------
* Updates to private Body2D component

-------
### v0.57.0
-------
* [FIX] Entity hierarchy is built and world transforms synced before createComponent is called
* Added private Body2D component

-------
### v0.56.0
-------
* Added pc.net.Socket which wraps native WebSocket

-------
### v0.55.0
-------
* [FIX] Pack loading no longer edits pack data in place, a PackResourceHandler.open returns a copy

-------
### v0.54.2
-------
* [FIX] Set up dynamic lights right at the start of a scene flush.

-------
### v0.54.1
-------
* [FIX] Rendering would fail for materials with a specular map but no transform applied to the map.

-------
### v0.54.0
-------
* Update to new Pack format, with application_data, and hierarchy properties
* pc.scene.GraphNode#getLocal/WorldPosition no longer return a reference to the graph node's LTM/WTM but a newly allocated vector.
* pc.net.http.delete_ renamed to pc.net.http.del

-------
### v0.53.0
-------
* Phong shader now only transforms UVs in the vertex shader if there is a non-identity texture transform set.
* GraphNode#lookAt no longer allocates.
* Add some named constants to pc.math.vec3 (zero, one, xaxis, yaxis, zaxis).
* Allow integer vertex attribs which require normalization on a render. This allows for UINT8 vertex colors in a vertex buffer, for example.

-------
### v0.52.2
-------
* Ensure an animation is set on a skeleton before having anim component set skeleton's graph.

-------
### v0.52.1
-------
* Re-add Function.extendsFrom until Designer is updated

-------
### v0.52.0
-------
* Replaced Function.extendsFrom with pc.inherits.
* Added pc.cookie.get/set to use browser cookies.
* Binary file format now active but format is likely to go through a number of iterations before stabilizing.
* Skin partitioning now operates on a pc.scene.Geometry.

-------
### v0.51.0
-------
* Added setVolume() to AudioManager, it affects the volume of all audio sources
* Added suspend() and resume() to AudioManager, to pause and resume all audio sources
* Allow the passing of a preallocted vector argument to receive the position of LTM/WTM of a graph node.
* [FIX] Loading library javascript resources for the second time correctly fires success callback
* [FIX] Hierarchy is synced before script.initialize() is called
* [FIX] Visualizer camera
* Removed deprecated functions pc.each and pc.callback

-------
### v0.50.0
-------
* Added pc.audio.isSupported(url) to test if the url to an audio file is a supported format.
* [FIX] Prevent crash in pc.audio.Channel3d if stop() is called when using Audio tag (FF/Opera/Safari)
* [FIX] ResourceLoaderDisplay works if resources are included in mulitple batches, also sanitize identifier before using as DOM id.
* [FIX] Probably fixed #38 by checking for 'loadstart', 'canplaythrough' and 'loadeddata' events to see if Audio tag has loaded.

-------
### v0.49.0
-------
* [FIX] Fix infinite loop in lighting

-------
### v0.48.0
-------
* Optional support for binary model data
* Optimized in place tangent generation
* Optimized Geometry#generateWireframe
* Add another prototype function for setting a light's color from components.
* [FIX] AABB recalculation on a transformation now works properly.
* Increase default light radius to 10 (from 1).
* Switch bloom component to use Float32Array to pass uniforms to GPU.

-------
### v0.47.0
-------
* [FIX] Designer Camera in FF works again
* Added event.wheel value to MouseEvent which is normalized value across all browsers
* Added scaling to dolly camera so that movement is reduced closer to the selection
* Tidied up skybox component.
* [FIX] Local state now gets cleared properly.
* Moved camera frustum render function into CameraNode class.
* Switched from view window to ortho height and aspect ratio.
* Update camera aspect ratio on resize.

-------
### v0.46.0
-------
* [FIX] Unsupported audio formats no longer hang resource loading in Firefox

-------
### v0.45.0
-------
* Option to show debug ResourceLoader in pc.fw.Application

-------
### v0.44.0
-------
* Optimized pc.scene.Scene front to back sorting callback.
* Added support for Axes to pc.input.Controller.
* Refactor of Mouse to support PointerLock and changed event to be based on native MouseEvent.
* Changed CameraNode#setViewWindow to optionally take separate x and y values.
* [FIX] GraphNode#setLocalPosition to work on Opera (Arguments is not an Array).
* [FIX] Phong shader now handles case where specular factor map is only sampler.

-------
### v0.43.0
-------
* Optimized Device#clear
* Renamed castShadows back to getCastShadows and receiveShadows back to getReceiveShadows
* Refactored shadow-mapping (better frustum for directional lights, optimizations)
* Optimized Aabb#add to avoid allocations
* Fixed shadowmapping GLSL outside of UV bounds

-------
### v0.42.0
-------
* Animation file format updated!  Reconvert all animation JSON from source FBX files!
* Reworked animation API to support skeleton to graph link up via bone names. This fixes the case where the skeleton does not include all the graph nodes.
* [FIX] Skin partitioning fixed for geometries with more than one submesh.
* Added GraphNode#lookAt and GraphNode#translate.
* Added GraphNode#set/getLocalPostion and GraphNode#getWorldPosition.
* [FIX] ResourceLoader.request now works if you don't supply a progress function.
* Updated Closure Compiler to latest version (fixes new lines at end of code modules in non-minified engine).

-------
### v0.41.2
-------
* [FIX] AudioSource correctly plays audio when you add a new component over livelink
* [FIX] Cache model (if it exists) on animation component creation.

-------
### v0.41.1
-------
* Increase script resource loading timeout from 10s to 60s
* Removed debug logging from resource loading

-------
### v0.41.0
-------
* Reexposed cast shadows for point light even though it doesn't function (fixes saving).
* Make default light radius 10.
* Added 'rgb' and 'rgba' types for component properties which are colors.
* Local lights are once again just dispatched once per frame.
* [FIX] Script resources are loaded correctly on Opera.
* Cache geometry scope IDs (seems to give a good performance boost).
* Added OAUTH_IFRAME_ID_BASE constant for net.oauth iframe id. Fixed tests.
* [FIX] mat4.create() handles input arguments correctly (16 floats or 1 array of floats).
* Further optimizations to calculateTangents.  Probably about 10x faster than it was originally.

-------
### v0.40.0
-------
* Update primitive component to support casting/receiving shadows
* Compute/load AABB info for models and primitives
* Update Copyright and title in models and primitives
* Remove some deprecated calls to pc.callback
* [FIX] Large speed increase to Designer Camera, especially in Firefox
* [FIX] Script resources which are regular javascript files no longer hang the resource loader.

-------
### v0.39.3
-------
[FIX] If a spotlight's outer cone angle changes, update the shadow camera's FOV.

-------
### v0.39.2
-------
[FIX] Fixed logic for enabling shadow casting on a light more than once.

-------
### v0.39.0
-------
* Shadow casting enabled in the pc.scene API for directional and spot lights.
* Support multiple simultaneous shadow casting lights.
* Render spotlight cone in tools.
* Hide cast shadows attribute on point light component for now since this functionality is currently unimplemented.
* [FIX] pc.net.OAuth clears away iframes correctly

-------
### v0.38.1
-------
* [FIX] Crash in Firefox when loading an exported game with a large number of Entity/Assets.

-------
### v0.38.0
-------
* [FIX] Use event.currentTarget instead of target to calculate mouse offset co-ords in pc.input.Mouse

-------
### v0.37.0
-------
* [FIX] context.systems.script.send() no longer crashes if you send to an entity that doesn't have a script component
* Improved light loading and support for loading distinct light intensity attribute
* Added MeshNode API for setting, casting and receiving shadows
* Added pc.fw.AppData where application data is loaded into

-------
### v0.36.0
-------
* All ComponentSystems can implement an initialize() method which is passed the root entity of a loaded Pack after the Pack is loaded, but before any updates are called
* Exposed both inner and outer spotlight cone angles in Designer
* Moved light management into pc.scene.Scene. Lighting requires a Scene object to work now
* Removed functions pc.scene.LightNode#getNumEnabled() and pc.scene.LightNode#dispatch.
* Moved static global lighting functions onto Scene instance

-------
### v0.35.1
-------
* [FIX] pc.audio.Listener setVelocity crash on Firefox

-------
### v0.35.0
-------
* Correctly render orthographic frustum in Designer
* Optimized animation addTime function by caching keyframe indices
* Enable PCF filtering of shadow maps
* Added spotlight component
* Update the orientation of listener in audiolistener components so that supported platforms have correct panning.

-------
### v0.34.0
-------
* Added support for distance model parameters in Audio Components

-------
### v0.33.0
-------
* New pc.audio.AudioManager
* New pc.audio.Sound, pc.audio.Channel, pc.audio.Channel3d, pc.audio.Listener

-------
### v0.32.0
-------
* Added ModelComponentSystem.setVisible() to show/hide models
* Added currentTime and duration accessors to AnimationComponentSystem
* initialise() method is called on all script objects after loading, before first update
* [FIX] Script update() is no longer called before the resource loading callback is called

-------
### v0.31.4
-------
* Fixed pc.math.vec3.clone.

-------
### v0.31.3
-------
* Switched vector, matrix and quaternion code to use Float32Array instead of Array.

-------
### v0.31.2
-------
* Some optimizations mainly based around pre-creating objects/arrays to avoid garbage collection.

-------
### v0.31.1
-------
* Added first pass at device orientation input handler.
* Don't generate tangents on load if the geometry already has them.

-------
### v0.31.0
-------
* Added LiveLinkReparentEntityMessage and LiveLinkUpdateEntityNameMessage.
* Replaced pc.fw.Entity.reparentByGuid() with pc.fw.Entity.reparent().

-------
### v0.30.1
-------
* Added 'step' option to number attributes that are exposed to the designer.
* Prevent livelink crashing if window has been closed by user.
* [FIX] Creating audio components works.

-------
### v0.30.0
-------
* Change max camera FOV to 90.
* Added support for 'enumeration' type when exposing vars to the Designer.
* [FIX] a couple of leaked globals in graphnode and script_component.
* Reinstated the deleteComponent function for the script component system.
* [FIX] Final fix for Opera. Now it's just a matter of waiting for next Opera 12.x (for the typed array offset fix).
* [FIX] Animation component can handle empty guid list.
* Generate wireframe data for models/primitives when the Designer is present.
* Remove audio context from non-webkit browsers.
* Remove audionode dependency.
* Remove upper limit on animation speed.
* Updated script component to allow scripts to be tagged as runnable only in 'tools' (i.e. the Designer for the Designer camera script).
* Logging levels work in console.
* Support for transform in entity data if it's present (loading exported data).
* Support for new entity data format with no transform only components.
* [FIX] Euler functions were rotating the wrong direction around each axis.
* [FIX] toEulerXYZ handles scaled matrices.
* [FIX] toEulerXYZ and fromEulerXYZ perform updates in the 'correct' order and are compatible now.

-------
### v0.29.0
-------
* [FIX] Fixed up EntityResourceHandler function call to be static.
* [FIX] Fixed directionallight/camera components to render correctly using updated Device#draw function.
* Added Update Entity Transform message to livelink.
* Replace MouseEvent object with createMouseEvent call to wrap extra data onto native MouseEvent
* Updated JSON format again. Models are enclosed in an object called 'model' and animations are enclosed in an object called 'animation'.
* Added support for wireframe rendering. Call pc.scene.Geometry#generateWireframe on a geometry and then call pc.scene.MeshNode#setRenderStyle(pc.scene.RenderStyle.WIREFRAME)

-------
### v0.28.0
-------
* Prevent livelink sending messages to itself.
* [FIX] Picking code updated following deletion of SubMesh API.
* Handler for OPEN_ENTITY messages correctly handles new entities which have their parent id set, by inserting them _if_ the parent is not in the new entity list but is in the hierarchy.
* Added exception throwing for device creation which allows app code to handle problems with WebGL.
* [FIX] Fix quaternion copy function.
* [FIX] Fog no longer interpolates alpha component of a fragment.
* [FIX] pc.shape.Box.containsPoint() works now.

-------
### v0.27.0
-------
* [FIX] pc.math.mat4.invert() works now
* [FIX] Fix camera frustum rendering and direction light rendering

-------
### v0.26.1
-------
* [FIX] build script -o support was broken

-------
### v0.26.0
-------
* [BREAKING] Change to json model format. Index buffers are now per geometry rather than per sub-mesh
* Simplified full screen quad vertex shader a little for Bloom component
* Replace audio buffers with audio element for Firefox

-------
### v0.25.0
-------
* [FIX] Scripts are loaded as part of the entity requestBatch now, so callback fires after script instance is created
* [FIX] Entity.close() properly closes child entities
* [FIX] Primitive components clear away their model when deleted
* Replaced some more calls to _getComponentData with getComponentData
* [FIX] Removed calls to pc.extend in initialiseComponent() which cause infinite recursion when the data passed in is self-referential
* [FIX] AudioSourceComponentSystem.play() and AudioSourceComponentSystem.pause() check that the entity has a AudioSource component before doing anything
* Added pc.math.random(min, max) to create random numbers in a range
* The delta time (dt) value passed in to Update methods is clamped to a max of 0.1s to prevent it getting very large (especially while debugging)

-------
### v0.24.0
-------
* Fix audio in Firefox, remove setSource() method. Use play(entity, name) now.
* Added audionode.js shim for Firefox
* [FIX] Skeleton nodes with one keyframe now work properly with addTime function.
* Added pc.math.quat.copy.
* Add the ability to deactivate an animation on load. The animation component can additionally be queried to see if an animation is actually currently playing.
* [FIX] Fix the case where an entity's serialized boolean false value causes the value to be incorrectly read from the component data.
* Add support for looping and volume for audio sources
* [FIX] guessResponseType method correctly handles urls with queries and fragments

-------
### v0.23.0
-------
* Fixes to allow PlayCanvas to run in Opera 12
* Added support for point light attenuation
* Light enable -> setEnabled
* Improved point light handling in the framework
* Added material plugin for shadowmap program generation
* New AudioSource Component using webkitAudioContext to play sounds (audio is disabled on unsupported browsers)
* [FIX] Fix problem where material shininess can be zero giving undefined results

-------
### v0.22.0
-------
* Added a fixed time step update function to the framework.
* Only override format of image elements in Texture2D.prototype.setSource.
* Added a variable rate delta time for application.
* [FIX] Alpha test now actually works as a render state.

-------
### v0.21.0
-------
* The Blinn-Phong program now uses the standard Phong lighting equation.
* [FIX] Fixed probable bug in CLOSE_ENTITY message which could be closing the wrong entity.
* Added send() and broadcast() methods to ScriptComponentSystem.
* Added runtime support for specular factor maps which multiply either the specular material color or the assigned specular map.

-------
### v0.20.0
-------
* [FIX] Skinning should now work in all cases.
* [FIX] Fix for some keys (e.g. 'n' and 'z') not working in input handler.

-------
### v0.19.0
-------
* Added support for fetching binary data in pc.net.http
* Added pc.path.getExtension(filename) function

-------
### v0.18.1
-------
* [FIX] PickComponentSystem.addShape was referencing an undefined variable 'data'
* [FIX] Missing var definitions were assigning to globals

-------
### v0.18.0
-------
* Namespace logging functions
* Update primitive component to create models and add them to the scene to render
* Move picking functionality into the Scene API
* Picking API is removed from pc.fw, use pc.scene.Picker
* Enable picking of primitives
* [FIX] bug when loading multiple copies of the same skin when skin partitioning is active
* [FIX] Viewport of back buffer render targets now automatically resize
* [FIX] Updated references to old light API on model load

-------
### v0.17.1
-------
* Fixed GLSL picking broken in ### v0.17.0

-------
### v0.17.0
-------
* Fixed picking for skinned geometry
* Added guard to check of labels array is present in entity data. (It isn't in some older entities)

-------
### v0.16.1
-------
* AssetResourceHandler supplies a url prefix so that if the code is hosted on a site other than platform.playcanvas.com it can still work

-------
### v0.16.0
-------
* Added blending support to animation component.

-------
### v0.15.0
-------
* Changed pc.gfx.Device#setCurrent to a static function
* Removed pc.gfx.Device#stop
* Fix for Designer, Pick Components weren't working
* Fix for Point Lights not working
* Fix removed old code from cubemap

-------
### v0.14.1
-------
* Fix for pc.fw.Application still referencing old _camera variable
* Fix for Bloom Component still referencing old _camera variable
* Fix for SkyBox Component still referencing old _camera variable

-------
### v0.14.0
-------
* Replaced pop() and push() in CameraComponentSystem with setCurrent()

-------
### v0.13.1
-------
* Fix mouse down event for left mouse button.

-------
### v0.13.0
-------
* Added support for preventDefault and stopPropagation in pc.input.Keyboard
* Updated components to initialize the defaults correctly
* Auto-register all the shader generators (so the user doesn't have to)

-------
### v0.12.0
-------
* hierarchy is synced in Application.start() before first update tick
* Added pc.input.MouseEvent
* Removed Mouse drag event
* Removed legacy references to graph namespace
** pc.graph.procedural is now pc.scene.procedural
** pc.graph.materialplugin is now pc.scene.materialplugin
* Removed planereflection component

------
### v0.7.0
------

* Added first pass at an animation component. Just loads/runs a single animation for now.
* Added new render state management API, introducing the idea of global and local state.
* Use the alpha channel in a specular map as the per-pixel shininess value.
* Fix for Phong GLSL when no lights are activated.
* Reworked parallax mapping. Effect now activates if an alpha channel is found in the normal map (containing a height map).
* Updated parallax effect in shadowmap sample.
* Updated skybox component to work with any camera clip planes. Also now just maintains a geometry instead of a mesh.
* Fixed transparency for Maya FBX exports.
* Added Visualizer launcher script for Maya (written in Python rather than MEL).
* Added runtime support for emissive maps.

------
### v0.6.0
------

* Added CHANGES file
* [FIX] gizmo and pick components no longer deleted when components are updated, should be done manually for now
* Added pc.dom namespace for DOM related code
* Updated artwork to all use the correct system units (inches).
* Stop deserializing entities from message as they are transferred as normal javascript object now
* Changed reference from _id to resource_id in entity loader to support new Corazon format
* Add resource_id to Entity to support new Corazon format
* [FIX] Light component correctly disables light node when it is deleted
* Added skeleton docs to pc.gfx.Texture.
* Updated pc.gfx.Texture to be a little cleaner and more versatile (now handles canvas, video and image elements as well as byte pixel arrays).
* Fleshed out docs for pc.gfx.Texture.


------
### v0.5.0
------

* ScriptLoader replaces ResourceLoader object
* Added toolsRender and toolsUpdate methods to Components
* Better rendering for directional lights in the Designer.
* Enable backface culling in the engine by default.
* Model and Camera components to be deleted correctly.
* Added support for scale in animation keyframes.
* All artwork is now generated as 1 unit equalling 1 meter.
* Tweaks to Ferrari demo assets.
* Changed pc.graph.Cameras default clip planes to work better for worlds scaled to meters.
* Stop FACT from physically loading texture images.
* Handle relative paths which are actually absolute paths on other drives.
* Integrated ImageMagick into FACT.
* Upgraded some deprecated FBX functions in FACT.
* Added backface culling option and a stats panel to Visualizer.
* Frame loaded model with the default camera in Visualizer.
* Update Visualizer launcher to only call FACT (Python commands stripped).
* Fix initial camera offset in Visualizer.
* Write PNGs instead of JPG if non-web format textures have an alpha channel.
* Updated JSON format to split out opacity into new uniform.
