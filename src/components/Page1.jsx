import React from 'react'
import Off from './Off.png'
import On from './On.png'

const Page1 = () => {

    function transform1 (){
        document.getElementById('circle').style.borderRadius = '0%'
        document.getElementById('circle').style.backgroundColor = 'black'
        document.getElementById('circle').style.marginLeft = '0%'
    }

    function offButton (){
        document.getElementById('obj2').src = Off
    }

    function onButton (){
        document.getElementById('obj2').src = On
    }

    function transform2 (){
        document.getElementById('obj3').innerHTML = "Hurray"
        document.getElementById('obj3').style.color = "green"
        document.getElementById('obj3').style.fontSize = '20pt'
        document.getElementById('obj3').style.textAlign = 'right'

        document.getElementById('revert').style.display = 'block'
    }

    function revert(){
        document.getElementById('obj3').innerHTML = 'Hello'
        document.getElementById('obj3').style.fontSize = '12pt'
        document.getElementById('obj3').style.color = 'black'
        document.getElementById('obj3').style.textAlign = 'left'
        document.getElementById('revert').style.display = 'none'
    }

    function readMore(){
        document.getElementById('additional-text').style.display = 'block'
        document.getElementById('more').style.display = 'none'
    }


  return (
    <>
    <main>
      <div className="container">
        <section className="pt-4 pb-4">
          <div className="row">
            <div className="border p-2 pb-5 rounded">
              <h2>Task 1</h2>
              <button onClick= {transform1}className="float-end btn btn-warning" id="transform">Transform</button>
              <p>Transform the object from circle to square. Move the object to the left side while transforming.</p>
              <div id="circle"></div>
            </div>
          </div>
          <div className="border p-2 rounded">
            <h2>Task 2</h2>
            <button onClick={offButton} className="float-end btn btn-danger" id="off">OFF</button>
            <button onClick={onButton} className="float-end btn btn-danger" id="on">ON</button>
            <p>Change the source of the image to Off.png upon clicking the OFF Button and change the source of the image to On.png upon clicking the ON Button.</p>
            <img src={Off} alt="Off" id="obj2"/>
          </div>
          <div class="border p-2 rounded">
                <h2>Task 3</h2>
                <button onClick={transform2} className="float-end btn btn-warning" id="transform2">Transform</button>
                <p>Transform the text of the element below from Hello to Hurray. While changing the text change the font size to 20pt and the color to green. Move the object to the right side while transforming. Add an additional button that will revert the object to its original style.</p>
                <p className="text-danger">Remove additional button after clicking it.</p>
                <button onClick={revert} id="revert">Revert</button>
                <div id="obj3">Hello</div>
          </div>
          <div class="border p-2 rounded">
                <h2>Task 4</h2>
                <p>Show the full text after clicking the button Read More. </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consectetur illum, consequuntur voluptas veniam cumque harum in velit amet hic cum deleniti adipisci dolorem. <button onClick={readMore}class="btn p-0 btn-link" id="more">Read More</button> <span id="additional-text">"Illum ipsam officia soluta sed blanditiis, voluptatibus incidunt impedit molestias quaerat, sapiente saepe vero fugit unde repellat laudantium dolorem at culpa libero obcaecati maxime autem? Sunt, maiores natus tempore alias aspernatur molestiae eum deleniti, impedit, fuga qui ut voluptatem illo! Architecto sint excepturi reiciendis dignissimos est commodi ab numquam, cupiditate officiis fuga, nesciunt quaerat illo laudantium consectetur odit vel quam natus labore ipsum neque sit. Possimus eius dolorum, accusantium animi aliquid cupiditate vero blanditiis suscipit tempora."</span></p>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}

export default Page1
