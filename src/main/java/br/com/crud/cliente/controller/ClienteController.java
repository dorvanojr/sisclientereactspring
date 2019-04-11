package br.com.crud.cliente.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.crud.cliente.exception.ResourceNotFoundException;
import br.com.crud.cliente.model.Cliente;
import br.com.crud.cliente.repository.ClienteRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class ClienteController {
	@Autowired
	private ClienteRepository clienteRepository;

	@GetMapping("/clientes")
	public List<Cliente> getAllclientes() {
		return clienteRepository.findAll();
	}

	@GetMapping("/clientes/{id}")
	public ResponseEntity<Cliente> getclienteById(@PathVariable(value = "id") Long clienteId)
			throws ResourceNotFoundException {
		Cliente cliente = clienteRepository.findById(clienteId)
				.orElseThrow(() -> new ResourceNotFoundException("cliente not found for this id :: " + clienteId));
		return ResponseEntity.ok().body(cliente);
	}
	@PostMapping("/salvar-cliente")
//	@RequestMapping(value = "/sa", method = RequestMethod.POST)
	public Cliente createcliente(@Valid @RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}

	@PutMapping("/update-cliente")
	public ResponseEntity<Cliente> updatecliente(@Valid @RequestBody Cliente clienteDetails) throws ResourceNotFoundException {
		Cliente cliente = clienteRepository.findById(new Long(clienteDetails.getIdCliente()))
				.orElseThrow(() -> new ResourceNotFoundException("cliente not found for this id :: " + clienteDetails.getIdCliente()));
		final Cliente updatedcliente = clienteRepository.saveAndFlush(cliente);
		return ResponseEntity.ok(updatedcliente);
	}

	@DeleteMapping("/delete-cliente/{id}")
	public Map<String, Boolean> deletecliente(@PathVariable(value = "id") Long clienteId)
			throws ResourceNotFoundException {
		Cliente cliente = clienteRepository.findById(clienteId)
				.orElseThrow(() -> new ResourceNotFoundException("cliente not found for this id :: " + clienteId));

		clienteRepository.delete(cliente);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
