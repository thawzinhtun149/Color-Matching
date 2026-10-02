function checkColor() {

    const color = document.getElementById("color").value;
    const result = document.getElementById("result");

    if (color === "black") {
        result.innerHTML = "Black matches well with White, Beige, Gray and Blue.";
    }

    else if (color === "white") {
        result.innerHTML = "White matches well with almost any color!";
    }

    else if (color === "navy") {
        result.innerHTML = "Navy matches well with White, Beige and Gray.";
    }

    else if (color === "beige") {
        result.innerHTML = "Beige matches well with White, Brown, Navy and Black.";
    }

    else if (color === "gray") {
        result.innerHTML = "Gray matches well with Black, White, Navy and Blue.";
    }

    else if (color === "blue") {
        result.innerHTML = "Blue matches well with White, Gray, Beige and Black.";
    }

    else if (color === "brown") {
        result.innerHTML = "Brown matches well with Beige, White and Black.";
    }

}
