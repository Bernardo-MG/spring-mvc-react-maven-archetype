/**
 * The MIT License (MIT)
 * <p>
 * Copyright (c) ${currentYear} the original author or authors.
 * <p>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <p>
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * <p>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
#set( $symbol_dollar = '$' )
package ${package}.test.unit.controller.rest;

import java.util.ArrayList;
import java.util.Collection;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import ${package}.controller.entity.ExampleEntityController;
import ${package}.model.ExampleEntity;
import ${package}.service.ExampleEntityService;
import ${package}.test.config.UrlConfig;

/**
 * Verifies that {@link ExampleEntityController} handles HTTP requests.
 * 
 * @author Bernardo Mart&iacute;nez Garrido
 */
public final class TestExampleEntityController {

    /**
     * Mocked MVC context.
     */
    private MockMvc mockMvc;

    /**
     * Default constructor;
     */
    public TestExampleEntityController() {
        super();
    }

    /**
     * Sets up the mocked MVC context.
     */
    @BeforeEach
    public final void setUpMockContext() {
        mockMvc = MockMvcBuilders.standaloneSetup(getController())
                .setCustomArgumentResolvers(
                        new PageableHandlerMethodArgumentResolver())
                .alwaysExpect(MockMvcResultMatchers.status().isOk())
                .alwaysExpect(MockMvcResultMatchers.content()
                        .contentType(MediaType.APPLICATION_JSON))
                .build();
    }

    /**
     * Verifies that the data read from the service is returned.
     */
    @Test
    public final void testGet_ExpectedResults() throws Exception {
        final ResultActions result; // Request result

        result = mockMvc.perform(getGetRequest());

        // The operation was accepted
        result.andExpect(MockMvcResultMatchers.status().isOk());

        // The response model contains the expected attributes
        result.andExpect(MockMvcResultMatchers.jsonPath("${symbol_dollar}.content",
                Matchers.hasSize(3)));
    }

    /**
     * Returns a controller with mocked dependencies.
     * 
     * @return a controller with mocked dependencies
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    private final ExampleEntityController getController() {
        final ExampleEntityService service;   // Mocked service
        final Collection<ExampleEntity> entities; // Returned entities

        service = Mockito.mock(ExampleEntityService.class);

        entities = new ArrayList<>();
        entities.add(Mockito.mock(ExampleEntity.class));
        entities.add(Mockito.mock(ExampleEntity.class));
        entities.add(Mockito.mock(ExampleEntity.class));

        Mockito.when(service.findByNameQuery(ArgumentMatchers.any(),
                ArgumentMatchers.any())).thenReturn((Iterable) entities);

        return new ExampleEntityController(service);
    }

    /**
     * Returns a request builder prepared for reading entities.
     * 
     * @return a request builder prepared for reading entities
     */
    private final RequestBuilder getGetRequest() {
        return MockMvcRequestBuilders.get(UrlConfig.URL_REST)
                .contentType(MediaType.APPLICATION_JSON);
    }

}
