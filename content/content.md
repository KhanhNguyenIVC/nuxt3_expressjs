#HEADER from content

import image from content ![my image](/img/nuxt3.png)

A [rich text](/) will be **rendered** by the component.

::card
The content of the card

#description
This will be rendered inside the `description` slot.
::

Attributes work on:
- ![](/favicon.ico){style="display: inline; margin: 0;"} image,
- [link](#attributes){style="background-color: pink;"}, `code`{style="color: cyan;"},
- _italic_{style="background-color: yellow; color:black;"} and **bold**{style="background-color: lightgreen;"} texts.

<pre class="diagramTxt d-none">
    Title: Title diagram
    A->B: Normal line
    B-->C: Dashed line
    C->>D: Open arrow
    D-->>A: Dashed open arrow

    Alice->Bob: Hello Bob, how are you?
    Note right of Bob: Bob thinks
    Bob-->Alice: I am good thanks!
</pre>