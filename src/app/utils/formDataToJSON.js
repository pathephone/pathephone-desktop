function formDataToJSON (FormElement) {
  var formData = new FormData(FormElement)
  var ConvertedJSON = {}
  for (const [key, value] of formData.entries()) {
    ConvertedJSON[key] = value
  }
  return ConvertedJSON
}

export default formDataToJSON
