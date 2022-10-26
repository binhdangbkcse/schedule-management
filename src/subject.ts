export class Subject{
	id: string;
	name: string;
	room: string;
	time: string;
	constructor(id: string, name: string, room: string, time: string){
		this.id = id;
		this.name = name;
		this.room = room;
		this.time = time;
	}
}