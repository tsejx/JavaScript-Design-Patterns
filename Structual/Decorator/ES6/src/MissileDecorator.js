class MissileDecorator {
    constructor(plane) {
        this.plane = plane;
    }
    fire(){
        this.plane.fire();
        console.log('发射导弹');
    }
}

export default MissileDecorator;