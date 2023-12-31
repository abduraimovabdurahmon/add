import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useEffect } from "react";
const tg = window.Telegram.WebApp;

const sendData = async (firstname, lastname, title, age, phone, photo, video, about, popular, spec) =>{
  const data = await JSON.stringify({type: "add", firstname, lastname, title, age, phone, photo, video, popular, about, spec});
  await tg.sendData(data);
  await tg.close()
}

function App() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [video, setVideo] = useState("");
  const [popular, setPopular] = useState(false);
  const [about, setAbout] = useState("");
  const [spec, setSpec] = useState("");
  



  useEffect(()=>{
    tg.ready();
    tg.expand();
  }, []);

  return (
    <>
      <Container>
        <Form>
          <center className="p-3">
          <Form.Text className="text-white fs-1 ">Add teacher</Form.Text>
          </center>

          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-primary">Name</InputGroup.Text>
              <Form.Control placeholder="Firstname" type="text" name="firstname" value={firstname}
                onChange={(event)=>{
                  setFirstname(event.target.value);
                }}
              />
              <Form.Control placeholder="Lastname" type="text" name="lastname" value={lastname}
                onChange={(event)=>{
                  setLastname(event.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-primary">Title</InputGroup.Text>
              <Form.Control
                placeholder="example: 'Arab tili o'qituvchisi'"
                type="text"
                name="title"
                value={title}
                onChange={(event)=>{
                  setTitle(event.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-primary">
                specialty
              </InputGroup.Text>
              <Form.Control placeholder="Speciality teacher" type="text" name="spec" value={spec}
                onChange={(event)=>{
                  setSpec(event.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-primary">Age</InputGroup.Text>
              <Form.Control
                placeholder="example: 23"
                type="number"
                name="age"
                value={age}
                onChange={(event)=>{
                  setAge(event.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>


          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-primary">Phone</InputGroup.Text>
              <Form.Control
                placeholder="example: +998xy xxx xx xx"
                type="tel"
                name="tel"
                value={phone}
                onChange={(event)=>{
                  setPhone(event.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>


          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-primary">Photo</InputGroup.Text>
              <Form.Control placeholder="Photo url(youtube)" type="text" name="photo" value={photo}
                onChange={(event)=>{
                  setPhoto(event.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>


          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-primary">Video</InputGroup.Text>
              <Form.Control placeholder="Video url(youtube)" type="text" name="video" value={video}
              onChange={(event)=>{
                setVideo(event.target.value);
              }}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label={<h3 className="text-light">Popular?</h3>}
              checked = {popular}
              onChange={(event)=>{
                setPopular(event.target.checked)
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="h1 text-light">About</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="general information about the teacher"
              value={about}
              onChange={(event)=>{
                setAbout(event.target.value)
              }}
            />
          </Form.Group>

          <Button className="w-100"
            onClick={async (event)=>{
              if(firstname && lastname && title && age && phone && photo && video && about, spec){
                await sendData(firstname, lastname, title, age, phone, photo, video, about, popular, spec)
              }
            }}
          >
            Yuborish
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default App;
