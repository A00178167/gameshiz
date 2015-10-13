#pragma strict

var speed:float = 3.0;

var xPos:float;
var yPos:float;

function Start () 
{

}

function Update () 
{
	xPos = transform.position.x;
	yPos = transform.position.y;
	MoveCharacter();
}

function MoveCharacter()
{
	if(Input.GetKey(KeyCode.A) && (xPos > -5))
	{
		transform.Translate(Vector3.left*speed*Time.deltaTime);
	}
	
	if(Input.GetKey(KeyCode.D) && (xPos < 5))
	{
		transform.Translate(Vector3.right*speed* Time.deltaTime);
	}
	
	if(Input.GetKey(KeyCode.W) && (yPos < -2))
	{
		transform.Translate(Vector3.up*speed*Time.deltaTime);
	}
	
	if(Input.GetKey(KeyCode.S) && yPos > -4.3)
	{
		transform.Translate(Vector3.down*speed*Time.deltaTime);

	}
}
