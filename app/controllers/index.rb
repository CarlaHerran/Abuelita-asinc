get '/' do
  @abuelita = params[:abuelita]
  
  erb :index
  # Visita app/views/index.erb
end


post '/abuelita' do
  user_input = params[:user_input]

  # Iniciamos la condición para cuando le hablemos quedito (minúsculas), ya que no nos va a escuchar bien.
    if user_input == user_input.downcase
      respuesta = "HUH?! NO TE ESCUCHO, HIJO!"
    # Continuamos nuestra condición para cuando le hablemos fuerte (mayúsculas), y mientras lo que le digamos sea diferente a la despedida, la respuesta responderá:  
    elsif user_input == user_input.upcase && user_input != "BYE TQM"
      respuesta = "NO, NO DESDE 1983"
    # De no ser así; cuando nos despidamos, la respuesta preguntará "Que dijiste?", hasta que se lo digamos tres veces.
    else 
      respuesta = "Adiós hijo" 
    end
    respuesta
  #redirect "/?abuelita=#{respuesta}"

end

